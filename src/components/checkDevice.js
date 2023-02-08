const checkDevice = (size) => {
    let isMobile = false;
    if (size < 540) {
        isMobile = true;
    } else {
        isMobile = false;
    }
    return isMobile;
}
export default checkDevice;