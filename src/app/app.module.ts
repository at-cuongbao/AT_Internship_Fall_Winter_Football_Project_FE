import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from '../app/features/home/home.component';
import { LoginComponent } from '../app/features/login/login.component';
import { BracketComponent } from './features/bracket/bracket.component';
import { FeaturesComponent } from './features/features.component';
import { TournamentRegistrationComponent } from './features/tournament-registration/tournament-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PredictionComponent } from './features/prediction/prediction.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { RegisterComponent } from './features/register/register.component';
import { ScheduleComponent } from './features/schedule/schedule.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuestionMaskPipe } from './shared/pipes/question-mask.pipe';
import { DateDefaultPipe } from './shared/pipes/date-default.pipe';
import { HomeScheduleComponent } from './features/home/home-schedule/home-schedule.component';
import { FootballImagesComponent } from './features/home/football-images/football-images.component';
import { MatchesComponent } from './shared/components/matches/matches.component';
import { NextMatchComponent } from './shared/components/next-match/next-match.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    BracketComponent,
    FeaturesComponent,
    TournamentRegistrationComponent,
    ScheduleComponent,
    SliderComponent,
    RegisterComponent,
    PredictionComponent, 
    PageNotFoundComponent,
    QuestionMaskPipe,
    DateDefaultPipe,
    HomeScheduleComponent,
    FootballImagesComponent,
    MatchesComponent,
    NextMatchComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['http://localhost:3000'],
        blacklistedRoutes: ['http://localhost:3000/api/authenticate']
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
