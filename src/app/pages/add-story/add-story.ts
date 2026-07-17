import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;

constructor(
  private fb: FormBuilder,
  private http: HttpClient,
) {
  this.addForm = this.fb.group({
    title: [''],
    content: [''],
    author: [''],
    views: [0],
  });
}

  submitForm(){
    console.log(this.addForm.value);
    this.http
       .post('http://localhost:3000/stories',this.addForm.value)
       .subscribe({
        next: () => {},
        error: () => {}
       });
  }
}

