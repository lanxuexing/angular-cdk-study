import { coerceBooleanProperty, coerceNumberProperty, coerceCssPixelValue, coerceArray } from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coerce',
  templateUrl: './coerce.component.html',
  styleUrls: ['./coerce.component.scss']
})
export class CoerceComponent { }



// 自定义子组件
@Component({
  selector: 'app-coerce-children',
  template: `
    <p>我是coerce的子组件</p>
    <p>Boolean: {{ message }}</p>
    <p>Number: {{ displayCount }}</p>
    <p>Pixel: {{ displayPixel }}</p>
    <p>Array: {{ displayArray }}</p>
    <button mat-stroked-button (click)="displayCoerce('boolean')">转换Boolean</button>
    <button mat-stroked-button (click)="displayCoerce('number')">转换Boolean</button>
    <button mat-stroked-button (click)="displayCoerce('pixel')">转换Pixel</button>
    <button mat-stroked-button (click)="displayCoerce('array')">转换Array</button>
  `,
  styles: [`
      button {
        margin: 0 10px 10px 0;
      }
  `]
})
export class CoerceChildrenComponent {
  public message = '';
  public displayCount: number;
  public displayPixel: string;
  public displayArray: any;
  private mCount: number;
  private mDisplay: boolean;

  @Input('display')
  set display(value: boolean) {
    this.mDisplay = coerceBooleanProperty(value);
  }

  get display(): boolean {
    return this.mDisplay;
  }

  @Input('count')
  set count(value: number) {
    this.mCount = coerceNumberProperty(value); // 第二个参数是可选，也就是说当转换失败的时候默认数值，如果不设置默认是0
  }

  displayCoerce(type: string): void {
    switch (type) {
      case 'boolean':
        if (this.mDisplay) {
          this.message = '🍺🍺🍺';
        }
        break;
      case 'number':
        this.mCount++;
        this.displayCount = this.mCount;
        break;
      case 'pixel':
        this.displayPixel = coerceCssPixelValue(this.mCount);
        break;
      case 'array':
        this.displayArray = JSON.stringify(coerceArray(this.mCount));
        break;
    }
  }

}

