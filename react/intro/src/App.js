import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Button } from 'reactstrap';


function App() {
  return (
    <div >
      <container>
        <div class="col-md-12">
        <Navi></Navi>
       </div>  <row >
         <div class="col-md-6">
       <CategoryList></CategoryList>   
     
       <ProductList></ProductList>
       </div> </row>
       
      </container>
    </div>
    
  );
}

export default App;
