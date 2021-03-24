import React from "react";
import styles from "../styles/Home.module.css";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import MovieList from "../components/MovieList";
import InfiniteScroll from "../components/InfiniteScroll";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import { API, graphqlOperation } from "aws-amplify";
import { listFavoriteMovies } from "../src/graphql/queries"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  pagination: {
    margin: "36px 0",
  },
}));

export default function Home({ moviesProps }) {
  const classes = useStyles();
  const [movies, setMovies] = React.useState(moviesProps);

  React.useEffect(async() => {
    const movies = await getData(1);
    setMovies(movies)
  },[]);

  const removeMovie = (movieId) => {
    setMovies(movies.filter(movie => {return movie.id != movieId}))
  }
  
  return (
    <div className={styles.container}>
      <Paper
        style={{
          marginBottom: 20,
          float: "right",
          width: "100%",
        }}
      >
        <InputBase
          className={classes.input}
          placeholder="Search Movies"
          inputProps={{ "aria-label": "search movies" }}
          style={{ marginLeft: 20, marginTop: 8, width: "80%" }}
          onKeyDown={async (e) => {
            var code = e.keyCode ? e.keyCode : e.which;
            if (code == 13) {
              //Enter keycode
              setMovies(await getData(1, e.target.value));
            }
          }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          style={{ float: "right" }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <InfiniteScroll
        initialLoad={false}
        pageStart={1}
        loadMore={async (page) => {
          setMovies([...movies, ...(await getData(page))]);
        }}
        hasMore={true}
        loader={
          <center style={{ marginTop: "10px" }}>
            <CircularProgress size={50} />
          </center>
        }
      >
        <MovieList movies={movies} removeMovie = { removeMovie }/>
      </InfiniteScroll>
    </div>
  );
}

export const getStaticProps = async () => {
  const movies = await getData(1);
  return {
    props: {
      moviesProps: movies,
    },
  };
};

const getData = async (page, search) => {
  let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=e649c1ec4f43c9f8ea307ec5aec0e891&page=${page}`;
  if (search) {
    url = `https://api.themoviedb.org/3/search/movie?api_key=e649c1ec4f43c9f8ea307ec5aec0e891&page=${page}&query=${search}`;
  }
  try {
    const res = await fetch(url);
    const movies = await res.json();
    const favorites = await API.graphql(graphqlOperation(listFavoriteMovies));
    let favoritesMovies = {};
    favorites.data.listFavoriteMovies.items.map((movie) => {
      favoritesMovies[movie.movie_id] = movie;
    });
    return movies.results.filter((movie) => {
      return favoritesMovies[movie.id] ? false : true;
    });
  } catch (error) {
    console.log("error", error);
    return [];
  }
};
