import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Notify({"open": snackOpen, "setOpen": setSnackOpen, message="Empty Notification"}) {

  const snackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={snackClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={snackOpen}
      autoHideDuration={3000}
      onClose={snackClose}
      message={message}
      action={action}
    />
  )
}

export default Notify