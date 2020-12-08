import React from 'react';
import { Link } from 'react-router-dom';
import { deleteAnventory } from './../Action/Action';
import { useDispatch } from 'react-redux';
import Avatar from 'react-avatar';
const TableList = ({ anventory, selectAll }) => {
  const dispatch = useDispatch();
  const {
    name,
    email,
    mobile,
    city,
    id,
    area,
    state,
    zip,
    phone,
    display_name,
    brand_name,
    fax,
    com_store_id,
  } = anventory;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{mobile}</td>
      <td>{city}</td>
      <td>{area}</td>
      <td>{state}</td>
      <td>{zip}</td>
      <td>{phone}</td>
      <td>{display_name}</td>
      <td>{brand_name}</td>
      <td>{fax}</td>
      <td>{com_store_id}</td>

      <td className='action'>
        <Link to={`/users/edit/${id}`}>
          <span>Edit</span>
        </Link>
        <Link to={`/users/view/${id}`} style={{ marginLeft: '1rem' }}>
          <span>See Info</span>
        </Link>
        <span
          onClick={() => dispatch(deleteAnventory(id))}
          style={{ cursor: 'pointer', marginLeft: '1rem' }}
          className='delete-btn'
        >
          Delete
        </span>
      </td>
    </tr>
  );
};

export default TableList;
