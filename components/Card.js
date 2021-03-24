import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Link from "next/link";
import { API, graphqlOperation } from "aws-amplify";
import {
  createFavoriteMovie,
  deleteFavoriteMovie,
} from "../src/graphql/mutations";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

export default function MediaCard({ movie, favorite, removeMovie }) {
  const classes = useStyles();
  const [favoriteProps, setFavorite] = React.useState(favorite || false);

  const movieMutation = async (movie) => {
    try {
      let movieDetails = {
        input: {
          movie_id: movie.id,
          user_id: localStorage.getItem(
            "CognitoIdentityServiceProvider.11jck81hehtgj7ufu892uh203p.LastAuthUser"
          ),
          title: movie.title,
          original_title: movie.original_title,
          backdrop_path: movie.backdrop_path,
          poster_path: movie.poster_path,
          popularity: movie.popularity,
          vote_average: movie.vote_average,
          vote_count: movie.vote_count,
          overview: movie.overview,
        },
      };
      let newMovie = {};
      if (favoriteProps) {
        movieDetails = {
          input: { id: movie._id },
        };
        newMovie = await API.graphql(
          graphqlOperation(deleteFavoriteMovie, movieDetails)
        );
      } else {
        newMovie = await API.graphql(
          graphqlOperation(createFavoriteMovie, movieDetails)
        );
      }
      removeMovie(
        newMovie.data[
          favoriteProps ? "deleteFavoriteMovie" : "createFavoriteMovie"
        ].movie_id
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Card>
      <Link href="/movie/[id]" as={`/movie/${movie.id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`http://image.tmdb.org/t/p/w185${movie.backdrop_path}`}
            title={movie.original_title}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom noWrap={true}>
              {movie.title}
            </Typography>
            <Typography variant="body2" color="primary">
              Popularity: {Math.floor(movie.popularity)}, &nbsp; Rating:{" "}
              {movie.vote_average}/10
            </Typography>
            <br />
            <Typography
              variant="body2"
              color="textSecondary"
              style={{ textAlign: "justify" }}
            >
              {movie.overview.substr(0, 80)}
              <a
                style={{
                  fontWeight: "700",
                  cursor: "pointer",
                  color: "#b26a00",
                }}
              >
                {" "}
                ... show more
              </a>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => movieMutation(movie)}
        >
          {favoriteProps ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
      </CardActions>
    </Card>
  );
}
