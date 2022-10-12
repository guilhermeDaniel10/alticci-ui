import { Component, OnInit } from '@angular/core';
import { AlticciService } from 'src/app/service/alticci.service';

@Component({
  selector: 'app-alticci-card',
  templateUrl: './alticci-card.component.html',
  styleUrls: ['./alticci-card.component.css'],
})
export class AlticciCardComponent implements OnInit {
  constructor(private alticciService: AlticciService) {}

  ngOnInit(): void {
    this.alticciService.getIndexAlticciValue(10).subscribe((data) => {
      console.log(data);
    });
  }

  sendValue(){
    console.log("here");
  }
}
