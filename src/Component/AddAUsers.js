import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Anvantory.css';
import { addAnventory } from './../Action/Action';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';
const AddAUsers = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [mobile, setmobile] = useState('');
  const [city, setcity] = useState('');
  const [area, setArea] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [display_name, setDisplay_name] = useState('');
  const [brand_name, setBrand_name] = useState('');
  const [fax, setFax] = useState('');
  const [com_store_id, setCom_store_id] = useState('');
  const createAdvantory = (e) => {
    e.preventDefault();
    const new_anventory = {
      id: shortid.generate(),
      name: name,
      email: email,
      mobile: mobile,
      city: city,
      area: area,
      state: state,
      zip: zip,
      phone: phone,
      display_name: display_name,
      brand_name: brand_name,
      fax: fax,
      com_store_id: com_store_id,
    };
    dispatch(addAnventory(new_anventory));
    history.push('/');
  };
  return (
    <div
      className='uk-card uk-card-default uk-card-body uk-width-1-2@m container'
      style={{ marginTop: '130px', borderRadius: '30px', width: '500px' }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '40px', marginTop: '-20px' }}>Add Users</h2>
      <form onSubmit={(e) => createAdvantory(e)} style={{ marginLeft: '50px' }}>
        <div className='uk-margin'>
          <div className='uk-inline'>
            <input
              className='uk-input'
              type='text'
              required
              style={{ width: '300px' }}
              placeholder='Enter the Name'
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
        </div>
        <div className='uk-inline'>
          <input
            className='uk-input'
            type='text'
            style={{ width: '300px' }}
            required
            placeholder='Enter the Emai id'
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className='uk-margin'>
          <div class='uk-inline'>
            <input
              className='uk-input'
              type='text'
              style={{ width: '300px' }}
              required
              placeholder='Enter the Mobile'
              value={mobile}
              onChange={(e) => setmobile(e.target.value)}
            />
          </div>
        </div>
        <div className='uk-margin'>
          <div class='uk-inline'>
            <input
              className='uk-input'
              type='text'
              style={{ width: '300px' }}
              required
              placeholder='Enter the City'
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
          </div>
        </div>
        <div className='uk-margin'>
          <div className='uk-inline'>
            <input
              className='uk-input'
              type='text'
              required
              style={{ width: '300px' }}
              placeholder='Enter the Area'
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
        </div>
        <div className='uk-inline'>
          <input
            className='uk-input'
            type='text'
            style={{ width: '300px' }}
            required
            placeholder='Enter the State'
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className='uk-margin'>
          <div class='uk-inline'>
            <input
              className='uk-input'
              type='text'
              style={{ width: '300px' }}
              required
              placeholder='Enter the Zip'
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
        </div>
        <div className='uk-margin'>
          <div class='uk-inline'>
            <input
              className='uk-input'
              type='text'
              style={{ width: '300px' }}
              required
              placeholder='Enter the Phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className='uk-margin'>
          <div class='uk-inline'>
            <input
              className='uk-input'
              type='text'
              style={{ width: '300px' }}
              required
              placeholder='Enter the Display Name'
              value={display_name}
              onChange={(e) => setDisplay_name(e.target.value)}
            />
          </div>
        </div>
        <div className='uk-margin'>
          <div class='uk-inline'>
            <input
              className='uk-input'
              type='text'
              style={{ width: '300px' }}
              required
              placeholder='Enter the Brand Name'
              value={brand_name}
              onChange={(e) => setBrand_name(e.target.value)}
            />
          </div>
        </div>
        <div className='uk-margin'>
          <div class='uk-inline'>
            <input
              className='uk-input'
              type='text'
              style={{ width: '300px' }}
              required
              placeholder='Enter the Fax'
              value={fax}
              onChange={(e) => setFax(e.target.value)}
            />
          </div>
        </div>
        <div className='uk-margin'>
          <div class='uk-inline'>
            <input
              className='uk-input'
              type='text'
              style={{ width: '300px' }}
              required
              placeholder='Enter the Store Id'
              value={com_store_id}
              onChange={(e) => setCom_store_id(e.target.value)}
            />
          </div>
        </div>
        <button className='btn btn-primary' type='submit' style={{ marginLeft: '100px', marginTop: '20px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddAUsers;
