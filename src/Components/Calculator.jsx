import React, { useState } from "react";

export default function Calculator() {
  const [inp1,setInp1]=useState()
  const [inp2,setInp2]=useState()
  const [resault,setResault]=useState()
    return (
    <div>
      <input
        type="number"
        name="Number"
        id="Number"
        placeholder="Type Your Number"
        value={inp1}
        onChange={(e) => setInp1(+e.target.value)}
      />
      <input
        type="number"
        name="Number"
        id="Number"
        placeholder="Type Your Number"
        value={inp2}
        onChange={(e) => setInp2(+e.target.value)}
      />
      <section>
        <button onClick={()=>setResault(inp1+inp2)}>+</button>
        <button onClick={()=>setResault(inp1-inp2)}>-</button>
        <button onClick={()=>setResault(inp1*inp2)}>*</button>
        <button onClick={()=>setResault(inp1/inp2)}>/</button>
        <button onClick={()=>setResault(resault==0)}>Reset</button>
      </section>
      <p>
        {resault}
      </p>
    </div>
  );
}
