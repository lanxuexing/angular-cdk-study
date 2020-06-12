import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MODAL_CONTAINER_DATA } from './modal.conf';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Output() dissmiss = new EventEmitter<void>();

  constructor(
    @Inject(MODAL_CONTAINER_DATA) public data: any
  ) {
    console.log('传过来的数据: ', this.data);
  }

  handleDismiss(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.dissmiss.emit();
  }

}
