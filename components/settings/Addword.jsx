export default function Addword() {
  return (
     <>
       <form action="/send-data-here" method="post">
         <label htmlFor="last">Last name:</label>
         <input type="text" id="last" name="last"/>
         <button type="submit">Submit</button>
       </form>
     </>
  )
}
