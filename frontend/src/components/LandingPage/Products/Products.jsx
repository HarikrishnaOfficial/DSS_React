import './products.css'
import vaijayant from "/Products/vaijayant.png"


const productData = [
    {
        "productId":1,
        "productImage":"",
        "productName":"Vaijayant",
        "prodcutRating":"4.5/5.0",
        "productprice":"$ 7.99",
        "productOffer":"20%"
    },
    {
        "productId":2,
        "productImage":"",
        "productName":"Vaijayant",
        "prodcutRating":"4.5/5.0",
        "productprice":"$ 7.99",
        "productOffer":"20%"
    },{
        "productId":3,
        "productImage":"",
        "productName":"Vaijayant",
        "prodcutRating":"4.5/5.0",
        "productprice":"$ 7.99",
        "productOffer":"20%"
    },{
        "productId":4,
        "productImage":"",
        "productName":"Vaijayant",
        "prodcutRating":"4.5/5.0",
        "productprice":"$ 7.99",
        "productOffer":"20%"
    },
    {
        "productId":5,
        "productImage":"",
        "productName":"Vaijayant",
        "prodcutRating":"4.5/5.0",
        "productprice":"$ 7.99",
        "productOffer":"20%"
    },
    {
        "productId":6,
        "productImage":"",
        "productName":"Vaijayant",
        "prodcutRating":"4.5/5.0",
        "productprice":"$ 7.99",
        "productOffer":"20%"
    },
    {
        "productId":7,
        "productImage":"",
        "productName":"Vaijayant",
        "prodcutRating":"4.5/5.0",
        "productprice":"$ 7.99",
        "productOffer":"20%"
    },
    {
        "productId":8,
        "productImage":"",
        "productName":"Vaijayant",
        "prodcutRating":"4.5/5.0",
        "productprice":"$ 7.99",
        "productOffer":"20%"
    },
]
function Products() {
    return (
      <>
        <div>
          <h1 className='EventsHeading'>PRODUCTS</h1>
          <hr />
        </div>
        <div className='ProductsContainer d-flex flex-row'>
          {productData.map((product) => (
            <div key={product.productId} className='d-flex flex-column product'>
              <div>
                <img className='ProductImage' src={vaijayant} alt='product image' />
              </div>
              <div className='d-flex flex-row'>
                <div className='bg-dark text-light productDetails'>
                  <p className='text-uppercase Offertext'>{product.productName}</p>
                  <p className='Offertext'>Ratings - <span>{product.prodcutRating}</span></p>
                  <span>{product.productprice}</span>/<span>VIEW DETAILS</span>
                  <div className='text-center'>
                    <button className='booknow'>Book Now</button>
                  </div>
                </div>
                <div className='offer d-flex flex-column justify-content-center align-items-center'>
                  <span className='Offerpercent'>{product.productOffer}</span>
                  <p className='Offerpercent'>OFF</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
  
  export default Products;