import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import Button from "@material-ui/core/Button";

const movie = ({ movie }) => {
  const router = useRouter();
  // const { id } = router.query

  return (
    <div className={styles.container}>
      <Button
        variant="contained"
        color="primary"
        //   className={classes.button}
        endIcon={<KeyboardReturnIcon />}
        onClick={() => router.back()}
      >
        Go Back
      </Button>
      <br />
      <br />
      <img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} />
      <Typography
        variant="h5"
        gutterBottom
        noWrap={true}
        style={{ marginTop: 10 }}
      >
        {movie.title}
      </Typography>
      <Typography variant="body2" color="primary">
        Popularity: {Math.floor(movie.popularity)}, &nbsp; Rating:{" "}
        {movie.vote_average}/10, &nbsp; Voted: {movie.vote_count}
      </Typography>
      <br />
      <Typography
        variant="body2"
        color="textSecondary"
        style={{ textAlign: "justify" }}
      >
        {movie.overview}
      </Typography>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://api.themoviedb.org/3/movie/${context.params.id}?api_key=e649c1ec4f43c9f8ea307ec5aec0e891`
  );

  const movie = await res.json();

  return {
    props: {
      movie,
    },
  };
};

// export const getStaticPaths = async () => {
//   const res = await fetch(
//     `http://api.themoviedb.org/3/movie/now_playing?api_key=e649c1ec4f43c9f8ea307ec5aec0e891`
//   );

//   const movies = await res.json();
//   console.log();

//   const ids = movies.results.map((movie) => movie.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default movie;
