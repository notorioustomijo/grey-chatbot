import rateCheck from "../src/assets/images/transfer.svg";
import chevronDown from "../src/assets/images/chevron-down.svg";
import setting from "../src/assets/images/setting.svg";

export default function HeaderBtns() {
    return (
        <div className="header-btns">
            <div className="btn-containers">
                <button className="rate-check">
                    <img src={rateCheck} alt="" />
                    See our rates
                </button>
                <button className="lang-check">
                    English 
                    <img src={chevronDown} alt="" />
                </button>
                <button className="setting">
                    <img src={setting} alt="" />
                </button>
            </div>

            <button className="account">A</button>
        </div>
    )
}