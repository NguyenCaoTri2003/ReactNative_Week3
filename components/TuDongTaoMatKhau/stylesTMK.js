import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9998c2',
    padding: 8,
  },
  content:{
    width: '91%',
    height: '96%',
    backgroundColor: '#23235B',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // Độ dịch chuyển của bóng
    shadowOpacity: 0.9, // Độ mờ của bóng
    shadowRadius: 4, // Bán kính của bóng
    // Bóng đổ cho Android
    elevation: 5,
  },
  header:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    
  },
  titleHeader:{
    fontSize: 25,
    fontWeight: 700,
    color: '#fff',
    marginTop: 30,
    textAlign: 'center',
  },
  inputPW:{
    width: 297,
    height: 65,
    backgroundColor: '#151537',
    fontSize: 15,
    color: '#fff',
    paddingHorizontal: 7,
    marginBottom: 30
  },
  center:{
    flex: 2,
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  length:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textLength:{
    fontSize: 20,
    fontWeight: 700,
    color: '#fff',
  },
  showLength:{
    width: 118,
    height: 33,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    fontSize: 15
  },
  contentCheck:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textT:{
    fontSize: 20,
    fontWeight: 700,
    color: '#fff',
  },
  checkBox:{
    width: 25,
    height: 25,
    backgroundColor: '#fff'
  },
  btnTao:{
    width: 269,
    height: 55,
    backgroundColor: '#3B3B98',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn:{
    fontSize: 18,
    fontWeight: 700,
    color: '#fff',
  }
});

export default styles;