import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faMobileAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  faGithub = faGithub
  faLinkedin = faLinkedin
  faMobileAlt = faMobileAlt
  faEnvelope = faEnvelope

  socialMedia = [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/estebangiraldo11/",
      icon: faLinkedin
    },
    {
      label: "GitHub",
      url: "https://github.com/Nekenhei",
      icon: faGithub
    }
  ]

  contactos = [
    {
      value: "Bryan.9511@hotmail.com",
      icon: faEnvelope
    },
    {
      value: "(+57) 3123574816",
      icon: faMobileAlt
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
