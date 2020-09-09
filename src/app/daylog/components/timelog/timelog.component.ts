import { Component, OnInit, Input, Output, ElementRef, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { JourneyService } from 'src/app/journey.service';

@Component({
  selector: 'app-timelog',
  templateUrl: './timelog.component.html',
  styleUrls: ['./timelog.component.scss']
})
export class TimelogComponent implements OnInit {
  @ViewChild('timelog') timeLog: ElementRef;
  @ViewChild('time') time: ElementRef;
@Input() schedules:{
  time:string,
  activity:string
}

timeOfActivity = [];
@Output() scrollTo: EventEmitter<any> = new EventEmitter<any>();
  constructor(private journeyData: JourneyService) { }

  ngOnInit(): void {
    this.journeyData.getJSON().subscribe(data => {
      this.timeOfActivity = data.data.time;
      console.log(this.timeOfActivity);
  });
  }
onClick(e){
  this.scrollTo.emit(e);
  console.log(e);
}

ngAfterViewInit() {
  let timeLog = document.getElementById('timeLog');
  let timeEl = document.getElementById('time');
  let activities = document.getElementById('activities');
  setTimeout(() => {
    let a = timeLog.offsetHeight;
    let b = activities.offsetHeight;
    const d = 300 //space from bottom
    const timelogOffsetY = timeLog.offsetTop + 0;
    let c = 1 - (a + d - window.innerHeight)/(b + d - window.innerHeight);
    console.log(a,b,c)
    timeLog.style.transition = "200ms"

    document.addEventListener('scroll', function (e) {
      // console.log((window.pageYOffset - timeEl.offsetTop) * c,timeEl.offsetTop,b-a)
      // timeEl.className = window.pageYOffset > timeEl.offsetTop && window.pageYOffset < timeEl.offsetTop + 500 ? 'active' : 'time';
      // timeEl.forEach(function(index){timeEl.className = window.pageYOffset > timeEl.offsetTop && window.pageYOffset < timeEl.offsetTop + 400 ? 'active' : 'time';})
      if (window.pageYOffset > timelogOffsetY)
        timeLog.style.top = Math.min((window.pageYOffset - timelogOffsetY) * c,b-a) + 'px';
      else timeLog.style.top = 0 + 'px';
    });
  }, 100);
}
}
