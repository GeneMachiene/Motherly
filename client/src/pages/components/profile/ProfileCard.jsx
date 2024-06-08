import { Avatar, Chip, Divider } from "@mui/material"

function ProfileCard({image, name, role, bio, child = false}) {
  

  return (
    <div className="box-border flex flex-col w-full bg-slate-50 shadow-lg mb-3 p-3 rounded-md gap-3">

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar 
            src={image}
            sx={{ width: 56, height: 56 }}
          />
          <h2 className="m-0">{name}</h2>
        </div>
        <Chip label={role} color={child? "secondary":"primary"} />
      </div>
      
      {bio ? 
        <>
          <Divider/>
          <div className="border-0 border-solid border-l-2 border-blue-500 pl-3">
            {bio}
          </div>
        </>
         : 
        <></>
      }

    </div>
  )
}

export default ProfileCard