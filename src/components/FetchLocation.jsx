import React, { useEffect, useState } from 'react'

function FetchLocation() {

    const [pincode, setPincode] = useState(0)
    const [postofficeneme, setPostoffice] = useState({})
    const [location, setLocation] = useState([])
    console.log(location);


    useEffect(() =>{
        
    async function fetchLocations(){
        const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        const data = await response.json()
        setLocation(data[0].PostOffice);
    }
    fetchLocations();
    },[pincode])
    

    
    
    const postoffice = (e) =>{
       setPostoffice(e.target.value )
       
    }
    const pincode_ = (e) =>{
        setPincode(e.target.value)
    }
    const submitedata = (e) =>{
        e.preventDefault();

    }

    if(!location){
        return(
            <>
              <div className="fillform">
            <form action="" onSubmit={submitedata} >
                    <input type="text" onChange={postoffice} name="loacation" placeholder="Enter postoffice name" />  <br /> <br />
                    <input type="text" onChange={pincode_} name='pincode' placeholder='Enter a Pin code' /> <br />
            </form>
       </div>   
            </>
          
        )

    }
    

  return (
    <div>
       <div className="fillform">
            <form action="" onSubmit={submitedata} >
                    <input type="text" onChange={postoffice} name="loacation" placeholder="Enter postoffice name" />  <br /> <br />
                    <input type="text" onChange={pincode_} name='pincode' placeholder='Enter a Pin code' /> <br />
            </form>
       </div>

       <div className="locationdata">
        <h1>Location Data</h1>
            <table>
                <tr>
                    <th>Postoffice Name</th>
                    <th>Pincode</th>
                    <th>State</th>
                    <th>Country</th>
                </tr>
                    {location.map((postoffice) =>(
                 <tr>
                            <td>{postoffice.Name}</td>
                            <td>{postoffice.Pincode}</td>
                            <td>{postoffice.State}</td>
                            <td>{postoffice.Country}</td>
                            </tr>
                    ))}

                 
            </table>
       </div>
    </div>
  )
}

export default FetchLocation