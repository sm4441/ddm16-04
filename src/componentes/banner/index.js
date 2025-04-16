import{Text, Image, TouchableOpacity, View} from 'react-native'
import styles from './style.js';

export default function Banners(){
    
    return(
        <view style = {styles.viewBanner}>
            <text style={text.textBanner}> Em cartaz </text>


            <TouchableOpacity style = {{}}>
                <Image style = {styles.imgBanner} souce ={URL="https://i.ytimg.com/vi/A-_RzwsMs4Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCmpc3ZToZvtjnOdCo-If3ZOcIU7Q"}></Image>
            </TouchableOpacity>

        </view>
    )
}