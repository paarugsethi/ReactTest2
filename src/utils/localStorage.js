
export const loadCart = (key, value) => {
    try{
        const value = JSON.parse(localStorage.getItem(key));
        return value;
    }
    catch{
        return null;
    }
}

export const saveToCart = (key, value) => {
    try{
        localStorage.setObj(key, JSON.stringify(value));
        return 1;
    }
    catch{
        return -1;
    }
}