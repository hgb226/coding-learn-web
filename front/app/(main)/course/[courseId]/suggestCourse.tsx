"use client";
import { Skeleton } from "@mui/material";
import Courses_Thumbnail from "~/components/courses";
import useGetSuggestCourse from "~/hooks/course/useGetSuggestCourse";

const SuggestCourse = ({ courseId }: { courseId: string }) => {
  const { data } = useGetSuggestCourse(courseId);
  if (data) {
    return (
      <div className="p-[20px_10px] lg:p-10">
        <h3 className="mt-8 text-2xl font-bold">Related Courses</h3>
        <div className="my-4 flex flex-wrap">
          {data.map((item) => (
            <Courses_Thumbnail
              key={item._id}
              id={item._id}
              name={item.title}
              image={item.cover}
              views={item.participantsId.length}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="m-8 p-4">
      <h2 className="text-2xl font-bold">Related Courses</h2>
      <div className="mt-8 flex gap-10 overflow-auto py-2">
        {new Array(10).fill(0).map((_, index) => (
          <Skeleton
            key={index}
            variant="rounded"
            height={250}
            width={300}
            className="flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestCourse;
