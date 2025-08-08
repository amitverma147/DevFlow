import Link from "next/link";

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const filterQuestion = [
  {
    _id: "1",
    title: "How to use Next.js?",
    content: "A beginner's guide to Next.js framework for React applications.",
    tags: [
      { _id: "1", name: "nextjs" },
      { _id: "2", name: "react" },
      { _id: "3", name: "javascript" },
    ],
    author: {
      _id: "author1",
      name: "John Doe",
      image: "/icons/user.svg",
    },
    createdAt: new Date("2024-01-15"),
    upvotes: 25,
    answers: 3,
    views: 150,
  },
  {
    _id: "2",
    title: "What is React?",
    content:
      "Understanding the basics of React library for building user interfaces.",
    tags: [
      { _id: "2", name: "react" },
      { _id: "3", name: "javascript" },
      { _id: "4", name: "frontend" },
    ],
    author: {
      _id: "author2",
      name: "Jane Smith",
      image: "/icons/user.svg",
    },
    createdAt: new Date("2024-01-10"),
    upvotes: 18,
    answers: 5,
    views: 200,
  },
];

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900 ">
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11 ">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search Questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filterQuestion.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
