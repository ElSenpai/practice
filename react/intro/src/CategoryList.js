import React, { Component } from 'react'
import { ListGroup,ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
   
      state={categories:[{categoryId:1,categoryName:"Beverages"},
       {categoryId:2,categoryName:"Condiments"}]
       
    }; 
   
 

   

    render() {
        return (
            <div>
                
                <ListGroup>
                
                        {this.state.categories.map(category => (
                            
                            <ListGroupItem key={category.categoryId} onClick={()=>this.props.changeCategory(category)} >{category.categoryName}</ListGroupItem>
                        ))}
                </ListGroup>
                <h3>{this.props.currentCategory}</h3>
            </div>
        )
    }

}
