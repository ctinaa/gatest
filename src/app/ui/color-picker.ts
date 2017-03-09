import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'color-picker',
  styles: [`
    .color-selector {
      position: relative;
    }

    .selector {
    min-width: 120px;
    padding: 10px;
    position: absolute;
    top: 74px;
    display: -webkit-box;
    }

    .color {
      height: 50px;
      width: 50px;
      border-radius: 100%;
      cursor: pointer;
      margin-right: 10px;
      margin-bottom: 10px;
    }
    .color:hover {
      border: 2px solid darkgrey;
    }
    .icon {
      font-size: 40px;
      color: white;
      cursor: pointer;
      float:right;
      text-shadow: 2px 2px #b9b3b3;

    }

    #wrapper .text {
      position:relative;
      bottom:30px;
      left:0px;
      visibility:hidden;
    }

    #wrapper:hover .text {
      visibility:visible;
    }

  `],
  template: `

    <div class="color-selector">
      <i (click)="showSelector(true)" ></i>
      <div class="selector row center-xs" *ngIf="isSelectorVisible">
        <div
          class="color"
          *ngFor="let color of colors"
          [ngStyle]="{'background-color': color}"
          (click)="selectColor(color)"
        >
        </div>
      </div>
    </div>
  `
})
export class ColorPicker {
  @Input() colors: Array<string> = [];
  @Output() selected = new EventEmitter<string>();
  isSelectorVisible: boolean = true;


  showSelector(value: boolean) {
    this.isSelectorVisible = value;
  }

  selectColor(color: string) {
    this.showSelector(false);
    this.selected.next(color);
  }

}
