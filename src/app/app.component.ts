import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recap-project-nebular';

  items: NbMenuItem[] = [
    {
      title: 'Anasayfa',
      icon: 'home',
    },
    {


      title: 'Markalar',
      expanded: true,
      icon:'award-outline',
      children: [

        {
          title: 'Marka Ekle',
          icon: 'plus-outline',
        },
        {
          title: 'Marka Listesi',
          link: 'brand-list',
          icon: 'file-text-outline'
        },

      ],
    },
    {
      title: 'Renkler',
      icon: 'color-palette-outline',
      children: [
        {
          title: 'Renk Ekle',
          icon: 'plus-outline',
        },
        {
          title: 'Renk Listesi',
          icon: 'file-text-outline',
          link: 'color-list'
        },

      ],
    },


    {
      title: 'Müşteriler',
      icon: 'person',
      children: [

        {
          title: 'Müşteri Listesi',
          icon: 'file-text-outline',
          link: 'customer-list'
        },

      ],
    },

    {
      title: 'Arabalar',
      icon: 'car-outline',
      children: [

        {
          title: 'Araba Listesi',
          icon: 'file-text-outline',
          link: 'car-list'
        },

      ],
    },

    {
      title: 'Kira',
      icon: 'checkmark-circle-2-outline',
      children: [

        {
          title: 'Kira Listesi',
          icon: 'file-text-outline',
          link: 'rental-list'
        },

      ],
    },


  ];
}


