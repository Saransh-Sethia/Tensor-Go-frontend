import React, {useState, useEffect} from 'react';
import axios from 'axios';

const InvoiceList = () => {
    const [invoices,setInvoices] = useState([]);

    const fetchInvoice = async() => {
        try{
            const res = await axios.get(`http://localhost:5000/api/invoices`);
            setInvoices(res.data);
        }catch(error){
            console.log('Error Fetching Invoices', error)
        }

    };

    useEffect(()=>{
        fetchInvoice();
    },[])
  return (
    <div>
      <h2>Invoice List</h2>
      <ul>
      {
        invoices.map((invoice, id) => (
<li key={invoice.id}>
    ID: {invoice.id},
    Amount: ${invoice.amount},
    Due Date: {invoice.durDate},
    Recipient: {invoice.recipient}

</li>
        ))
      }
      </ul>
    </div>
  )
}

export default InvoiceList
