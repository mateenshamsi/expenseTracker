export function addComments(x:number):string{ 
    return x.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',')
}