const Validation = (email,password)=>{
    // this return true or false
    const Cemail =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const Cpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
  
    if (!Cemail) return "email is not valid"
    if (!Cpassword) return "password is not valid"

    return null;



}

export default Validation;