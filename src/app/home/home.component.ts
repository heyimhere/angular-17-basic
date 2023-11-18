import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from '../book-list/book-list.component';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BookListComponent, BookFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
