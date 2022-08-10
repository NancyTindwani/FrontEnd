import './validate.css'
export default function validate()
{
    let count=0;
    let address=document.getElementById("address").value;
    let postal_code=document.getElementById("postal_code").value
    let first_name=document.getElementById('first_name').value
    let last_name=document.getElementById('last_name').value
    let city=document.getElementById('city').value
    let country=document.getElementById('country').value

    checkaddress(address)
    checkpostalcode(postal_code)
    firstnamecheck(first_name)
    lastnamecheck(last_name)
    checkcity(city)
    checkcountry(country)
    checkbox()
    
    if(checkaddress(address) && checkpostalcode(postal_code) && firstnamecheck(first_name) && lastnamecheck(last_name) && checkcity(city) && checkcountry(country) && checkbox())
    {
        return true;
    }
    else
    {
        return false;
    }
     
    
}
function checkaddress(address)
{
    if(address.length!=0)
    {
        
        document.getElementById("address_error").innerHTML=''
        return(true)
    }
    else
    { 
        
        document.getElementById("address_error").innerText='Enter the delivery address'
        return(false)
        
    }
    
}
function checkpostalcode(postal_code)
{
    if(postal_code.length==6)
    {
        
        document.getElementById("postalcode_error").innerHTML=''
        return(true)
    }
    else
    { 
        
        document.getElementById("postalcode_error").innerText='Postal code should contain 6 digits'
        return(false)
    }
    
}
function firstnamecheck(first_name)
{
    if(first_name.length!=0)
    {
       
        document.getElementById("firstname_error").innerHTML=''
        return (true)
    }
    else
    { 
        
        document.getElementById("firstname_error").innerText='First name required'
        return(false)
    }
    
}
function lastnamecheck(last_name)
{
    if(last_name.length!=0)
    {
        document.getElementById("lastname_error").innerHTML=''
        return(true)
    }
    else
    { 
        document.getElementById("lastname_error").innerText='Last name required'
        return(false)
    }
    
}
function checkcity(city)
{
    if(city.length!==0)
    {
        
        document.getElementById("city_error").innerHTML=''
        return(true)
    }
    else
    { 
        
        document.getElementById("city_error").innerText='Please enter the city'
        return(false)
    }
    
}
function checkcountry(country)
{
    if(country.length!==0)
    {
        
        document.getElementById("country_error").innerHTML=''
        return(true)
    }
    else
    { 
        
        document.getElementById("country_error").innerText='Please enter the country'
        return(false)
    }
    
}
function checkbox()
{
    if(document.getElementById('checkbox').checked==true)
    {
        document.getElementById("checkbox_error").innerHTML=''
        return(true)
    }
    else
    {
        document.getElementById("checkbox_error").innerText='Please accept the terms and conditions'
        return(false)
    }
}
