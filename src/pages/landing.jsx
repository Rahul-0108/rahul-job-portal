import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 elevated-div">
      <section className="text-center ">
        <h1 className="flex flex-col items-center justify-center font-extrabold text-4xl sm:text-6xl lg:text-8xl py-4">
          Explore Jobs
        </h1>
      </section>
      <div className="flex gap-2 justify-center">
        <Link to={"/post-job"}>
          <Button className="bg-red-500" size="xl" style={{width:"140px"}}>
            Hire Someone
          </Button>
        </Link>
        <Link to={"/jobs"}>
          <Button className="bg-blue-800" size="xl" style={{width:"140px"}}>
            Apply Job
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default LandingPage;
