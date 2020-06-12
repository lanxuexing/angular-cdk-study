import { Component, ElementRef, OnInit, ViewChild, Renderer2, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


export class RateProps {
  @Input() set disabled(val: boolean) {
    console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.');
  }
  @Input() elDisabled = false;
  @Input() max = 5;
  @Input() colors: string[] = ['#F7BA2A', '#F7BA2A', '#F7BA2A'];
  @Input() voidColor = '#C6D1DE';
  @Input() iconClasses: string[] = ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on'];
  @Input() voidIconClass = 'el-icon-star-off';
  @Input() disabledVoidColor = '#EFF2F7';
  @Input() disabledVoidIconClass = 'el-icon-star-on';
  @Input() lowThreshold = 2;
  @Input() highThreshold = 4;
  @Input() showText = false;
  @Input() textColor = '#1F2D3D';
  @Input() texts: string[] = ['极差', '失望', '一般', '满意', '惊喜'];
  @Input() model = 0;
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();
}


export type RateMapItem = {
  color: string,
  class: string
};


export type RateMap = {
  low: RateMapItem,
  high: RateMapItem,
  medium: RateMapItem,
  void: RateMapItem,
  elDisabled: RateMapItem,
};


@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RateComponent),
    multi: true
  }],
})
export class RateComponent extends RateProps implements OnInit, ControlValueAccessor {
  @ViewChild('rateIcon') rateIcon: ElementRef;
  scores: boolean[] = [];
  rateMap: RateMap;
  backupModel: number;

  constructor(
    private sanitizer: DomSanitizer,
    private renderer: Renderer2
  ) {
    super();
  }

  // hover todo
  hoverToggle({ srcElement }: Event, index?: number, reset: boolean = false): void {
    if (this.elDisabled) {
      return;
    }
    const iconElement: Element = (srcElement as any).tagName === 'I' ? srcElement : (srcElement as any).children[0];
    if (reset) {
      this.model = this.backupModel;
      this.renderer.removeClass(iconElement, 'hover');
    } else {
      this.model = index;
      this.renderer.addClass(iconElement, 'hover');
    }
  }

  selectValue(index: number): void {
    if (this.elDisabled) {
      return;
    }
    this.model = this.backupModel = index;
    this.modelChange.emit(index);
    // tslint:disable-next-line:no-unused-expression
    this.controlChange;
  }

  makeIconClasses(index: number): string {
    const voidClass = this.elDisabled ? this.rateMap.elDisabled.class : this.rateMap.void.class;
    const activeItem = this.findCurrentType(this.model, this.rateMap);
    const classes = index <= this.model ? activeItem.class : voidClass;
    return 'el-rate__icon ' + classes;
  }

  makeIconStyles(index: number): SafeStyle {
    const voidColor = this.elDisabled ? this.rateMap.elDisabled.color : this.rateMap.void.color;
    const activeItem = this.findCurrentType(this.model, this.rateMap);
    const styles = `color: ${index <= this.model ? activeItem.color : voidColor};`;
    return this.sanitizer.bypassSecurityTrustStyle(styles);
  }

  findCurrentType(index: number, rateMap: RateMap): RateMapItem {
    if (index <= this.lowThreshold) {
      return rateMap.low;
    }
    if (index >= this.highThreshold) {
      return rateMap.high;
    }
    return rateMap.medium;
  }

  ngOnInit(): void {
    this.scores = new Array(this.max).fill('');
    this.backupModel = this.model;

    this.rateMap = {
      low: { color: this.colors[0], class: this.iconClasses[0] },
      medium: { color: this.colors[1], class: this.iconClasses[1] },
      high: { color: this.colors[2], class: this.iconClasses[2] },
      void: { color: this.voidColor, class: this.voidIconClass },
      elDisabled: { color: this.disabledVoidColor, class: this.disabledVoidIconClass },
    };
  }

  writeValue(value: any): void {
    this.model = value;
  }

  registerOnChange(fn: any): void {
    this.controlChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.controlTouch = fn;
  }

  private controlChange = () => { };
  private controlTouch = () => { };

}
