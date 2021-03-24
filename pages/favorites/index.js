import React from "react";
import styles from "../../styles/Home.module.css";
import { makeStyles } from "@material-ui/core/styles";
import MovieList from "../../components/MovieList";
import { API, graphqlOperation } from "aws-amplify";
import { listFavoriteMovies } from "../../src/graphql/queries";

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

  React.useEffect(async () => {
    const movies = await getData(1);
    setMovies(
      movies.map((movie) => {
        return { ...movie, _id: movie.id, id: movie.movie_id };
      })
    );
  }, []);

  const removeMovie = (movieId) => {
    setMovies(
      movies.filter((movie) => {
        return movie.id != movieId;
      })
    );
  };

  return (
    <div className={styles.container}>
      <MovieList movies={movies} favorite={true} removeMovie={removeMovie} />
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
  try {
    const res = await API.graphql(
      graphqlOperation(listFavoriteMovies, {
        filter: {
          user_id: {
            eq: localStorage.getItem(
              "CognitoIdentityServiceProvider.11jck81hehtgj7ufu892uh203p.LastAuthUser"
            ),
          },
        },
      })
    );
    return res.data.listFavoriteMovies.items;
  } catch (error) {
    // console.log("error", error);
    return [];
  }
};
