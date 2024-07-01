import { Avatar, Chip, Divider } from "@mui/material"
import { useState } from "react"

function ProfileCard({image, name, role, bio, mother = false}) {
  const [open, setOpen] = useState();
  const show_detail = () => {
    setOpen(!open);
  }

  return (
    <div onClick={show_detail} className="box-border flex flex-col w-full bg-slate-50 shadow-lg mb-3 p-3 rounded-md gap-3
    hover:cursor-pointer hover:bg-purple-100 transition-colors">

      <div className={`flex items-center justify-between ${mother? "":"flex-row-reverse"}`}>
        <div className={`flex items-center gap-2 ${mother? "":"flex-row-reverse"}`}>
          <Avatar 
            src={image}
            sx={{ width: 56, height: 56 }}
          />
          <h2 className="m-0 xs:max-w-96 max-w-36 overflow-hidden overflow-ellipsis text-nowrap">{name}</h2>
        </div>
        <Chip label={role} color={mother? "secondary":"primary"} />
      </div>
      
      {open ? 
        <>
          <Divider/>
          <div className="border-0 border-solid border-l-2 border-blue-500 pl-3">
            {bio? bio:"No Bio"}
          </div>

          {mother? 
            <div className="flex flex-col shadow-md bg-slate-50 p-3">
              <div className="card-body">
                <span className="font-bold text-lg">Birthday</span>
                <Divider />
                <p>Birdthday</p>
                <span className="font-bold text-lg">Address</span>
                <Divider />
                <p>Block No. Street, City , Country</p>
                <span className="font-bold text-lg">Status</span>
                <Divider />
                <p>Married</p>
                <span className="font-bold text-lg">Sex</span>
                <Divider />
                <p>Female</p>
              </div>
            </div>:
            <></>
          }
        </>
         : 
        <></>
      }

    </div>
  )
}

export default ProfileCard