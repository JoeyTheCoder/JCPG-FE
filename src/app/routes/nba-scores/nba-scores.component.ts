import { Component, OnInit } from '@angular/core';
import { NbaService } from 'src/app/services/nba.service';
import { links } from 'src/app/services/nba-links';

@Component({
  selector: 'app-nba-scores',
  templateUrl: './nba-scores.component.html',
  styleUrls: ['./nba-scores.component.css']
})
export class NbaScoresComponent implements OnInit {

  my_data1: any;
  constructor(public nbaService: NbaService) { }

  ngOnInit(): void {
  
  }

  showLinks() {
    this.nbaService.getLinks().subscribe((data: links[]) => this.my_data1 = data);
  }

}
