import {
  ADD_ANVENTORY,
  GET_ANVERTORY,
  UPDATE_ANVERTORY,
  DELETE_ANVERTORY,
  SELECT_ANVERTORY,
  CLEAR_ANVERTORY,
  DELETE_SELECT_ANVERTORY,
} from '../constant/type';
const inialState = {
  anventory: [
    {
      id: 1,
      name: 'Sachin Sakri',
      email: 'sachinssakri@gmail.com',
      mobile: '9008810131',
      city: 'Bangalore',
      area: 'Jayanagar',
      state: 'Karnataka',
      zip: '560041',
      phone: '221555',
      display_name: 'sam_s',
      brand_name: 'Giva',
      fax: '2143423455',
      com_store_id: '32435453',
    },
    {
      id: 2,
      name: 'Sachin Sakri',
      email: 'sachinssakri@gmail.com',
      mobile: '9008810131',
      city: 'Bangalore',
      area: 'Jayanagar',
      state: 'Karnataka',
      zip: '560041',
      phone: '221555',
      display_name: 'sam_s',
      brand_name: 'Giva',
      fax: '2143423455',
      com_store_id: '32435453',
    },
    {
      id: 3,
      name: 'Sachin Sakri',
      email: 'sachinssakri@gmail.com',
      mobile: '9008810131',
      city: 'Bangalore',
      area: 'Jayanagar',
      state: 'Karnataka',
      zip: '586101',
      phone: '221555',
      display_name: 'sam_s',
      brand_name: 'Giva',
      fax: '2143423455',
      com_store_id: '32435453',
    },
    {
      id: 4,
      name: 'Sachin Sakri',
      email: 'sachinssakri@gmail.com',
      mobile: '9008810131',
      city: 'Bangalore',
      area: 'Jayanagar',
      state: 'Karnataka',
      zip: '586101',
      phone: '221555',
      display_name: 'sam_s',
      brand_name: 'Giva',
      fax: '2143423455',
      com_store_id: '32435453',
    },
  ],

  anventorys: null,
  selectedAnventorys: [],
};
export const AnventoryReducer = (state = inialState, action) => {
  switch (action.type) {
    case ADD_ANVENTORY:
      return {
        ...state,
        anventory: [action.payload, ...state.anventory],
      };
    case GET_ANVERTORY:
      let arr = state.anventory.filter((anventorys) => anventorys.id == action.payload);
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        anventorys: arr,
      };
    case UPDATE_ANVERTORY:
      return {
        ...state,
        anventory: state.anventory.map((anventory) => (anventory.id == action.payload.id ? action.payload : anventory)),
      };
    case DELETE_ANVERTORY:
      return {
        ...state,
        anventory: state.anventory.filter((anventory) => anventory.id != action.payload),
      };
    case SELECT_ANVERTORY:
      return {
        ...state,
        selectedAnventorys: action.payload,
      };
    case CLEAR_ANVERTORY:
      return {
        ...state,
        selectedAnventorys: [],
      };
    case DELETE_SELECT_ANVERTORY:
      return {
        ...state,
        anventory: [],
      };
    default:
      return state;
  }
};
