import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DestinationCardDto} from './utils/destinationCardDto';
import {DestinationCardComponent} from './components/destination-card/destination-card.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-landing',
  imports: [
    DestinationCardComponent,
    CarouselModule,
  ],
  animations:[
    trigger('autoHeight', [
      state('void', style({ height: '0px', opacity: 0 })),
      state('*', style({ height: '*', opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in-out'))
    ])  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements AfterViewInit {

  public destinations: DestinationCardDto[] = [
    {
      name: 'Sherman',
      country: 'Estados Unidos',
      imageUrl: 'https://businessintexas.com/wp-content/uploads/2020/06/ranking-sherman-1-1-best-place-to-live-in-grayson-county-tx.jpg',
      description: '',
      id: 1
    },
    {
      id: 2,
      name: 'Chihuahua',
      description: '',
      imageUrl: 'https://noro.mx/wp-content/uploads/2024/07/chihuahua-3.jpg',
      country: 'México',
    },
    {
      id: 3,
      name: 'Delicias',
      country: 'México',
      imageUrl: 'https://oem.com.mx/elheraldodechihuahua/img/14807779/1680323474/BASE_LANDSCAPE/480/WhatsApp%20Image%202023-04-01%20at%209.18.07%20AM%20(1).webp',
      description: ''
    },
    {
      id: 4,
      name: 'Cuahtémoc',
      description: '',
      imageUrl: '/assets/img/imagen_cuauhtemoc.jpg',
      country: 'México'
    }
  ]

  public testimonials = [
    {
      description: '¡Un excelente servicio!',
      author: 'Brenda Rodriguez'
    },
    {
      description: 'Un buen servicio, recomendable, se viaja muy agusto',
      author: 'Socorro Adame',
    },
    {
      description: 'Muy buen servicio, viajé a Dallas',
      author: 'Jacinta Nuñez'
    },
    {
      description: 'Excelente transporte y servicio, comodidad recomendado al 100%',
      author: 'Susana Gonzalez'
    },
    {
      description: '💯 lo recomiendo, es lo mejor para viajar, muy cómodos, amplios y seguros. Sus choferes muy respetuosos y amables con sus pasajeros',
      author: 'Dora González'
    },
    {
      description: 'Excelente servicio, comodidad, limpios y amables, RECOMENDADOS!',
      author: 'Paty Fernandez'
    }
  ]

  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  ngAfterViewInit(): void {

  }

  scrollToElement($element: any, block?: ScrollLogicalPosition) {
    $element.scrollIntoView({behavior: "smooth", block: block ?? "start", inline: "nearest"});
  }
}
