import React from 'react'

 const UnsplashContext = React.createContext();

 const {Provider: UnsplashProvider, Consumer: UnsplashConsumer} =UnsplashContext 
 export {UnsplashContext, UnsplashProvider, UnsplashConsumer}