import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, Button, TextInput, TouchableOpacity  } from 'react-native';
import styles from './styleTT'

export default function TinhTien() {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header1}>
          <View style={styles.image}>
          <Image source = {{uri: 'https://sachhoc.com/image/catalog/LuyenThi/Lop10-12/Giai-nhanh-nguyen-ham-tich-phan-ung-dung-may-tinh-casio.jpg'}} style={styles.img} />  
          </View> 
          <View style={styles.detailPay}>
            <Text style={styles.title}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.t1}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.price1}>141.800 đ</Text>
            <Text style={styles.price2}>141.000 đ</Text>
            <View style={styles.themNhiu}>
              <View style={styles.increase}>
                <TouchableOpacity 
                  onPress={() => {
                    setCount(count - 1);
                    if(count === 0) 
                      setCount(count)
                  }}
                >
                  <Text style={styles.minus}>-</Text>
                </TouchableOpacity>
                <Text style={styles.number}>{count}</Text>
                <TouchableOpacity
                  onPress={() => {
                    setCount(count + 1);
                  }}
                >
                  <Text style={styles.add}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.t2}>Mua sau</Text>
            </View>
          </View>
        </View>

        <View style={styles.header2}>
          <View style={styles.discountOld}>
            <Text style={styles.ttD}>Mã giảm giá đã lưu</Text>
            <TouchableOpacity><Text style={styles.click}>Xem tại đây</Text></TouchableOpacity>
          </View>
          <View style={styles.discountNew}>
            <View style={styles.inputD}>
              <View style={styles.chosse}></View>
              <Text style={styles.textD}>Mã giảm giá</Text>
            </View>
            <TouchableOpacity>
              <View style={styles.btnUse}>
                <Text style={styles.textUse}>Áp dụng</Text>
              </View>
            </TouchableOpacity>
        </View>
        </View>
      </View>

      <View style={styles.center}>
        <View style={styles.center1}>
          <Text style={styles.textPhieu}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <TouchableOpacity><Text style={[styles.click, styles.clickPhieu]}>Xem tại đây</Text></TouchableOpacity>
        </View>
        <View style={styles.center2}>
          <Text style={styles.textTam}>Tạm tính</Text>
          <Text style={styles.priceTam}>{count === 0 ? 0 : (count * 141.800).toFixed(3)} đ</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.thanhTien}>
          <Text style={styles.textTT}>Thành tiền</Text>
          <Text style={styles.priceTT}>{count === 0 ? 0 : (count * 141.800).toFixed(3)} đ</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.btnDat}>
            <Text style={styles.textUse}>Tiến hành đặt hàng</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}