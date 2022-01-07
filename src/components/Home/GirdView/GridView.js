import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import ReactPaginate from "react-paginate";
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
  const { posts } = useSelector((state) => state);
  const { allPosts } = posts;

  // pagination
  const [offset, setOffset] = useState(0);
  const [newsPosts, setNewsPosts] = useState([]);
  const [perPage] = useState(6);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const posts = allPosts;
      const slice = posts.slice(offset, offset + perPage);
      const postData = slice.map((post) => (
        <div key={post.id}>
          <GridItem key={post.id} post={post} />
        </div>
      ));
      setNewsPosts(postData);
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
      <div className="text-center">
        <Spinner animation="border" />
      </div>
    );
  }
  return (
    <div data-aos="fade-right" data-aos-duration="1000">
      {/* posts  */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {newsPosts}
      </Row>

      <div className="d-flex justify-content-center align-items-center mt-4">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={0}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          pageRangeDisplayed={2}
        />
      </div>
    </div>
  );
};

export default GridView;
