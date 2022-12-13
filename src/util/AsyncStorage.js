// import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (object) => {

    try {

        let string = JSON.stringify(object.data)
        localStorage.setItem(
            object.key,
            string
        );
        return true;
    } catch (error) {

        return false;
    }
};

export const removeStoreData = async (key) => {
    try {

        localStorage.removeItem(key);
        return true;
    } catch (error) {

        return false;
    }

};


export const getStorage = async (key) => {

    try {

        const value = localStorage.getItem(key);

        if (value !== null) {

            return JSON.parse(value)
        } else {

            return false;
        }
    } catch (error) {

        return false;
    }

};