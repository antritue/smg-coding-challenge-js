module.exports.generateRandomString = () => {
    //random length between 3 and 15
    const length = Math.floor(Math.random() * 13) + 3;
    let result = '';

    for (let i = 0; i < length; i++) {
        //random character from ascii table range from 33 to 126
        result += String.fromCharCode(Math.floor(Math.random() * 95) + 33);
    }

    return result;
};