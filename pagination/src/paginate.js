import React from "react";

const paginate = (data) => {
  const itemsPP = 9;
  const pages = Math.ceil(data.length / itemsPP);
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPP;
    return data.slice(start, start + itemsPP);
  });
  return newFollowers;
};

export default paginate;
