import DollarSign from '../src/assets/images/dollar-currency.svg';
import EuroSign from '../src/assets/images/euro-currency.svg';
import NairaSign from '../src/assets/images/naira-currency.svg';
import PoundSign from '../src/assets/images/pound-currency.svg';
import US from '../src/assets/images/usa.png';
import EU from '../src/assets/images/euro.png';
import NG from '../src/assets/images/naija.png';
import UK from '../src/assets/images/uk.png';

export default function WalletCard({ wallet }) {
    const walletType = {
        dollar: {
            label: 'United States Dollar',
            sign: DollarSign,
            flag: US
        },
        euro: {
            label: 'Euro',
            sign: EuroSign,
            flag: EU
        },
        naira: {
            label: 'Nigerian Naira',
            sign: NairaSign,
            flag: NG
        },
        pound: {
            label: 'British Pound',
            sign: PoundSign,
            flag: UK
        }
    }

    const walletData = walletType[wallet];
    const walletName = walletData.label;
    const walletSign = walletData.sign;
    const walletFlag = walletData.flag;


    return (
            <div className='wallet'>
                <img src={walletFlag} alt="" className='wallet-flag'/>
                <div className="wallet-data">
                    <p className='wallet-name'>{walletName}</p>
                    <div className="wallet-balance">
                        <img src={walletSign} alt="" />
                        <h3>0<span className='float-separator'>.</span><span className="float-point">00</span></h3>
                    </div>
                </div>
            </div>
    )
}