import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";

const Payment = () => {
  // TODO: add publisable key
  const stripePromis = loadStripe(import.meta.env.VITE_Payment_gateway_PK);
  return (
    <div>
      <SectionTitle
        heading="payment"
        subHeading="Please pay to eat"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromis}>
          <CheckoutFrom></CheckoutFrom>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
