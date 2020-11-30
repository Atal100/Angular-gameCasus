import { Component, OnInit } from '@angular/core';
import { UseCase } from '../usecase.model';

@Component({
  selector: 'app-usecases',
  templateUrl: './usecases.component.html',
  styleUrls: ['./usecases.component.css']
})
export class UsecasesComponent implements OnInit {
  useCases: UseCase[] = [
    {
      id: 'UC-01',
      name: 'Inloggen',
      description: 'Hiermee logt een Administrator in.',
      scenario: [
        'Gebruiker vult email en password in en klikt op Login knop.',
        'De applicatie valideert de ingevoerde gegevens.',
        'Indien gegevens correct zijn dan redirect de applicatie naar het startscherm.'
      ],
      actor: 'Reguliere gebruiker',
      precondition: 'Geen',
      postcondition: 'De actor is ingelogd'
    },
    {
      id: 'UC-02',
      name: 'Film info bekijken',
      description: 'Hiermee kan de gebruiker meer informatie over de film vinden',
      scenario: ['gebruiker gaat naar movies', 'gebruiker klikt een film aan', 'gebruiker leest de extra info'],
      actor: 'Gebruiker',
      precondition: 'Geen',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-03',
      name: "Film toevoegen ",
      description: "De Administrator wilt een Film toevoegen",
      scenario: ['Administrator gaat naar movies', 'Administrator klikt op New Movie', 'Administrator vult alle informatie in over de movie', 'Administrator klikt op Save Movie'],
      actor: 'Administrator',
      precondition: 'De actor moet ingelogd zijn',
      postcondition: 'Er is een nieuwe film toegevoegd.'


    },
    {
      id: 'UC-04',
      name: "Film verwijderen ",
      description: "De Administrator wilt een Film verwijderen",
      scenario: ['Administrator gaat naar movies', 'Administrator klikt op delete Movie van specifieke Movie', 'Administrator klikt op ja '],
      actor: 'Administrator',
      precondition: 'De actor moet ingelogd zijn',
      postcondition: 'Er is een film verwijderd.'


    },
    {
      id: 'UC-05',
      name: "Gebuiker Moviescreening zien",
      description: "De Gebruiker wilt een Moviescreening zien van een bepaald film ",
      scenario: ['Gebruiker gaat naar Moviescreening', 'Gebruiker kiest specifieke locatie', 'Gebruiker klikt de specifieke Moviescreening die hij wilt zien'],
      actor: 'Gebruiker',
      precondition: 'Geen',
      postcondition: 'Hij weet hoelaat de film begint.'


    },
    {
      id: 'UC-06',
      name: "Moviescreening toevoegen ",
      description: "De Administrator wilt een Moviescreening toevoegen",
      scenario: ['Administrator gaat naar Moviescreenings', 'Administrator klikt op New Moviescreening', 'Administrator klikt de juiste Movie aan', 'Administrator klikt op de juist Hall', 'Administrator geeft aan welke locaties deze Film zal afspelen', 'Administrator geeft aan hoelaat deze films gaan beginnen'],
      actor: 'Administrator',
      precondition: 'De actor moet ingelogd zijn',
      postcondition: 'Er is een nieuwe Moviescreening toegevoegd.'


    },
    {
      id: 'UC-07',
      name: "Moviescreening verwijderen ",
      description: "De Administrator wilt een Moviescreening verwijderen",
      scenario: ['Administrator gaat naar Moviescreenings', 'Administrator klikt op Delete Moviescreening', 'Administrator klikt op ja'],
      actor: 'Administrator',
      precondition: 'De actor moet ingelogd zijn',
      postcondition: 'Er is een Moviescreening verwijdered.'


    },
    {
      id: 'UC-08',
      name: "Halls toevoegen ",
      description: "De Administrator wilt een Hall toevoegen",
      scenario: ['Administrator gaat naar Halls', 'Administrator klikt op New Halls', 'Administrator vult de gegevens ins', 'Administrator klikt op save'],
      actor: 'Administrator',
      precondition: 'De actor moet ingelogd zijn',
      postcondition: 'Er is een nieuwe Hall toegevoegd.'


    },
    {
      id: 'UC-09',
      name: "Halls verwijderen ",
      description: "De Administrator wilt een Hall verwijderen",
      scenario: ['Administrator gaat naar Halls', 'Administrator klikt op Delete Hall', 'Administrator klikt op ja',],
      actor: 'Administrator',
      precondition: 'De actor moet ingelogd zijn',
      postcondition: 'Er is een Hall verwijderd.'


    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
