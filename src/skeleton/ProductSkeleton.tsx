import { Col, Row } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ProductsSkeleton = () => {
  return (
    <Row>
      {Array(12)
        .fill('')
        ?.map((product, index) => (
          <Col md={3} className="mb-3" key={index}>
            <SkeletonTheme color="#202020" highlightColor="#444">
              <Skeleton style={{ borderRadius: 10 }} height={320} />
            </SkeletonTheme>
          </Col>
        ))}
    </Row>
  );
};

export default ProductsSkeleton;
