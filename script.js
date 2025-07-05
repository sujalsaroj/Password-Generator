function Generate(){
              let passlen=parseInt(document.querySelector('#len').value);
                let useUpper=document.querySelector('#Uppercase').checked;
                let useNum=document.querySelector('#Number').checked;
                let useSymbol=document.querySelector('#specialChar').checked;

                const lower='abcdefghijklmnopqrstuvwxyz';
                const upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                const number='12345667890';
                const symbol="!@#$%^&*(){}[]:;/?<>~";
                
                let char=lower;
                if(useUpper) char+=upper;
                if(useNum) char+=number;
                if(useSymbol) char+=symbol;
                
                let password='';
                if(!isNaN(passlen) && passlen>0 && char.length  >0 && passlen<=12){
                    for(let i=0; i<passlen;i++){
                        let randomIndex=Math.floor(Math.random()*char.length);
                        password+=char[randomIndex];
                    }
                    document.querySelector('#display').innerText=password;
                }else{
                    document.querySelector('#display').innerText='Invalid Input';
                }
        }
        

        function resetForm(){
        document.querySelector('#len').value ='';
        document.querySelector('#Uppercase').checked=false;
        document.querySelector('#Number').checked=false;
        document.querySelector('#specialChar').checked=false;
        document.querySelector('#display').innerText='Your Password will appear here!';
        }

        