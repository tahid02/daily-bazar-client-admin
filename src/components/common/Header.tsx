import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { BiPhoneCall, BiSearch, BiUser } from 'react-icons/bi';
import { FiShoppingBag } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { FaMobileAlt, FaSignOutAlt } from 'react-icons/fa';
import logo from 'assets/images/evaly-logo.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IProduct } from 'types';
import { AppState } from 'redux/reducers/rootReducer';
import { logout } from 'redux/actionCreators/authActionCreators';

const Header = () => {
  const cart: IProduct[] = useSelector((state: AppState) => state.cart);
  const { data } = useSelector((state: AppState) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="header_component">
      <div className="top-header">
        <Container className="d-flex justify-content-between">
          <ul className="list-unstyled  d-flex">
            <li>
              <BiPhoneCall />
              <a href="tell:1234567890">1234567890</a>
            </li>
            <li>
              <AiOutlineMail />
              <a href="mail-to:support@daily-bazar.com">
                support@daily-bazar.com
              </a>
            </li>
          </ul>
          <div className="app">
            <FaMobileAlt />
            save big on your app
          </div>
        </Container>
      </div>

      <div className="middle-header">
        <Container>
          <div className="d-flex align-items-center gap-5 py-3">
            <Link to="/">
              <img className="branding" src={logo} alt="Fvaly" />
            </Link>
            <InputGroup>
              <FormControl
                className="border border-primary"
                placeholder="Search Here.."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <BiSearch className="text-white" />
              </Button>
            </InputGroup>
            <ul className="icon-list list-unstyled d-flex gap-3">
              <li>
                <Link to="/checkout">
                  <FiShoppingBag />
                  <span className="badge bg-primary">{cart.length}</span>
                </Link>
              </li>

              <li>
                <Link to="/login">
                  <BiUser />
                </Link>
              </li>
              {data && (
                <li className="btn p-0">
                  <FaSignOutAlt onClick={() => dispatch(logout())} />
                </li>
              )}
            </ul>
          </div>
        </Container>
      </div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
