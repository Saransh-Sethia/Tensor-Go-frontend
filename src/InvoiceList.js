import React, {useState, useEffect} from 'react';
import axios from 'axios';
import config from './config';
const InvoiceList = () => {
    const [invoices,setInvoices] = useState([]);

    const fetchInvoice = async() => {
        try{
            const res = await axios.get(`${config.endpoint}/api/invoices`,{ 
              headers: {
                  Authorization: 'Bearer ' + localStorage.getItem('token')
              }  
        });
        console.log(res);
            const result = await res.data;
            console.log('data',result);
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
