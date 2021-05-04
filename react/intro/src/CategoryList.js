import React, { Component } from 'react'
import { ListGroup,ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
   
      state={
          categories:[] 
    }; 

    componentDidMount(){
        this.getCategories();
    }
   
 getCategories=()=>{
     fetch("http://localhost:3000/categories")
     .then(res=>res.json())
     .then(data=>this.setState({categories:data}));
 }

   

    render() {
        return (
            <div>
                
                <ListGroup>
                
                        {this.state.categories.map(category => (
                            
                            <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}
                            key={category.id} onClick={()=>this.props.changeCategory(category)} >{category.categoryName}</ListGroupItem>
                        ))}
                </ListGroup>
               
            </div>
        )
    }

}
