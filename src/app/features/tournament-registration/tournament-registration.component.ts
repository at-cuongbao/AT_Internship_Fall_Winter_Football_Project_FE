import { Component, OnInit, Inject } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { Team } from 'src/app/shared/models/team';

@Component({
  selector: 'app-tournament-registration',
  templateUrl: './tournament-registration.component.html',
  styleUrls: ['./tournament-registration.component.scss']
})
export class TournamentRegistrationComponent implements OnInit {
  imageSource = '../../../assets/images/anhbongda.jpg';
  teams: Team[] = [];
  name = '';
  number = '';
  a = [];
  email = '';
  phone = '';
  information = '';
  isShowForm = false;
  bang = ["A", "B", "C", "D", "E", "F", "H", "G"];

  constructor() { }

  ngOnInit() {

  }

  convert(number) {
    this.a = [];
    for (let i = 0; i < number.value; i++) {
      this.a.push(i);
    }
  }

  submit(f: NgForm) {}
}
