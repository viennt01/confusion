import React, { Component } from "react";
// eslint-disable-next-line
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        // selectedDish: null,
        // };
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    renderComments(comments){
        const comment=comment.map((item) =>{
            return(
                <div>
                    <p>{item.comment}</p>
                    <p>{item.author}</p>
                </div>
            );
        });
        return (
            <div className="col-12 col-sm-7">
                <h2>comment</h2>
                {comment}
            </div>
        )
    }

    render() {
        if(this.props.dish!=null){
            return(
                <div>
                    <div>
                        <renderDish dish={this.props.dish}/>
                        <renderComments comments={this.props.dishes.comments}/>
                    </div>
                </div>
            );
        }else{
            return(<div></div>)
        }
    }
}
export default DishDetail;
