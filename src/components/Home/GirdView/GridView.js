import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../../redux/slices/postSlice";
import GridItem from "./GirdItem/GridItem";

const GridView = () => {
  // use dispatch for load post from api
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  // get posts from redux
  const { allPosts } = useSelector((state) => state.posts);
  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {allPosts.slice(0, 6).map((post) => (
          <GridItem key={post.id} post={post} />
        ))}
      </Row>
    </div>
  );
};

export default GridView;
