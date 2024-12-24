export class ApiError extends Error{
    statusCode:number
    success:boolean
    constructor(statuscode:number,message:string){
        super(message)
        this.statusCode = statuscode
        this.success = false
        this.message = message
    }
}