import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() roleName: string;
@Input() subRoleNames: {
  roleId: string;
  category: string
};
@Input() roleImage:string;
@Output() roleid: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(subrole){
    this.roleid.emit(subrole);
  }

}
