export const CatergoriasRecom = [
    {
        id: 1,
        refImag: 'rectan.png',
        destin: 'Hombres',
        prenda: 'Playera'
    },
    {
        id: 2,
        refImag: 'rectan.png',
        destin: 'Hombres',
        prenda: 'Pantalones'
    },
    {
        id: 3,
        refImag: 'rectan.png',
        destin: 'Hombres',
        prenda: 'Sueters'
    },
    {
        id: 4,
        refImag: 'rectan.png',
        destin: 'Mujeres',
        prenda: 'Playera'
    },
    {
        id: 5,
        refImag: 'rectan.png',
        destin: 'Mujeres',
        prenda: 'Pantalones'
    },
    {
        id: 6,
        refImag: 'rectan.png',
        destin: 'Hombres',
        prenda: 'Sueteres'
    },
    {
        id: 7,
        refImag: 'rectan.png',
        destin: 'Niños',
        prenda: 'Playera'
    },
    {
        id: 8,
        refImag: 'rectan.png',
        destin: 'Niños',
        prenda: 'Pantalones'
    },
];

export var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };