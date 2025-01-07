import GreyLogo from '../src/assets/images/grey-logo.svg';
import Home from '../src/assets/images/menu-icon.svg';
import Accounts from '../src/assets/images/accounts.svg';
import Payments from '../src/assets/images/payments.svg';
import Transactions from '../src/assets/images/txns.svg';
import Cards from '../src/assets/images/cards.svg';
import Reports from '../src/assets/images/reports.svg';
import Referral from '../src/assets/images/referral.png';

export default function Navigation() {
    return (
        <nav>
            <div className='nav-content'>
                <div className="logo-container">
                    <img src={GreyLogo} alt="Grey logo" />   
                </div>
                <div className='menu-list'>
                    <a href="/">
                        <div className="menu-item selected">
                            <img src={Home} alt="" />
                            <h4>Home</h4>
                        </div>
                    </a>
                    <a href="/">
                        <div className="menu-item">
                            <img src={Accounts} alt="" />
                            <h4>Accounts</h4>
                        </div>
                    </a>
                    <a href="/">
                        <div className="menu-item">
                            <img src={Payments} alt="" />
                            <h4>Payments</h4>
                        </div>
                    </a>
                    <a href="/">
                        <div className="menu-item">
                            <img src={Transactions} alt="" />
                            <h4>Transactions</h4>
                        </div>
                    </a>
                    <a href="/">
                        <div className="menu-item">
                            <img src={Cards} alt="" />
                            <h4>Cards</h4>
                        </div>
                    </a>
                    <a href="/">
                        <div className="menu-item">
                            <img src={Reports} alt="" />
                            <h4>Reports & Statements</h4>
                        </div>
                    </a>
                </div>
            </div>
            <div className="referral-container">
                <a href="/">
                    <img src={Referral} alt="" />
                </a>
            </div>

        </nav>
    )
}