import { Injectable, ElementRef } from '@angular/core';

@Injectable()
export class NavigationService {
  private targets: Map<string, ElementRef>;

  constructor() {
    this.targets = new Map();
  }

  public registerTarget(id: string, element: ElementRef): void {
    this.targets.set(id, element);
  }

  public deregisterTarget(id: string): void {
    this.targets.delete(id);
  }

  public getTarget(id: string): ElementRef {
    if (!this.targets.has(id)) {
      throw new Error(`No target found with the provided ID: ${id}`);
    }

    return this.targets.get(id);
  }
}
