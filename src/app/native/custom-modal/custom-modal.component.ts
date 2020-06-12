import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { BackComponent } from '../../core/back/back.component';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {
  @ViewChild('tpl') tpl: TemplateRef<any>;

  constructor(
    private modalService: ModalService
  ) { }

  // 打开字符串类型的Modal
  openStringModal() {
    this.modalService.open('哈哈哈');
  }

  // 打开组件类型的Modal
  openComponentModal() {
    this.modalService.open(BackComponent);
  }

  // 打开模版类型的Modal
  openTemplateModal() {
    this.modalService.open(this.tpl, '哈哈哈');
  }

  // 模版上的事件
  click() {
    console.log('模版点击...');
  }

}
