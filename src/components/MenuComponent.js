import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";

function Menu(props) {
  const RenderMenuItem = ({ dish, onClick }) => {
    return (
      <Card key={dish.id} onClick={() => onClick(dish.id)}>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle tag="h6">{dish.name}</CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    );
  };

  const menu = props.dishes.map((item) => (
    <div key={item.id} className="col-12 col-md-5 my-1">
      <RenderMenuItem dish={item} />
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
}

export default Menu;
