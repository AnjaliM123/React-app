const List=(props)=> {
    const {userData}=props
  //  const {usetId,id, title,body}=data
    console.log(userData)
    console.log("string")

    return (
       <ul>
           {userData.length ?userData.map((eachUser)=>(
               <li key={eachUser.id}>
                   {eachUser.title}
               </li>
           )):null} 
       </ul>
        
    )
}
export default List