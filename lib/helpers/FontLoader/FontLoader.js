import Ionicons from 'react-native-vector-icons/Ionicons';

class FontLoader {

    loadFonts() {
        Ionicons.loadFont()
    }
}

const instance = new FontLoader();
export default instance;