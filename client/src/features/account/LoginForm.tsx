import { LockOutlined } from "@mui/icons-material";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginSchema } from "../../lib/schemas/loginSchema";

export default function LoginForm() {
  const {register,handleSubmit,formState:{errors}}=useForm<LoginSchema>();
  const onSubmit=(data:LoginSchema)=>{
    console.log(data)
  }

  return (
    <Container component={Paper} maxWidth='sm' sx={{borderRadius:3}}>
        <Box display='flex' flexDirection='column' alignItems='center' marginTop='8'>
            <LockOutlined sx={{mt:3,color:'secondary.main',fontSize:40}} />
            <Typography variant="h5">
                Sign in
            </Typography> 
            <Box
               component='form'
               onSubmit={handleSubmit(onSubmit)}
               width='100%'
               display='flex'
               flexDirection='column'
               gap={3}
               marginY={3}
            >
                <TextField 
                   fullWidth
                   label='Email'
                   autoFocus
                   {...register('email',{required:'Email is required'})}
                   error={!!errors.email}
                   helperText={errors.email?.message}
                />
                <TextField
                   fullWidth
                   label='Password'
                   type="password"
                   {...register('password',{required:'password is required'})}
                   error={!!errors.password}
                   helperText={errors.password?.message}
                />
                <Button variant="contained" type="submit">
                    Sign in
                </Button>
                <Typography sx={{textAlign:'center'}}>
                    Don't have an account?
                    <Typography sx={{ml:2}} component={Link} to='/register' color="primary">
                       Sign up
                    </Typography>
                </Typography>
            </Box>          
        </Box>
    </Container>
  )
}