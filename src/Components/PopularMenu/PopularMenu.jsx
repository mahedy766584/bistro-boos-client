import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import Container from "../../Container/Container"
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();

    const popular = menu.data?.filter(item => item.category === 'popular')

    // console.log(menu);

    return (
        <Container>
            <section>
                <SectionTitle
                    heading={'FROM OUR MENU '}
                    subHeading={'---Check it out---'}
                />
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                    {
                        popular?.map((item, idx) => <MenuItems key={idx} item={item} />)
                    }
                </div>
            </section>
        </Container>
    );
};

export default PopularMenu;