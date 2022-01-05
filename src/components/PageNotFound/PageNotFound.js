import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import error from "../../images/404.gif";

const PageNotFound = () => {
  return (
    <Container className="py-5 text-center">
      <img src={error} alt="" />
      <div>
        <Link to="/">
          <Button variant="" className="kalpas-btn">
            Go Back to Home
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default PageNotFound;
