import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnventory, updateAnventory } from './../Action/Action';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const EditUsers = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const anventory = useSelector((state) => state.anventoryList.anventorys);
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
  const [Category, setCategory] = useState('');
  const [Quantity, setQuantity] = useState('');
  useEffect(() => {
    if (anventory != null) {
      setname(anventory.name);
      setemail(anventory.email);
      setmobile(anventory.mobile);
      setcity(anventory.city);
      setArea(anventory.area);
      setState(anventory.state);
      setZip(anventory.zip);
      setPhone(anventory.phone);
      setDisplay_name(anventory.display_name);
      setBrand_name(anventory.brand_name);
      setFax(anventory.fax);
      setCom_store_id(anventory.com_store_id);
      setCategory(anventory.Category);
      setQuantity(anventory.Quantity);
    }
    dispatch(getAnventory(id));
  }, [anventory]);
  const onUpadteAdvantory = (e) => {
    e.preventDefault();
    const upadte_advantory = Object.assign(anventory, {
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
      Category: Category,
      Quantity: Quantity,
    });
    dispatch(updateAnventory(updateAnventory));
    history.push('/');
  };
  return (
    <div
      className='uk-card uk-card-default uk-card-body uk-width-1-2@m container'
      style={{ marginTop: '130px', borderRadius: '30px' }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '40px', marginTop: '-20px' }}>Update Users</h2>
      <form onSubmit={(e) => onUpadteAdvantory(e)}>
        <div className='row' style={{ marginLeft: '30px' }}>
          <div className='col-sm-6'>
            <div className='uk-margin'>
              <div className='uk-inline'>
                <p>Name</p>
                <input
                  className='uk-input'
                  type='text'
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='uk-margin'>
              <div className='uk-inline'>
                <p>Email</p>
                <input
                  className='uk-input'
                  type='text'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='row' style={{ marginLeft: '30px' }}>
          <div className='col-sm-6'>
            <div className='uk-margin'>
              <div class='uk-inline'>
                <p>Mobile</p>
                <input
                  className='uk-input'
                  type='text'
                  placeholder='Mobile Number'
                  value={mobile}
                  onChange={(e) => setmobile(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div class='uk-margin'>
              <div className='uk-inline'>
                <p>City</p>
                <input
                  className='uk-input'
                  type='text'
                  placeholder='City'
                  value={city}
                  onChange={(e) => setcity(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='row' style={{ marginLeft: '30px' }}>
          <div className='col-sm-6'>
            <div className='uk-margin'>
              <div class='uk-inline'>
                <p>Area</p>
                <input
                  className='uk-input'
                  type='text'
                  placeholder='Area'
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div class='uk-margin'>
              <div className='uk-inline'>
                <p>State</p>
                <input
                  className='uk-input'
                  type='text'
                  placeholder='State'
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='row' style={{ marginLeft: '30px' }}>
          <div className='col-sm-6'>
            <div className='uk-margin'>
              <div class='uk-inline'>
                <p>Zip</p>
                <input
                  className='uk-input'
                  type='text'
                  placeholder='Zip'
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div class='uk-margin'>
              <div className='uk-inline'>
                <p>Phone</p>
                <input
                  className='uk-input'
                  type='text'
                  placeholder='Phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='row' style={{ marginLeft: '30px' }}>
          <div className='col-sm-6'>
            <div className='uk-margin'>
              <div class='uk-inline'>
                <p>Display Name</p>
                <input
                  className='uk-input'
                  type='text'
                  placeholder='Display Name'
                  value={display_name}
                  onChange={(e) => setDisplay_name(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div class='uk-margin'>
              <div className='uk-inline'>
                <p>Brand Name</p>
                <input
                  className='uk-input'
                  type='text'
                  placeholder='Brand Name'
                  value={brand_name}
                  onChange={(e) => setBrand_name(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='row' style={{ marginLeft: '30px' }}>
          <div className='col-sm-6'>
            <div className='uk-margin'>
              <div class='uk-inline'>
                <p>Fax</p>
                <input
                  className='uk-input'
                  type='text'
                  placeholder='Fax'
                  value={fax}
                  onChange={(e) => setFax(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div class='uk-margin'>
              <div className='uk-inline'>
                <p>Store Id</p>
                <input
                  className='uk-input'
                  type='text'
                  placeholder='Store Id'
                  value={com_store_id}
                  onChange={(e) => setCom_store_id(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='row' style={{ marginLeft: '30px' }}></div>
        <button className='btn btn-primary' type='submit' style={{ marginLeft: '240px', marginTop: '20px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditUsers;
