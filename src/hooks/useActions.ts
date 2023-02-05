import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import {
  clearStore,
  getUsersApi,
  getAlbumsApi,
  getUserApi,
  getUserAlbumsApi,
} from '../state';
import {
  setAuthData,
  setUsers,
  setAlbums,
  setUser,
  setUserAlbums,
} from '../state/slices';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      setAuthData,
      clearStore,
      getUsersApi,
      setUsers,
      getAlbumsApi,
      setAlbums,
      getUserApi,
      setUser,
      getUserAlbumsApi,
      setUserAlbums,
    },
    dispatch
  );
};
