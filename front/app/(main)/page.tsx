import Courses from "@/app/components/courses";

const HomePage: React.FC = async () => {
  return (
    <div>
      <h3 className="mx-8 my-4 text-2xl font-bold">New Courses</h3>
      <div className={"flex flex-row flex-wrap"}>
        <Courses
          id={"1"}
          image={"https://placehold.co/600x400/EEE/31343C"}
          name={"baolfhulksafhlsahflkjsdhflkhflkhflashflksdhflkasdhflkjhsdlkh"}
          views={12}
          rating={4}
        />
        <Courses
          id={"1"}
          image={"https://placehold.co/600x400/EEE/31343C"}
          name={"baolfhulksafhlsahflkjsdhflkhflkhflashflksdhflkasdhflkjhsdlkh"}
          views={12}
          rating={4}
        />
      </div>
      <h3 className="mx-8 my-4 text-2xl font-bold">Popular Courses</h3>
      <div className={"flex flex-row flex-wrap"}>
        <Courses
          id={"1"}
          image={"https://placehold.co/600x400/EEE/31343C"}
          name={"baolfhulksafhlsahflkjsdhflkhflkhflashflksdhflkasdhflkjhsdlkh"}
          views={12}
          rating={4}
        />
        <Courses
          id={"1"}
          image={"https://placehold.co/600x400/EEE/31343C"}
          name={"baolfhulksafhlsahflkjsdhflkhflkhflashflksdhflkasdhflkjhsdlkh"}
          views={12}
          rating={4}
        />
      </div>
    </div>
  );
};

export default HomePage;
