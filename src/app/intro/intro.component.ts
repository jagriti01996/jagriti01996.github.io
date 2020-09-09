import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  personData=[
    { 
      personImage: 'assets/ushashrikant.png',
      personName: 'Usha Srikanth',
      designation: 'Senior Partner - Client Service Leader,',
      ibmLink:'usha.srikanth@in.ibm.com'
    },
    {
      personImage: 'assets/anujmalhotra.png',
      personName: 'Anuj Malhotra',
      designation: 'Senior Partner - Service Line Leader,',
      ibmLink:'anujmalh@in.ibm.com'
    },
    {
      personImage: 'assets/thirunagarajan.png',
      personName: 'Thiru Nagarajan',
      designation: 'HR Director,',
      ibmLink:'thnagara@in.ibm.com'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
