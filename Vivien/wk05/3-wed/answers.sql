-- Get all information about all authors
SELECT * FROM authors;
-- Get just the name and birth year of all authors
SELECT name,birth_year FROM authors;
-- Get all authors born in the 20th centruy or later
SELECT name FROM authors WHERE birth_year >= 1900;

-- Get all authors born in the USA
SELECT name FROM authors WHERE nationality = 'United States of America';
-- Get all books published on 1985
SELECT title FROM books WHERE publication_date = 1985;
-- Get all books published before 1989
SELECT title FROM books WHERE publication_date < 1985;
-- Get just the title of all books.
SELECT title FROM books;
-- Get just the year that 'A Dance with Dragons' was published
SELECT publication_date FROM books where title = 'A Dance with Dragons';
  -- Cry when you realize how long it's been
 NO
-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
SELECT title from books WHERE title LIKE '%the%';
-- Add yourself as an author
INSERT INTO authors (name,nationality,birth_year) VALUES ('Vivien','China',2000);
-- Add two books that you'd like to write (you can hard-code your id as the author id)
INSERT INTO books (title,publication_date,author_id) VALUES ('Osso Bucco Recipe',2018,68);
INSERT INTO books (title,publication_date,author_id) VALUES ('How I beat Contra on cheating mode',2020,68);
-- Update one of your books to have a new title
UPDATE books SET title = ' How To cook Osso Bucco ' WHERE title = 'Osso Bucco Recipe';
-- Delete your books
DELETE FROM books WHERE author_id = 68;
-- Delete your author entry
DELETE FROM authors WHERE name = 'Vivien';