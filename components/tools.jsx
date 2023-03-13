'use client';

const balls = "rounded-full w-28 h-28 justify-center items-center flex border shadow-purple m-10"
const things = ["vs code",
                "visual studio",
                "python",
                "golang",
                "nodejs",
                "typescript",
                "javascript",
                "html css",
                ".NET",
                "next.js",
                "electron.js",
                "tailwindcss",
                "tensorflow",
                "mongodb",
                "surrealdb",
                "docker",]


const Tools = () => (
  <>
  <div className="hero-gradient min-h-screen w- w-full absolute z-[-1]"/>
  <div className="mt-10 flex items-center justify-center pt-48" id="tools">
    <div className="justify-center flex-wrap max-w-[50vw] flex">
      {things.map((thing) => (
        <div className={balls}>{thing}</div>
      ))}
    </div>
  </div>
  </>
);

export default Tools;
