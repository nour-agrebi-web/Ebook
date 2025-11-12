import { Component } from '@angular/core';
import { EbooksRoutingModule } from "../ebooks/ebooks-routing-module";

@Component({
  selector: 'app-home',
  imports: [EbooksRoutingModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
