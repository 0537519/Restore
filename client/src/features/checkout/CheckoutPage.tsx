import { Grid2 } from "@mui/material";
import OrderSummary from "../../app/shared/components/OrderSummary";
import CheckoutStepper from "./CheckoutStepper";

export default function CheckoutPage() {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={8}>
        <CheckoutStepper/>
      </Grid2>
      <Grid2 size={4}>
        <OrderSummary/>
      </Grid2>
    </Grid2>
  )
}