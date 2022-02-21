import Head from "next/head";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { api } from "../services/api";

export default function Dashboard() {
  const { user } = useAuth();

  useEffect(() => {
    api
      .get("/me")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <h1>Dashboard: {user?.email}</h1>
    </>
  );
}
