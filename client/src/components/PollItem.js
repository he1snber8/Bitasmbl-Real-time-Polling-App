// client/src/components/PollItem.js
import React from "react";
import socket from "../socket";
export default function PollItem({ poll }) {
  const vote = optionId => socket.emit("vote", { pollId: poll.id, optionId });
  return <div>{poll.question /* TODO: render options and buttons */}</div>;
}