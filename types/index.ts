export type CategoryValue = 'all' | 'birthday' | 'junior' | 'festive' | 'bento' | 'desserts'
export type Category = {
    title:string,
    value:CategoryValue,
}
export type cakeCategories = Exclude<CategoryValue,'all'>[]
export type Cake = {
    id:string,
    title:string,
    categories:cakeCategories,
    price:number,
    unitValue:number,
    image:string,    
}
