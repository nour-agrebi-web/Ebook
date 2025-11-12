import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EbookService } from '../ebook-service';
import { Ebook } from '../ebook';

@Component({
  selector: 'app-ebooks-edit',
  standalone : false,
  templateUrl: './ebooks-edit.html',
  styleUrl: './ebooks-edit.css'
})
export class EbooksEdit implements OnInit {
  ebook: Ebook ={
    id : 0,
    title :"",
    author:"",
    price : 0

  }
  ebookToEdit: Ebook | undefined;
  constructor(private activatedRoute :ActivatedRoute, 
    private service : EbookService,
  private router : Router){}
  editEbook(){
    this.service.editEbook(this.ebook);
    this.router.navigate(['/ebooks'])
  }
   ngOnInit(): void {
       const id = this.activatedRoute.snapshot.paramMap.get('id');
       //console.log(id);
       const ebookToEdit  =this.service.getEbookById(+id!);
       if(ebookToEdit != undefined){
        this.ebook=ebookToEdit;
       }
       
   }
}
