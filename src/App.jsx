import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("green");

  return (
    <>
      <div className="body h-screen w-full" style={{ backgroundColor: color }}>
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 py-1">
          <div className=" flex flex-wrap justify-center bg-white shadow-xl py-3 px-3 rounded gap-4">
            <button
              onClick={() => setColor("red")}
              className=" bg-red-500 py-1 px-3 rounded"
              style={{ backgroundColor: "red" }}
            >
              red
            </button>
            <button
              onClick={() => setColor("green")}
              className=" bg-green-500 py-1 px-3 rounded"
              style={{backgroundColor:"green"}}
            >
              green
            </button>
            <button
              onClick={() => setColor("blue")}
              className=" bg-blue-500 py-1 px-3 rounded"
              style={{backgroundColor:"blue"}}
            >
              blue
            </button>
            <button
              onClick={() => setColor("orange")}
              className=" bg-orange-500 py-1 px-3 rounded"
              style={{backgroundColor:"orange"}}
            >
              orange
            </button>
            <button
              onClick={() => setColor("gray")}
              className=" bg-gray-500 py-1 px-3 rounded"
              style={{backgroundColor:"gray"}}
            >
              gray
            </button>
            <button
              onClick={() => setColor("olive")}
              className=" bg-red-200 py-1 px-3 rounded"
              style={{backgroundColor:"olive"}}
            >
              olive
            </button>
            <button
              onClick={() => setColor("pink")}
              className=" bg-red-200 py-1 px-3 rounded"
              style={{backgroundColor:"pink"}}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("black")}
              className=" bg-red-200 py-1 px-3 rounded text-white"
              style={{backgroundColor:"black"}}
            >
              black
            </button>
            <button
              onClick={() => setColor("purple")}
              className=" bg-red-200 py-1 px-3 rounded "
              style={{backgroundColor:"purple"}}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
