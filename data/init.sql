DROP TABLE IF EXISTS hello_world;
CREATE TABLE IF NOT EXISTS hello_world(id INTEGER PRIMARY KEY, text TEXT);

INSERT INTO hello_world (id, text) VALUES (1, 'Hola, mundo NUXT!');
