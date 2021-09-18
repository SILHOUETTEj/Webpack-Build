 
 export class Post{
    constructor(title){
        this.title = title
        this.date = new Date()
        

    }

    toString() {
       return JSON.stringify({
            title: this.title,
            date: this.date.toJSON(),
           
            
        }, null , 2 )
    }
    getUpperCase(){
        return this.title.toUpperCase();
    }
}

