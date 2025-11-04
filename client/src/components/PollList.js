// client/src/components/PollList.js
import React, { useState, useEffect } from "react";
import socket from "../socket";
export default function PollList() {
  const [polls, setPolls] = useState([]);
  useEffect(() => {
    // TODO: load polls via REST
    socket.on("pollUpdate", data => setPolls(data));
  }, []);
  return <div>{/* Map polls to PollItem */}</div>;
}