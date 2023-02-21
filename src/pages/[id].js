import { useRouter } from 'next/router';
import SearchIcon from '@material-ui/icons/Search';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../app/Navbar';
import DiscordLogo from "../app/DiscordLogo";
import { Analytics } from '@vercel/analytics/react';
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Paper,
  InputBase
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'top',
    minHeight: '100vh',
    padding: theme.spacing(20),
    flexDirection: 'column',
  },
  select: {
    minWidth: 200,
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  footer: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    },
     search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

}));

const Server = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrain, setSelectedTrain] = useState('');
 
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const last = window.location.href.split('/').pop();
        const response = await fetch(`https://dispatch-api.cdn.infra.deadlykungfu.ninja/trains/${last}`);
        const data = await response.json();
        setData(data);
        setIsLoaded(true);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleChange = (event) => {
    const train = event.target.value;
    const server = window.location.href.split('/').pop();
    router.push({
      pathname: `/train`,
      search: `id=${train}&server=${server}`
    });
  };

  if (!isLoaded) {
    return (
      <div className={classes.root}>
        <CircularProgress />
        <Typography variant="body1">Loading data... Please wait</Typography>
      </div>
    );
  }
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };



  const filteredData = data.filter((train) =>
    train.TrainNoLocal.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <><div> <Navbar /></div>
    
    
    
   
    <div className={classes.root}>
      <Head>
      <link rel="shortcut icon" href="/logo_64.png" type="image/x-icon" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="A simple timetable for SimRail" />
        <title>SimRail Timetable</title>
      </Head>
      <Typography variant="h4" className={classes.title}>Select a train</Typography>
      <Typography variant="body2">
      21/02/23: Freight trains have been removed because they do not exist in the API. API change in progress...
        </Typography>
      <FormControl>
      <InputLabel id="train-select-label">Train</InputLabel>
      <Select
        labelId="train-select-label"
        value={selectedTrain}
        onChange={handleChange}
      
        inputProps={{ 'aria-label': 'Train' }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {filteredData.filter(train => train.TrainNoLocal.length < 6).map((train) => (
          <MenuItem key={train.TrainNoLocal} value={train.TrainNoLocal}>
            
            {train.TrainNoLocal}
          </MenuItem>
        ))}
      </Select>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search train..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'Search train' }}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </FormControl>
      <Paper className={classes.footer}>
        <Typography variant="body2">
        Thanks to the SimRail devs and SimRail France for their APIs !
        </Typography>
      </Paper>
      <DiscordLogo />
      <Analytics />
    </div></>
  );
};

export default Server;
