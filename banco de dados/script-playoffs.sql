create database PlayOffs;
use PlayOffs;
drop database PlayOffs;
create table Usuario (
idUsuario int primary key auto_increment,
Nome varchar(45),
Email varchar(45), 
senha varchar(45)
);

create table quiz (
idQuiz int primary key auto_increment,
descrição varchar(45),
pontosCertos int,
pontosErrados int,
fkUsuario int, 
constraint fkUsuario foreign key (fkUsuario) references Usuario(idUsuario)
);

select * from quiz;
select * from Usuario;

insert into Usuario values
(null, 'Wesley', 'wesley@sptech', '123456'),
(null, 'Gonzaga', 'gonzaga@sptech', '123456'),
(null, 'evy', 'evy@sptech', '123456'),
(null, 'silva', 'silva@sptech', '123456');

insert into quiz values
(null, 'QuizGeral', 9, 1, 6), 
(null, 'QuizGeral', 6, 4, 7), 
(null, 'QuizGeral', 10, 0, 8), 
(null, 'QuizGeral', 8, 2, 9); 

select sum(pontosCertos) as pontos, nome from quiz join Usuario on idUsuario = fkusuario group by nome;

SELECT Usuario.Nome as nickname, 
    quiz.pontosCertos AS pontos,
    fkUsuario  FROM quiz JOIN Usuario 
    ON fkUsuario = idUsuario where descrição = 'QuizJogador'
	ORDER BY pontos DESC;

select pontosCertos as pontos, Usuario.nome from quiz join Usuario on idUsuario = fkUsuario where descrição = 'QuizJogador'; 