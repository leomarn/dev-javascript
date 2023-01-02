SELECT regiao as 'Região',
SUM(populacao) as Total
FROM estados
GROUP BY regiao
ORDER BY Total desc

SELECT
    sum(populacao) as Total
FROM `estados`

SELECT 
    avg(populacao) as Media
FROM `estados`
