import { GetStaticProps } from "next";
import Head from "next/head";
import DreamList from "../components/dreams/DreamList";
import clientPromise, { getAllDocuments } from "../lib/mongodb";
import { IDreamItem } from "../types/types";

interface HomePageProps {
  dreams: [IDreamItem];
}

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

export const getStaticProps: GetStaticProps = async () => {
  try {
    const client = await clientPromise;
    const dreams = await getAllDocuments(client, "dreams");

    return {
      props: {
        dreams: dreams.map((dream) => ({
          title: dream.title,
          location: dream.location,
          image: dream.image,
          id: dream._id.toString(),
        })),
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default HomePage;
