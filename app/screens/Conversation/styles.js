import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  color: {
    color: 'black',
  },
  colorTime: {
    color: '#a5a5a5',
    top: hp('1.5%'),
    left: wp('2%'),
  },
  container: {
    borderTopLeftWidth: 1,
    borderTopRightWidth: 1,
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderTopRightRadius: wp('10%'),
    borderTopLeftRadius: wp('10%'),
    marginTop: hp('2%'),
    paddingTop: hp('4.5%'),
    paddingLeft: wp('4%'),
    paddingRight: wp('4%'),
    flex: 1,
  },
  image: {
    height: hp('4.5%'),
    width: wp('9%'),
    borderRadius: hp('10%'),
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: hp('2%'),
  },
  titleHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  sender: {
    backgroundColor: '#e0a700',
    borderRadius: wp('5%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('8%'),
    borderTopLeftRadius: 0,
  },
  receiver: {
    backgroundColor: '#f8f8f8',
    // backgroundColor:"red",
    borderRadius: wp('5%'),
    // borderBottomRightRadius:wp('6%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('8%'),
    borderTopRightRadius: 0,
    width: wp('75%'),
  },
  viewSender: {
    width: wp('75%'),
    flexDirection: 'row',
    marginBottom: hp('3%'),
  },
  viewReceiver: {
    flexDirection: 'row-reverse',
    marginBottom: hp('3%'),
  },
  inputMessage: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#f5f5f5',
    borderTopRightRadius: wp('10%'),
    borderTopLeftRadius: wp('10%'),
    paddingHorizontal: wp('6%'),
    paddingVertical: hp('1%'),
    elevation: wp('1%'),
    shadowColor: '#000',
    flexDirection:"row",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
  },
  input:{
    flex:1,
  },
  backButton:{
    width:wp('9%'),
    height:hp('5%'),
    display:"flex",
    justifyContent:"center",
    alignItems:"flex-start",
  },
  sendIcon:{
    backgroundColor:"#1fd655",
    height:hp('5%'),
    width:wp('10%'),
    borderRadius:wp('10%'),
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
});
