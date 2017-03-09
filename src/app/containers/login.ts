import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
    selector: 'login-container',
    styles: [`
html {


}



a {
  color: #ffc957;
  text-decoration: none;
}

a:link{
  text-decoration: none;
  color: #ffc957;
}

a:hover {
  text-decoration: none;
  color: #ffc957;
}

a:visted {
  text-decoration: none;
  color: #ffc957;
}

a:active{
  text-decoration: none;
  color: #ffc957;
}



h1{
  color: #ffc957;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: center;
  color: #ffc957;
}


h2{
  color: #929292;
  font-size: 12px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: center;
  top: -16px;
  position: relative;
}


h3{
  color: #ffc957;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: center;
  color: #ffc957;
  font-size: 15px;
}
h4{
    color: #ffc957;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 138px;
    margin: 20px;
    font-size: 53px;
 }


input
{
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 5px;
    color: #ffc957;
    border-style: none;
    display: inline-block;
    width: 100%;
    height: 34px;
    text-transform: uppercase;
}



::-webkit-input-placeholder {
    color:  #ffc957;
}

:-moz-placeholder { /* Firefox 18- */
    color: #ffc957;  
}

::-moz-placeholder {  /* Firefox 19+ */
    color: #ffc957;  
}

:-ms-input-placeholder {  
    color: #ffc957;  
}

.button-login {
  margin: 20px auto;
  background-color: #ffc957;
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 4px;
  display: block;
  width: 73%;
  height: 30px;
  font-style: bold;
  border-style: none;

}

.page-header{
  border-bottom: none;
  color: #ff5d55;
}

p {
  color: #929292;
  margin-bottom: 20px;
}

.page-header {
    padding-bottom: 9px;
    margin: 40px 0 20px;
}

.hexagon {
  position: relative;
  width: 450px; 
  height: 259.81px;
  background-color: #f7f6f6;
  margin: 204.9px 0;
  -ms-transform: rotate(30deg); /* IE 9 */  
  -webkit-transform: rotate(30deg); /* Chrome, Safari, Opera */
  transform: rotate(30deg);
  margin: 32px 24px;
}

.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 225px solid transparent;
  border-right: 225px solid transparent;
}

.hexagon:before {
  bottom: 100%;
  border-bottom: 129.90px solid #f7f6f6;
}

.hexagon:after {
  top: 100%;
  width: 0;
  border-top: 129.90px solid #f7f6f6;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 155px;
}

#form {
  text-align: center;
}

#section-title {
    z-index: 2;
    position: absolute;

}


.tiny-hex {
  position: relative;
  width: 200px; 
  height: 115.47px;
  background-color: #64C7CC;
  margin: 57.74px 0;
  -ms-transform: rotate(30deg); /* IE 9 */  
  -webkit-transform: rotate(30deg); /* Chrome, Safari, Opera */
  transform: rotate(30deg);
  z-index: 1;
}

.tiny-hex:before,
.tiny-hex:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
}

.tiny-hex:before {
  bottom: 100%;
  border-bottom: 57.74px solid #64C7CC;
}

.tiny-hex:after {
  top: 100%;
  width: 0;
  border-top: 57.74px solid #64C7CC;
}

.error {
  color: #64C7CC;
  width: 100%; 
  height: 20px;
 
}

.form-input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: auto;

}

.slogan {
  margin: auto;
}

.account-options {
    display: flex;
    font-size: 14px;
    margin: auto;
    justify-content: center;

}

#create {
   color: #ffc957;
   font-style: bold;
}

#login-acc {
   color: #929292;
}



/*left column*/

.mini-hexagon {
  position: relative;
  width: 120px; 
  height: 69.28px;
  background-color: #d6d6d6;
  margin: 62.64px 0px;
    -ms-transform: rotate(30deg); /* IE 9 */  
  -webkit-transform: rotate(30deg); /* Chrome, Safari, Opera */
  transform: rotate(30deg);

}

.mini-hexagon:before,
.mini-hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;

}

.mini-hexagon:before {
  bottom: 100%;
  border-bottom: 34.64px solid #d6d6d6;
}

.mini-hexagon:after {
  top: 100%;
  width: 0;
  border-top: 34.64px solid #d6d6d6;
}


/*right column*/
.r-mini-hexagon {
    position: relative;
    width: 120px;
    height: 69.28px;
    background-color: #d6d6d6;
    margin: 62.64px 0;
    -ms-transform: rotate(30deg);
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    top: 65px;
    right: 32px;

}

.r-mini-hexagon:before,
.r-mini-hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;

}

.r-mini-hexagon:before {
  bottom: 100%;
  border-bottom: 34.64px solid #d6d6d6;
}

.r-mini-hexagon:after {
  top: 100%;
  width: 0;
  border-top: 34.64px solid #d6d6d6;
}

/*left column*/

.l-mini-hexagon {
    position: relative;
    width: 120px;
    height: 69.28px;
    background-color: #d6d6d6;
    margin: 62.64px 0;
    -ms-transform: rotate(30deg);
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    top: 65px;
    left: 35px;

}

.l-mini-hexagon:before,
.l-mini-hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;

}

.l-mini-hexagon:before {
  bottom: 100%;
  border-bottom: 34.64px solid #d6d6d6;
}

.l-mini-hexagon:after {
  top: 100%;
  width: 0;
  border-top: 34.64px solid #d6d6d6;
}


.left {
  margin: auto;
      display: flex;
    justify-content: center;
    align-items: center;  

}

.ng-valid[required] {
      border-left: 5px none #42A948; /* green */
    }  

.ng-invalid {
      border-left: 5px solid #ffc957; /* red */
    }


    `],
    template : `
         <div class = "container">
        <div class = "row">
            <div class = ".col-xs-6 .col-md-4">
                <div class = "row">
                    <div class="col-md-6">
                        <div class="l-mini-hexagon"></div>
                    </div>
                  <div class="col-md-6">
                        <div class="mini-hexagon"></div>
                        <div class="mini-hexagon"></div>
                  </div>                
                </div>
            </div>
            <div class = "left .col-xs-6 .col-md-4">
                <div id = "section-title">
                    <h1> <b>B-STORM </b></h1>
                    <h2> A Brainstorming Application for Planning Trips </h2>
                    <div class = "account-options">

                    <!--                 <div id ="create">Create An Account &nbsp;  </div>  | <div id = "login-acc"> &nbsp;  Log In</div> <p> -->
                    </div>
                    

                    <div class = "form-input">
                        <form [formGroup]="userForm" (submit)="saveUser()">
                          <input formControlName="name" id="name" placeholder="NAME" required/>
                          <control-messages [control]="userForm.controls.name"></control-messages>
                    
                          <input formControlName="email" id="email" placeholder="EMAIL" required/>
                          <control-messages [control]="userForm.controls.email"></control-messages>

                          <input formControlName="password" id="password" type="password" placeholder="PASSWORD" required />
                          <control-messages [control]="userForm.controls.password" ></control-messages>
                          <a [routerLink]="['', 'addtrip']">
<!--                           <button type="submit" class = "button-login" [disabled]="!userForm.valid">START B-STORM</button> -->
                          <button type="submit" class = "button-login"[disabled]="!userForm.valid" >START B-STORM</button>
                          </a>
                          
                          <div class = "form-input"> Forgot password? </div>
                          
                        </form>    
                    </div>

                </div>
                <div class="hexagon"></div>
            </div>
            <!-- End of Middle Column -->

            <div class = ".col-xs-6 .col-md-4">
                <div class = "row">
                    <div class="col-md-6">
                        <div class="mini-hexagon"></div>
                        <div class="mini-hexagon"></div>
                    </div>       
                    <div class="col-md-6">
                        <div class="r-mini-hexagon"></div>
                    </div>
                           
                </div>
            </div>
            <!-- End of left mini hexs -->
        </div>
        
   <!--  <div class="hexagon"></div> -->

    </div> 
  `

}) export class Login {

 

  userForm: any;
  
  constructor(private formBuilder: FormBuilder) {
      
    this.userForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(1)]],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, Validators.minLength(5), ValidationService.passwordValidator]]
    });
    
    console.log(this.userForm);
  }
  
  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }

  }


}




    
    
