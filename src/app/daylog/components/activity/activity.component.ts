import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Inject,
  HostListener,
  Input,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit, AfterViewInit {
  @ViewChild('image') image: ElementRef;
  @ViewChild('details') details: ElementRef;
  @ViewChild('time') time: ElementRef;
  @ViewChild('linkBox',{static:false}) linkBox: ElementRef;
  @Input() activityData: {
    time: string;
    image: string;
    activityName: string;
    moreinfo: [];
    linkNames: [];
    links: [];
  };
  scrollValue: any;
  offset: any;
  constructor() {}

  ngAfterViewInit() {
    let imageEl = this.image.nativeElement;
    let detailsEl = this.details.nativeElement;
    let timeEl = this.time.nativeElement;
    if(this.linkBox) var linkBoxEl =  this.linkBox.nativeElement;
   
    let screenHeight = window.innerHeight;
    let scale = .5;
    imageEl.style.transition = "200ms"

    document.addEventListener('scroll', function (e) {
      var pageOffsetY = window.pageYOffset;
      // imageEl.style.left = pageOffsetY < (imageEl.offsetTop)? pageOffsetY - imageEl.offsetTop + "px" : 0;
      // linkBoxEl.style.right = pageOffsetY < (imageEl.offsetTop)? pageOffsetY - imageEl.offsetTop + "px" : 0;
      imageEl.style.transform =
        'translate(' + Math.min(-(imageEl.offsetTop - pageOffsetY - screenHeight / 2) * scale, 0) + 'px)';
      linkBoxEl.style.transform = 
        'translate(' + Math.max((imageEl.offsetTop - pageOffsetY - screenHeight / 2) * scale, 0) + 'px)';
        detailsEl.style.opacity = pageOffsetY > imageEl.offsetTop - screenHeight / 2? .5 * pageOffsetY + "%" : 0;
        timeEl.style.opacity = pageOffsetY > imageEl.offsetTop - screenHeight / 2? .5 * pageOffsetY + "%" : 0;
    });
  }

  ngOnInit(): void {}
}
