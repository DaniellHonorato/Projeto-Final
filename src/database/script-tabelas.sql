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

CREATE TABLE anime (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	imagem VARCHAR(255),
	generos VARCHAR(100),
	recomendacao VARCHAR(255),
	sinopse TEXT
);

INSERT INTO anime (titulo, imagem, generos, recomendacao, sinopse) VALUES
('Wistoria: Wand and Sword', '../assets/imgs/animes/wistoria.jpg', 'Ação, Fantasia, Aventura', 'Recomendado caso goste de lutas, magia e superação.', 'Will Serfort ingressa na Academia de Magia Rigarden para cumprir uma promessa feita a uma amiga de infância. O único problema é que ele não possui nenhuma aptidão para magia. Em um mundo onde magia é tudo, ele precisará usar sua espada e força física para subir até o topo e se tornar uma Magia Vande.'),
('Haikyu!!', '../assets/imgs/animes/haikyuu.jpg', 'Esportes, Comédia, Drama', 'Recomendado caso goste de torneios, espírito de equipe e desenvolvimento de personagens.', 'Shoyo Hinata quer provar que no vôlei não é preciso ser alto para voar. Ele entra no clube da escola Karasuno e precisa aprender a trabalhar em equipe, fazendo dupla com seu antigo rival, o gênio levantador Tobio Kageyama.'),
('Black Clover', '../assets/imgs/animes/clover.jpg', 'Ação, Fantasia, Magia', 'Recomendado caso goste de lutas mágicas intensas, shounen clássico e persistência infinita.', 'Asta e Yuno são órfãos criados juntos numa igreja. Num mundo onde magia é tudo, Yuno é um prodígio incrivelmente forte, enquanto Asta nasceu totalmente sem poder mágico. Asta recebe um raro grimório de cinco trevos antimagia e começa sua jornada para se tornar o Rei Mago.'),
('Naruto', '../assets/imgs/animes/naruto.jpg', 'Ação, Aventura, Artes Marciais', 'Recomendado caso goste de lutas com ninjas, jutsus e uma longa e clássica jornada do herói.', 'A Vila Oculta da Folha é o lar do jovem ninja Naruto Uzumaki. Rejeitado pelos aldeões por carregar a raposa demônio de nove caudas dentro de si, ele treina incansavelmente para se tornar o Hokage, o líder supremo de sua vila.'),
('Shangri-La Frontier', '../assets/imgs/animes/shangrila.jpg', 'Ação, Aventura, Fantasia, Videogame', 'Recomendado caso goste de lutas épicas contra chefões, MMORPGs e pro players mitando.', 'Rakuro Hizutome é um especialista em zerar jogos lixo cheios de bugs. Buscando um novo desafio, ele decide encarar o aclamado jogo divino Shangri-La Frontier com 30 milhões de jogadores, usando apenas suas habilidades surreais e reflexos de gamer veterano.'),
('The Fragrant Flower Blooms With Dignity', '../assets/imgs/animes/fragrant.jpg', 'Romance, Escolar, Slice of Life', 'Recomendado caso goste de romances fofos, personagens cativantes e histórias leves.', 'Rintaro, um estudante de uma escola conhecida por abrigar garotos delinquentes com notas baixas, conhece e se aproxima de Kaoruko, uma garota doce da prestigiada e rigorosa escola de garotas vizinha. Um belo romance sobre não julgar pelas aparências.'),
('Solo Leveling', '../assets/imgs/animes/solo.jpg', 'Ação, Fantasia, RPG', 'Recomendado caso goste de lutas insanas, protagonista over-powered e evolução de status.', 'Sung Jinwoo é conhecido como o caçador mais fraco de toda a humanidade. Porém, após quase morrer ao sobreviver a uma masmorra dupla mortal, ele acorda em um hospital e recebe uma tela de missões secreta que permite que ele suba de nível, tornando-o capaz de alcançar poderes absurdos.'),
('Mob Psycho 100', '../assets/imgs/animes/mob.jpg', 'Ação, Comédia, Sobrenatural', 'Recomendado caso goste de lutas com poderes telecinéticos, animação espetacular e muito humor.', 'Shigeo Kageyama, apelidado de Mob, é um jovem com imensos poderes psíquicos. Ele reprime suas emoções para não perder o controle, mas toda vez que seu nível de estresse emocional atinge a marca de 100%, seus poderes psíquicos explodem de forma espetacular.'),
('Hell''s Paradise (Jigokuraku)', '../assets/imgs/animes/hells.jpg', 'Ação, Fantasia Sombria, Gore', 'Recomendado caso goste de lutas intensas e sangrentas, mistérios obscuros e suspense.', 'Gabimaru, o Vazio, um ninja assustador e condenado à morte, recebe a chance de ser perdoado se conseguir encontrar o Elixir da Vida Eterna em uma ilha bizarra recém-descoberta. Porém, a ilha está infestada de monstros assassinos e seres perturbadores.'),
('Hajime no Ippo', '../assets/imgs/animes/ippo.jpg', 'Esportes, Comédia, Artes Marciais', 'Recomendado caso goste de lutas corpo a corpo focadas em boxe realista e superação pura.', 'Makunouchi Ippo sofre bullying constantemente até ser salvo por acaso pelo experiente boxeador Takamura. Inspirado pela força e resiliência dos lutadores, Ippo decide treinar intensamente no ginásio Kamogawa para descobrir, afinal, o que significa ser forte.'),
('Attack on Titan', '../assets/imgs/animes/aot.jpg', 'Ação, Drama, Fantasia Sombria', 'Recomendado caso goste de histórias profundas, reviravoltas absurdas e animes que não poupam ninguem.', 'A humanidade vive atrás de enormes muralhas para se proteger dos Titãs, criaturas gigantescas que devoram humanos. Após sua cidade ser destruida, Eren Yeager jura exterminar todos os Titãs e descobrir a verdade sobre o mundo que existe além das muralhas.'),
('One Piece', '../assets/imgs/animes/onepiece.jpg', 'Ação, Aventura, Comédia', 'Recomendado caso goste de aventuras epicas, um mundo incrivel e uma das histórias mais longas e apaixonantes do anime.', 'Monkey D. Luffy quer se tornar o Rei dos Piratas encontrando o lendário tesouro One Piece. Junto com sua tripulação cada vez maior, ele navega pelos Mares e enfrenta a Marinha, outros piratas e poderes incríveis, sempre com um sorriso no rosto e a vontade de proteger quem ama.'),
('Kimetsu no Yaiba', '../assets/imgs/animes/kimetsu.jpg', 'Ação, Fantasia, Sobrenatural', 'Recomendado caso goste de animação de outro nível, lutas belissimas e personagens que você se apega instantâneamente.', 'Tanjiro Kamado leva uma vida tranquila com sua familia até o dia em que ela é massacrada por um demonônio. Sua irmã Nezuko sobrevive, mas é transformada em demonônio. Determinado a vinga-la e restaurar a humanidade da irmã, Tanjiro torna-se um Matador de Demonios.');

CREATE TABLE favorito (
	fk_usuario INT,
	fk_anime INT,
	data_favoritado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
	FOREIGN KEY (fk_anime) REFERENCES anime(id),
	PRIMARY KEY (fk_usuario, fk_anime)
);