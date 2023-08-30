import { fetchAPI } from "lib/api";
import React from "react";
import Image from "next/image";
import { ReactDOM, useEffect } from "react";
import { useRouter } from "next/router";
import ReactModal from "react-modal";
import BlogMain from "../BlogMain/BlogMain";
import Search from "@components/common/Search/Search";
const SearchBTN = ({ blogs, allBlogs }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openModal} className="btn btn-search">
        <Image src={"/images/search-icon.svg"} width={20} height={20} />
      </button>
      <ReactModal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <form>
          {/* <input
            placeholder="Search..."
            value={value}
            onChange={handleInputChange}
          /> */}
          <Search data={blogs} total={total} blogs={allBlogs} />
        </form>
      </ReactModal>
    </>
  );
};

export default SearchBTN;
