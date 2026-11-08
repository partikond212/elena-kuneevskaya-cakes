export type CategoryValue = 'all' | 'birthday' | 'junior' | 'wedding' | 'bento' | 'desserts'
export type Category = {
    title:string,
    value:CategoryValue,
}

export type Cake = {
    id:string,
    title:string,
    category:CategoryValue,
    price:number,
    image:string,    
}
