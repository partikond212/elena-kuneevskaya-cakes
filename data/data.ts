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
        title:'Свадебные',
        value:'wedding'
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
    {id:'1',title:'Торт с клубникой и цветами',category:"birthday",price:2200,image:'/birthdayCake.jpeg'},
    {id:'2',title:'Бент торт ручной работы',category:"bento",price:3200,image:'/bentoCake.jpeg'}
]