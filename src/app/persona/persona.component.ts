import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
})
export class PersonaComponent implements OnInit {
  personaData = [
    {
      role: 'Team Member',
      left: '10',
      description: [
        'Individual members across bands',
        'Responsible for development, consulting, Testing, support and other deliverables',
        'Developed deeper knowledge on specific system / process / module of client system',
        'Key for completing deliverables on time and as planned or targeted',
      ],
      roleImage:'assets/Rashi (1).svg'
    },
    {
      role: 'Team Member',
      left: '90',
      description: [
        'Responsible for planning the deliverables and work allocation across team members',
        'Key of interaction with relevant stakeholders to align work plan and prioritization',
        'Track performance against targets and recommend remedial action for any delays or issues in quality',
        'First level of escalation',
      ],
      roleImage:'assets/teamlead.svg'
    },
    {
      role: 'Project Manager',
      left: '100%-10',
      description: [
        'Individual members across bands',
        'Responsible for development, consulting, Testing, support and other deliverables',
        'Developed deeper knowledge on specific system / process / module of client system',
        'Key for completing deliverables on time and as planned or targeted',
      ],
      roleImage:'assets/ProjectManager (1).svg'
    },
    {
      role: 'AE / SLDL',
      left: '90',
      description: [
        'Individual members across bands',
        'Responsible for development, consulting, Testing, support and other deliverables',
        'Developed deeper knowledge on specific system / process / module of client system',
        'Key for completing deliverables on time and as planned or targeted',
      ],
      roleImage:'assets/AE.svg'
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
