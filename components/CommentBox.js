import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { convertTimestamp } from '../utils/Utility'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AuthContext } from '../utils/Context'

const CommentBox = ({item, changeCommentIdFunc}) => {
  const context = useContext(AuthContext);
  return (
    <TouchableOpacity style={styles.container} onLongPress={()=> {
      context.setDeleteComment(true);
      changeCommentIdFunc(item.id);
      }} activeOpacity={item.owned? 0.5: 1}>
      <Image source={{uri: item.useravatar}} style={styles.img}/>
      <View style={{marginLeft: 20, marginTop: 15, width: '75%'}}>
        <Text style={{fontSize: 14, fontWeight: '600', letterSpacing: 1}} numberOfLines={1}>{item.username}</Text>
        <Text style={{fontSize: 11, letterSpacing: 1, color:'#70747E'}} numberOfLines={1}>
            Create at {convertTimestamp(item.create_at)}
        </Text>
        <Text 
            style={{marginTop: 5, width: '100%'}}>
            {item.comment_text}
        </Text>
      </View>
      <MaterialCommunityIcons/>
    </TouchableOpacity>
  )
}

export default CommentBox

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        paddingBottom: 10,
    },
    img:{
        width: 60,
        height: 60,
        resizeMode:'stretch',
        borderRadius: 50,
        backgroundColor: '#000',
        marginTop: 10,
        marginLeft: 10,
    }
})