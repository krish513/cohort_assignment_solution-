import { useState } from "react"
function App() {

  return (
    <div>
      <ProfileComponents/>
    </div>
  )
}

function ProfileComponents(){
  const [users, setUsers] = useState([{
    title : "Rita Correia", 
    location : "London",
    avatar : `https://thumbs.dreamstime.com/z/cute-cartoon-boy-geek-glasses-
              headphones-generated-generative-ai-blue-jacket-solid-bakcground-270471299.jpg`,
    bgImage: `https://c4.wallpaperflare.com/wallpaper/199/220/859/spots-reflections-soft-light-wallpaper-thumb.jpg`,
    followeres: 80,
    likes : 803,
    photos : 1.4
  }])

  return <div className="w-[100vw] h-[100vh] flex items-center bg-gray-300">
    {users.map((user)=>{
    return <ProfileCard user={user}/>
    })}
  </div>

}

function ProfileCard({user}){
  console.log("profilecard")
  return <div className="relative w-[22%] mx-auto flex flex-col justify-center items-center">
    {/* upper box */}
    <div className="h-[150px] ">
      <img src={user.bgImage}
        className="w-full"/>
    </div>
    {/* lower box */}
    <div className="relative w-full flex flex-col justify-center bg-gray-50">
      {/* avatar */}
      <div className="flex justify-center mx-auto">
        <img src={user.avatar}
          className="h-[110px] w-[110px] rounded-full absolute top-[-80px]"/>
      </div>
      {/* title & location */}
      <div className="flex flex-col justify-center mt-11 mx-auto">
        <p className=" font-bold text-lg">{user.title}</p>
        <p className="mx-auto font-light text-sm opacity-45">{user.location}</p>
      </div>
      {/* line */}
      <div class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
      {/* numbers */}
      <div className="flex justify-around mb-5">
        <div>
          <p className="font-bold text-lg">{user.followeres}K</p>
          <p className="font-light text-sm opacity-45 ml-[-12px]">Followers</p>
        </div>
        <div>
          <p className="font-bold text-lg">{user.likes}K</p>
          <p className="font-light text-sm opacity-45 ml-1">Likes</p>
        </div>
        <div>
          <p className="font-bold text-lg">{user.photos}K</p>
          <p className="font-light text-sm opacity-45 ml-[-4px]">Photos</p>
        </div>
      </div>
    </div>
  </div>
}

export default App
