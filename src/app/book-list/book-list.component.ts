import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  books: any = [];

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getBooks().subscribe((books: any) => {
      this.books = books;
    }, (error: any) => {
        console.error('error', error);
    });
  }
}
