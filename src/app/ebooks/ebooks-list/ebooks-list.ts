import { Component } from '@angular/core';
import { EbookService } from '../ebook-service';
import { Ebook } from '../ebook';

@Component({
  selector: 'app-ebooks-list',
  standalone : false,
  templateUrl: './ebooks-list.html',
  styleUrl: './ebooks-list.css'
})
export class EbooksList {
  //private ebookSrvc = inject(EbookService)
  ebooks : Ebook[] = [];
  constructor(private ebookSrvc : EbookService){
    
  }
  deleteEbook(id: number){

  }
  ngOnInit():void {
    this.ebooks = this.ebookSrvc.getEbooks();
    this.ebookSrvc.ebookUpdated.subscribe(
      (ebooks) =>this.ebooks= ebooks
    );
  }

}
