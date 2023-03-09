import Inputs from "@/components/layouts/Inputs";
import SubmitButton from "@/components/layouts/SubmitButton";
import {useState} from "react";

export default function Addword() {

  const [word, setWord] = useState("");

  return (
     <>
       <form action="/send-data-here" className="w-1/2 p-5 bg-gray1 rounded-lg" method="post">
         <Inputs
            name="Add a new word"
            value={word}
            onchange={e => setWord(e.target.value)}
         />
         <div className="flex justify-center">
           <SubmitButton/>
         </div>
       </form>
     </>
  )
}
