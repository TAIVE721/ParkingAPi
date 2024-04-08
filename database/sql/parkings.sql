-- Active: 1712359117678@@localhost@5432@parkings@public

-- ELIMINAR TABLA SI EXISTE
DROP TABLE IF EXISTS parkings;

DROP TABLE IF EXISTS vehicles;

-- CREAR ENUMERADO DE CATEGORÍAS DE PARKINGS
CREATE TYPE parking_category AS ENUM('compact', 'regular', 'big');

-- CREAR EXTENSIÓN PARA GENERAR UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CREAR TABLA DE PARKINGS
CREATE TABLE parkings (
    ID SERIAL PRIMARY KEY, width NUMERIC NOT NULL, large NUMERIC NOT NULL, category parking_category NOT NULL, vehicle INT DEFAULT 0, occupied BOOLEAN NOT NULL, available BOOLEAN NOT NULL
);

-- CREAR TABLA DE VEHÍCULOS
CREATE TABLE vehicles (
    ID SERIAL PRIMARY KEY, category parking_category NOT NULL, parking INT NOT NULL, FOREIGN KEY (parking) REFERENCES parkings (ID)
);
-- INSERTAR DATOS
INSERT INTO
    parkings (
        width, large, category, vehicle, occupied, available
    )
VALUES (
        2.5, 5.0, 'compact', 0, false, true
    ),
    (
        3.0, 5.5, 'regular', 0, false, true
    ),
    (
        3.5, 6.0, 'big', 0, false, true
    ),
    (
        2.5, 5.0, 'compact', 0, false, true
    ),
    (
        3.0, 5.5, 'regular', 0, false, true
    ),
    (
        3.5, 6.0, 'big', 0, false, true
    ),
    (
        2.5, 5.0, 'compact', 0, false, true
    ),
    (
        3.0, 5.5, 'regular', 0, false, true
    ),
    (
        3.5, 6.0, 'big', 0, false, true
    ),
    (
        2.5, 5.0, 'compact', 0, false, true
    ),
    (
        3.0, 5.5, 'regular', 0, false, true
    ),
    (
        3.5, 6.0, 'big', 0, false, true
    ),
    (
        2.5, 5.0, 'compact', 0, false, true
    ),
    (
        3.0, 5.5, 'regular', 0, false, true
    ),
    (
        3.5, 6.0, 'big', 0, false, true
    ),
    (
        2.5, 5.0, 'compact', 0, false, true
    ),
    (
        3.0, 5.5, 'regular', 0, false, true
    ),
    (
        3.5, 6.0, 'big', 0, false, true
    ),
    (
        2.5, 5.0, 'compact', 0, false, true
    ),
    (
        3.0, 5.5, 'regular', 0, false, true
    ),
    (
        3.5, 6.0, 'big', 0, false, true
    ),
    (
        2.5, 5.0, 'compact', 0, false, true
    ),
    (
        3.0, 5.5, 'regular', 0, false, true
    ),
    (
        3.5, 6.0, 'big', 0, false, true
    ),
    (
        2.5, 5.0, 'compact', 0, false, true
    ),
    (
        3.0, 5.5, 'regular', 0, false, true
    ),
    (
        3.5, 6.0, 'big', 0, false, true
    ),
    (
        2.5, 5.0, 'compact', 0, false, true
    ),
    (
        3.0, 5.5, 'regular', 0, false, true
    ),
    (
        3.5, 6.0, 'big', 0, false, true
    ),
    (
        2.5, 5.0, 'compact', 0, false, true
    ),
    (
        3.0, 5.5, 'regular', 0, false, true
    ),
    (
        3.5, 6.0, 'big', 0, false, true
    ),
    (
        2.5, 5.0, 'compact', 0, false, true
    ),
    (
        3.0, 5.5, 'regular', 0, false, true
    ),
    (
        3.5, 6.0, 'big', 0, false, true
    ),
    (
        2.5, 5.0, 'compact', 0, false, true
    ),
    (
        3.0, 5.5, 'regular', 0, false, true
    ),
    (
        3.5, 6.0, 'big', 0, false, true
    ),
    (
        2.5, 5.0, 'compact', 0, false, true
    ),
    (
        3.0, 5.5, 'regular', 0, false, true
    ),
    (
        3.5, 6.0, 'big', 0, false, true
    ),
    (
        2.5, 5.0, 'compact', 0, false, true
    ),
    (
        3.0, 5.5, 'regular', 0, false, true
    ),
    (
        3.5, 6.0, 'big', 0, false, true
    ),
    (
        2.5, 5.0, 'compact', 0, false, true
    ),
    (
        3.0, 5.5, 'regular', 0, false, true
    );