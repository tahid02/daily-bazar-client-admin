import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IProduct } from 'types';
import imageUrlParser from 'utils/imageUrlParser';
interface IProductProp {
  product: IProduct;
}
const Product = ({ product }: IProductProp) => {
  const { name, image, _id } = product;
  console.log('product id', _id);
  console.log('imageURL', imageUrlParser(image));
  return (
    <Col lg={3} md={4}>
      <Link to={`/product/${_id}`}>
        <div>
          <img
            src={imageUrlParser(image)}
            className="img-fluid"
            style={{ width: '5rem', height: '7rem' }}
            alt="picture"
          />
        </div>
        <p className="product_name">{name}</p>
      </Link>
    </Col>
  );
};

export default Product;
