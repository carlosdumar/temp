(function() {
  angular.module('home.controller', [])
    .controller('homeController', function ($scope) {

      $scope.listProduct = [
        {
          id: '1',
          Name: 'COMBO LUZ TRAS-DEL NEGRO HIGHLITE II LED',
          Img: [
            { id: '1', src: './img/HighLite-Combo-II.jpg' },
            { id: '2', src: './img/whitelite-ii.jpg'},
            { id: '3', src: './img/cmb.JPG' }
          ],
          Description: [
            { id: 1, description: '100 h', title: 'Autonomía máxima' },
            { id: 2, description: 'Negro', title: 'Color' },
            { id: 3, description: 'Pilas', title: 'Fuente de alimentación' },
            { id: 4, description: 'Sí', title: 'Impermeabilidad' },
            { id: 5, description: '2', title: 'Modos de iluminación' },
            { id: 6, description: 'Delantera, Trasera', title: 'Posición' },
            { id: 7, description: '9 Lux, 5 Candelas', title: 'Potencia máxima' },
            { id: 8, description: 'No', title: 'Recarga USB' },
            { id: 9, description: 'para manillar, para vaina superior, para tija de sillín', title: 'Soporte incluido' },
            { id: 10, description: 'LED', title: 'Tipo de luz' }
          ],
          Price: '$86.300',
          size: '9',
        },
        {
          id: '2',
          Name: ' LUZ DELANTERA WHITELITE RACE NEGRA',
          Img: [
            { id: '1', src: './img/whitelite.jpg' },
            { id: '2', src: './img/whitelite2.jpg' },
            { id: '3', src: './img/whitelite3.jpg' }
          ],
          Description: [
            { id: 1, description: '2 super brillante LED blanco', title: 'Lámpara' },
            { id: 2, description: 'CR2032 x 2 (incluido)', title: 'Batería' },
            { id: 3, description: '2 Modos, Constante / Intermitente', title: 'Control' },
            { id: 4, description: '70 hrs / 140 hrs', title: 'Tiempo de funcionamiento (aprox)' },
            { id: 5, description: '25 cd', title: 'Salida de luz' },
            { id: 6, description: 'Inyección de plástico moldeado', title: 'carcasa de la lámpara' },
            { id: 7, description: 'Montaje del manillar (ø25.4-ø 31,8 mm)', title: 'Montar' },
            { id: 8, description: '7 x 3,8 x 3,6 cm', title: 'Tamaño (L x W x H)' },
            { id: 9, description: '40 g / 1.41 oz', title: 'Peso' }
          ],
          Price: '$49.900',
          size: '8',
        },
        {
          id: '3',
          Name: ' LUZ DELANTERA WHITELITE II NEGRA 3 LEDS',
          Img: [
            { id: '1', src: './img/whitelite-ii-2.jpg' },
            { id: '2', src: './img/whitelite-ii-22.jpg' },
            { id: '3', src: './img/whitelite-ii-23.jpg' }
          ],
          Description: [
            { id: 1, description: '9 Lux a 5 metros / 3 Lux a 10 metros', title: 'Potencia' },
            { id: 2, description: 'fijo e intermitente', title: '2 modos' },
            { id: 3, description: '2 pilas CR2032 (incluidas)', title: 'Batería' },
            { id: 4, description: 'de 60 a 100 horas según el modo', title: 'Autonomía' },
            { id: 5, description: '5,8 x 3,5 x 3,5 cm', title: 'Tamaño' },
            { id: 6, description: '24 g', title: 'Peso' }
          ],
          Price: '$46.100',
          size: '5',
        },
        {
          id: '4',
          Name: ' LUZ DEL WHITELITE HP FOCUS BLANCA LED BL',
          Img: [
            { id: '1', src: './img/wlhp_focus_wt.jpg' },
            { id: '2', src: './img/wlhp_focus_wt_mount.jpg' },
            { id: '3', src: './img/wlhp_focus_wt2.jpg' }
          ],
          Description: [
            { id: 1, description: '0.5W LED', title: 'Lámpara' },
            { id: 2, description: '1.5V AA x 1 (incluido)', title: 'Batería' },
            { id: 3, description: '15 hrs / 30 hrs', title: 'Tiempo de funcionamiento (aprox)' },
            { id: 4, description: '20 (Lux / 5M) 5 (Lux / 10M)', title: 'Intensidad luminosa' },
            { id: 5, description: 'Inyección de plástico moldeado', title: 'carcasa de la lámpara' },
            { id: 6, description: 'montaje del manillar', title: 'Montar' },
            { id: 7, description: 'Modo de parpadear', title: 'Prestaciones suplementarias' },
            { id: 8, description: '9.6 x 2.5 x 3.7 cm 3.8 "x 1" x 1,5 "(luz)', title: 'Tamaño (L x W x H)' },
            { id: 9, description: '45 g / 1,58 oz', title: 'Peso' }
          ],
          Price: '$84.400',
          size: '8',
        },
        {
          id: '5',
          Name: ' LUZ DEL WHITELITE DX USB BLANCA 4 LEDS B',
          Img: [
            { id: '1', src: './img/whiteliteDxUsb.jpg' },
            { id: '2', src: './img/whiteliteDxUsb2.jpg' },
            { id: '3', src: './img/whiteliteDxUsb3.jpg' },
            { id: '4', src: './img/whiteliteDxUsb4.jpg' }
          ],
          Description: [
            { id: 1, description: '4 super brillante LED blanco', title: 'Lámpara' },
            { id: 2, description: '3.7V 240mAh de iones de litio', title: 'Batería' },
            { id: 3, description: '2 Modos Constante / Intermitente', title: 'Controlar' },
            { id: 4, description: '11 hrs / 30 hrs', title: 'Tiempo de funcionamiento (aprox)' },
            { id: 5, description: '3 (Lux / 5M) / 1,2 (Lux / 10M)', title: 'Intensidad luminosa' },
            { id: 6, description: '1 hora', title: 'Tiempo de reserva (aprox)' },
            { id: 7, description: '5-6 horas (Mini USB) * Carga con USB Hub tardarán más tiempo de carga', title: 'Tiempo de carga (aproximado)' },
            { id: 8, description: 'Silicio', title: 'carcasa de la lámpara' },
            { id: 9, description: 'Manillar (ø22.2 - ø31.8 mm)', title: 'Montar' },
            { id: 10, description: '4,5 x 4,2 x 2,8 cm 1,8 "x 1,7" x 1,1 "', title: 'Tamaño (L x W x H)' },
            { id: 11, description: '40 g / 1,41 oz (sólo la luz)', title: 'Peso' }
          ],
          Price: '$92.700',
          size: '10',
        },
        {
          id: '6',
          Name: ' CHQTA CLEAN IMPER 000 TRANSPARENTE',
          Img: [
            { id: '1', src: './img/jacket.jpg' },
            { id: '2', src: './img/jacket2.jpg' },
            { id: '3', src: './img/jacket3.jpg' }
          ],
          Description: [
            { id: 1, description: 'Respetuoso del medio ambiente de la tela.', title: 'Material' },
            { id: 2, description: 'EVA y malla.', title: 'Material' },
            { id: 3, description: 'costuras fusionada', title: 'Material' },
            { id: 4, description: 'Corte clásico', title: 'Material' },
            { id: 5, description: 'chaqueta de ciclismo masculino', title: 'características y beneficios' },
            { id: 6, description: 'longitud delantera cierre de Velcro ™ completa', title: 'características y beneficios' },
            { id: 7, description: 'Elástico en las muñecas', title: 'características y beneficios' },
            { id: 8, description: 'Copias de la cinta reflectante', title: 'características y beneficios' },
            { id: 9, description: 'Logo reflector', title: 'características y beneficios' }
          ],
          Price: '$44.039',
          size: '8',
        },
        {
          id: '7',
          Name: ' CHQTA CLEAN IMPER 000 TRANSPARENTE',
          Img: [
            { id: '1', src: './img/jacketmodesto.jpg' },
            { id: '2', src: './img/jacketmodesto2.jpg' }
          ],
          Description: [
            { id: 1, description: 'TELA de nylon, malla', title: 'Material' },
            { id: 2, description: 'INTEMPERIE a prueba de viento, resistente al agua', title: 'Material' },
            { id: 3, description: 'BOLSILLOS 1 trasero con cremallera', title: 'Material' },
            { id: 4, description: 'Forma ajuste mejora la aerodinámica', title: 'características y beneficios' },
            { id: 5, description: 'cremallera completa con garaje y solapa interior bloques de los elementos', title: 'características y beneficios' },
            { id: 6, description: 'El bolsillo trasero con cremallera y solapa, además de un puerto MP3', title: 'características y beneficios' }
          ],
          Price: '$95.465',
          size: '5',
        }
      ];
    })
})();
