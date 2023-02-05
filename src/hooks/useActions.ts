import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import {
  clearStore,
  getUsersApi,
  getAlbumsApi,
  getUserApi,
  getUserAlbumsApi,
  getAlbumApi,
  getAlbumPhotosApi,
  getPhotoApi,
} from '../state';
import {
  setAuthData,
  setUsers,
  setAlbums,
  setUser,
  setUserAlbums,
  setAlbum,
  setPhotos,
  setPhoto,
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
      getAlbumApi,
      setAlbum,
      getAlbumPhotosApi,
      setPhotos,
      getPhotoApi,
      setPhoto,
    },
    dispatch
  );
};
