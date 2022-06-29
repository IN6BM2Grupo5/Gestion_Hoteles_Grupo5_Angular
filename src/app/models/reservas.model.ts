export class reservas{
  constructor(
    public _id: String,
    public numeroCuarto:String,
    public fechaInicio:Date,
    public fechaFin:Date,
    public dias: Number,
    public idUsuario: String,
    public idHotel: String
  ){}
}
