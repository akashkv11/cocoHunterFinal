import convertToBase64 from "../convert";
import axios from "axios";
export async function verifyFile(values){
    let val = convertToBase64(values);
    // console.log(val);
    const  data  = await axios.post('http://192.168.3.252:8085/detect')
}