/* eslint-disable react/prop-types */
import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
    return (
        <div className="grid lg:grid-cols-3 max-w-screen-xl gap-5">
            {
                items?.map(item => <FoodCard item={item} key={item?._id} />)
            }
        </div>
    );
};

export default OrderTab;