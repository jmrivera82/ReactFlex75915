import './Item.css'

function Item({nombre,precio}){

    //const {nombre,precio} = props

    function AgregarAlCarrito(){
        console.log('Vas a agregar:',nombre)
    }

    return (

            <div className='card'>
                <h2>{nombre || "No disponible"}</h2>
                <h3>Precio: ${precio || "Sin Precio"}</h3>
                <button disabled={!nombre} className='card-btn' onClick={()=> AgregarAlCarrito()}>Agregar ak Carrito</button>
            </div>
        
    )
}

export default Item