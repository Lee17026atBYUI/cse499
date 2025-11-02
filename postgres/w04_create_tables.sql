CREATE TABLE IF NOT EXISTS account (
	PRIMARY KEY (account_id),
	account_id SERIAL NOT NULL,
	email VARCHAR(320) NOT NULL,
	password VARCHAR(64) NOT NULL,
	created TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS deck (
	PRIMARY KEY (deck_id),
	deck_id SERIAL NOT NULL,
	account_id SERIAL NOT NULL,
	name VARCHAR(64) NOT NULL,
	created TIMESTAMP NOT NULL,
	created_by SERIAL NOT NULL,
	updated TIMESTAMP NOT NULL,
	updated_by SERIAL NOT NULL,
	FOREIGN KEY (account_id) REFERENCES account (account_id),
	FOREIGN KEY (created_by) REFERENCES account (account_id),
	FOREIGN KEY (updated_by) REFERENCES account (account_id)
);

CREATE TABLE IF NOT EXISTS card (
	PRIMARY KEY (card_id),
	card_id SERIAL NOT NULL,
	deck_id SERIAL NOT NULL,
	front VARCHAR(256) NOT NULL,
	back VARCHAR(512),
	created TIMESTAMP NOT NULL,
	created_by SERIAL NOT NULL,
	updated TIMESTAMP NOT NULL,
	updated_by SERIAL NOT NULL,
	FOREIGN KEY (deck_id) REFERENCES deck (deck_id),
	FOREIGN KEY (created_by) REFERENCES account (account_id),
	FOREIGN KEY (updated_by) REFERENCES account (account_id)
);


-- INSERT INTO account (email, password, created)
-- VALUES ('myemail', 'mypass', current_timestamp);

-- INSERT INTO deck (
-- 	account_id, 
-- 	name, 
-- 	created, 
-- 	created_by, 
-- 	updated, 
-- 	updated_by
-- 	) VALUES (
-- 		1,
-- 		'first deck',
-- 		current_timestamp,
-- 		1,
-- 		current_timestamp,
-- 		1
-- 	);

-- INSERT INTO card (
-- 	deck_id,
-- 	front,
-- 	back,
-- 	created,
-- 	created_by,
-- 	updated,
-- 	updated_by
-- ) VALUES (
-- 	1,
-- 	'this is the front',
-- 	'over here we have the back',
-- 	current_timestamp,
-- 	1,
-- 	current_timestamp,
-- 	1
-- );

-- INSERT INTO card (
-- 	deck_id,
-- 	front,
-- 	back,
-- 	created,
-- 	created_by,
-- 	updated,
-- 	updated_by
-- ) VALUES (
-- 	1,
-- 	'Moses 1:39',
-- 	'For behold, this is my work and my glory—to bring to pass the immortality and eternal life of man.',
-- 	current_timestamp,
-- 	1,
-- 	current_timestamp,
-- 	1
-- ),(
-- 	1,
-- 	'Fromage',
-- 	'Cheese!',
-- 	current_timestamp,
-- 	1,
-- 	current_timestamp,
-- 	1
-- ),(
-- 	1,
-- 	'Mammal',
-- 	'Milk-producing vertebrates with fur/hair.',
-- 	current_timestamp,
-- 	1,
-- 	current_timestamp,
-- 	1
-- ),(
-- 	1,
-- 	'Pi',
-- 	"Let's just round to 3, don't tell anyone.",
-- 	current_timestamp,
-- 	1,
-- 	current_timestamp,
-- 	1
-- );