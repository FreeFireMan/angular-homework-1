import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../models/post';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class PostService{
  private url = 'https://jsonplaceholder.typicode.com/posts/?userId=';
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getUserPosts(id): Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.url + id);
  }
}
