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
          <Image src='/logo.webp' width='48' height='48' alt='SimRailLogo'/>
          </Link>
        </div>
        <div style={{  flex:1 }}>
          <Typography variant="h5" >{currentTime ? currentTime.toLocaleTimeString() : 'Loading...'}</Typography>
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
