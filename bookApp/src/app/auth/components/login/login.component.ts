import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServicesService } from '../../auth-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  
 
  loginSuccess = false;
  failedLogin = false;
  errorMessage = "";

  handleLogin(loginForm: NgForm) : void{
   // console.log("form Values - >" , loginForm.value);

    this.authService.loginUser(loginForm.value)
      .subscribe( 
        (res:any) =>{

          this.loginSuccess = true;
          this.failedLogin = false;
    
          console.log("user Logged in , data -> ", res.body);
          
          if(res.body.Role === 'admin'){
            sessionStorage.setItem("AdminToken", JSON.stringify(res.body) );
            sessionStorage.removeItem("UserToken");
          }
          else{            
            console.log("CartId:", res.body.CartId);
            
            sessionStorage.setItem("UserId", res.body.UId);
            sessionStorage.setItem("CartId", res.body.CartId);
            sessionStorage.setItem("UserToken", res.body.UId);
            sessionStorage.removeItem("AdminToken");
          }
          
        },

        (error: any) => {
          console.log("[ERROR]", error);
          this.loginSuccess = false;
          this.failedLogin = true;

          if(error === "User Credentials are Invalid"){
            this.errorMessage = "Invalid Credentials!";
          }
          else if(error === "User NOT Found"){
          this.errorMessage = " Your Email has not been registered!";
          
          }
          else
            {
              this.errorMessage = "Server Errro";
          
            }
        })

   
  }

  constructor(private authService: AuthServicesService) { }

  ngOnInit(): void {
  }

}
