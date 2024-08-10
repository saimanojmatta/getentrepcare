import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Container, DetailsNew } from "./index.styled";
import Announcement from "../announcement";
import NavBar from "../nav";
import { Marginer } from "../../globalStyles";

const PaymentStatus = () => {
  const navigate = useNavigate();
  const [statusMessage, setStatusMessage] = useState("");
  const [paymentDetails, setPaymentDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const paymentId = query.get("payment_id");
    const paymentStatus = query.get("payment_status");
    const paymentRequestId = query.get("payment_request_id");
    if (paymentStatus === "Credit") {
      setStatusMessage("Payment was successful!😃😄");
    } else {
      setStatusMessage("Payment failed. Please try again🥲🤔");
    }
  }, [location.search]);
  const query = new URLSearchParams(location.search);
  const paymentId = query.get("payment_id");
  const paymentStatus = query.get("payment_status");
  const paymentRequestId = query.get("payment_request_id");

  const handlebacktoHome = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <Announcement />
      <Marginer>
        <NavBar />
      </Marginer>
      <Container>
        <Marginer className="current-container">
          <h1>{statusMessage}</h1>
          <DetailsNew>
            <label>
              <p>Payment_request_id:</p>
              <span>{paymentRequestId}</span>
            </label>

            <label>
              <p>Payment Status:</p>
              <span>{paymentStatus}</span>
            </label>

            <label>
              <p>Payment id:</p>
              <span>{paymentId}</span>
            </label>
          </DetailsNew>
        </Marginer>
      </Container>
    </Fragment>
  );
};

export default PaymentStatus;
