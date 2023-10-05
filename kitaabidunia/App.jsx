import { ActivityIndicator, Button, Dimensions, PermissionsAndroid, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ReactNativeBlobUtil from 'react-native-blob-util';
import RNFS from 'react-native-fs';
import  { useState,useEffect } from 'react';
import { FlatList } from 'react-native';
import PdfViewer from './src/PdfViewer';
import Pdf from 'react-native-pdf'

// const App = () => {
  

//   return (
//     <View>
//       <Text>App</Text>
//       <Button title="Download PDF" onPress={downloadButton} />
//     </View>
//   )
// }


const App = ()=>{
  const [files, setFiles] = useState([]);
  const getDownloadFiles = async () => {
    // const downloadDir = RNFS.DownloadDirectoryPath;
    const downloadDir = ReactNativeBlobUtil.fs.dirs.DownloadDir;
    const files = await RNFS.readDir(downloadDir);

    setFiles(files);
  };

  

  const [showFile,setShowFile]= useState(false)
  const [itempath,setItemPath]=useState('')
  const [page,setPage]=useState(1)

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        const pathParts = item.path.split("0/");
        const result=pathParts[1];
        setItemPath(result);
        setShowFile(!showFile)
      }}>
        <View>
          <Text>{item.name}</Text>
          
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    getDownloadFiles();
  }, []);



  return (
    <View style={{flex:1,width:Dimensions.get('window').width}}>
      
                  
      <Text>App</Text>
      {
        showFile && 
      <PdfViewer pageNumber={page} filePath={itempath}   />
      }
      
      <Button title="Download PDF" onPress={downloadButton} />
      <FlatList
        data={files}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
      
    </View>
  );
};

const downloadButton = () => {
  const url = 'https://drive.google.com/uc?export=download&id=1vihA8hd0C09LEJtghxt0cdltV324m9OR';
  const fileName = 'my-pdf.pdf';

  downloadPDF(url, fileName);
};

const downloadPDF = async (url, fileName) => {
  

  const res = await ReactNativeBlobUtil.config({
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      path: `${ReactNativeBlobUtil.fs.dirs.DownloadDir}/${fileName}`,
      mime: 'application/pdf',
    },
  }).fetch('GET', url);

  if (res.status === 200) {
    // The PDF was downloaded successfully.
  } else {
    // An error occurred while downloading the PDF.
  }
};




export default App


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
  }
});