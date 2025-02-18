import './ItemListContainer.css'
import Item from '../Item/Item'

function ItemListContainer({greetings}){

    return (
        
    <>    
        <h1>{greetings}</h1>
        <div className='container-cards'>
           <Item nombre={'Producto 1'} precio={100} />
           <Item nombre={'Producto 2'} precio={200} />
           <Item nombre={'Producto 3'} precio={300} />
        </div>

    </>    
    )
}

export default ItemListContainer