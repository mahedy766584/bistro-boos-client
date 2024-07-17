import { Helmet } from "react-helmet-async"
import Cover from "../../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../Hooks/useMenu";
import Container from "../../../Container/Container";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {

    const [menu] = useMenu();

    const desserts = menu?.data.filter(item => item.category === 'dessert')
    const soup = menu?.data.filter(item => item.category === 'soup')
    const salad = menu?.data.filter(item => item.category === 'salad')
    const offered = menu?.data.filter(item => item.category === 'offered')
    const pizza = menu?.data.filter(item => item.category === 'pizza')

    return (
        <div>
            <Helmet>
                <title> Bistro Boss | Menu </title>
            </Helmet>
            <Cover menuImg={menuImg} title={'Our Menu'} />

            <Container>
                <div>
                    <SectionTitle subHeading={'Don t Miss'} heading={'Today s Offer'}/>

                    {/* offered menu items */}
                    <MenuCategory items={offered}/>
                    {/* dessert menu items */}
                    <MenuCategory items={desserts} title={'desserts'} menuImg={dessertImg}/>
                    {/* pizza menu items */}
                    <MenuCategory items={pizza} title={'pizza'} menuImg={pizzaImg}/>
                    {/* salad menu items */}
                    <MenuCategory items={salad} title={'salad'} menuImg={saladImg}/>
                    {/* salad menu items */}
                    <MenuCategory items={soup} title={'soup'} menuImg={soupImg}/>
                </div>
            </Container>
        </div>
    );
};

export default Menu;