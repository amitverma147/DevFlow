import Image from "next/image";
import Link from "next/link";

import ROUTES from "@/constants/routes";

import TagCard from "../cards/TagCard";

const hotQuestions = [
  { _id: "1", title: "How to create a custom hook in React?" },
  {
    _id: "2",
    title: "What is the difference between useState and useReducer?",
  },
  { _id: "3", title: "How to optimize performance in React applications?" },
  {
    _id: "4",
    title: "What are the best practices for managing state in React?",
  },
  { _id: "5", title: "How to handle forms in React?" },
  { _id: "6", title: "What is the purpose of useEffect in React?" },
];

const popularTags = [
  {
    _id: "1",
    name: "react",
    questions: 120,
  },
  {
    _id: "2",
    name: "javaScript",
    questions: 95,
  },
  {
    _id: "3",
    name: "typescript",
    questions: 50,
  },
  {
    _id: "4",
    name: "nextjs",
    questions: 75,
  },
  { _id: "5", name: "threejs", questions: 30 },
];

const RightSideBar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">🔥Hot Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              href={ROUTES.PROFILE(_id)}
              key={_id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className=" body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Populat Tags 🏷️</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
