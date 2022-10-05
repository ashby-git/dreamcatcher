import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import DreamDetail from "../components/dreams/DreamDetail";

interface IParams extends ParsedUrlQuery {
  dreamId: string;
}

function DreamDetailsPage() {
  return (
    <DreamDetail
      image="https://images.unsplash.com/photo-1563902452959-f07de6bf4d7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
      title="First Dream"
      location="Some City, Some Country"
      description="This is an example of a dream. I dreamed that I was flying in the sky. It was so beautiful. I felt weightless and could fly in any direction that I wanted to. I flew over forests, in and out of buildings, anything was possible."
    />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          dreamId: "d1",
        },
      },
      {
        params: {
          dreamId: "d2",
        },
      },
    ],
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // fetch data
  const { dreamId } = context.params as IParams;
  console.log(dreamId);

  return {
    props: {
      dreamData: {
        id: dreamId,
        image:
          "https://images.unsplash.com/photo-1563902452959-f07de6bf4d7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        title: "First Dream",
        location: "Some City, Some Country",
        description:
          "This is an example of a dream. I dreamed that I was flying in the sky. It was so beautiful. I felt weightless and could fly in any direction that I wanted to. I flew over forests, in and out of buildings, anything was possible.",
      },
    },
  };
};

export default DreamDetailsPage;
