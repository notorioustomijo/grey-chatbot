import HeaderText from "./HeaderText";
import HeaderBtns from "./HeaderBtns";

export default function Header() {
    return (
        <header>
            <div className="header-content">
                <HeaderText />
                <HeaderBtns />
            </div>
        </header>
    )
}