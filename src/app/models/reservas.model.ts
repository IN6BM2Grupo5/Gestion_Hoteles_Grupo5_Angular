export class reservas{
  constructor(
    public _id: String,
    public numeroCuarto:String,
    public fechaInicio:String,
    public fechaFin:String,
    public dias: Number,
    public idUsuario: String,
    public idHotel: String
  ){}
}
