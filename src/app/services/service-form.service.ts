import { Injectable,ViewChild, ElementRef } from '@angular/core';

type Album =  {
  id: number;
  title: string ;
  duration: number ;
  years: number
}

@Injectable({
  providedIn: 'root'
})
export class ServiceFormService {

  constructor() { }

  @ViewChild('title')
  titleAlbum!: ElementRef<HTMLInputElement>;
  @ViewChild('duration')
  durationAlbum!: ElementRef<HTMLInputElement>;
  @ViewChild('years')
  yearsAlbum!: ElementRef<HTMLInputElement>;

  albums: Album[] = []

  modalVisibility = ""

  count = 0

  changeModalVisilibty(value: string) {
    this.modalVisibility = value
  }

  album: Album = {
    id: 1,
    title: "",
    duration: 0,
    years: 0
  }

  addAlbumHandler() {
    this.album  = {
      id: this.count++,
      title: this.titleAlbum.nativeElement.value,
      duration: Number(this.durationAlbum.nativeElement.value),
      years: Number(this.yearsAlbum.nativeElement.value)
    }

    // this.contacts.push(contact)
    this.albums = [...this.albums, this.album]
    console.log(this.albums)
  }

  deleteAlbumHandler(album: Album) {
    this.albums = [...this.albums.filter(a => a !== album)]
    console.log('ok')
  }
  idAlbum = 0
  editClickHandler(newAlbum: Album){
    this.modalVisibility = 'edit'
    this.idAlbum = newAlbum.id
  }

  editAlbumHandler(){
    this.modalVisibility = ''

    this.album  = {
      id: this.idAlbum,
      title: this.titleAlbum.nativeElement.value,
      duration: Number(this.durationAlbum.nativeElement.value),
      years: Number(this.yearsAlbum.nativeElement.value)
    }
    this.albums = [...this.albums.filter((album) => album.id != this.idAlbum), this.album ];
    console.log(this.albums)
  }
}
