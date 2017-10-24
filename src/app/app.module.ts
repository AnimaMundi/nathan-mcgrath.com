import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';

import { ProgressBarComponent } from './progress-bar/progress-bar.component';

import { TimelineModule } from './timeline/timeline.module';
import { DomServicesModule } from './dom-services/dom-services.module';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'nathan-mcgrath'
    }),
    TimelineModule,
    DomServicesModule,
    NavigationModule
  ],
  declarations: [
    AppComponent,
    ExperienceComponent,
    SkillsComponent,
    ProgressBarComponent
  ],
})
export class AppModule { }
