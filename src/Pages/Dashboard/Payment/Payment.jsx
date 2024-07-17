import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm";

//TODO: add publishable kay
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please Pay to eat" />
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;