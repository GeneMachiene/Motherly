
function NoData({text}) {
  return (
    <div className="bg-white rounded-lg my-5 shadow-lg select-none">
      <img draggable="false" src="https://cdn.dribbble.com/users/1753953/screenshots/3818675/animasi-emptystate.gif" className="pt-10 w-full h-44 object-contain"/>
      <p className="text-gray-500 text-center m-0 px-6 pb-16">{text}</p>
    </div>
  )
}

export default NoData