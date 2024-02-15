export interface Book{
    id:number,
    title:string,
    imageLink:string,
    author:string,
    genre:string,
    description:string,
    isBookAvailable:boolean,
    rating:number,
    lent_By_User_Id:number,
    currently_Borrowed_By_User_Id:number
}