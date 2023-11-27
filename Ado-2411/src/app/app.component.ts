import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ado-2411';
  nome = "";
  genero = "";
  filme = [
    {
      nome: "Interestelar",
      sinopse: "Interestelar é um filme de ficção científica lançado em 2014 e dirigido por Christopher Nolan1. O filme segue a história de um grupo de astronautas que viaja por um buraco de minhoca no espaço para garantir a sobrevivência da humanidade2.",
      img: "../assets/interestelar.jpg"
    },
    {
      nome: "Clube da luta",
      sinopse: "**********",
      img: "../assets/clubedaluta.jpg"
    },
    {
      nome: "V de Vingança",
      sinopse: "V de Vingança é uma história em quadrinhos e um filme que se passa em uma Inglaterra totalitária e futurista, onde um homem mascarado chamado V luta contra o regime opressor.",
      img: "../assets/v.jpg"
    }
  ];

  serie = [
    {
      nome: "Supernatural",
      sinopse: "A série narra a história de dois irmãos, Sam Winchester e Dean Winchester, interpretados respectivamente por Jared Padalecki e Jensen Ackles, que caçam demônios, fantasmas, monstros, vampiros e outras criaturas sobrenaturais no mundo.",
      img: "../assets/supernatural.jpg"
    },
    {
      nome: "Peaky Blinders",
      sinopse: "Peaky Blinders é uma série de televisão britânica que conta a história da família Shelby, formada por criminosos que praticavam assaltos, contrabando e apostas ilegais.",
      img: "../assets/peaky.jpg"
    },
    {
      nome: "Vikings",
      sinopse: "A série é inspirada nas histórias de invasões, comércio e exploração dos Nórdicos da Escandinávia medieval. A série segue as explorações do lendário líder Viking Ragnar Lodbork.",
      img: "../assets/vikings.jpg"
    }
  ];

  anime = [
    {
      nome: "One Piece",
      sinopse: "One Piece é um anime e mangá que conta as aventuras de Monkey D. Luffy, um garoto que possui um corpo elástico e que sonha em se tornar o Rei dos Piratas.",
      img: "../assets/one.jpeg"
    },
    {
      nome: "Naruto",
      sinopse: "A série gira em torno das aventuras vividas por Naruto Uzumaki, um jovem órfão habitante da Aldeia da Folha que sonha em se tornar o quinto Hokage, o maior guerreiro e governante da vila.",
      img: "../assets/naruto.jpg"
    },
    {
      nome: "Dragon Ball Z",
      sinopse: "Dragon Ball Z é uma série que conta as aventuras de Son Goku, um guerreiro alienígena chamado Saiyajin, que defende a Terra contra seu próprio povo, ao lado de outros aliados chamados de Guerreiros.",
      img: "../assets/dragon.jpe"
    }
  ];
};



