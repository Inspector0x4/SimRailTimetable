import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useState, useEffect } from 'react';
import Image from 'next/image'
const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const fetchTime = async () => {
      const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/Paris');
      const data = await response.json();
      setCurrentTime(new Date(data.datetime));
    };
    fetchTime();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <AppBar position="fixed">
      <Toolbar style={{ backgroundColor: '#1e272e' }}>
        <div style={{ flex: 1 }}>
          <Link href="/">
          <Image src='/logo_64.png' width='48' height='48' />
          </Link>
        </div>
        <div style={{  flex:1 ,}}>
          <Typography variant="h4" >{currentTime ? currentTime.toLocaleTimeString() : 'Loading...'}</Typography>
        </div>
        <div style={{ display: 'flex' }}> 
          <div>
            <a href="https://github.com/ItsTimeooo/SimRailTimetable/" target='blank'>
              <Typography variant="h6">Github Source</Typography>
            </a>
            <a href="https://github.com/ItsTimeooo/SimRailTimetable/issues" target='blank'>
              <Typography variant="h6">Report an issue</Typography>
            </a>
          </div>
         
        </div>
      </Toolbar>
      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </AppBar>
  );
};

export default Navbar;
