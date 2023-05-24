import React from "react";
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';


export default function Help(){
    return(
        <div className="helpContainer" id="help">
            
            <div className="box">
                <TipsAndUpdatesOutlinedIcon fontSize="large" />
                <span>How to use? </span>
                <br />
                Drop your file into the toolbox above to begin.
            </div>
            <div className="box">
                <WorkspacePremiumOutlinedIcon fontSize="large" />
                <span>Don't worry about security.</span>
                <br />
                Your security is our priority. All our file transfers are secured
            </div>
            <div className="box">
                <LockOutlinedIcon fontSize="large" />
                <span>Access from anywhere</span>
                <br />
                You can access dectectorify video converter anywhere, with an internet connection.
            </div>
            <div className="box">
                <CloudUploadOutlinedIcon fontSize="large" />
                <span>Perform on all devices</span>
                <br />
                You do not need to register or install a software.
            </div>
            
        </div>
    );
}
