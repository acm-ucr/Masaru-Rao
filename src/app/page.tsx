import Landing from "@/components/home/Landing";
import Events from "@/components/home/Events";

const Home = () => {
  return (
    <div className="h-screen w-screen flex-col items-center justify-center text-white">
      <Landing />
      <div className="relative">
        <div className="w-full border-8 border-rao-blue" />
        <div className="relative w-full border-8 border-rao-yellow" />
        <div className="absolute -bottom-4 left-1/2 top-0 h-0 w-0 border-l-[100px] border-r-[100px] border-t-[100px] border-l-transparent border-r-transparent border-t-rao-black" />
      </div>
      <div className="p-10" />
      <Events />
    </div>
  );
};

export default Home;
