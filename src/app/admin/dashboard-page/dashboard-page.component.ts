import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from "../shared/post.service";
import {Post} from "../shared/model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  pSub: Subscription;
  dSub: Subscription;
  searchStr = '';

  constructor(private postServise: PostService) { }

  remove(id: string) {
    this.dSub = this.postServise.remove(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id);
    });
  }

  ngOnInit() {
    this.pSub = this.postServise.getAll().subscribe(posts => {
      this.posts = posts;
    })
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }

}
