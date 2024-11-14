import { Injectable } from '@angular/core';
import { DxGanttComponent } from 'devextreme-angular';

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  private element: DxGanttComponent | null = null;

  constructor() {}

  initResizeService(element: DxGanttComponent): void {
    this.element = element;
    this.setHeight();
    window.addEventListener('resize', this.setHeight.bind(this));
  }

  private setHeight(): void {
    if (this.element) {
      this.element.height = window.innerHeight - 50;
    }
  }
}
