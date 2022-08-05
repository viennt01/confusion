import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import DishDetail from "./DishdetailComponent";
import { useSelector } from "react-redux";
// import TestFetchComponent from "../../useFetch/TestFetchComponent";

function Main() {
  const dishes = useSelector((state) => state.dishes);
  const comments = useSelector((state) => state.comments);
  const promotions = useSelector((state) => state.promotions);
  const leaders = useSelector((state) => state.leaders);

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        dish={
          dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comments={comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
      />
    );
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route
          path="/home"
          component={() => (
            <Home
              dish={dishes.filter((dish) => dish.featured)[0]}
              promotion={
                promotions.filter((promotion) => promotion.featured)[0]
              }
              leader={leaders.filter((leader) => leader.featured)[0]}
            />
          )}
        />
        <Route path="/contactus" component={Contact} />
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route path="/about" component={() => <About leaders={leaders} />} />
        {/* <Route path="/test-fetch" component={() => <TestFetchComponent />} /> */}
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
