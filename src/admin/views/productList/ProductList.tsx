import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import useAsync from 'hooks/useAsync';
import { Spinner } from 'react-bootstrap';
import { FaEdit, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProductService from 'services/ProductService';
import imageUrlParser from 'utils/imageUrlParser';

const ProductList = () => {
  const { data, isLoading, isSuccess, isError, error } = useAsync(
    ProductService.getMerchantsProducts
  );
  console.log('product list data', data);
  return (
    <>
      <Link to="/dashboard/add-product">
        <CButton variant="outline" color="primary">
          <FaPlus /> Add Product
        </CButton>
      </Link>
      <h1>product list will show here</h1>
    </>
  );
};

export default ProductList;
