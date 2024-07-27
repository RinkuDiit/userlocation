import React, { useEffect, useState } from 'react'

function FetchLocation() {

    const [pincode, setPincode] = useState(0)
    const [postofficeneme, setPostoffice] = useState('')
    const [postofficeses, setpostofficeses] = useState(0)
    const [location, setLocation] = useState(null)


    console.log('post'+{postofficeses});
    console.log(location);


    useEffect(() =>{
        
    async function fetchLocations(){
        const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        const data = await response.json()
        setLocation(data[0].PostOffice);

      

    }
    fetchLocations();
    },[pincode])
    

    
    
   
    const pincode_ = (e) =>{
        setPincode(e.target.value)
    }
    const submitedata = (e) =>{
        e.preventDefault();

    }
    const handle_post = (e) => {
        debugger
        setPostoffice(e.target.value);
        const postofficeNumer = location.findIndex((postoffice) => postoffice.Name === e.target.value);
        setpostofficeses(postofficeNumer);
        // console.log(location.findIndex((postoffice) => postoffice.Name === e.target.value));
       
      };
    
   



    if(!location){
        return(
            <>
              <div className="fillform">
            <form action="" onSubmit={submitedata} >
             <input type="text" onChange={pincode_} name='pincode' placeholder='Enter a Pin code' /> <br />
            </form>
       </div>   
            </>
          
        )

    }

//  console.log(location[{postofficeses}].Name);
    

  return (
    <div>
       <div className="fillform">
            <form action="" onSubmit={submitedata} >
                    <input type="text" onChange={pincode_} name='pincode' placeholder='Enter a Pin code' /> <br /> <br />
                     <select onChange={handle_post}  name="" id="">
                    {location.map((postoffice) =>(
                        <option  name={location.indexOf(postoffice.Name, location)}>{postoffice.Name}</option>

                    ))}
                    </select>
            </form>
       </div>

       <div className="locationdata" >
        <p className='h3'>Location Data</p>
        <p className=''>Postoffice: {postofficeneme}</p>
        {/* <h2>length:{postofficeses}</h2> */}
            {/* <table>
                <tr>
                    <th>Postoffice Name</th>
                    <th>Pincode</th>
                    <th>Block</th>
                    <th>District</th>
                    <th>State</th>
                    <th>Country</th>

                </tr>
                {postofficeses >= 0 ? (
                 <tr>
                    
                            <td>{location[postofficeses].Name}</td>
                            <td>{location[postofficeses].Pincode}</td>
                            <td>{location[postofficeses].Block}</td>
                            <td>{location[postofficeses].District}</td>
                            <td>{location[postofficeses].State}</td>
                            <td>{location[postofficeses].Country}</td>
                </tr>
                    ) : (
                        <tr>
                          <td colSpan="4">No location data available</td>
                        </tr>
                      )}

                 
            </table> */}
            <table class="table">
  
  <tbody>
    <tr>
      <th scope="row">1</th>
      <th>Post Office Name</th>
      <td>{location[postofficeses].Name}</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <th>Pincode</th>
        <td>{location[postofficeses].Pincode}</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <th>Block</th>
        <td>{location[postofficeses].Block}</td>
    </tr>
    <tr>
        <th scope="row">4</th>
        <th>District</th>
        <td>{location[postofficeses].District}</td>

    </tr>
    <tr>
        <th scope="row">5</th>
        <th>State</th>
        <td>{location[postofficeses].State}</td>
    </tr>
    <tr>
        <th scope="row">6</th>
        <th>Country</th>
        <td>{location[postofficeses].Country}</td>
    </tr>

   
   
  </tbody>
</table>

       </div>  
    </div>
  )
}

export default FetchLocation