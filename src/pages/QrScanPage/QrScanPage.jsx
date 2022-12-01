import { checkToken } from "../../utilities/users-service";
import QrReader from '../../components/QrReader/QrReader';
import './QrScanPage.css';
import Button from 'react-bootstrap/Button';

export default function QrScanPage() {
    const handleCheckToken = async () => {
        const expDate = await checkToken()
        console.log(expDate)
    }
    return(
    
            <QrReader />
        
    )
}