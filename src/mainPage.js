import React, { useMemo, useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@material-ui/lab/Pagination';
import axios from "axios";
import { Avatar } from '@mui/material';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



const NUMBER_PER_PAGE = 10;
var array;

     function MainPage() {

     const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loadingData, setLoadingData] = useState(true);

      useEffect(() => {
        async function getData() {
          await axios
            .get("https://randomuser.me/api/?seed=foobar&results=20")
            .then((response) => {
              array = (Object.values(response.data))[0];
              console.log(Array.isArray(array));
              console.log((Object.values(response.data))[0]);
              console.log("done");
              setData(array);
              // you tell it that you had the result
              setLoadingData(false);
            });
        }
        if (loadingData) {
          // if the result is not ready so you make the axios call
          getData();
        }
      }, []);
    
    return (
          
        <div className="container">
             <div style={{textAlignVertical: "center",textAlign: "center",}}>
       <h2 style={{ color:'black' }}> UsersTable</h2>
       <h4 style={{ color:'black' }}>By Itay Bayazi</h4>
      </div>
      <pre> </pre>




      {/* here you check if the state is loading otherwise if you wioll not call that you will get a blank page because the data is an empty array at the moment of mounting */}
      {loadingData ? (<p>Loading Please wait...</p>) : (
        <TableContainer component={Paper}>
          <Table sx={{ width: 1000, minWidth: 650, margin: 'auto' }} aria-label="simple table">
            <TableHead style={{textAlign:"center"}}>
              <TableRow>
                <TableCell style={{fontWeight: 'bold'}}>Image</TableCell>
                <TableCell className="font-heading text-3xl" style={{fontWeight: 'bold'}} align="center">Full Name</TableCell>
                <TableCell style={{fontWeight: 'bold'}} align="center">Age</TableCell>
                <TableCell style={{fontWeight: 'bold'}} align="center">Gender</TableCell>
                <TableCell style={{fontWeight: 'bold'}} align="center">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(currentPage * NUMBER_PER_PAGE - NUMBER_PER_PAGE, currentPage * NUMBER_PER_PAGE).map((rowData) => (
                <TableRow
                  key={rowData.picture.thumbnail}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Avatar alt="picture" src={rowData.picture.thumbnail} />
                  </TableCell>
                  <TableCell  align="center">
                    <Link to={`/${rowData.name.first}`} params={{ image: rowData.gender }}>{rowData.name.first} {rowData.name.last}</Link>
                  </TableCell>
                  <TableCell  align="center">{rowData.dob.age}</TableCell>
                  <TableCell  align="center">{rowData.gender}</TableCell>
                  <TableCell  align="center">{rowData.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination
            size="small"
            page={currentPage}
            count={Math.ceil(data.length / NUMBER_PER_PAGE)}
            onChange={(event, page) => setCurrentPage(page)}
            variant="outlined"
            shape="rounded"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              paddingTop: 10,
            }}
          />

        </TableContainer>
      )}
    </div>
    )
        }
     export default MainPage