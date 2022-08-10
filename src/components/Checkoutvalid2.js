import './validate.css'
export default function validateaddress()
{
    
    let x= document.getElementById('address');
    let address = x.children[1].children[1].value;
    //let address=document.getElementById("address").value;
    
    if(address=='' || address==undefined)
    {
        document.getElementById("address_error").innerText='Select delivery address'
        return(false)
    }
    else
    { 
        document.getElementById("address_error").innerHTML=''
        return(true)
    }
}
