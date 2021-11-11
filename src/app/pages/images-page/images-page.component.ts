import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-services-page',
  templateUrl: './images-page.component.html',
  styleUrls: ['./images-page.component.scss']
})

export class ImagesPageComponent implements OnInit {
  public images = [{imgUrl: 'assets/images/bensMassage.jpeg', title : 'Ben relaxing after a long day of Algomaning'},
    {imgUrl: 'assets/images/AlgoKef-team.jpeg', title : 'AlgoKef team'},
    {imgUrl: 'assets/images/band.jpeg', title : 'AlgoBand'},
    {imgUrl: 'assets/images/pancake.jpeg', title : 'Yammmyy!'},
    {imgUrl: 'assets/images/guyBagi.jpeg', title : 'mr. World Wide'},
    {imgUrl: 'assets/images/daniel.jpeg', title : 'Poofing out...'},
    {imgUrl: 'assets/images/other-team.jpeg', title : 'Algomaning'},
    {imgUrl: 'assets/images/massage.jpeg', title: 'ooohh yeah'},
    {imgUrl: 'assets/images/show.jpeg', title: 'The improvising masters'},
    {imgUrl: 'assets/images/judges.jpeg', title: 'My the best team win'}
  ];


  selectedFile = null;
  constructor(private http: HttpClient) {

  }
  onFileSelected(event){
    this.selectedFile = event.target.files[0];
    console.log(event);
  }

  onUpload(){
    // get the file
    // save the file into assets/images
    // reload page so we can see the new image.
  }
  ngOnInit(): void {
  }

}
