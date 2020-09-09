import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  
} from '@angular/core';
// import { filter } from 'rxjs/operator';
import { JourneyService } from '../journey.service';

@Component({
  selector: 'app-daylog',
  templateUrl: './daylog.component.html',
  styleUrls: ['./daylog.component.scss'],
})
export class DaylogComponent implements OnInit {
  @ViewChild('timelog') timeLog: ElementRef;
  @ViewChild('activities') activities: ElementRef;
  @ViewChild('time') time: ElementRef;
 

  showText:boolean = true;
  activePerson;

  roleData = [
    {
      roleName: 'Team Member',
      subRoleName: [
        {
          roleId: '01',
          category: 'Design & Build Project',
        },
        {
          roleId: '02',
          category: 'AMS Project',
        },
        {
          roleId: '03',
          category: 'Crit Sit / Major Incident Management',
        }
      ],
      roleImage: 'assets/team-member.svg',
    },
    {
      roleName: 'Team Lead',
      subRoleName: [
        {
          roleId: '11',
          category: 'Design & Build Project',
        },
        {
          roleId: '12',
          category: 'AMS Project',
        },
        {
          roleId: '13',
          category: 'Cut over / Golive',
        },
      ],
      roleImage: 'assets/team-lead.svg',
    },
    {
      roleName: 'Project Manager',
      subRoleName: [
        {
          roleId: '21',
          category: 'Design & Build Project',
        },
        {
          roleId: '22',
          category: 'AMS Project',
        }
      ],
      roleImage: 'assets/project-manager.svg',
    },
    {
      roleName: 'AE / SLDL',
      subRoleName: [
        {
          roleId: '31',
          category: 'Account Executive',
        },
        {
          roleId: '32',
          category: 'Service Line Delivery Manager',
        },
      ],
      roleImage: 'assets/ae-sldl.svg',
    },
  ];

  data = [];
  constructor(private journeyData: JourneyService) {}

  

  ngOnInit(): void {
    this.journeyData.getJSON().subscribe(data => {
      this.data = data.data;
      console.log(this.data);
  });
  }

 

 getRoleId(e) {  
   this.showText = false; 
  // this.intialTextEl.style.display = 'none';
  console.log(e);
  this.activePerson = this.data.filter((x) => x.id == e);
  // this.activePerson = this.data.reduce
  // console.log(this.activePerson);
}

  // ngAfterViewInit() {
  //   let timeEl = document.getElementById('time');
  //   let timeLog = document.getElementById('timeLog');
  //   let activities = document.getElementById('activities');
  //   setTimeout(() => {
  //     let a = timeLog.offsetHeight;
  //     let b = activities.offsetHeight;
  //     const d = 300 //space from bottom
  //     const timelogOffsetY = timeLog.offsetTop + 0;
  //     let c = 1 - (a + d - window.innerHeight)/(b + d - window.innerHeight);
  //     console.log(a,b,c)
  //     timeLog.style.transition = "200ms"

  //     document.addEventListener('scroll', function (e) {
  //       // console.log((window.pageYOffset - timelogOffsetY) * c,b-a)

  //       timeEl.className = window.pageYOffset > timeEl.offsetTop && window.pageYOffset < timeEl.offsetTop + 400 ? 'active' : 'time';
  //       if (window.pageYOffset > timelogOffsetY)
  //         timeLog.style.top = Math.min((window.pageYOffset - timelogOffsetY) * c,b-a) + 'px';
  //       else timeLog.style.top = 0 + 'px';
  //     });
  //   }, 100);
  // }
}
