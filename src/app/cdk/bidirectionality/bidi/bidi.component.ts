import { Component, OnInit, OnDestroy } from '@angular/core';
import { Directionality, Direction } from '@angular/cdk/bidi';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bidi',
  templateUrl: './bidi.component.html',
  styleUrls: ['./bidi.component.scss']
})
export class BidiComponent implements OnInit, OnDestroy {
  public isRtl: boolean;
  private dirChangeSubscription = Subscription.EMPTY;

  constructor(
    public dir: Directionality
  ) { }

  ngOnInit(): void {
    this.isRtl = this.dir.value === 'rtl';
    this.dirChangeSubscription = this.dir.change.subscribe((ret: Direction) => console.log('Dir变化了: ', ret));
  }

  changeDir(): void {
    this.isRtl = !this.isRtl;
  }

  ngOnDestroy(): void {
    this.dirChangeSubscription.unsubscribe();
  }

}
