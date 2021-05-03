
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from 'reactstrap';
import { Component } from "react";

export default class App extends Component{
  state={currentCategory:""}
  changeCategory=(category)=>{
    this.setState({currentCategory:category.categoryName})
}
 
  render(){
     let productInfo={title:"Product List",baskabisey:"bişey"}
   let categoryInfo={title:"Category List"}
    return(
      <div >
        <Container>
           <Navi />
          
          <Row >
            <Col xs="4">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col><Col xs="8">
             <ProductList currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>
            </Row>
        </Container>
      </div>
  
    );
  }
}

