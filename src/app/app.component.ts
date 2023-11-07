import { Component,ViewChild, ElementRef } from '@angular/core';
import { ServiceFormService } from './services/service-form.service';

type Album =  {
  id: number;
  title: string ;
  duration: number ;
  years: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private serviceForm: ServiceFormService
  ){
   
  }

 
  albums: Album[] = []

  modalVisibility = ""


  changeModalVisilibty = this.serviceForm.changeModalVisilibty
  addAlbumHandler = this.serviceForm.addAlbumHandler
  deleteAlbumHandler = this.serviceForm.deleteAlbumHandler
  editClickHandler = this.serviceForm.editClickHandler
  editAlbumHandler = this.serviceForm.editAlbumHandler

  
}
