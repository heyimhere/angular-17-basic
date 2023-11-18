import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.bookForm = this.fb.group({
      title: '',
      author: '',
      publishedYear: null
    });
  };

  onSubmit() {
    this.apiService.addBook(this.bookForm.value).subscribe(() => {
      this.bookForm.reset();
    }, error => {
        console.error('error', error);
      });
  };

}
