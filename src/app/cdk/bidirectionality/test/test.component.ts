import { Component, OnInit } from '@angular/core';
import { Directionality, Direction } from '@angular/cdk/bidi';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    private dir: Directionality
  ) { }

  /**
   * Directionality是Bidi提供的一个service，可以用来检测dir的变化，当有变化的时候
   * 会回调change方法。
   *
   * 注意： 这个只能在包含有dir指令的子空间中启作用
   */
  ngOnInit(): void {
    this.dir.change.subscribe((ret: Direction) => console.log('Test检测Dir: ', ret));
  }

}
