import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  items= [
    {"id": 0,
    "title": "My dog image",
    "thumbnail": "https://loremflickr.com/150/150/dog",
    "src": "https://loremflickr.com/1680/1050/dog"
    },
    {"id": 1,
      "title": "My cat image",
      "thumbnail": "https://loremflickr.com/150/150/cat",
      "src": "https://loremflickr.com/1680/1050/cat"
    },
    {"id": 2,
      "title": "My parrot image",
      "thumbnail": "https://loremflickr.com/150/150/parrot",
      "src": "https://loremflickr.com/1680/1050/parrot"
    }
  ]

  onClickNext(event:Event){
    event.preventDefault();
    console.log(this.currentPage, this.items.length)

    this.currentPage = this.currentPage + 1;




  }

  onClickPrev(event:Event){
    event.preventDefault();
    this.currentPage = this.currentPage - 1;
    console.log(this.currentPage)
  }
}
