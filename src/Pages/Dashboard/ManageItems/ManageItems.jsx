import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import { MdDelete, MdOutlineEdit } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";

const ManageItems = () => {

    const axiosSecure = useAxiosSecure();
    const [menu, isLoading, refetch] = useMenu();

    // console.log(menu.data);

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item?._id}`)
                // console.log(res);
                if (res.data.deletedCount > 0) {
                    //refetch to update the UI 
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has ben deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry Up" />
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            { menu.data?.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item?.image}
                                                    alt={item?.name} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td> {item?.name} </td>
                                <td>${item?.price}</td>
                                <th>
                                    <Link to={`/dashboard/updateItems/${item._id}`}>
                                        <button className="text-white bg-orange-400 p-3 hover:bg-orange-500 rounded-md text-lg"><MdOutlineEdit /></button>
                                    </Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDeleteItem(item)}
                                        className="text-white bg-orange-400 p-3 hover:bg-orange-500 rounded-md text-lg"><MdDelete /></button>
                                </th>
                            </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;