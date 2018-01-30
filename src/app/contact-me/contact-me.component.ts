import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient,  } from '@angular/common/http';

declare var grecaptcha: any;

@Component({
  selector: 'nmg-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
