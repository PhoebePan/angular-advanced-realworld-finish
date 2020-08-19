import { PostService } from './../../post.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  post = this.formBuilder.group({
    title: this.formBuilder.control('', Validators.required),
    description: this.formBuilder.control(''),
    body: this.formBuilder.control('', [Validators.required, Validators.minLength(10)]),
    tags: this.formBuilder.array([
      this.formBuilder.control('Angular'),
      this.formBuilder.control('HTML'),
      this.formBuilder.control('CSS'),
    ]),
  });

  get tags(): FormArray {
    return this.post.get('tags') as FormArray;
  }

  get title(): AbstractControl {
    return this.post.get('title');
  }

  get body(): AbstractControl {
    return this.post.get('body');
  }

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addTag(tag: string): void {
    this.tags.push(this.formBuilder.control(tag));
  }

  removeTag(index: number): void {
    this.tags.removeAt(index);
  }

  createPost(): void {
    this.postService.createArticle(this.post.value).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
