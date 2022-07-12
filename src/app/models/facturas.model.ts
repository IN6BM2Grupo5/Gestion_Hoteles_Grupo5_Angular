export class facturas{
  constructor(
    public _id: String,
    public idUsuario: String,
    public total: Number,
    public cuenta: [{
        descripcion: String,
        precio: Number,
        fechaInicio: String,
        fechaFin: String
    }]
  ){}
}
