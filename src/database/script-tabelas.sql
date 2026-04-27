CREATE DATABASE caminho_ninja;

USE caminho_ninja;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	ja_viu_anime INT
);

CREATE TABLE crescimento_anime (
	id INT PRIMARY KEY AUTO_INCREMENT,
	ano VARCHAR(4),
	receita DECIMAL(5,2)
);

INSERT INTO crescimento_anime (ano, receita) VALUES
('2015', 15.80),
('2016', 17.40),
('2017', 19.20),
('2018', 20.50),
('2019', 21.30),
('2020', 22.00),
('2021', 23.50),
('2022', 24.10),
('2023', 25.30),
('2024', 29.10);