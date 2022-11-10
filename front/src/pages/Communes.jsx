import React from 'react'
import Navigation from '../Components/Navigation';
import axios from 'axios';
import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Communes() {
    const navigate = useNavigate();
      const [userInfo, setuserInfo] = useState({
        name: '',
        adress: '',
        city: '',
        country: '',
      });
      const onChangeValue = (e) => {
        setuserInfo({
          ...userInfo,
          [e.target.name]:e.target.value
        });
      }
      const handleSubmit = async(event) => {
        try {
        event.preventDefault();
        event.persist();
        axios.post('http://apiphp/back/ajout.php', {
          name: userInfo.name,
          adress: userInfo.adress,
          city: userInfo.city,
          country: userInfo.country,
        })
        .then(res =>{
          console.log(res.data);
          navigate('/')
          return;
        })
      } catch(error){throw error}
        
      };
    
    return (
        <>
        <Navigation/>
        <div>
           <h1>Communes</h1> 
           <form action="" onSubmit={handleSubmit}>
      <table collSpacing="10">
        <tbody>
          <tr>
            <th>
              <label htmlFor="">Name</label>
            </th>
            <td>
              <input type="text" name="name" id="" onChange={onChangeValue}/>
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="">Adresse</label>
            </th>
            <td>
              <input type="text" name="adress" id="" onChange={onChangeValue}/>
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="">City</label>
            </th>
            <td>
              <input type="text" name="city" id="" onChange={onChangeValue}/>
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="">Country</label>
            </th>
            <td>
              <input type="text" name="country" id="" onChange={onChangeValue}/>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align='right'><input type="submit" value="ajouter" /></td>
          </tr>
        </tbody>
      </table>
    </form>
    
    
        </div>
        </>
        
    )
}

export default Communes;
