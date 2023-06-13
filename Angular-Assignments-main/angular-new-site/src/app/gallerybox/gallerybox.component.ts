import { Component, Input } from '@angular/core';
import { ThemeProps } from '../Type';

@Component({
  selector: 'app-gallerybox',
  templateUrl: './gallerybox.component.html',
  styleUrls: ['./gallerybox.component.css']
})
export class GalleryboxComponent {

  @Input() boxtheme: ThemeProps = { color: "", backgroundColor: "" };

  getColor(l: string) {
    if (l == 'blue') {
      return "blue";
    } else if (l == 'green') {
      return "green";
    } else if (l == 'orange') {
      return "orange";
    } else if (l == 'red') {
      return "red";
    } else
      return "black"

  }

}
