import React from "react";

function ListItem({ index, value }) {
  return <li key={index}>{value}</li>;
}

export default ListItem;
