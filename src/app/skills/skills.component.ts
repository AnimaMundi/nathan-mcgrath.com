import { Component, ChangeDetectionStrategy } from '@angular/core';

interface ISkill {
  title: string;
  time: string;
  value: number;
}

@Component({
  selector: 'nmg-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  public skills: Array<ISkill> = [
    {
      title: 'Angular',
      time: '2 Years',
      value: 50
    },
    {
      title: 'TypeScript',
      time: '2 Years',
      value: 90
    },
    {
      title: 'Flux/Ngrx',
      time: '18 Months',
      value: 50
    },
    {
      title: 'RxJS',
      time: '18 Months',
      value: 50
    },
    {
      title: 'SASS/LESS',
      time: '2.5 Years',
      value: 90
    },
    {
      title: 'GIT',
      time: '3 Years',
      value: 65
    },
    {
      title: 'JavaScript',
      time: '3 Years',
      value: 80
    },
    {
      title: 'AngularJS',
      time: '3 Years',
      value: 50
    },
    {
      title: 'NodeJS',
      time: '3 Years',
      value: 50
    },
    {
      title: 'MongoDB',
      time: '3 Years',
      value: 50
    },
    {
      title: 'CSS',
      time: '4 Years',
      value: 70
    },
    {
      title: 'HTML',
      time: '4 Years',
      value: 90
    },
  ];

  public otherSkills: Array<ISkill> = [
    {
      title: 'C/C++',
      time: '7 Years',
      value: 60
    },
    {
      title: 'Java',
      time: '6 Years',
      value: 75
    },
    {
      title: 'JavaFX',
      time: '2 Years',
      value: 80
    },
    {
      title: 'PHP',
      time: '1 Year',
      value: 40
    },
    {
      title: 'CakePHP',
      time: '1 Year',
      value: 50
    },
    {
      title: '.NET',
      time: '1 Year',
      value: 25
    },
    {
      title: 'MySQL',
      time: '2 Years',
      value: 35
    },
  ];
}
