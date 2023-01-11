import { Component, OnInit } from '@angular/core';

import { MenuItem } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuList: Array<MenuItem> = [
    {
      organization: 'Microsoft',
      name: 'terminal',
      id: 0,
      stars: 12
    },
    {
      organization: 'Facebook',
      name: 'terminal',
      id: 1,
      stars: 323
    },
    {
      organization: 'Amazon',
      name: 'terminal',
      id: 2,
      stars: 523
    },
    {
      organization: 'Apple',
      name: 'terminal',
      id: 3,
      stars: 23
    }
  ];

  ngOnInit(): void {
    this.menuList = this.sortMenuByStars(this.menuList);
  }

  private sortMenuByStars(menuList: Array<MenuItem>): Array<MenuItem> {
    return menuList.sort((menuItemA: MenuItem, menuItemB: MenuItem) => menuItemA.stars - menuItemB.stars)
  }
}
