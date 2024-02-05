// rfc
/*

 array ===>using object destructuring
 todos=[
    {
    title:"go to gym",
    description:"go to gym",
    }
  ]

*/
export default function Todos({todos}) {
  return (
    <>
        {
            todos.map(function (todos){
                    return  (
                        <div>
                            <h1>{todos.title}</h1>
                            <h2>{todos.description}</h2>
                            <button>{todos.completed==true?"Completed":"Mark  as Complete"}</button>
                        </div>
                    )
            })
        }
    </>
  )
}
