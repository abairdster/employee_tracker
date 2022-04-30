SELECT reviews.review, reviews.movie_id, movies.movie_name
AS movie
FROM reviews
JOIN movies
ON movies_id =reviews.movie_id 
ORDER BY movies.movie_name;