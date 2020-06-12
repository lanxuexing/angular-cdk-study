import { Component, Inject } from '@angular/core';
import { ModalService, MODAL_CONTAINER_DATA } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(
    private modalService: ModalService,
    @Inject(MODAL_CONTAINER_DATA) public data: any
  ) {
    console.log('传过来的数据: ', this.data);
  }

  dismiss(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.modalService.close();
  }

}
