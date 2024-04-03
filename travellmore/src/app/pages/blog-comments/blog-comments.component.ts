import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentService } from 'src/app/services/services/comments.service';
import { CommentInterface } from '../../types/comments-type/comment';
import { ProfileService } from 'src/app/services/services/profile.service';
import { Observable, Subscription, map } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { JourneyService } from 'src/app/services/services/journey.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/services/user.service';

@Component({
  selector: 'app-blog-comments',
  templateUrl: './blog-comments.component.html',
  styleUrls: ['./blog-comments.component.css'],
})
export class BlogCommentsComponent implements OnInit, OnDestroy {
  username?: string;
  comments: CommentInterface[] = [];
  currentUser?: string | null;
  journeyId?: string | undefined;

  subscription: Subscription[] = [];
  constructor(
    private commentsService: CommentService,
    private profileService: ProfileService,
    private auth: AngularFireAuth,
    private userService:UserService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.journeyId = this.route.snapshot.params['id'];
    this.subscription.push(
      this.commentsService
        .getCommentsByDetailsPageId(this.journeyId)
        .subscribe((res) => {
          this.comments = res;

          this.subscription.push(
            this.profileService.getUsers().subscribe((users) => {
              for (let item of users) {
                this.userService.getCurrentUserUid().subscribe((user) => {
                  this.currentUser = user;

                  if (item.userid === this.currentUser) {
                    this.username = item.username;
                  }
                });
              }
            })
          );
        })
    );
  }

  createComment(f: NgForm) {
    if (f.invalid) {
      return;
    }

    const { msg } = f.value;

    this.commentsService
      .storeComments(msg, this.username, this.journeyId)
      .subscribe(() => {
        this.commentsService
          .getCommentsByDetailsPageId(this.journeyId)
          .subscribe((res) => {
            this.comments = res;
          });
      });
    f.reset();
  }
  getCurrentUserUid(): Observable<string | null> {
    return this.auth.authState.pipe(map((user) => (user ? user.uid : null)));
  }
  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
