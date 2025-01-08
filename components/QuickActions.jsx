import QuickAction from "./QuickAction";

export default function QuickActions() {
    return (
        <section className="actions-container">
            <div className='section-header'>
                <h2>Quick Actions</h2>
            </div>
            <div className='actions'>
                <QuickAction action='sendMoney'/>
                <QuickAction action='invoices'/>
                <QuickAction action='virtualCard'/>
                <QuickAction action='payBills'/>
            </div>
        </section>
    )
}