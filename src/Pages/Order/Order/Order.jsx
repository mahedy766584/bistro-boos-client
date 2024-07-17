import { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import orderCover from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
import Container from "../../../Container/Container";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {

    const categories = ['soup', 'salad', 'pizza', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)

    console.log(initialIndex);

    const [tabIndex, setTabIndex] = useState(initialIndex)

    const [menu] = useMenu();

    const desserts = menu?.data.filter(item => item.category === 'dessert')
    const soup = menu?.data.filter(item => item.category === 'soup')
    const salad = menu?.data.filter(item => item.category === 'salad')
    const drinks = menu?.data.filter(item => item.category === 'drinks')
    const pizza = menu?.data.filter(item => item.category === 'pizza')

    return (

        <div>
            <Helmet>
                <title> Bistro Boss | Order Food </title>
            </Helmet>
            <Cover menuImg={orderCover} title={'Order Food'} />
            <Container>
                <div className="flex flex-col justify-center items-center mt-10">
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <Tab>Soup</Tab>
                            <Tab>Salad</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Dessert</Tab>
                            <Tab>Drinks</Tab>
                        </TabList>
                        <TabPanel>
                            <OrderTab items={soup} />
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={salad} />
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={pizza} />
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={desserts} />
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={drinks} />
                        </TabPanel>
                    </Tabs>
                </div>
            </Container>
        </div>

    );
};

export default Order;