import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

function DishDetail(props) {
  const renderDish = (dish) => {
    return (
      <div className="col-12 col-md-5">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };

  const renderComment = (comments) => {
    const comment = comments.map((item) => {
      return (
        <div>
          <p>{item.comment}</p>
          <p>
            {item.author} {item.date}
          </p>
        </div>
      );
    });

    return (
      <div className="col-12 col-md-7">
        <h2>comments</h2>
        {comment}
      </div>
    );
  };

  const renderDetail = (dish, comments) => {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 m-1">{renderDish(dish)}</div>
          <div className="col-12 col-md-5 m-1">{renderComment(comments)}</div>
        </div>
      </div>
    );
  };

  return <>{renderDetail(props.dish, props.comments)}</>;
}

export default DishDetail;
