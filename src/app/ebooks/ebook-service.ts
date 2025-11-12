import { Injectable ,Component} from '@angular/core';
import { Ebook } from './ebook';
import { Subject } from 'rxjs';
/*@Component({
    selector: 'ebooks-add'  ,
    templateUrl: './ebooks-add/ebooks-add.html',
})*/
@Injectable({
  providedIn: 'root',
  
})
export class EbookService {
  private ebooks : Ebook[] = [
    {id : 1 , title : 'Ebook  ', author : 'author  ' , price: 22.2}
  ];
  ebookUpdated = new Subject<Ebook[]>()

  //getEbooks
  getEbooks(){
    return [...this.ebooks];
  }
  getEbookById(id : number):Ebook | undefined{
    return this.ebooks.find(ebook => ebook.id === id );
  }
  getLastId():number{
    return this.ebooks[this.ebooks.length - 1].id
  }
  addEbook(ebook : Ebook){
    this.ebooks = [...this.ebooks, ebook];
  }
   // this.ebookService.add(this.ebook).subscribe()
  editEbook(ebook : Ebook):void{
    this.ebooks = this.ebooks.map(e => e.id === ebook.id?ebook:e);
  }
  deleteEbook(id:number){
    this.ebooks = this.ebooks.filter(ebook => ebook.id != id);
    console.log(this.ebooks);
    this.ebookUpdated.next([...this.ebooks]);
  }
   
}
