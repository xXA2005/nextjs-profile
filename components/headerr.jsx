'use client';

const Headerr = () => (
  <header className="flex items-center justify-between py-10 px-20 min-w-full fixed">
  <div className="flex items-center">
    <h1 className="text-5xl font-bold"><span className="text-blue-800">A</span>b.5</h1>
  </div>
  <div className="flex justify-center">
    <a className="cursor-pointer font-bold py-2 px-4 rounded-md mx-2 border glow-white" href="#home">Home</a>
    <a className="cursor-pointer font-bold py-2 px-4 rounded-md mx-2 border glow-white" href="#projects">Projects</a>
    <a className="cursor-pointer font-bold py-2 px-4 rounded-md mx-2 border glow-white" href="#tools">Tools</a>
  </div>
  <div className="flex items-center">
  <a className="cursor-pointer font-bold py-2 px-4 rounded-md mx-2 border glow-white" href="#contact">Contact</a>
  </div>
</header>
);

export default Headerr;
