import React, {useState, useEffect} from 'react';
import config from './config';
const InvoiceList = () => {
    const [invoices,setInvoices] = useState([]);
    const token = localStorage.getItem('token');

    const fetchInvoice = async() => {
        try{
            const res = await fetch(`${config.endpoint}/api/invoices`,{ 
              headers: {
                  Authorization: 'Bearer '  + token
              }  
        });
        console.log(res);
            const result = await res.json();
            console.log('data',result);
            setInvoices(result.data);
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
