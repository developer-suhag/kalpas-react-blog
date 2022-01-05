import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import PageLayout from "../../PageLayout/PageLayout";

const Home = () => {
  return (
    <div>
      {/* page layout  */}
      <PageLayout>
        <Container className="py-5">
          <Outlet />
        </Container>
      </PageLayout>
    </div>
  );
};

export default Home;
