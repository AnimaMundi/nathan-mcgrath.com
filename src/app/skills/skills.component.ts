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
      title: 'Java',
      time: '6 Years',
      value: 60
    },
    {
      title: 'C/C++',
      time: '7 Years',
      value: 50
    },
    {
      title: 'TypeScript',
      time: '18 Months',
      value: 90
    },
    {
      title: 'JavaScript',
      time: '2.5 Years',
      value: 80
    },
    {
      title: 'PHP',
      time: '1 Year',
      value: 40
    },
    {
      title: 'SASS/LESS',
      time: '2.5 Years',
      value: 90
    },
    {
      title: 'CSS',
      time: '3.5 Years',
      value: 70
    },
    {
      title: 'HTML',
      time: '3 Years',
      value: 90
    },
    {
      title: 'NodeJS',
      time: '2.5 Years',
      value: 50
    },
    {
      title: 'GIT',
      time: '3 Years',
      value: 65
    },
    {
      title: 'AngularJS',
      time: '2 Years',
      value: 50
    },
    {
      title: 'Angular',
      time: '18 Months',
      value: 50
    },
    {
      title: 'CakePHP',
      time: '7 Years',
      value: 50
    },
    {
      title: 'ExpressJS',
      time: '7 Years',
      value: 50
    },
    {
      title: 'JavaFX',
      time: '7 Years',
      value: 50
    },
    {
      title: 'MongoDB',
      time: '7 Years',
      value: 50
    },
    {
      title: 'MySQL',
      time: '7 Years',
      value: 50
    },
    {
      title: 'MVC',
      time: '7 Years',
      value: 50
    },
    {
      title: 'Flux',
      time: '7 Years',
      value: 50
    },
    {
      title: 'RxJS',
      time: '7 Years',
      value: 50
    }
  ];
}
