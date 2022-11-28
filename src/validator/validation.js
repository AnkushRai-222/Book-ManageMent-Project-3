const valid = function (data){
    if(typeof(data)===undefined || typeof(data)===null) { return false}
    if(typeof (data) ==="string" && data.trim().length>0) {return true}
}
const validISBN = function(ISBN){
    // return /^(97(8|9))?\d{9}(\d|X)$/.test(ISBN);
    return /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/.test(ISBN)
}
const validEmail=function(email){
    // const emailRegex=/\S+@\S+\.\S+/
     const emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-][a-z]{1,4}$/
    return emailRegex.test(email)
}
const validMobile=function(mobile){
    const mobileRegex=/^\d{10}$/
    return mobileRegex.test(mobile)
}
const validReleasedAt = function (releasedAt) {
    return /((\d{4}[\/-])(\d{2}[\/-])(\d{2}))/.test(releasedAt)
}
const ValidName=function(name){
    const nameRegex=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/
    return nameRegex.test(name)
}
module.exports = {valid,validEmail,validISBN,validMobile,validReleasedAt,ValidName}