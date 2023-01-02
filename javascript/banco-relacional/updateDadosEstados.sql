UPDATE estados 
SET nome = 'Maranhão'
WHERE sigla = 'MA'

SELECT nome FROM estados WHERE sigla = "MA"

UPDATE `estados`
SET nome = 'Paraná',
    populacao = 11.32
WHERE sigla = "PR"

SELECT nome, sigla, populacao FROM `estados` WHERE sigla = 'PR'


SELECT * FROM estados

INSERT INTO estados (id, nome, sigla, regiao, populacao)
VALUES (100, 'Novo Estado', 'NE', 'Norte', 31.78)


INSERT INTO estados (nome, sigla, regiao, populacao)
VALUES ('Mais Novo Estado', 'MN', 'Norte', 12.68)

DELETE  FROM `estados`
WHERE sigla = 'MN'

DELETE  FROM `estados`
WHERE id >= 100

SELECT * FROM `estados`
WHERE regiao = 'Norte'