import { FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import useAuth from "../../../Hooks/useAuth"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend,  } from 'recharts';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data;
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return res.data;
        }
    })

    //custom sap for the bar;
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    //custom shape for the pieChart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData?.map(data => {
        return {name: data?.category, value: data?.revenue}
    })


    return (
        <div>
            <h1 className="text-3xl">
                <span>Hi, Welcome</span> {
                    user?.displayName ? user?.displayName : "Back"
                }
            </h1>

            <div className="stats shadow mt-5 w-full">
                <div className="stat bg-gradient-to-r from-blue-700 to-blue-100 text-white shadow-md">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className="text-5xl" />
                    </div>
                    <div className="stat-title text-white">Revenue</div>
                    <div className="stat-value">${stats?.revenue}</div>
                </div>

                <div className="stat bg-gradient-to-r from-orange-500 to-orange-100 text-white shadow-md">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-5xl" />
                    </div>
                    <div className="stat-title text-white">Users</div>
                    <div className="stat-value">{stats?.users}</div>
                </div>

                <div className="stat bg-gradient-to-r from-purple-700 to-purple-100 text-white shadow-md">
                    <div className="stat-figure text-secondary">
                        <FaShoppingCart className="text-5xl" />
                    </div>
                    <div className="stat-title text-white">Orders</div>
                    <div className="stat-value">{stats?.orders}</div>
                </div>
                <div className="stat bg-gradient-to-r from-green-700 to-green-100 text-white shadow-md">
                    <div className="stat-figure text-secondary">
                        <MdProductionQuantityLimits className="text-5xl" />
                    </div>
                    <div className="stat-title text-white">Menu Items</div>
                    <div className="stat-value">{stats?.menuItems}</div>
                </div>
            </div>

            <div className="flex gap-5 items-center">
                <div>
                    <BarChart
                        width={600}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div>
                    <PieChart width={600} height={600}>
                    <Legend/>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;