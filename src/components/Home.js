import { Button, Container } from "@mui/material";
import { Box, Typography } from '@mui/material';
import { useState } from "react";
function Home() {
    const [boxColor, setBoxColor] = useState('white');
    const [buttonColor, setButtonColor] = useState('primary');
    const handleButtonClick = () => {
        setButtonColor('success');
        setBoxColor('green'); // Change the box color to 'green' on click
    };

    return (
        <Box
            
            backgroundColor={boxColor}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="82.9vh"
        >
            <Typography variant="h4" align="center">
                Welcome to our website!
            </Typography>
            <Button
                variant="contained"
                color={buttonColor}
                style={{ marginTop: '10px' }}
                onClick={handleButtonClick}
            >
                Change Color
            </Button>
        </Box>
    );
}
export default Home;