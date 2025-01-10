import Transaction from "./Transaction"

export default function RecentTxns() {
    return (
        <section className="txns-container">
            <div className='txn-section-header'>
                <h2>Recent Transactions</h2>
                <a href="">See all</a>
            </div>
            <div className='table'>
                <div className="table-header">
                    <h5 className='date'>DATE</h5>
                    <h5 className='amount'>AMOUNT</h5>
                    <h5 className='type'>TYPE</h5>
                    <h5 className='desc'>DESCRIPTION</h5>
                    <h5 className='status'>STATUS</h5>
                </div>
                <div className='transaction-list'>
                    <Transaction />
                    <Transaction />
                    <Transaction />
                    <Transaction />
                    <Transaction />
                    <Transaction />
                </div>
            </div>
        </section>
    )
}