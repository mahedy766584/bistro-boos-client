import { FaTrashAlt } from "react-icons/fa";
import useCarts from "../../../Hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {

    const [carts, refetch] = useCarts();
    const totalPrice = carts?.reduce((total, items) => total + items?.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        // console.log(res);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="flex items-center justify-evenly">
                <h1 className="text-3xl text-red-500">Items: {carts?.length}</h1>
                <h1 className="text-3xl text-red-500">Total Price: {totalPrice}</h1>
                {/* Pay button */}
                {carts.length ? <Link to={'/dashboard/payment'}>
                    <button className="btn btn-primary">
                        Pay
                    </button>
                </Link> : <button disabled className="btn btn-primary">
                    Pay
                </button>}
            </div>
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
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts?.map((item, idx) => <tr key={item._id}>
                                    <td>
                                        {idx + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item?.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item?.name}
                                    </td>
                                    <td>
                                        $ {item?.price}
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(item?._id)}
                                            className="btn btn-ghost "><FaTrashAlt className="text-orange-600 text-xl" />
                                        </button>
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

export default Cart;