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
    description: "A beginner's guide to Next.js.",
    tags: ["nextjs", "react", "javascript"],
  },
  {
    _id: "2",
    title: "What is React?",
    description: "Understanding the basics of React.",
    tags: ["react", "javascript", "frontend"],
  }
]

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
        {/* //TODO: Fetch and map through questions based on searchParams */}
        {filterQuestion.map((question) => (
          <QuestionCard key={QuestionCard._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
