import { Box, Button, Checkbox, FormControlLabel, Paper, Step, StepLabel, Stepper } from "@mui/material";
import { AddressElement, PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react"
import Review from "./Review";
import { useFetchAddressQuery } from "../account/accountApi";
import { Address } from "../../app/models/user";

const steps=['Address','Payment','Review']

export default function CheckoutStepper() {

    const [activeStep,setActiveStep]=useState(0);
    const {data:{name, ...restAdress}={} as Address}=useFetchAddressQuery();

    const handleNext=()=>{
        setActiveStep(step=>step+1);
    }
    const handleBack=()=>{
        setActiveStep(step=>step-1);
    }
  return (
    <Paper sx={{p:3,borderRadius:3}}>
        <Stepper activeStep={activeStep}>
            {steps.map((label,index)=>{
                return (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                )
            })}
        </Stepper>
        <Box sx={{mt:2}}>
            <Box sx={{display:activeStep===0 ? 'block':'none'}}>
                <AddressElement
                  options={{
                    mode:'shipping',
                    defaultValues:{
                        name:name,
                        address:restAdress
                    }
                  }}
                />
                <FormControlLabel
                   sx={{display:'flex',justifyContent:'end'}}
                   control={<Checkbox/>}
                   label='Save as defalut address'
                />
            </Box>
            <Box sx={{display:activeStep===1 ? 'block':'none'}}>
                <PaymentElement/>
            </Box>
            <Box sx={{display:activeStep===2 ? 'block':'none'}}>
                <Review/>
            </Box>   
        </Box>

        <Box display='flex' padding={2} justifyContent='space-between'>
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleNext}>Next</Button>
        </Box>
    </Paper>
  )
}