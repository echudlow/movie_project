-- creating the database and schema
Create DATABASE MotionPictures;
GO

Use MotionPictures;
GO

CREATE SCHEMA motionpictures;
GO

-- creating the table
CREATE TABLE motionpictures.motionpictures (
    movie_id INT IDENTITY (1, 1) PRIMARY KEY NOT NULL,
    movie_name NVARCHAR (50) NOT NULL,
    movie_description NVARCHAR (500) NOT NULL,
    movie_realeaseYear INT NOT NULL
    );

INSERT INTO motionpictures.motionpictures (movie_name, movie_description, movie_realeaseYear)
VALUES ('Beetlejuice', 'The spirits of a deceased couple are harassed by an unbearable family that has moved into their home, and hire a malicious spirit to drive them out. The spirits of a deceased couple are harassed by an unbearable family that has moved into their home, and hire a malicious spirit to drive them out.', 1988),
       ('Baby Driver', 'After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.', 2017),
       ('The Dark Knight', 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', 2008),
       ('Ferris Bueller''s Day Off', 'A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.', 1986),
       ('Goodfellas', 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.', 1990),
       ('Night of the Living Dead', 'A ragtag group of Pennsylvanians barricade themselves in an old farmhouse to remain safe from a horde of flesh-eating ghouls that are ravaging the East Coast of the United States.', 1968),
       ('The Silence of the Lambs', 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.', 1991),
       ('My Girl', 'A young girl on the threshold of her teen years finds her life turning upside down when she is accompanied by an unlikely friend.', 1991),
       ('Lord of the Rings: The Fellowship of the Ring', 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.', 2001),
       ('A Nightmare on Elm Street', 'Teenager Nancy Thompson must uncover the dark truth concealed by her parents after she and her friends become targets of the spirit of a serial killer with a bladed glove in their dreams, in which if they die, it kills them in real life.', 1984),
       ('The Thomas Crown Affar', 'A very rich and successful playboy amuses himself by stealing artwork, but may have met his match in a seductive detective.', 1999),
       ('Casino', 'A tale of greed, deception, money, power, and murder occur between two best friends: a mafia enforcer and a casino executive compete against each other over a gambling empire, and over a fast-living and fast-loving socialite.', 1995),
       ('Indiana Jones and Raiders of the Lost Ark', 'Archaeology professor Indiana Jones ventures to seize a biblical artefact known as the Ark of the Covenant. While doing so, he puts up a fight against Renee and a troop of Nazis.', 1981),
       ('There Will Be Blood', 'A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.', 2007),
       ('No Country for Old Men', 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.', 2007),
       ('Jaws', 'When a killer shark unleashes chaos on a beach community off Cape Cod, it''s up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.', 1975),
       ('Pulp Fiction', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 1994),
       ('Die Hard', 'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.', 1988),
       ('The Thing', 'A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.', 1982),
       ('Get Out', 'A young African-American visits his white girlfriend''s parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.', 2017),
       ('2001: A Space Odyssey', 'After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins - a spacecraft manned by two men and the supercomputer H.A.L. 9000.', 1968)
       ;
