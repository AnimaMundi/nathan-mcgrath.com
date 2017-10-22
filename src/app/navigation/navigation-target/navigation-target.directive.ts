import { Directive, Input, ElementRef } from '@angular/core';

import { NavigationService } from '../navigation.service';

@Directive({
  selector: '[nmgNavigationTarget]'
})
export class NavigationTargetDirective {
  @Input()
  public set id(id: string) {
    this._navigationService.deregisterTarget(this._id);
    this._navigationService.registerTarget(id, this._elementRef);

    this._id = id;
  }

  public get id(): string {
    return this._id;
  }

  private _id: string;

  constructor(
    private _navigationService: NavigationService,
    private _elementRef: ElementRef
  ) { }
}
