import React from "react";
import Friend from "./Friend/Friend";

const Friends = (props) => {
  const friendsList = props.friends.map((friend) => (
    <Friend avatar={friend.avatar} name={friend.name} />
  ));

  return <ul>{friendsList}</ul>;
};

export default Friends;
