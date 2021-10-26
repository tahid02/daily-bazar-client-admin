import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { addToCart } from 'redux/actionCreators/cartAction';
import { IProduct } from 'types';
import imageUrlParser from 'utils/imageUrlParser';

interface IParams {
  id: string;
}
const ProductDetails = () => {
  const { id } = useParams<IParams>();
  const [data, setData] = useState({} as IProduct);
  const dispatch = useDispatch();
  const isSuccess = true;
  useEffect(() => {
    fetch('https://fvaly.herokuapp.com/api/product' + '/' + id)
      .then((res) => res.json())
      .then((info) => setData(info.data));
  }, []);
  console.log('product detail data', data);
  const { name, image, description, price } = data;

  return (
    <div className="product__details__component my-3">
      <Container>
        <div className="wrapper bg-white rounded border p-5">
          {/* {isLoading && <h3>Loading ....</h3>} */}
          {isSuccess && (
            <Row>
              <Col md={6}>
                <img
                  className="img-fluid"
                  src={imageUrlParser(data ? image : '')}
                  alt={name}
                />
              </Col>
              <Col md={6}>
                <h3>{name}</h3>
                <h1 className="mt-3 mb-5">$ {price}</h1>
                <button
                  onClick={() => dispatch(addToCart(data))}
                  className="btn btn-primary"
                >
                  <AiOutlineShoppingCart />
                  <span className="ms-2">Add to Cart</span>
                </button>
                <p className="mt-5">{description}</p>
              </Col>
            </Row>
          )}
          {/* {isError && <h1>{error}</h1>} */}
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;

/// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// /////////////////////////////////////////////////////////////////////////////////////////

// import useAsync from 'hooks/useAsync';
// import { Col, Container, Row } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import ProductService from 'services/ProductService';
// import { IProduct } from 'types';
// import imageUrlParser from 'utils/imageUrlParser';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { useCallback } from 'react';
// interface IParams {
//   id: string;
// }
// const ProductDetails = () => {
//   const { id } = useParams<IParams>();
//   const getProduct = useCallback(() => {
//     return ProductService.getProductByID(id);
//   }, [id]);

//   const { data, isLoading, isSuccess, isError, error } = useAsync(getProduct);
//   console.log('product detail page', data);
// const { name, image, description, price } = data.data;
//   return (
//     <div className="product__details__component my-3">
//       <Container>
//         <div className="wrapper bg-white rounded border p-5">
//           {isLoading && <h3>Loading ....</h3>}
//           {isSuccess && (
//             <Row>
//               <Col md={6}>
//                 <img
//                   className="img-fluid"
//                   src={imageUrlParser(data ? image : '')}
//                   alt={name}
//                 />
//               </Col>
//               <Col md={6}>
//                 <h3>{name}</h3>
//                 <h1 className="mt-3 mb-5">$ {price}</h1>
//                 <button className="btn btn-primary">
//                   <AiOutlineShoppingCart />
//                   <span className="ms-2">Add to Cart</span>
//                 </button>
//                 <p className="mt-5">{description}</p>
//               </Col>
//             </Row>
//           )}
//           {isError && <h1>{error}</h1>}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default ProductDetails;
