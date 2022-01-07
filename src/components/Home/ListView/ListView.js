import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ReactPaginate from "react-paginate";
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
  const { posts } = useSelector((state) => state);
  const { allPosts } = posts;

  // pagination
  const [offset, setOffset] = useState(0);
  const [post, setPost] = useState([]);
  const [perPage] = useState(6);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const posts = allPosts;
      const slice = posts.slice(offset, offset + perPage);
      const postData = slice.map((post) => (
        <div key={post.id}>
          <ListItem key={post.id} post={post} />
        </div>
      ));
      setPost(postData);
      setPageCount(Math.ceil(posts.length / perPage));
    };
    getData();
  }, [allPosts, offset, perPage]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  if (posts.status === "pending") {
    return (
      <div>
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div>
      {/* {allPosts.slice(0, 6).map((post) => (
        <ListItem key={post.id} post={post} />
      ))} */}
      {post}
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default ListView;
