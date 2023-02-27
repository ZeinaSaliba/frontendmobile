import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  color: {
    color: 'black',
  },
  colorMatches: {
    color: '#e83566',
  },
  borderMatches: {
    borderColor: '#e83566',
    backgroundColor: '#e83566',
  },
  colorMessages: {
    color: '#fac41a',
  },
  borderMessages:{
    borderColor: '#fac41a',
    backgroundColor: '#fac41a',
  },
  container: {
    padding: hp('2%'),
    borderTopLeftWidth: 1,
    borderTopRightWidth: 1,
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderTopRightRadius:wp('10%'),
    borderTopLeftRadius:wp('10%'),
    marginTop: hp('2%'),
    paddingTop: hp('4.5%'),
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    flex: 1,
  },
  textMatches: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dot: {
    height: hp('2.4%'),
    width: wp('5%'),
    borderRadius: wp('10%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('2%'),
  },
  textnumber: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  displayText: {
    padding: hp('2%'),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: hp('8%'),
    width: wp('16%'),
    borderRadius: wp('10%'),
    borderWidth: 1,
  },
  imageView: {
    height: hp('8.3%'),
    width: wp('16.6%'),
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: wp('10%'),
    elevation: wp('1%'),
    shadowColor: '#000',
  },
  imageText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: wp('2%'),
    width: wp('20%'),
  },
  chatTitle:{
    fontWeight:'500',
    fontSize:18,
    width: wp('50%'),
    marginBottom:hp('1%'),
  },
  chatText:{
    color:"#a5a5a5",
    width: wp('50%'),
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:hp('4%'),
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: wp('2%'),
  },
  chatTime:{
    color:"#a5a5a5",
    marginBottom:hp('1%'),
  },
  timeContainer:{
    // backgroundColor:"#e83566",
    flex:1,
    // height:hp('3%'),
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-start',
  },
});
