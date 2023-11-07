import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

type Album =  {
  id: number;
  title: string ;
  duration: number;
  years: number
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  
  title = 'exoKAngular';

  @Output() close = new EventEmitter()

  onClose(event: Event | undefined = undefined) {
    if (event) {
      if (event.currentTarget === event.target) {
        this.close.emit()
      }
    } else this.close.emit()
  }
}
