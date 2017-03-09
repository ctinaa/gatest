import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';
import { ValidationService } from './validation.service';


@Component({
    selector: 'trips-container',
    styles: [`
html {
    color: #ffc957;

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



h1, h2, h3{
  color: #ffc957;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: center;
  color: #ffc957;


}

h4{
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 20px;
    font-size: 20px;
    letter-spacing: 2px;
    float: left;
 

 }


input
{
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 41px;
    color: #ffc957;
    border-style: solid;
    border-width: 1px;
    border-color: #c0c0c0;
    width: 100%;
    height: 34px;
    text-transform: uppercase;
}


::-webkit-input-placeholder {
    color:  #ffc957;
    font-style: bold;
}

:-moz-placeholder { /* Firefox 18- */
    color: #ffc957;  
    font-style: bold;
}

::-moz-placeholder {  /* Firefox 19+ */
    color: #ffc957;  
    font-style: bold;
}

:-ms-input-placeholder {  
    color: #ffc957;  
	font-style: bold;
}

#add-trip, #add-friends {
	display: inline-block;	

}
.button-login {
    margin-top: 20px;
    background-color: #ffc957;
    color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    display: block;
    width: 50%;
    font-style: bold;
    border-style: none;
    height: 29px;
}

.button-hex {
  display:block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1px solid #ffc957;
  background-color: #ffc957;
  z-index: 3;
  position: relative;
    top: 10px;
    left: 29px;
    right: 30px;
 

}

.fa, .fa-plus {
	-ms-transform: rotate(-30deg); /* IE 9 */  
	-webkit-transform: rotate(-30deg); /* Chrome, Safari, Opera */
	transform: rotate(-30deg);
	color:  #ffc957;
	font-size: 50px;
	display:block;
	height: 40px;
	width: 40px;
/*	border-radius: 50%;
	border: 1px solid #ffc957;
	background-color: #ffc957;*/
	z-index: 3;
	position: relative;
	top: 8px;
    left: 26px;
    right: 30px;
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
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 50px;
    width: 36%;
   
}

#form {
  text-align: center;
}

#instruct {
	color: #aaaaaa;

}


#section-title {
    z-index: 2;
    position: absolute;

}
p #slogan {
  margin: 20px;
}
.tiny-hex{
  position: relative;
  width: 100px; 
  height: 57.74px;
  background-color: #d6d6d6;
  margin: 28.87px 0;
  -ms-transform: rotate(30deg); /* IE 9 */  
  -webkit-transform: rotate(30deg); /* Chrome, Safari, Opera */
  transform: rotate(30deg);
}

.tiny-hex:before,
.tiny-hex:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
}

.tiny-hex:before {
  bottom: 100%;
  border-bottom: 28.87px solid #d6d6d6;
}

.tiny-hex:after {
  top: 100%;
  width: 0;
  border-top: 28.87px solid #d6d6d6;
}


/*  SECTIONS  */
.section {
	clear: both;
	padding: 0px;
	margin: 0px;

}

/*  COLUMN SETUP  */
.col {
	display: block;
	float:left;
	margin: 1% 0 1% 1.6%;

}
.col:first-child { margin-left: 0; }

/*  GROUPING  */
.group:before,
.group:after { content:""; display:table; }
.group:after { clear:both;}
.group { zoom:1; /* For IE 6/7 */ }


/*  GRID OF TWO  */
.span_2_of_2 {
	width: 100%;
}
.span_1_of_2 {
	width: 28.2%%;
}

/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */

@media only screen and (max-width: 480px) {
	.col { 
		margin: 1% 0 1% 0%;
	}
}

@media only screen and (max-width: 480px) {
	.span_2_of_2, .span_1_of_2 { width: 100%; }
}
    `],
    template: `
    <div class = "container">
        <h4> ADD NEW TRIP </h4> <p>
        <div class="section group">
			<div class="col span_1_of_2">
				<div class = "tiny-hex" ></div> 
			</div>
			<div class="col span_1_of_2">
				 <div class = "form-input">
	                        <form [formGroup]="userForm" (submit)="saveUser()">
	                          <input formControlName="name" id="name" placeholder="TRIP NAME"/>
	                          <control-messages [control]="userForm.controls.name"></control-messages>
							</form>
				 			
				 </div>
				<p>
			</div>
		</div>
	    <h4> ADD FRIENDS </h4> <p>
        <div class="section group">
			<div class="col span_1_of_2">
				<div class = "tiny-hex" >
				 		<div class = "plus"  >
							<i class="fa fa-plus-circle" aria-hidden="true"></i>
						</div>
				</div> 

				
			</div>
			<div class="col span_1_of_2">
				
						<input  type="email" id="email" name="email" required placeholder=" ADD E-MAIL "> 
			
			</div>
		</div>

		<div id = "instruct">
	        Invite other users to collaborate on your trip planning. Once you begin your B-storm, your selected users will receive an email invite.
        </div>
        	
    	<form [formGroup]="userForm" (submit)="saveUser()">
        	<a [routerLink]="['', 'notes']">	
				<button [disabled]="!userForm.valid" type="submit" class = "button-login"> START B-STORMING
				</button>
			</a>
	
        </form>
</div> 
    
    `
}) export class Trips {


	  userForm: any;
	  
	  constructor(private formBuilder: FormBuilder) {
	      
	    this.userForm = this.formBuilder.group({
	      'name': ['', [Validators.required, Validators.minLength(1)]],
	     
	    });
	    
	    console.log(this.userForm);
	  }
	  
	  saveUser() {
	    if (this.userForm.dirty && this.userForm.valid) {
	    	// save name = trip name goes onto app header only after 

	    	
	    }

	  }

}
