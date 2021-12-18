import React, { useMemo, useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@material-ui/lab/Pagination';
import { Avatar } from '@mui/material';
import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import'../App.css';

function PersonDetails() {
    let history = useHistory();
    var array;
    const name = history.location.pathname.split('/')[1];
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
      const persion = data.find((data) => data.name.first == name );
        console.log("persion",persion)
        return (
        
        <div className="contiener" style={{ display:"flex", alignItems:'center', justifyItems:"center", margin: 'auto'}}>
           <pre> </pre>
           <pre> </pre>      <pre> </pre>      <pre> </pre>
        <TableContainer component={Paper}>
        <pre> </pre>
            <Table sx={{ width: 1000, minWidth: 650, margin: 'auto' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell align="right">Full Name</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Gender</TableCell>
                        <TableCell align="right">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        key={"a"}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                          { persion &&
                          <>
                           <TableCell component="th" scope="row">
                            <Avatar alt="picture" src={persion.picture.medium} />
                            </TableCell>
                            <TableCell align="right">{persion.name.first + " " +  persion.name.last }</TableCell>
                            <TableCell align="right">{persion.dob.age}</TableCell>
                            <TableCell align="right">{persion.gender}</TableCell>
                            <TableCell align="right">{persion.email}</TableCell>
                            </>
                            }
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>      
        <pre> </pre>      <pre> </pre>
        
        
        <div style={{   backgroundImage: `url("https://employmentfair.mta.ac.il/2019/PublishingImages/moveo.jpg")`  }}></div>
        </div>
    );
}
export default PersonDetails;