import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  header:{
    flex: 2,
    backgroundColor: '#fff',
    //paddingTop: 50 //nếu trên điện thoại thì thêm vào
  },
  header1:{
    flex: 1,
    flexDirection: 'row',
    paddingTop: 15,
    justifyContent: 'space-around',
  },
 
  img:{
    width: 104,
    height: 127,
    marginLeft: 10
  },
  detailPay:{
    marginRight: 20,
    height: 120,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title:{
    fontSize: 12,
    fontWeight: 700,
  },
  t1:{
    fontSize: 12,
    fontWeight: 700,
  },
  price1:{
    fontSize: 18,
    fontWeight: 700,
    color: '#EE0D0D'

  },
  price2:{
    color: '#808080',
    fontSize: 12,
    textDecorationLine: 'line-through', 
  },
  themNhiu:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 15,
  }, 
  increase:{
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
    
  },
  minus:{
    width: 14.22,
    height: 16,
    backgroundColor: '#c4c4c4',
    textAlign: 'center',
    lineHeight: 16,
  },
  add:{
    width: 14.22,
    height: 16,
    backgroundColor: '#c4c4c4',
    textAlign: 'center',
    lineHeight: 16,
  },
  number:{
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 16,
    fontWeight: 700,
  },
  t2:{
    color: '#134FEC',
    fontWeight: 700,
    fontSize: 12,
  },
   header2:{
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingBottom: 15

  },
  discountOld:{
    width: '54%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  ttD:{
    fontSize: 12,
    fontWeight: 700,
    textAlign: 'center'
  },
  click:{
    fontSize: 12,
    fontWeight: 700,
    textAlign: 'center',
    color: '#134FEC',
  },
  discountNew:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputD:{
    flexDirection: 'row',
    width: 208,
    height: 45,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#808080',
    alignItems: 'center',
  },
  chosse:{
    width: 32,
    height: 16,
    backgroundColor: '#F2DD1B',
    alignContent: 'center',
    marginLeft: 13,
  },
  textD:{
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center',
    alignContent: 'center',
    marginLeft: 10,
  },
  btnUse:{
    width: 99,
    height: 45,
    backgroundColor: '#0a5eb8',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 700,
    color: '#fff',
    marginRight: 10,
    textAlign: 'center'
  },
  textUse:{
    fontSize: 20,
    fontWeight: 700,
    color: '#fff',
    
  },
  center:{
    flex: 2,
    backgroundColor: '#c4c4c4',
    paddingTop: 15
  },
  center1:{
    height: 51,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 15,
  },
  textPhieu:{
    fontWeight: 700,
    fontSize: 12,
  },
  clickPhieu:{
    marginLeft: 15
  },
  center2:{
    height: 51,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    marginTop: 15
  },
  textTam:{
    fontWeight: 700,
    fontSize: 18,
  },
  priceTam:{
    fontWeight: 700,
    fontSize: 18,
    color: '#EE0D0D',
    marginRight: 17
  },
  footer:{
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  thanhTien:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTT:{
    fontWeight: 700,
    fontSize: 18,
    color: '#808080',
  },
  priceTT:{
    fontWeight: 700,
    fontSize: 20,
    color: '#EE0D0D',
  },
  btnDat: {
    width: 331,
    height: 45,
    backgroundColor: '#E53935',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: 20,
    color: '#fff',
    //marginLeft: 30 //nếu trên điện thoại thì thêm vào
  }
});

export default styles;