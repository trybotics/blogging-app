/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFavoriteMovie = /* GraphQL */ `
  mutation CreateFavoriteMovie(
    $input: CreateFavoriteMovieInput!
    $condition: ModelFavoriteMovieConditionInput
  ) {
    createFavoriteMovie(input: $input, condition: $condition) {
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
export const updateFavoriteMovie = /* GraphQL */ `
  mutation UpdateFavoriteMovie(
    $input: UpdateFavoriteMovieInput!
    $condition: ModelFavoriteMovieConditionInput
  ) {
    updateFavoriteMovie(input: $input, condition: $condition) {
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
export const deleteFavoriteMovie = /* GraphQL */ `
  mutation DeleteFavoriteMovie(
    $input: DeleteFavoriteMovieInput!
    $condition: ModelFavoriteMovieConditionInput
  ) {
    deleteFavoriteMovie(input: $input, condition: $condition) {
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
