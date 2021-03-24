import Grid from "@material-ui/core/Grid";
import Card from "./Card";
const MovieList = ({ movies, favorite, removeMovie }) => {
  return (
    <Grid container spacing={6}>
      {movies.map((movie, index) => {
        return (
          <Grid key={index} item xs={12} sm={6} md={2}>
            <Card movie={movie} favorite={favorite} removeMovie = { removeMovie }/>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MovieList;
