import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import DreamList from "../components/dreams/DreamList";
import { IDreamItem } from "../types/types";

interface HomePageProps {
  dreams: [IDreamItem];
}

const DUMMY_DREAMS = [
  {
    id: "d1",
    title: "First Dream",
    image:
      "https://images.unsplash.com/photo-1563902452959-f07de6bf4d7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    location: "first city, first country",
    description: "This is the first dream on dreamcatcher.",
  },
  {
    id: "d2",
    title: "Second Dream",
    image:
      "https://images.unsplash.com/photo-1563902452959-f07de6bf4d7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    location: "second city, second country",
    description: "This is the second dream on dreamcatcher.",
  },
];

const HomePage = ({ dreams }: HomePageProps) => {
  return (
    <div className="">
      <Head>
        <title>Dreamcatcher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DreamList dreams={dreams} />
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       dreams: DUMMY_DREAMS,
//     },
//   };
// };

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      dreams: DUMMY_DREAMS,
    },
    revalidate: 3,
  };
};

export default HomePage;
