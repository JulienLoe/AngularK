import { Component, Input, Output, EventEmitter } from '@angular/core';

type Album =  {
  id: number;
  title: string ;
  duration: number ;
  years: number
}

@Component({
  selector: 'app-album-display',
  templateUrl: './album-display.component.html',
  styleUrls: ['./album-display.component.css']
})
export class AlbumDisplayComponent {

  @Input({
    required: true
  })
  album!: Album

  @Output()
  deleteContact = new EventEmitter<Album>()

  @Output()
  editContact = new EventEmitter<Album>()

  onClickHandler() {
    this.deleteContact.emit(this.album)
  }

  onClickEditHandler() {
    this.editContact.emit(this.album)
  }

}
