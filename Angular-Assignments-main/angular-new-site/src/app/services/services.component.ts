import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  @Input() boxtitle:string="" ;
  @Input() Bcolor:string="" 
}
