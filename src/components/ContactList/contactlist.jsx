import PropTypes from 'prop-types';
import css from './contaxtlist.module.css';

// import { deleteContact } from 'components/redux/actions/actions';
import { deleteContact } from 'components/redux/slice/contactsSlice';
import { useDispatch } from 'react-redux';

export function ContactList({ contacts }) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    return dispatch(deleteContact(id));
  };
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          {name}: {number}
          <button
            className={css.btn}
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};