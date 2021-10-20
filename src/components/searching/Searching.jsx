import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getFoodCategories } from '../../Redux/actions';

function SearchingComp() {
    const dispatch = useDispatch();
    const foodsCategories = useSelector(
        ({ foodCategoriesState }) => foodCategoriesState.foodCategories
    );
    const foodsCategoriesTypes = useSelector(
        ({ foodCategoriesState }) => foodCategoriesState.foodsCategoriesTypes
    );

    const handleSelectFoodsCategory = (id) => {
        // const obj = foodsCategories.find((item) => item.id === id);
        const obj = {
            food_type: id,
        };

        dispatch(getFoodCategories(obj));
    };

    const handleSelectFoodsTypes = (g) => {
        console.log(g);
    };

    const foodsCategoriesJSX = foodsCategories
        ? foodsCategories.map((item, indx) => {
              return (
                  <NavDropdown.Item
                      onClick={() => handleSelectFoodsCategory(item.id)}
                      id={item.id}
                      key={indx}
                  >
                      {item.name}
                  </NavDropdown.Item>
              );
          })
        : undefined;

    const foodsCategoriesTypesJSX = foodsCategoriesTypes
        ? foodsCategoriesTypes.map((item, indx) => {
              return (
                  <NavDropdown.Item
                      onClick={() => handleSelectFoodsTypes(item.id)}
                      id={item.id}
                      key={indx}
                  >
                      {item.name}
                  </NavDropdown.Item>
              );
          })
        : undefined;
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Food Categories</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown id="nav-dropdown-dark-example">
                            {foodsCategoriesJSX}
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <Navbar.Brand className="ml-3" href="#home">
                        Food Types
                    </Navbar.Brand>
                    <Nav>
                        <NavDropdown id="nav-dropdown-dark-example">
                            {foodsCategoriesTypesJSX}
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SearchingComp;
