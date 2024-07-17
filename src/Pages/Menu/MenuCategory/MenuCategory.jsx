/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItems from "../../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, title, menuImg }) => {

    // console.log(title);

    return (
        <div>
            {title && <Cover menuImg={menuImg} title={title} />}
            <div className="grid md:grid-cols-2 gap-4 mb-10 mt-10">
                {
                    items?.map((item, idx) => <MenuItems key={idx} item={item} />)
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline uppercase border-0 border-b-4">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;