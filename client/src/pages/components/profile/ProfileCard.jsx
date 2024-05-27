
function ProfileCard({image, name, role, bio, child = false}) {
  

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">

      <div className="card-body flex-row gap-6 items-center">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={image} />
          </div>
        </div>
        <div>
          <div className="flex xl:flex-row xl:gap-3 xl:items-center gap-0 flex-col items-start">
            <h2 className="card-title whitespace-nowrap">{name}</h2>
            <div className={child ? "badge badge-accent" : "badge badge-primary"}>{role}</div>
          </div>
          {bio}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard