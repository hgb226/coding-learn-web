"use client";

import { Skeleton } from "@mui/material";
import CodeScriptLesson from "~/components/lesson/code_script_lesson";
import SelectionQuiz from "~/components/lesson/selection_quiz";
import VideoQuestion from "~/components/lesson/video_lesson";
import { ELessonType } from "~/constant/enum/lessonEnum";
import useLesson from "~/hooks/lesson/useLesson";
import {
  TCodescriptLessonResourse,
  TSelectionLessonResourse,
  TVideoLessonResourse,
} from "~/types/api/lessonTypes";

const LessonContent = ({
  lessonId,
  courseId,
}: {
  lessonId: string;
  courseId: string;
}) => {
  const { data, isSuccess } = useLesson(lessonId);

  if (data && isSuccess) {
    return (
      <>
        {data.type === ELessonType.Video && (
          <VideoQuestion resource={data.resource as TVideoLessonResourse} />
        )}

        <div className="text-textMain mx-auto w-full max-w-[1440px] space-y-[20px] p-[20px_10px] lg:p-[40px_90px]">
          <h1 className="text-[48px] font-semibold">{data.title}</h1>
          <p className="text-[18px] font-normal leading-[140%] text-[#684949]">
            {data.description}
          </p>
        </div>
        {data.type === ELessonType.Selection && (
          <SelectionQuiz
            mode={"take"}
            questtionList={data.resource as TSelectionLessonResourse[]}
          />
        )}

        {data.type === ELessonType.CodeScript && (
          <CodeScriptLesson
            resource={data.resource as TCodescriptLessonResourse[]}
          />
        )}
      </>
    );
  }

  return (
    <>
      <LessonContentSkeleton />
    </>
  );
};

export default LessonContent;

export function LessonContentSkeleton() {
  return (
    <>
      <div className="text-textMain mx-auto w-full max-w-[1440px] space-y-[20px] p-[20px_10px] lg:p-[40px_90px]">
        <Skeleton variant="rounded" width={"100%"} height={"24px"} />
        <Skeleton variant="rounded" width={"100%"} height={"100px"} />
      </div>
      <Skeleton variant="rounded" width={"100%"} height={"400px"} />
    </>
  );
}
