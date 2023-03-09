import Inputs from "@/components/layouts/Inputs";
import SubmitButton from "@/components/layouts/SubmitButton";
import {useState} from "react";

export default function Addword() {

  const [word, setWord] = useState("");
  const handleWord = (e) => {
    setWord(e.target.value)
  }

  const PostWord = async (word) => {
    try{
        const response = await fetch("http://localhost:3004/words", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
            word: word
            })
        })
      const data = await response.json();
      console.log(data);
      return data;
    }catch (e) {
      console.log(e)
      throw new Error(e);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    PostWord(word).then(r => console.log(r));
    setWord("");
  }

  return (
     <>
       <form onSubmit={(e) => onSubmit(e)} className="w-1/2 p-5 bg-gray1 rounded-lg">
         <Inputs
            name="Add a new word"
            value={word}
            onChange={handleWord}
         />
         <div className="flex justify-center">
           <SubmitButton/>
         </div>
       </form>
     </>
  )
}
