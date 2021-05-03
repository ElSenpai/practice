import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from 'reactstrap';


function App() {
  let productInfo={title:"Product List",baskabisey:"bişey"}
  let categoryInfo={title:"Category List"}
  return (
    <div >
      <Container>
         <Navi />
        
        <Row >
          <Col xs="4">
            <CategoryList info={categoryInfo} />
          </Col><Col xs="8">
           <ProductList info={productInfo} />
          </Col>
          </Row>
      </Container>
    </div>

  );
}



export default App;
