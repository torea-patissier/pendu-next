export default function Inputs({name, value, onChange}) {

  return (
     <>
       <label htmlFor={name}
              className="block mb-2 text-lg flex justify-center m-8 font-medium text-gray-900 dark:text-white">{name}</label>
       <input type="text" id={name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={value} value={value} onChange={onChange} />
     </>
  )
}
