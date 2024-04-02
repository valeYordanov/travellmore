import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from 'src/app/user/user-type/authUser';
import { map } from 'rxjs';
import { CommentInterface } from 'src/app/pages/blog-comments/comments-type/comment';
import { ProfileService } from './profile.service';

@Injectable({ providedIn: 'root' })
export class CommentService {
  

  data$$=new BehaviorSubject<CommentInterface[]>([])
  data$ = this.data$$.asObservable()

  constructor(private http: HttpClient, private auth: AngularFireAuth,private profileService:ProfileService) {
    this.getComments().subscribe(res => {
        this.data$$.next(res)
    })
  }
  storeComments(
   msg:string,
   username:string | undefined,
   journeyId:string |undefined
   
  ) {
    
    const commentsData: CommentInterface = {
      msg:msg,
      username:username,
      journeyId:journeyId
      
    };
    

    return this.http.post<CommentInterface>(
      `https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/comments.json`,
      commentsData
      
    )
    
  }

  getComments() {
    return this.http.get<CommentInterface[]>(
      'https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/comments.json'
    ).pipe(map(res => {
        const commentsArray : CommentInterface[] = []
        for(let key in res){
            commentsArray.push({...res[key] ,id:key})
        }
        
        
        return commentsArray
    }))

    
    
  }
  getCommentsByDetailsPageId(journeyId: string | undefined) : Observable<CommentInterface[]> {
    return this.http.get<CommentInterface[]>(`https://travellmore-91a7f-default-rtdb.europe-west1.firebasedatabase.app/comments.json?orderBy="journeyId"&equalTo="${journeyId}"`).pipe(map(res => {
        const commentsArray : CommentInterface[] = []
        for(let comment in res){
          commentsArray.push({...res[comment]})
        }
        return commentsArray
    }));
  }
}
