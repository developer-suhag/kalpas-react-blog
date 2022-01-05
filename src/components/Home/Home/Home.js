import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../../redux/slices/postSlice";
import PageLayout from "../../PageLayout/PageLayout";

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
      {/* page layout  */}
      <PageLayout>
        <h3>This is home {allPosts.length} </h3>
      </PageLayout>
    </div>
  );
};

export default Home;
