import { useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './stylesTMK'

export default function TaoMK() {
  const [isChecked, setIsChecked] = useState([false,false,false,false]);
  const [text, setText] = useState('');
  const [length, setLength] = useState(''); 

  const generateRandomText = (length, type) => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberText = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let char = '';
    if(type === 'lowercase'){
      char = lowercaseChars;
    } else if(type === 'uppercase'){
      char = uppercaseChars;
    } else if (type === 'number') {
      char = numberText;
    } else if (type === 'special') {
      char = specialChars;
    }
    
    else if (type === 'mixed') {
      char = lowercaseChars + uppercaseChars;
    } else if (type === 'lowercasenumber') {
      char = lowercaseChars + numberText;
    } else if (type === 'uppercasenumber') {
      char = uppercaseChars + numberText;
    } else if (type === 'mixcharnumber') {
      char = (lowercaseChars + uppercaseChars + numberText);  
    } 
    
    else if (type === 'lowerspecial') {
      char = lowercaseChars + specialChars;
    } else if (type === 'upperspecial') {
      char = uppercaseChars + specialChars;
    } else if (type === 'numberpecial') {
      char = numberText + specialChars;
    }


     else if (type === 'lowerupperspecial') {
      char = (lowercaseChars + uppercaseChars + specialChars);
    } else if (type === 'lowernumberspecial') {
      char = (lowercaseChars + numberText + specialChars);
    } else if (type === 'uppernumberspecial') {
      char = ( uppercaseChars + numberText + specialChars);
    } else if (type === 'mixlowerspecial') {
      char = (lowercaseChars + uppercaseChars + numberText);
    } else if (type === 'mixall') {
      char = (lowercaseChars + uppercaseChars + numberText + specialChars);
    }
    
    let randomText = '';

    for(let i = 0; i < length; i++){
      randomText += char.charAt(Math.floor(Math.random() * char.length));
    }
    return randomText;
  };

  const handlePress = (index) => {
    // Tạo một mảng mới để cập nhật trạng thái của checkbox
    const updatedState = [...isChecked];
    updatedState[index] = !updatedState[index]; // Đổi trạng thái của checkbox được nhấn
    setIsChecked(updatedState);

    //generateText(updatedState);
  };

  const generateText = () => {

    if (length === '') {
      setText('Vui lòng nhập độ dài hợp lệ');
      return;
    }

    let newText = '';

    // Điều kiện với 4 checkbox
    if (isChecked[0] && isChecked[1] && isChecked[2] && isChecked[3]) {
      newText = generateRandomText(parseInt(length), 'mixall');
    } 
    // Điều kiện với 3 checkbox
    else if (isChecked[0] && isChecked[1] && isChecked[2]) {
      newText = generateRandomText(parseInt(length), 'mixcharnumber');
    } else if (isChecked[0] && isChecked[1] && isChecked[3]) {
      newText = generateRandomText(parseInt(length), 'lowerupperspecial');
    } else if (isChecked[0] && isChecked[2] && isChecked[3]) {
      newText = generateRandomText(parseInt(length), 'lowernumberspecial');
    } else if (isChecked[1] && isChecked[2] && isChecked[3]) {
      newText = generateRandomText(parseInt(length), 'uppernumberspecial');
    } 
    
    // Điều kiện với 2 checkbox
    else if (isChecked[0] && isChecked[2]) {
      newText = generateRandomText(parseInt(length, 10), 'lowercasenumber');
    } else if (isChecked[1] && isChecked[2]) {
      newText = generateRandomText(parseInt(length, 10), 'uppercasenumber');
    } else if (isChecked[0] && isChecked[1]) {
      newText = generateRandomText(parseInt(length, 10), 'mixed');
    } else if (isChecked[0] && isChecked[3]) {
      newText = generateRandomText(parseInt(length, 10), 'lowerspecial');
    } else if (isChecked[1] && isChecked[3]) {
      newText = generateRandomText(parseInt(length, 10), 'upperspecial');
    } else if (isChecked[2] && isChecked[3]) {
      newText = generateRandomText(parseInt(length, 10), 'numberpecial');
    } 
    
    // Điều kiện với 1 checkbox
    else if (isChecked[0] && !isChecked[1] && !isChecked[2] && !isChecked[3]) {
      newText = generateRandomText(parseInt(length, 10), 'lowercase');
    } else if (isChecked[1] && !isChecked[0] && !isChecked[2] && !isChecked[3]) {
      newText = generateRandomText(parseInt(length, 10), 'uppercase');
    } else if (isChecked[2] && !isChecked[0] && !isChecked[1] && !isChecked[3]) {
      newText = generateRandomText(parseInt(length, 10), 'number');
    } else if (isChecked[3] && !isChecked[0] && !isChecked[1] && !isChecked[2]) {
      newText = generateRandomText(parseInt(length, 10), 'special');
    }
    setText(newText); // Cập nhật văn bản vào TextInput
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.titleHeader}>PASSWORD{'\n'}GENERATOR</Text>
          <TextInput 
            style={styles.inputPW}
            value={text}
            editable={false}
          ></TextInput>
        </View>
        
        <View style={styles.center}>
          <View style={styles.length}>
            <Text style={styles.textLength}>Password length</Text>
            <TextInput 
              style={styles.showLength}
              value={length}
              onChangeText={setLength}
              keyboardType='numeric' //hiển thị bàn phím số
              returnKeyType="done" //hiện chữ done khi nhập xong
            ></TextInput>
          </View>
          <View style={styles.contentCheck}>
            <Text style={styles.textT}>Include lower case letters</Text>
            <TouchableOpacity style={styles.checkBox}  onPress={() => handlePress(0)}>
              {isChecked[0] && <Ionicons name="checkmark" size={24} color="#000"/>}
            </TouchableOpacity>
          </View>
          <View style={styles.contentCheck}>
            <Text style={styles.textT}>Include upcase letters</Text>
            <TouchableOpacity style={styles.checkBox} onPress={() => handlePress(1)}>
              {isChecked[1] && <Ionicons name="checkmark" size={24} color="#000"/>}  
            </TouchableOpacity>
          </View>
          <View style={styles.contentCheck}>
            <Text style={styles.textT}>Include number</Text>
            <TouchableOpacity style={styles.checkBox} onPress={() => handlePress(2)}>
              {isChecked[2] && <Ionicons name="checkmark" size={24} color="#000"/>}  
            </TouchableOpacity>
          </View>
          <View style={styles.contentCheck}>
            <Text style={styles.textT}>Include special symbol</Text>
            <TouchableOpacity style={styles.checkBox} onPress={() => handlePress(3)}>
              {isChecked[3] && <Ionicons name="checkmark" size={24} color="#000"/>}  
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={generateText}>
            <View style={styles.btnTao}>
              <Text style={styles.textBtn}>GENERATE PASSWORD</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}