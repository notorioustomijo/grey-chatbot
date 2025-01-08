import WalletCard from "./WalletCard";
import EyeOff from '../src/assets/images/eye-off.svg';

export default function WalletsContainer() {
    return (
        <section className="wallets-container">
            <div className='section-header'>
                <h2>Your Balances</h2>
                <button className="neutral">
                    <img src={EyeOff} alt="" />
                </button>
            </div>
            <div className='wallets'>
                <WalletCard wallet="dollar" />
                <WalletCard wallet="pound" />
                <WalletCard wallet="euro" />
                <WalletCard wallet="naira" />
            </div>
        </section>
    )
}