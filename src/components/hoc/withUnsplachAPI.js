import React, {useContext} from 'react';
import { UnsplashContext } from '../../context/unsplashContext';

export default function withUnsplashAPI() {
  return (Wrapped) => {
    return (props) => {
      const unsplashAPI = useContext(UnsplashContext);

      return <Wrapped {...props} unsplashAPI={unsplashAPI} />;
    };
  };
}
