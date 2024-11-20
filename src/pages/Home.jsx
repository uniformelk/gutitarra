
import CardProduct from "../components/CardProduct";


function Home({data, addToCart}){

    

    return (
        <>
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
                {
                    data.map((product) => (
                        <CardProduct
                            key={product.id}
                            guitar={product}
                            addToCart={addToCart}
                        />
                    ))
                }
            </div>
        </>
    )
}
export default Home;