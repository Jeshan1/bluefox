export class ApiResponse{
    message:string
    success:boolean
    statuscode:number
    data?:any
    constructor(message:string,statuscode:number,data?:any){
        this.statuscode = statuscode
        this.message = message
        this.success = true
        this.data = data?data:[]
    }
}