import GithubButton from "../components/GithubButton";

const Hero = () => {
  return (
    <div className="pt-28 px-10">
      <h1 className="text-8xl font-bold mb-4">Carlos Sanjuán</h1>
      <h2 className="text-3xl pl-2 mb-4 [text-shadow:0_0_5px_#00BFFF,0_0_10px_#00BFFF,0_0_20px_#00BFFF]">
        Desarrollador de Software
      </h2>
      <div className="flex gap-4">
        <GithubButton />
      </div>
    </div>
  );
};

export default Hero;
