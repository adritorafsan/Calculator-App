import { useState } from "react"

function App() {
  const [input, setInput] = useState("");

  function Display(value) {
    setInput(input + value);
  }
  function calculate() {
    let answers = eval(input);
    setInput(answers)
  }
  function ac() {
    setInput("")
  }

  return (
    <>
      <form name="calc" className="bg-black p-3 rounded-xl ">
        <input type="text" value={input} className="h-[45px] w-full border-none outline-none text-2xl rounded-lg bg-black text-end pr-2 " />
        <div className="grid grid-rows-5 grid-cols-4  gap-3 text-3xl mt-2">
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#D4D4D2] cursor-pointer text-black" onClick={() => ac()}>AC</span>
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#FF9500] cursor-pointer" onClick={() => Display("0")} >+/-</span>
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#FF9500] cursor-pointer" onClick={() => Display("%")}>%</span>
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#FF9500] cursor-pointer" onClick={() => Display("/")}>/</span>
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#505050] cursor-pointer" onClick={() => Display("7")}>7</span>
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#505050] cursor-pointer" onClick={() => Display("8")}>8</span>
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#505050] cursor-pointer" onClick={() => Display("9")}>9</span>
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#FF9500] cursor-pointer" onClick={() => Display("*")}>*</span>
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#505050] cursor-pointer" onClick={() => Display("4")}>4</span>
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#505050] cursor-pointer" onClick={() => Display("5")}>5</span>
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#505050] cursor-pointer" onClick={() => Display("6")}>6</span>
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#FF9500] cursor-pointer" onClick={() => Display("-")}>-</span>
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#505050] cursor-pointer" onClick={() => Display("1")}>1</span>
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#505050] cursor-pointer" onClick={() => Display("2")}>2</span>
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#505050] cursor-pointer" onClick={() => Display("3")}>3</span>
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#FF9500] cursor-pointer" onClick={() => Display("+")}>+</span>
          <span className=" flex justify-start items-center pl-2 h-[60px]  rounded-full bg-[#505050] col-span-2 cursor-pointer" onClick={() => Display("0")}>0</span>
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#505050] cursor-pointer" onClick={() => Display(".")}>.</span>
          <span className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#FF9500] cursor-pointer" onClick={() => calculate()}>=</span>
        </div>
      </form>
      <h1>AdritoRafsan</h1>
    </>
  )
}

export default App
