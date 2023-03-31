import bcrypt from "bcrypt"; 

export const hashPassword = async(password)=>{
    try{
        const saltRounds = 10; 
        const hiddenPassword = await bcrypt.hash(password,saltRounds);
        return hiddenPassword;   
    }catch(error){
        console.log(error);  
    }
};

export const comparePasswords=async(password,hiddenPassword)=>{
    return bcrypt.compare(password,hiddenPassword);  
}