import React from 'react';

import Button from '@mui/material/Button';


function ResumeButton() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'myResume.pdf';
    link.download = 'Ayaz-Sarwar-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="resume-btn" style={{display:"flex",alignItems:"center"}}>
        <div style={{width:"fit-content",margin:"auto"}}>
        <Button id="resume-button" variant="outlined" onClick={downloadResume} style={{width:"fit-content",height:"40px",fontSize:"18px",borderRadius:"30px"}}>Download Resume</Button>
        </div>
    </div>
  );
}

export default ResumeButton;
