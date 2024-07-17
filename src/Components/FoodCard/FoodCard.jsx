/* eslint-disable react/prop-types */
import useAuth from "../../Hooks/useAuth"
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom"
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCarts from "../../Hooks/useCarts";

const FoodCard = ({ item }) => {

    const { image, name, recipe, price, _id } = item || {};

    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation();
    const axios = useAxiosSecure()

    const [, refetch] = useCarts();

    const handleAddToCart = async () => {
        // console.log(food);
        if (user && user?.email) {
            // send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price,
            }
            const res = await axios.post('/carts', cartItem)
            console.log(res);
            if (res.data.acknowledged) {
                // show tost
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} Added with successfully`,
                    showConfirmButton: false,
                    timer: 2000
                });
                //refetch the cart to update items count
                refetch()
            }

        } else {
            Swal.fire({
                title: "Your are not login",
                text: "Please login add ot the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //send the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">$ {price}</div>
                </h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;