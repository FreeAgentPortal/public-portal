"use client";
import { useParams } from "next/navigation";
const Team = () => {
  const params = useParams();
  const teamId = params["id"];
  return <div>{teamId}</div>;
};

export default Team;
