import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';
import { Form, Label, Input } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const handleInputChange = ({ target }) => {
    dispatch(setFilterValue(target.value));
  };
  return (
    <Form>
      <Label>Find contacts by name</Label>
      <Input type="text" onChange={handleInputChange} />
    </Form>
  );
}

export default Filter;
