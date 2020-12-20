import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from './header';
export default function Layout({children}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
