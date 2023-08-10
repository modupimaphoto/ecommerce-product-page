import product_one from "./assets/product_one.jpg";
import icon_minus from "./assets/icon_minus.svg";
import icon_plus from "./assets/icon_plus.svg";

import Header from "./Header";
import { useState } from "react";
import "./assets/css/App.css";

function App(){
  const [productNumber, setProductNumber] = useState(0);
  const handleProductIncrease = () => {
    setProductNumber(productNumber + 1);
  }
  const handleProductDecrease = () => {
    setProductNumber(productNumber - 1);
  }

  const products = [
      {
      id: "1",
      vendor: "Sneaker Company",
      title: "Fall Limited Edition Sneakers",
      description: `These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.`,
      reducedPrice: 125.00,
      normalPrice: 250.00,
      discount: 50
    }
  ];
  return (
    <>
      <Header />
      <section className="container">
        <div className="row p-1 p-md-5">
          <div className="col-md-6 text-center">
            <div>
              <img src={ product_one } alt="Product" className="w-70 rounded"/>
            </div>
          </div>
          <div className="col-md-6 p-5 p-md-0">
            {
              products.map((product) => {
                return(
                  <>
                    <h5 className="mt-0 mt-md-3 text-orange">
                        { product.vendor }
                    </h5>
                    <h1 className="mb-3 text-very-dark-blue font-weight-700">
                      { product.title }
                    </h1>
                    <p className="text-dark-grayish-blue">
                      { product.description}
                    </p>
                    <p className="h3 text-very-dark-blue font-weight-700">
                      {(product.reducedPrice === null) ? '' : '$' + product.reducedPrice + '.00' }
                      <span className="discount-tag">
                        {(product.discount === null) ? '' : product.discount + '%' }
                      </span>
                    </p>
                    <p className="text-light-grayish-blue font-weight-700 text-decoration-line-through">
                      { '$' + product.normalPrice + '.00' }
                    </p>
                    <div>
                      <div className="custom-product-counter d-inline p-2">
                        <span className="p-3 cursor-pointer" onClick={ handleProductDecrease }>
                          <img src={icon_minus} alt="Minus icon"/>
                        </span>
                        <span className="p-3">{ productNumber }</span>
                        <span className="p-3 cursor-pointer" onClick={ handleProductIncrease }>
                          <img src={icon_plus} alt="Plus icon"/>
                        </span>
                      </div>

                      <button type="button" className="btn custom-btn p-2 mx-0 mx-md-3">Add to cart</button>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
