import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../../redux/slices/postSlice";
import ListItem from "./ListItem/ListItem";
import "./ListView.css";

const ListView = () => {
  // use dispatch for load post from api
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  // get posts from redux
  const { allPosts } = useSelector((state) => state.posts);
  return (
    <div data-aos="fade-right" data-aos-duration="1000">
      {allPosts.slice(0, 6).map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ListView;
