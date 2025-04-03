import React, { useState } from 'react';
import SendOut from '../components/SendOut';
import SendIn from '../components/SendIn';
import BarScanner from '../components/BarScanner';
import Header from './Header';
import bg1 from "../assets/bg1.jpg"
import { Container } from '@mui/material';

function Admin() {
  const [page, setPage] = useState("scanner"); // State to track the current page
    console.log("page: ", page);
  return (
    <Container sx={ {backgroundImage:` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg1})`, width:"100dvw",padding:"0px",margin:"0px"}}>
     <Header/>
      {page === "scanner" && <BarScanner page={page} setPage={setPage} />}
      {page === "sendin" && <SendIn page={page} setPage={setPage} />}
      {page === "sendout" && <SendOut page={page} setPage={setPage} />}

    </Container>
  );
}

export default Admin;
