import { poppins } from "@/pages";
import Head from "next/head";
import React from "react";

type Children = { children: React.ReactNode; title: string };

const PageLayout = ({ children, title = "Challenge" }: Children) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={poppins.className}>{children}</main>
    </>
  );
};

export default PageLayout;
