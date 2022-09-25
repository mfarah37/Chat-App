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
        <div className="qr-container">
            <div className="qr-contents">
                <h1>QR SCAN</h1>
                <div className="qr-scanner">
                    <QrReader />
                </div>
                <div className="qr-end">
                    <Button className="qr-btn" variant="primary" onClick={handleCheckToken}></Button>
                </div>
            </div>
        </div>
    )
}