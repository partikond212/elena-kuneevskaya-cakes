import { Cake, Category } from "@/types"


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
]