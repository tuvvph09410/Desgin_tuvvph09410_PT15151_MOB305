import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Profile({ route, navigation }) {
    const { name } = route.params;
    return (
      
        <WebView
        source={{ html: name[2,1,0]}}
        style={{ alignItems:'center',justifyContent:'center'}}
      />
    );
}