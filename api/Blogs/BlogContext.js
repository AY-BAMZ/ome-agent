import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import URI_MAP from "../uri/URI_MAP";

export const BlogContext = createContext({});

const BlogProvider = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ordering, setOrdering] = useState("")
  const [search, setSearch] = useState("")
  const [limit, setLimit] = useState(20)
  const [offset, setOffset] = useState(0)

  //   sign up request
  
  
  const handleGetBlogs = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(URI_MAP.ome.allblogs, {
        params: {
          limit: limit,
          offset: offset,
          ordering: ordering,
          search: search,
        },
      });
      setIsLoading(false);
      const data = response.data;
      setBlogs(data.results);
      // console.log('data', data)
    } catch (error) {
        console.log("error", error.response);
        setIsLoading(false);
    }
};
// console.log("response", blogs);

  useEffect(() => {
    
    handleGetBlogs() 
  }, [])

  return (
    <BlogContext.Provider
      value={{
        blogs,
        handleGetBlogs,
        isLoading,
        setIsLoading,
        ordering, setOrdering,
        search, setSearch,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  //   if (!context) throw new Error("useBlogContext must be used in HouseProvider");

  return context;
};
export default BlogProvider;
