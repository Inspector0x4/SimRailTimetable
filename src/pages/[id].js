import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'top',
    minHeight: '100vh',
    padding: theme.spacing(2),
    flexDirection: 'column',
  },
  select: {
    minWidth: 200,
  },
  title: {
    marginBottom: theme.spacing(4),
  },
}));

const Server = () => {
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

  return (
    <div className={classes.root}>
      <Head>
        <title>SimRail Information</title>
      </Head>
      <Typography variant="h4" className={classes.title}>Select a train</Typography>
      <FormControl className={classes.select}>
        <InputLabel id="train-select-label">Train</InputLabel>
        <Select
          labelId="train-select-label"
          value=""
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {data.map((train) => (
            <MenuItem key={train.TrainNoLocal} value={train.TrainNoLocal}>
              {train.TrainNoLocal}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Server;
