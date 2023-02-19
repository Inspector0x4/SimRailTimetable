import { useRouter } from 'next/router';
import { useState } from "react"

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Grid,Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles} from '@material-ui/core';


import Head from 'next/head'
import React, {  useEffect } from "react";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const Server = () => {
  const router = useRouter();

  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const { id } = router.query;
  
  useEffect(() => {
    async function fetchData() {
      if(!router.isReady) return;
      const { id } = router.query;
      const response = await fetch(`https://staging.simrail.deadlykungfu.ninja/train/${id}`);
      const data = await response.json();
      const promises = [];
      data.forEach(async (station) => {
       
      });
     
    

    Promise.all(promises)
    .then(() => {
      setData(data);
      setIsLoaded(true);
      
    })
    .catch((error) => {
      console.error(error);
    });
  }
  fetchData();
}, [router.isReady]);

  if (!isLoaded) {
    return <div>
      
      Loading data... Please Wait</div>;
    }


    //
    
  const generatePDF = () => {
    const docDefinition = {
      content: [
        {
          text: `Train ${id} Information : `,
          style: 'header'
        },
        {
          style: 'table',
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*', '*', '*'],
            body: [
              ['Station Name', 'Arrival Time', 'Departure Time', 'Stop Type','Layover Time','Line'],
              ...data.map(station => [station.station, station.scheduled_arrival_hour, station.scheduled_departure_hour, station.stop_type,station.layover,station.line])
            ],
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 10]
        },
        table: {  
          margin: [0, 10, 0, 10]
        }
      }
    };
    
    pdfMake.createPdf(docDefinition).download(`${id} Timetable.pdf`);
  }

  const redirectToMenu = (event) => {
    const { server } = router.query;
    router.push(`/${server}`);
    
  }

  return (
    <div>
      <Head><title>SimRail Information</title></Head>

      {isLoaded && (
        <div>
          <Grid container spacing={0}  alignItems="flex-start">
          <Button variant="contained" color="secondary" size="small" onClick={redirectToMenu}>Go back to the main menu</Button>
          </Grid>
           <Grid container spacing={0} justifyContent="center" alignItems="center" >
         <Button variant="contained" color="primary" size="medium" onClick={generatePDF}>Download timetable for {id}</Button>
         
         <Grid container spacing={1} justifyContent="center" alignItems="center">
            <Grid item xs={8} >
       <p> If there is no data available, please check again in a few minutes</p>
       </Grid>
       </Grid>
         </Grid>
         <Grid container spacing={1} justifyContent="center" alignItems="center">
            <Grid item xs={8} >
         <TableContainer component={Paper} >
         <Table stickyHeader >
          <TableHead >
          <TableRow>
          <TableCell><b>Station Name</b></TableCell>
          <TableCell><b>Arrival Time</b></TableCell>
          <TableCell><b>Departure Time</b></TableCell>
          <TableCell><b>Stop Type</b></TableCell>
          <TableCell><b>Layover Time</b></TableCell>
          <TableCell><b>Line</b></TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
              {data.map(station => (
                <TableRow key={station.station}>
                  
                  <TableCell>{station.station}</TableCell>
                  <TableCell>{station.scheduled_arrival_hour}</TableCell>
                  <TableCell>{station.scheduled_departure_hour}</TableCell>
                  <TableCell>{station.stop_type}</TableCell>
                  <TableCell>{station.layover}</TableCell>
                  <TableCell>{station.line}</TableCell>
                  </TableRow>
              ))}
           </TableBody>
           </Table>
          </TableContainer>
          </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};


export default Server;
