import PropTypes from 'prop-types';


const MenuItems = ({ item }) => {

    const { image, name, recipe, price } = item || {};

    // console.log(item);

    return (
        <div className='flex space-x-2'>
            <img style={{borderRadius: '0 200px 200px 200px '}} className='w-[100px]' src={image} alt="" />
            <div>
                <h1 className='uppercase font-poppins'>{name}-------------</h1>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>{price}</p>
        </div>
    );
};

export default MenuItems;

MenuItems.propTypes = {
    item: PropTypes.object
};