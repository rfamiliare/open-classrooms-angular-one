import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostListComponent} from './post-list-component/post-list.component';
import {PostListItemComponent} from './post-list-item-component/post-list-item.component';
import {PostsService} from './services/posts.service';
import {RouterModule, Routes} from '@angular/router';
import {NewPostComponent} from './new-post/new-post.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'new', component: NewPostComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
