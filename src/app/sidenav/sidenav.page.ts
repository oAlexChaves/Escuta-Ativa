import { Component, OnInit } from '@angular/core';

import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.page.html',
  styleUrls: ['./sidenav.page.scss'],
})

export class SidenavPage implements OnInit {

  active = '';

  NAV = [
    {
      name: 'consultorios proximos',
      link: '/agenda-de-consultas',
      icon: 'location'
    },
    {
      name: 'procurar consultas',
      link: '/nav/blog',
      icon: 'search'
    },
    {
      name: 'agenda de consultas',
      link: '/nav/contact',
      icon: 'journal'
    },
    {
      name: 'ficha financeira',
      link: '/nav/contact',
      icon: 'reader'
    },
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url
    })
  }

  ngOnInit() { }

}