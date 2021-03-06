import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PostService} from "../admin/shared/post.service";
import {Observable} from "rxjs";
import {Post} from "../admin/shared/model";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit {
  post$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) { }

  ngOnInit() {
    this.post$ =  this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postService.getById(params['id']);
    }));
  }

}
