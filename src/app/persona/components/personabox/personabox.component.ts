import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personabox',
  templateUrl: './personabox.component.html',
  styleUrls: ['./personabox.component.scss']
})
export class PersonaboxComponent implements OnInit {
@Input() role:string;
@Input() description:Array<string>;
@Input() roleImage:string;
@Input() left:string;


  constructor() { }

  ngOnInit(): void {
  }

}
