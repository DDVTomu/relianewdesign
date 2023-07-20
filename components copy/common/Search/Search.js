import React, { useEffect } from "react";
import BlogMain from "@components/common/BlogMain/BlogMain";
import styles from "./search.module.scss";
import { useRouter } from "next/router";
export default function Search({ data = [], blogs = [] }) {
  let [value, setValue] = React.useState("");
  const router = useRouter();
  const urlKeyword = router.query;

  useEffect(() => {
    if (urlKeyword.s) {
      setValue(urlKeyword.s);
    }
  }, [urlKeyword]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const searchArrayByKeywordBig = (arr, keyword) => {
    keyword = keyword.toLowerCase();
    return arr.filter((item) => {
      for (let index in item) {
        if (
          typeof item[index].title === "string" &&
          item[index].title.toLowerCase().includes(keyword)
        ) {
          return true;
        }
      }
      return false;
    });
  };

  const searchArrayByKeyword = (arr, keyword) => {
    keyword = keyword.toLowerCase();

    return arr.map((listArr) => {
      const filteredItems = listArr.items.filter((item) => {
        // Convert item's title to lowercase for case-insensitive search
        return (
          typeof item.title === "string" &&
          item.title.toLowerCase().includes(keyword)
        );
      });

      return {
        expert: listArr.expert,
        items: filteredItems,
      };
    });
  };

  const searchBlog = searchArrayByKeyword(data, value);
  const searchBlogBig = searchArrayByKeywordBig(blogs, value);

  return (
    <div className="container">
      <input
        type="search"
        name="search"
        placeholder="Search..."
        className={styles.search}
        value={value}
        onChange={handleInputChange}
      />
      <BlogMain expertises={searchBlog} blogs={searchBlogBig} />
    </div>
  );
}
