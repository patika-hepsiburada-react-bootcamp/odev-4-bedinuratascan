const ConvertTemp = (temp) => {
    const convertToTemp = (temp - 273.15).toFixed(1);
    return convertToTemp;
}

export default ConvertTemp;
