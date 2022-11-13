import {Link} from 'react-router-dom'
function Policies(){
    return(<div>
        <h1>CANCELLATION & REFUND POLICY</h1>
        Cancellations are subject to the policy as set by the respective service provider. <br/>
        You can view the cancellation policies of the respective service provider on their information page prior to making a booking or purchase.<br/> The cancellation policy is also included in your booking ticket in your order history.
        Cancellations can be initiated by the users themselves on your booking ticket. <br/>The refund amount due will be displayed prior to seeking confirmation of the cancellation. The refund amount will be credited back into the user’s account,<br/> to the same source through which the payment was made, within 5-7 working days, post initiating the cancellation.<br/>
        <Link to = "/" >Home</Link>
    </div>)
}
export default Policies