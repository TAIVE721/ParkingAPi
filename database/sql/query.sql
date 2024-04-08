-- Active: 1712359117678@@localhost@5432@parkings@public

UPDATE parkings
SET
    category = $1,
    vehicle = $2,
    occupied = $3,
    available = $4
WHERE
    id = $5
RETURNING
    *;

INSERT INTO
    vehicles (category, parking)
VALUES ('compact', 1)
RETURNING
    *