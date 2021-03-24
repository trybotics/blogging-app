/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFavoriteMovie = /* GraphQL */ `
  query GetFavoriteMovie($id: ID!) {
    getFavoriteMovie(id: $id) {
      id
      movie_id
      user_id
      title
      original_title
      backdrop_path
      poster_path
      popularity
      vote_average
      vote_count
      overview
      createdAt
      updatedAt
    }
  }
`;
export const listFavoriteMovies = /* GraphQL */ `
  query ListFavoriteMovies(
    $filter: ModelFavoriteMovieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavoriteMovies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        movie_id
        user_id
        title
        original_title
        backdrop_path
        poster_path
        popularity
        vote_average
        vote_count
        overview
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
