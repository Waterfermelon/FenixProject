import {Component, OnInit} from '@angular/core';
import {KeyValuePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-faq',
  imports: [
    NgForOf,
    KeyValuePipe
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements OnInit{

public faqList = [
  {
    group: 'Equipaje de viaje',
    items: [
      {
        title: '¿Cuánto equipaje puedo llevar sin tener que pagar adicional?',
        description: 'Tu boleto tiene derecho exclusivamente a 2 maletas medianas de 35 libras cada una en la parte de cajuela, mientras que el equipaje permitido para niños o menores es 1 maleta mediana de 35 libras.'
      },
      {
        title: '¿Qué se considera como exceso de equipaje o equipaje sobredimensionado?',
        description: 'Se considera exceso de equipaje o equipaje sobredimensionado a todo tipo de equipaje que no sea una maleta estándar. Siempre y cuando tenga ruedas se permitirá llevar este tipo de equipaje, con un límite máximo de 2 unidades por persona. Los excesos de equipaje están sujetos a disponibilidad de espacio y su aceptación no es siempre garantizada. Ejemplos de equipaje sobredimensionado o exceso de equipaje: televisiones, cajas, hieleras, carriolas, botes de pintura, entre otros.'
      },
      {
        title: '¿Cuál es el peso máximo de mi equipaje de mano?',
        description: 'Tu boleto tiene derecho a un maletín, mochila o bolsa personal no mayor a 10 libras en el portabultos que pertenece a su asiento asignado.'
      },
      {
        title: '¿Puedo viajar con mi mascota?',
        description: 'No, la empresa por ahora no acepta el servicio de mascotas en los viajes y no está permitido.'
      },
      {
        title: '¿Cuáles son los artículos que no se permiten llevar?',
        description: 'No está permitido llevar los siguientes artículos en nuestras rutas de viaje: Armas de fuego y explosivos, Sustancias ilegales y narcóticos, Materiales o líquidos inflamables como gasolina, Objetos puntiagudos o cortantes que pueda representar un riesgo para la seguridad de los pasajeros, Productos químicos peligrosos o tóxicos, Sustancias prohibidas y ilegales o medicamentos sin receta.'
      }
    ]
  },
  {
    group: 'Tarifas y boletos de viaje',
    items: [
      {
        title: '¿Desde qué edad los niños pagan su pasaje?',
        description: 'Los niños hasta los 6 años tienen acceso a una tarifa reducida, la cual varía según la ruta. A partir de los 7 años, los niños deben pagar su boleto de adulto. Según las normas, no está permitido que los niños se sienten en las primeras 3 filas de los asientos del autobús.'
      },
      {
        title: '¿Cuentan con una tarifa especial para adultos Senior?',
        description: 'No contamos con una tarifa especial, pero ofrecemos un descuento de $5 dólares al valor de su boleto completo a los pasajeros mayores de 60 años, presentando un documento de identificación como INAPAM, INSEN o IFE al momento de comprar su boleto.'
      },
      {
        title: 'En caso no pueda viajar ¿puedo reprogramar mi viaje o acceder a un reembolso?',
        description: 'Sí, siempre y cuando se realice hasta 3 horas antes del viaje programado por un costo de $25.00 dólares por boleto. En caso de que el boleto no se utilice en la fecha establecida, el boleto quedará anulado y sin validez. En el caso de boletos comprados de viaje redondo con fecha abierta, son válidos por 30 días a partir del día que viaja.'
      },
      {
        title: '¿El boleto es transferible?¿Tiene algún costo adicional?',
        description: 'Sí, siempre y cuando se realice hasta 3 horas antes del viaje programado por un costo de $25.00 dólares por boleto. En caso de que el boleto no se utilice en la fecha establecida, el boleto quedará anulado y sin validez. En el caso de boletos comprados de viaje redondo con fecha abierta, son válidos por 30 días a partir del día que viaja.'
      },
      {
        title: '¿Si pierdo mi boleto?',
        description: 'Si el pasajero pierde el boleto se le cobrará 10 dólares por reimprimir nuevamente el boleto.'
      },
      {
        title: '¿Qué documentos debo presentar cuando compré mi boleto por teléfono?',
        description: 'Al realizar la compra de su boleto por teléfono es indispensable que se presente de manera presencial la tarjeta y el titular con su documento de identificación. En caso contrario, no se le podrá entregar el boleto y se anulará con una penalidad de $10.00, perdiendo el derecho de reprogramación.'
      }
    ]
  },
  {
    group: 'Recomendaciones para viajar',
    items: [
      {
        title: '¿A qué hora debo estar en el terminal?',
        description: 'Te recomendamos estar presente en la terminal al menos una hora antes del horario de salida indicado en tu boleto para realizar el check-in de tus maletas. Durante el embarque, asegúrate de tener a mano tanto tu boleto de viaje como tu documento de identidad. En el caso de que hayas realizado una reserva o compra del boleto por teléfono, deberás acercarte al counter para entregarte tu boleto impreso.'
      },
      {
        title: '¿Debo imprimir mi pasaje de bus antes de abordar?',
        description: 'Puedes recoger tu boleto de viaje en nuestras oficinas cuando la compra fue realizada por teléfono. Si compraste a través de la página web, podrás acercarte al counter de nuestros puntos de embarque para solicitar la impresión de tus boletos. Recuerda traer tu comprobante de pago.'
      },
      {
        title: '¿Cuáles son los horarios de atención en las oficinas?',
        description: 'Lunes a Domingo 8:00am- 5:00pm'
      }
    ]
  }
];


  ngOnInit() {
  }

}
