import { Component } from '@angular/core';
import { faFilm, faBiking, faBook, faVolleyball } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_cv';
  filmIcon = faFilm;
  bikingIcon = faBiking
  readingIcon = faBook
  faVolleyballIcon = faVolleyball

}
