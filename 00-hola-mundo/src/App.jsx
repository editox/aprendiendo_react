import React from "react";
import "./App.css";
import "./TwitterFollowCard";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const format = (usuario)=>`@${usuario}`
  const midudev = {isFollowing: true, useName: 'midudev'}
  return (
    //<React.Fragment>
    <section className="App">
      <TwitterFollowCard
        formatUserName={format}
        userName="midudev"
        initialIsFollowing={true}
      >
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={format}
        userName="vxnder"
      >
        name="Vanderhart"
      </TwitterFollowCard>
    </section>
    // </React.Fragment>
  );
}
