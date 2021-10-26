import { Container, Row } from 'react-bootstrap';
import Product from 'components/common/Product';
import { IProduct } from 'types';
import ProductsSkeleton from 'skeleton/ProductSkeleton';
interface IProps {
  products: IProduct[];
  isLoading: boolean;
  isSuccess: boolean;
}
// const Products = ({ products }: IProduct[]) => { we have to define the types of props object here as it is a props object
const Products = ({ products, isLoading, isSuccess }: IProps) => {
  console.log({ products });
  return (
    <div>
      <Container>
        {isLoading && <ProductsSkeleton />}
        {!isLoading && (
          <Row>
            {products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Products;
