import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

function Landing() {
  return (
    <div>
      hello?
      

      <Button variant="text">Text</Button>
      <Slider defaultValue={30} />
      <Slider defaultValue={30} className="text-teal-600" />
      <Slider
        defaultValue={30}
        className="text-teal-600"
        slotProps={{ thumb: { className: 'rounded-sm' } }}
      />
    </div>
  )
}

export default Landing