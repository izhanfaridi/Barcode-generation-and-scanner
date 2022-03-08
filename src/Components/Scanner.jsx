import React, {useState,useRef,useCallback} from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import axios from 'axios'




const Scanner = () =>{
    const[scanData,setScanData] = useState("")
    

    const handleAttendance=async (scanResult)=>{
        setScanData(scanResult.getText());
        if(scanData !== ""){
            try{
                const res = await axios.get("http://localhost:5000/api/student/find/"+scanData)
                alert("Student "+res?.data[0].name+" is present")
                //console.log(res);
            }catch(err){
                console.log(err);
            }
        }

    }
    
    return(
        <div>
            <BarcodeScannerComponent
                width={500}
                height={500}
                onUpdate={(err, result) => {
                    if (result) {
                        // setScanData(result.getText())
                        handleAttendance(result)
                    }
                    else setScanData("")
                }}
            />
            <p>{scanData}</p>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>        
    )
}

export default Scanner