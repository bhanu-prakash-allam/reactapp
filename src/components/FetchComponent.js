import { useContext, useState } from "react"
import UserContext from "./UserContext"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
const Fetch = () => {
    const { user } = useContext(UserContext);
    const [items, setItems] = useState([])
    const fetchData = async() => {
        
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        

    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="List table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.username}</TableCell>
                            <TableCell>{item.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <button className="btn btn-primary" onClick={fetchData}>Fetch</button>
        </TableContainer>
    )

}
export default Fetch;