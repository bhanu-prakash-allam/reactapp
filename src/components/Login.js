import { useContext, useRef } from "react";
import { TextField, Button, Container, Typography } from '@mui/material';
import UserContext from "./UserContext";
const Login=()=>{

    const username=useRef();
    const password=useRef();
    const {setUser,setLoggedin} =useContext(UserContext)
    const handleSubmit=(event)=>{
        event.preventDefault();
        let user={
            username:username.current.value,
            password:password.current.value
        }
        if(user.username==='bhanu')
        {
            setLoggedin(true)
        }
        setUser(user);
        console.log("testing user",username.current.value)
    }
    return(

        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    inputRef={username}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Username"
                              
                />
                <TextField
                    inputRef={password}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Login
                </Button>
            </form>
        </Container>
    );

}
export default Login;