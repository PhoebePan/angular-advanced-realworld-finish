import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  post = this.formBuilder.group({
    title: this.formBuilder.control(''),
    description: this.formBuilder.control(''),
    body: this.formBuilder.control(''),
    tags: this.formBuilder.array([
      this.formBuilder.control('Angular'),
      this.formBuilder.control('HTML'),
      this.formBuilder.control('CSS'),
    ]),
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
