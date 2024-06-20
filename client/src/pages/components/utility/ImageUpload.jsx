import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material";


function ImageUpload({image, setImage, setError, width=100, height=100, style={}}) {

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  function selectImage(event) {
    const image = event.target.files[0];
    const fileType = image['type'];
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

    if (!validImageTypes.includes(fileType)) {
      if(setError == null){
        console.log("Invalid file type. Use JPEG or PNG only.")
      }
      else{
        setError("Invalid file type. Use JPEG or PNG only.")
        return setTimeout(()=>(
          setError(null)
        ), 5000)
      }
    }

    setImage(image)
  }

  return (
    <IconButton
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      sx={{
        width:width,
        height:height,
        backgroundColor:"whitesmoke",
        border:2,
        borderStyle:"dashed",
        opacity:0.8,
        overflow:"hidden",
        ...style
      }}
    >
      <AddIcon />
      <img
        src={image? URL.createObjectURL(image):null} 
        style={{ 
          visibility: image ? "visible":"hidden",
          width:"100%",
          height:"100%",
          objectFit:"cover",
          position:"absolute",
          zIndex:-1,
        }} />
      <VisuallyHiddenInput type="file" accept="image/*" onChange={selectImage} />
    </IconButton>
  )
}

export default ImageUpload