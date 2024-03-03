
const regex = /^[A-Z][a-z\s]*$/;
export function validate(name){
    return regex.test(name);


}
