export const loginApi = (formData) => {
    const email = formData.email;
    const password = formData.password;

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(email === 'abc@gmail.com' && password === 'newPass123'){
                resolve('Login success');
            } else {
                reject('Wrong credentials');
            }
        }, 500);
    });
}