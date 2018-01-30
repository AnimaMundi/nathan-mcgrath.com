import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { trigger, style, animate, transition } from '@angular/animations';

declare var grecaptcha: any;

@Component({
  selector: 'nmg-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('inputMessageState', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100%)' }),
        animate(
          '192ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate(
          '192ms ease-out',
          style({ opacity: 0, transform: 'translateY(100%)' })
        )
      ]),
    ])
  ]
})
export class ContactMeComponent {
  public contactFormResponse: {
    name?: string;
    email?: string;
    message?: string;
  } = {};

  constructor(
    private _httpClient: HttpClient,
  ) { }

  public postContactForm(contactForm: NgForm): void {
    if (contactForm.invalid) { return; }

    const recaptchaResponse: string = grecaptcha.getResponse();

    if (!recaptchaResponse) { return; }

    this._httpClient.post('/api/contact', {
      ...this.contactFormResponse,
      recaptcha: recaptchaResponse,
    }).subscribe((res: any) => {
      console.log('Api response');
    });
  }
}
