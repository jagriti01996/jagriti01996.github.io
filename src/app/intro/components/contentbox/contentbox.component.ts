import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contentbox',
  templateUrl: './contentbox.component.html',
  styleUrls: ['./contentbox.component.scss']
})
export class ContentboxComponent implements OnInit {
@Input() personName:string;
@Input() designation:string;
@Input() ibmLink:string;
@Input() personImage:string;

  constructor() { }

  ngOnInit(): void {
  }

}
