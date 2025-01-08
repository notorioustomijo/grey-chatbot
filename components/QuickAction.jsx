import SendImg from '../src/assets/images/send.png';
import InvoiceImg from '../src/assets/images/invoices.png';
import CardImg from '../src/assets/images/virtual-card.png';
import BillImg from '../src/assets/images/bills.png';

export default function QuickAction({ action }) {
    const actionType = {
        sendMoney: {
            img: SendImg,
            title: 'Send Money',
            details: 'Send money to 80+ countries instantly'
        },
        invoices: {
            img: InvoiceImg,
            title: 'Invoices',
            details: 'Create and send multi-currency invoices to clients and employers'
        },
        virtualCard: {
            img: CardImg,
            title: 'Virtual card',
            details: 'Shop, subscribe and pay bills securely online'
        },
        payBills: {
            img: BillImg,
            title: 'Pay Bills',
            details: 'Pay for your internet, cable subscription and other utility bills all in one place'
        }
    }

    const actionData = actionType[action];

    const actionImg = actionData.img;
    const actionTitle = actionData.title;
    const actionDetails = actionData.details;

    return (
        <div className='action'>
                <img src={actionImg} alt=""/>
                <div className="action-details">
                    <h4>{actionTitle}</h4>
                    <p>
                        {actionDetails}
                    </p>
                </div>
        </div>
    )
}