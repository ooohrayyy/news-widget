const sourceExample = [
  {
    title: 'Чиновникам разрешат сбивать пешеходов при чрезвычайных обстоятельствах',
    author: 'Ефим Аноним',
    date: '09:59 15.03.2021',
    link: 'https://panorama.pub/news/chinovnikam-razreshat-sbivat-peshexodov-pri-chrezvychajnyx-obstoyatelstvax'
  },
  {
    title: 'Для борьбы с алкоголизмом Минздрав предложил уменьшить размер рюмки',
    author: 'Виталий Манн',
    date: '09:16 15.03.2021',
    link: 'https://panorama.pub/news/dlya-borby-s-alkogolizmom-minzdrav-predlozhil-umenshit-razmer-ryumki'
  },
  {
    title: 'Камеру на Рублёвском шоссе демонтировали из-за клеветы на чиновников',
    author: 'Эрвин Кляйн',
    date: '09:59 15.03.2021',
    link: 'https://panorama.pub/news/kameru-na-rublyovskom-shosse-demontirovali-iz-za-klevety-na-chinovnikov'
  },
  {
    title: 'Роботы Boston Dynamics создали профсоюз',
    author: 'Потап Романов',
    date: '19:23 06.03.2021',
    link: 'https://panorama.pub/news/roboty-boston-dynamics-sozdali-profsoyuz'
  },
  {
    title: 'Байден подписал указ о скачкообразном повышении цен в России',
    author: 'Ефим Аноним',
    date: '08:40 10.03.2021',
    link: 'https://panorama.pub/news/bajden-podpisal-ukaz-o-skachkoobraznom-uvelichenii-czen-na-produkty-v-rossii'
  },
  {
    title: 'Дмитрий Гордон станет рекламным лицом Head&Shoulders',
    author: 'Константин Ковидный',
    date: '19:12 14.03.2021',
    link: 'https://panorama.pub/news/dmitrij-gordon-stanet-reklamnym-liczom-shampunej-headshoulders'
  },
  {
    title: 'Росавиация хочет регламентировать полёты пчёл',
    author: 'Виталий Манн',
    date: '15:35 14.03.2021',
    link: 'https://panorama.pub/news/rosaviacziya-xochet-reglamentirovat-polyoty-pchyol'
  },
  {
    title: 'Marvel выкупила права на Чебурашку и создаст на его основе супергероя',
    author: 'Эрвин Кляйн',
    date: '18:43 13.03.2021',
    link: 'https://panorama.pub/news/marvel-vykupila-prava-na-cheburashku-i-sozdast-na-ego-osnove-supergeroya'
  },
  {
    title: 'Госдума приняла закон о запрете дарения носков на 23 февраля',
    author: 'Виталий Манн',
    date: '08:50 14.03.2021',
    link: 'https://panorama.pub/news/gosduma-prinyala-zakon-o-zaprete-dareniya-noskov-na-23-fevralya'
  },
  {
    title: 'Учёные пришли к выводу, что Санта Клаус был моноголом',
    author: 'Анастасия Петрик',
    date: '22:09 30.12.2020',
    link: 'https://panorama.pub/news/p53744'
  }
];

const sourceExample_2 = [
  {
    title: 'Губернатор Нижегородской области запретил блины с начинкой',
    author: 'Глеб Никитин',
    date: '12:00 11.03.2020',
    link: 'http://breakingmad.me/ru/11292'
  },
  {
    title: 'На Алтае неочищенная от снега улица помогла предотвратить угон',
    author: 'Осип Родский',
    date: '14:43 10.03.2020',
    link: 'http://breakingmad.me/ru/11290'
  },
  {
    title: 'В Киевском университете торжественно открыли женский туалет',
    author: 'Тарас Шевченко',
    date: '14:22 10.03.2020',
    link: 'http://breakingmad.me/ru/11289'
  },
  {
    title: 'В Красноярском крае свиристели снова наелись забродивших яблок и лежат пьяные на снегу',
    author: 'Николай Дроздов',
    date: '11:22 09.03.2020',
    link: 'http://breakingmad.me/ru/11286'
  },
  {
    title: 'В Новосибирске кондуктор выбросила горящее сиденье из движущегося троллейбуса',
    author: 'Александр Локоть',
    date: '15:04 01.03.2020',
    link: 'http://breakingmad.me/ru/11280'
  },
  {
    title: 'В Дагестане отменили турнир по дзюдо из-за драки спортсменов со зрителями',
    author: 'Хабиб Нурмагомедов',
    date: '09:03 28.02.2021',
    link: 'http://breakingmad.me/ru/11278'
  },
  {
    title: 'В Берлине мужчина выдавал себя за диспетчера и отдавал полицейским вертолётам приказы',
    author: 'Ангела Меркель',
    date: '03:04 28.02.2021',
    link: 'http://breakingmad.me/ru/11277'
  },
  {
    title: 'В Самаре подорожали бесплатные похороны',
    author: 'Джордж Ромеро',
    date: '01:04 26.02.2021',
    link: 'http://breakingmad.me/ru/11275'
  },
  {
    title: 'В Никарагуа создали министерство Внеземных космических дел',
    author: 'Даниэль Ортега',
    date: '02:43 22.02.2021',
    link: 'http://breakingmad.me/ru/11269'
  },
  {
    title: 'Panasonic представила робота-кошку, которая может игнорировать хозяина и пукать',
    author: 'Илон Маск',
    date: '15:20 19.02.2021',
    link: 'http://breakingmad.me/ru/11264'
  }
];

export { sourceExample, sourceExample_2 };