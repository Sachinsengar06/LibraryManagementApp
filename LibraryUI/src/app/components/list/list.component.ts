import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/Book/books.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() item = '';     //decorate the property with @Input

  @Input() searchTerm: string = ''

  //decorate for searching
  @Output() filteredData = new EventEmitter<any[]>();   //To emit the results back to the homepage

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm']) {
      console.log(this.searchTerm)
      this.filteredData.emit(this.filterData(this.searchTerm));
    }
  }


  constructor(private bookService: BooksService) { }
  books: any
  searchArray: any;
  ngOnInit(): void {
    this.getBooksFromDb()
  }



  getBooksFromDb() {
    this.bookService.getAllBooks().subscribe({
      next: (res) => {
        this.searchArray = res;
        this.books = res.filter(obj => obj.genre === this.item);
      }
    })
  }

  filterData(searchTerm: string): any[] {
    // Implement your filtering logic here
    this.bookService.getAllBooks().subscribe({ next: (res) => this.searchArray = res })
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    this.books=( this.searchArray.filter((item: { title: string; author: string; genre: string; }) => {
      console.log(item.title,item.author,item.genre)
      // Check if search term exists in any of the specified fields
      return (
        item.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.author.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.genre.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }));
    // return this.searchArray.filter((obj: { name: string | string[]; }) => obj.name.includes(this.searchTerm));
    

    // Filter data based on search term
    return this.searchArray.filter((item: { name: string; author: string; genre: string; }) => {
      // Check if search term exists in any of the specified fields
      return (
        item.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.author.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.genre.toLowerCase().includes(lowerCaseSearchTerm)
      );
    });
  }


  getColorStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
  getStarArray(rating:number):number[]{
    return Array(5-rating).fill(0);
  }

}
