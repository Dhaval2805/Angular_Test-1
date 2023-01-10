import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  countincrese:number=0;
  // countdecrese:number = 1;
  constructor(private serviceService:ServiceService) { }

  ngOnInit(): void {
    this.serviceService.countbtn.subscribe(res=>{
      this.countincrese = res;
      console.log("in",this.countincrese);
    })

    this.serviceService.decresebtn.subscribe(res =>{

      this.countincrese = res-1;
      console.log("de",this.countincrese)
    })
   }

}
