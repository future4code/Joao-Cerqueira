## Exercício 1
a) Chave estrangeira é uma maneira de refernciar uma primary key de outra tabela, sendo assim indicando que o valor inserido em tal coluna de uma tabela, faz referência a uma chave existente
em outra tabela.

b)
### INSERT INTO Rating (id, comment, rate, movie_id)
### VALUES ("001", "É um filme muito bom.", 9.5, "004");
...

c)  Não se pode adicionar ou atualizar a tabela que faça referência a uma tabela com id inexistente ou inválido

d) 
### ALTER TABLE Movies DROP COLUMN rating;

e) Cannot delete or update a parent row: a foreign key constraint fails (`carver-fabio-jose-lucena-de-oliveira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)).
Não foi possível excluir o filme com avaliação, pois a constraint Foreign Key da tabela Rating ainda está ligada na tablea de filmes.

## Exercício 2
a) A tabela possui dois atributos, um que faça referência ao id do filme e outro que faça referência ao id do ator

b)
### INSERT INTO MovieCast (movie_id, actor_id)
### VALUES ("003", "005");

c) a foreign key constraint fails (`carver-fabio-jose-lucena-de-oliveira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
O mesmo dos outros erros, como a chave estrangeira faz relação com outra tabela e torna obrigatória a coluna estar disponível e ter um valor válido, ao colocar qualquer valor inválido, a operação não é realizada.

d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-fabio-jose-lucena-de-oliveira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
Como diz o erro, não é possível fazer qualquer coisa com uma linha que está ligada a outra tabela através de chaves estrangeiras, "constraint".

## Exercício 3
a) O operador ON é o que fará a referência de uma tabela em outra "ONDE" a relação existir.

b) 
### SELECT movie_id, rate FROM Movies INNER JOIN Rating ON Movies.id = Rating.id; 