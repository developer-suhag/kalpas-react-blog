import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../../redux/slices/postSlice";

const Home = () => {
  // use dispatch for load post from api
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  // get posts from redux
  const { allPosts } = useSelector((state) => state.posts);
  return (
    <div>
      <h3>This is home {allPosts.length} </h3>
    </div>
  );
};

export default Home;
