class Producto{
    
    static contadorProductos = 0; //Variable estatica, para saber cuantos objetos de tipo producto se han creado
    //Se crean los atributos, mediante el constructor de la clase Producto
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    //Se crean los metodos para cada uno de los atributos de la clase
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}

class Orden{
    static contadorOrdenes = 0; //Variable estatica, para saber cuantas ordenes van
    //Metodo estatico que se comporta como una constante
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto); //Usando el metodo push para agregar un nuevo elemento al array
            //this._productos[this._contadorProductosAgregados++] = producto; Tambien se puede hacer asu
        }
        else{
            console.log("No se pueden agregar mas productos");
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){ //Para recorrer cada uno de los elementos del arreglo
            totalVenta += producto.precio; 
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += '\n{' + producto.toString() + '}';
        }
        console.log(`Orden: ${this._idOrden}, Total: $${this.calcularTotal()}, Prodcutos: ${productosOrden}`);
    }
}

//Se crean los productos
let producto1 = new Producto('Pantalon',200);
let producto2 = new Producto('Camisa',100);
let producto3 = new Producto('Cinturon',30);

//Se crea una nueva orden
let orden1 = new Orden();
let orden2 = new Orden();
//Se envia el producto a la orden por medio del metodo agregarProducto
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);


orden1.mostrarOrden();
orden2.mostrarOrden();

