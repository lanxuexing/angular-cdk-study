import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Directionality, Direction } from '@angular/cdk/bidi';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bidi',
  templateUrl: './bidi.component.html',
  styleUrls: ['./bidi.component.scss']
})
export class BidiComponent implements OnInit {
  public isRtl: boolean;

  constructor(
    public dir: Directionality
  ) { }

  ngOnInit(): void {
    this.isRtl = this.dir.value === 'rtl';
  }

  changeDir(): void {
    this.isRtl = !this.isRtl;
  }

  change(event: Direction): void {
    console.log('Dir变化: ', event);
  }

}
