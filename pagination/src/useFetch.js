import React, { useEffect, useState } from "react";
import paginate from "./paginate";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const followers = await response.json();
    setData(paginate(followers));
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return { data, loading };
};

export default useFetch;
