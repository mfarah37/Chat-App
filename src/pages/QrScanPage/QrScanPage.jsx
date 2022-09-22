import { checkToken } from "../../utilities/users-service";
import QrReader from '../../components/QrReader/QrReader'
import './QrScanPage.css'

export default function QrScanPage() {
    const handleCheckToken = async () => {
        const expDate = await checkToken()
        console.log(expDate)
    }
    return(
        <div className="qr-container">
            <div className="qr-contents">
                <h1 className="qr-title">Qr Scanner</h1>
                <div className="qr-scanner">
                    <QrReader />
                </div>
                <div className="qr-end">
                    <button className="qr-btn" onClick={handleCheckToken}></button>
                </div>
            </div>
        </div>
    )
}