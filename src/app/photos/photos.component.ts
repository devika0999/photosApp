import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(private myapi:ApiService) {

    this.fetchData()

   }

   fetchData=()=>{
    this.myapi.viewPhotos().subscribe(
      (data)=>{
        this.photos=data
      }
    )
   }

  photos:any=[]

  ngOnInit(): void {
  }

}
