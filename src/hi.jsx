import React from "react";
function Hi() {
  const names = ["Brian", "Paul", "Krug", "Halley"];
  const listItems = names.map(name => <li>{name}</li>);
  return <ul>{listItems}</ul>;
}
export default Hi;
