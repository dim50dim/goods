

class Valid2 extends Valid{
    constructor(email,password,error_message){
        super(email,password);
        this.error_message = error_message;
    }
    validate(){
        super.validate();
        this.error_message = '';

        if(this.isValid === false) {
            this.error_message = 'password error';
            return this.isValid;
        }

         if(this.email === ''){
            this.isValid = false;
            this.error_message = 'email error';
            return this.isValid;
         }
    }
}