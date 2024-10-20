"use client";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const project = ({ params }) => {
  const router = useRouter();
  if (params.id == "1") {
    // router.push('/projects/project1') //Usage: This method is typically used in a client-side navigation context within React components, particularly with the Next.js router.
    // redirect("/projects/project1"); // Usage: This function is often used in Next.js's server-side logic, such as in API routes or during server-side rendering (SSR) in getServerSideProps.
  }

  return <div>project {params.id}</div>;
};

export default project;
