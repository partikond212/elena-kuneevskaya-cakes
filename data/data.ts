import { Cake, Category, ReviewT } from "@/types"


export const business = {
    address: 'https://yandex.ru/maps/org/konditerskaya_masterskaya_yeleny_kuneyevskoy/126333163638/?ll=39.228171%2C45.221936&z=7'
}
export const reviews:ReviewT[] = [
    {id:"1",author:'Надежда Пияйкина',mark:5,reviewText:'Много лет делаю заказы и просто балую семью десертами и тортами в данной кондитерской! Всегда очень вкусно и красиво! Торты на заказ любой сложности! Если нужно угощение , кондитерская всегда выручает свежими тортами и пирожными'},
    {id:"2",author:'Александра Тереник',mark:5,reviewText:'Моя любимая кондитерская! На любой вкус можно подобрать себе десерт. Всегда можно заказать торт! Обалденные корпусные десерты, особенно кофе, банан, малина, рекомендую всем попробовать! Самый мой любимый меренговый рулет, нежный, вкуснейший, даже можно съесть его и не заметить😂 постоянное обновление и добавление новинок в ассортимент, что не успеваешь следить, и хочешь попробовать всё👍🏻👍🏻👍🏻✨'},
    {id:"3",author:'Карина Макунц',mark:5,reviewText:'Первые, в Динской кто внёс новинку корпусных десертов🤍☺️ выглядят как настоящие фрукты и ягоды😍 все очень вкусно, но особенно хочется выделить кофе и манго-маракуйя 🧡'},

]

export const categories:Category[] = [
{
        title:'Все',
        value:'all'
    },
     {
        title:'На день рождения ',
        value:'birthday'
    },
{
        title:'Детские',
        value:'junior'
    },
    {
        title:'Праздничные',
        value:'festive'
    },
     {
        title:'Бенто',
        value:'bento'
    },
     {
        title:'Десерты',
        value:'desserts'
    },

]
export const cakes:Cake[] = [
    {id:'1',title:'Птичье молоко',categories:["birthday",'festive'],unitValue:1.310,price:1965,image:'/cakes/ptichye_molochko.jpeg'},
    {id:'2',title:'Молочная девочка с малиной',unitValue:1.115,categories:["bento",'festive'],price:1675,image:'/cakes/molochnay_devochka_s_malinoy.jpeg'},
    {id:'3',title:'Молочная девочка с фруктами',unitValue:1.225,categories:["bento",'festive'],price:1838,image:'/cakes/molochnay_devochka_s_fruktami.jpeg'},
    {id:'4',title:'Красный бархат',unitValue:1.180,categories:["birthday",'festive'],price:1770,image:'/cakes/krasny_barkhat.jpeg'},
    {id:'5',title:'Шоколадный с вишней',unitValue:1.160,categories:["bento",'festive'],price:1740,image:'/cakes/chocoladny_s_vishney.jpeg'},
    {id:'6',title:'Три шоколада',unitValue:1.050,categories:["birthday",'festive'],price:1740,image:'/cakes/tri_shokolada.jpeg'},
    {id:'7',title:'Белый бархат',unitValue:1.190,categories:["birthday",'festive'],price:1785,image:'/cakes/beliy_barkhat.jpeg'},
    {id:'8',title:'Колибри',unitValue:1.225,categories:["birthday",'festive','bento'],price:1838,image:'/cakes/kolibri.jpeg'},
    {id:'9',title:'Трюфель с вишней',unitValue:1.130,categories:["birthday",'festive','bento'],price:1700,image:'/cakes/trufel_s_vishney.jpeg'},
    {id:'10',title:'Детский торт с мишкой',unitValue:1.8,categories:["birthday",'festive','junior'],price:2000,image:'/cakes/detskiy_tort_na_den_rozhdeniya.jpeg'},
    {id:'11',title:'Фрукты',unitValue:1,categories:["desserts"],price:1500,image:'/cakes/frukty.jpeg'},
    {id:'12',title:'Лило и Стич',unitValue:1.2,categories:["junior"],price:2500,image:'/cakes/lilo_i_stich.jpeg'},
    {id:'13',title:'Десерт Ракушки',unitValue:1,categories:["desserts"],price:1800,image:'/cakes/rakushki.jpeg'},
    {id:'14',title:'Лего Ниндзяго',unitValue:1.8,categories:["junior",'birthday'],price:2000,image:'/cakes/lego_ninjago.jpeg'},
    {id:'15',title:'Водная фауна',unitValue:1.8,categories:["junior",'birthday'],price:2000,image:'/cakes/vodnaya_fauna.jpeg'},
   
    
]


// Начинки кондитерской Елены.
// Описания составлены по фото и классическим рецептам.
// Перед запуском обязательно покажи Елене и поправь состав, где отличается.
// Помечено "// уточнить" там, где по фото угадать сложно.
 
export type Filling = {
  name: string
  desc: string
  image: string
}
 
export const fillings: Filling[] = [
  { name: 'Пища богов', desc: 'Тёмный и светлый бисквит с орехами и сметанным кремом. Насыщенный, но не приторный', image: '/fillings/pishcha-bogov.jpg' },
  { name: 'Меренговый', desc: 'Воздушный меренговый рулет с нежным сливочным кремом и ягодной начинкой', image: '/fillings/merengovyy.jpg' },
  { name: 'Чизкейк Сникерс', desc: 'Сливочный чизкейк на песочной основе с солёной карамелью и жареным арахисом', image: '/fillings/chizkeyk-snikers.jpg' },
  { name: 'Лаванда', desc: 'Ягодный бисквит, тёмное ягодное конфи и лёгкий крем с нотками лаванды', image: '/fillings/lavanda.jpg' }, // уточнить
  { name: 'Фисташка-малина', desc: 'Фисташковый бисквит, кисло-сладкое малиновое конфи и фисташковый крем', image: '/fillings/fistashka-malina.jpg' },
  { name: 'Медовое', desc: 'Тонкие медовые коржи и нежный сметанный крем. Тот самый вкус из детства', image: '/fillings/medovoe.jpg' },
  { name: 'Мильфей', desc: 'Шоколадный бисквит, сливочный мусс и заварные профитроли внутри', image: '/fillings/milfey.jpg' }, // уточнить
  { name: 'Молочная девочка', desc: 'Тонкие коржи на сгущёнке и лёгкий сливочный крем', image: '/fillings/molochnaya-devochka.jpg' },
  { name: 'Молочная девочка шоколад-вишня', desc: 'Шоколадные коржи на сгущёнке, сливочный крем и сочная вишня', image: '/fillings/molochnaya-devochka-shokolad-vishnya.jpg' },
  { name: 'Молочная девочка орех', desc: 'Коржи на сгущёнке с орехами и нежный сливочный крем', image: '/fillings/molochnaya-devochka-oreh.jpg' },
  { name: 'Сникерс', desc: 'Шоколадный бисквит, карамель, жареный арахис и сливочный крем', image: '/fillings/snikers.jpg' },
  { name: 'Творожно-йогуртовый', desc: 'Ванильный бисквит, лёгкий творожно-йогуртовый крем и фруктовая прослойка', image: '/fillings/tvorozhno-yogurtovyy.jpg' },
  { name: 'Молочный ломтик', desc: 'Шоколадный бисквит и нежная молочная начинка, как у любимого десерта', image: '/fillings/molochnyy-lomtik.jpg' },
  { name: 'Красный бархат', desc: 'Классика: бархатный красный бисквит, крем-чиз и ягодная прослойка', image: '/fillings/krasnyy-barhat.jpg' },
  { name: 'Белый бархат', desc: 'Ванильный бархатный бисквит, крем-чиз и карамельно-ореховая прослойка', image: '/fillings/belyy-barhat.jpg' },
  { name: 'Наполеон', desc: 'Хрустящие слоёные коржи и нежный заварной крем', image: '/fillings/napoleon.jpg' },
  { name: 'Андерсон', desc: 'Шоколадные коржи и яркий сливочный крем', image: '/fillings/anderson.jpg' }, // уточнить
  { name: 'Три шоколада', desc: 'Три мусса: из тёмного, молочного и белого шоколада на шоколадном бисквите', image: '/fillings/tri-shokolada.jpg' },
  { name: 'Рафаэлло', desc: 'Ванильный бисквит, кокосовый крем и миндаль', image: '/fillings/rafaello.jpg' },
  { name: 'Анна Павлова', desc: 'Хрустящая снаружи и мягкая внутри меренга, сливочный крем и свежие ягоды', image: '/fillings/anna-pavlova.jpg' },
  { name: 'Чизкейк с вишней', desc: 'Сливочный чизкейк на песочной основе с вишнёвым соусом', image: '/fillings/chizkeyk-s-vishney.jpg' },
  { name: 'Чизкейк манго-маракуйя', desc: 'Сливочный чизкейк с тропическим слоем манго и маракуйи', image: '/fillings/chizkeyk-mango-marakuyya.jpg' },
  { name: 'Киевский', desc: 'Ореховые коржи, нежный крем и шоколадная глазурь', image: '/fillings/kievskiy.jpg' },
  { name: 'Птичье молоко', desc: 'Нежнейшее суфле на тонком бисквите под шоколадной глазурью', image: '/fillings/ptichye-moloko.jpg' },
  { name: 'Колибри', desc: 'Бисквит с бананом и ананасом, крем-чиз и ягодная прослойка', image: '/fillings/kolibri.jpg' },
  { name: 'Кевин', desc: 'Шоколадный бисквит с прослойками воздушного крема', image: '/fillings/kevin.jpg' }, // уточнить
]