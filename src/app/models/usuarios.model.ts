export class usuarios{
  constructor(
    public _id: String,
    public nombre: String,
    public usuario: String,
    public password: String,
    public rol: String,
    public cuenta: [{
        descripcion: String,
        precio:Number,
        fechaInicio: String,
        fechaFin: String
    }]
  ){}
}
