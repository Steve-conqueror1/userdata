import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { loginUser, clearStore } from '../state';
import { setAuthData } from '../state/slices';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ setAuthData, loginUser, clearStore }, dispatch);
};
