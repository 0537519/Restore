import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Order } from "../../app/models/order";

export default function CheckoutSuccess() {
  const {state}=useLocation();
  const order = state as Order;
  return (
    <Typography variant="h5">
        {JSON.stringify(order,null,2)}
    </Typography>
  )
}