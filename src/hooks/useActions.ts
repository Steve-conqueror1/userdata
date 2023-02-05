import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { clearStore, getUsersApi } from '../state';
import { setAuthData, setUsers } from '../state/slices';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    { setAuthData, clearStore, getUsersApi, setUsers },
    dispatch
  );
};
