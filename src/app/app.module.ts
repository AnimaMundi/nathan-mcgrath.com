import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { AppComponent } from './app.component';

import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

import { ProgressBarComponent } from './progress-bar/progress-bar.component';

import { TimelineModule } from './timeline/timeline.module';
import { DomServicesModule } from './dom-services/dom-services.module';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'nathan-mcgrath'
    }),
    RouterModule.forRoot([]),
    FormsModule,
    HttpClientModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    TimelineModule,
    DomServicesModule,
    NavigationModule
  ],
  declarations: [
    AppComponent,
    AboutMeComponent,
    ExperienceComponent,
    SkillsComponent,
    ProgressBarComponent,
    ContactMeComponent,
  ],
})
export class AppModule { }
