import { useState, useEffect } from 'react'
const RandomUser = (props) => {
  //url ng 3rdparty api
  const url = 'https://randomuser.me/api/'
  // define user that holds the value of objects from the 3rd party api
  const [user, setUser] = useState({})
  //function to get Random User
  const getRandomUser = async()=>{
    try {
      const res = await fetch(url, {mode: 'cors'})
      const randomUser = await res.json()
      setUser(randomUser.results[0])
      //test how to map the api
      console.log(user.picture.large)
    } catch (error) {
      console.log(error)
    }
  }
     //useEffect to reexecute RandomUser Function 
  useEffect(() => {
    getRandomUser()
  },[])
  const {picture, name, dob} = user
  return (
    <main>
    <div className='container bg-primary'>
       <h1>Get Random User</h1>
       <button onClick={getRandomUser}>Get User</button>
       <hr />
       <section>
       <img src={picture.large} alt={name.title + name.first} />
       <h1>🙍‍♂️Name: {name.title} {name.first} {name.last}</h1>
       <h2>🏥Date of Birth: {dob.date} Age: {dob.age}</h2>
       </section>
    </div>
    </main>
  )
}

export default RandomUser
