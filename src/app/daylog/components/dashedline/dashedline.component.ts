import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashedline',
  templateUrl: './dashedline.component.html',
  styleUrls: ['./dashedline.component.scss']
})
export class DashedlineComponent implements OnInit {
@Input() time:Array<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
