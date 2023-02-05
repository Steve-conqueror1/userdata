import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { clearStore, getUsersApi, getAlbumsApi } from '../state';
import { setAuthData, setUsers, setAlbums } from '../state/slices';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    { setAuthData, clearStore, getUsersApi, setUsers, getAlbumsApi, setAlbums },
    dispatch
  );
};
