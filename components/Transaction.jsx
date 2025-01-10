import ChevronRight from '../src/assets/images/chevron-right.svg';

export default function Transaction() {
    return (
        <div className='transaction'>
            <p>
                03 January 2025, 12:23:00
            </p>
            <p>
                $12.00
            </p>
            <p>
                Withdraw
            </p>
            <p>
                Card withdrawal
            </p>
            <div className='status'>
                <span className='circle-divider'></span>
                <p>Completed</p>
            </div>
            <button>
                <img src={ChevronRight} alt="" />
            </button>
        </div>
    )
}