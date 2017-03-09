import { Component } from '@angular/core'

@Component({
    selector: 'addtrip-container',
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
h1{
  color: #ffc957;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: center;
  color: #ffc957;
}

h2, h3{
  color: #ff5d55;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: center;
      position: relative;
    top: 120px;
    right: 30px;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 155px;
}

.fa-plus-circle {
    font-size: 50px;
}

.hexagon {
  position: relative;
  width: 300px; 
  height: 173.21px;
  background-color: #f7f6f6;
  margin: 86.60px 0;
  margin: 20px;
  -ms-transform: rotate(-30deg); /* IE 9 */  
  -webkit-transform: rotate(-30deg); /* Chrome, Safari, Opera */
  transform: rotate(-30deg);
  z-index: 1;
}

.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
}

.hexagon:before {
  bottom: 100%;
  border-bottom: 86.60px solid #f7f6f6;
}

.hexagon:after {
  top: 100%;
  width: 0;
  border-top: 86.60px solid #f7f6f6;
}

#trip-text {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    z-index: 2;
    position: absolute;
    margin-left: 54px;
    margin-top: 30px;
}
.hex-container {
     margin-top: 88px;
}

#trip-text2 {
    color: #ff5d55;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 2;
    position: relative;
    top: 120px;
    right: 30px;
}

/*Side Hexagons*/
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
    top: 231px;
    right: 64px;

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
    top: 231px;
    left: 64px;

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
    display: table; 

}
    `],
    template : `
           <div class = "container">
    	<div class = "row">
    		<!-- Column 1 -->
            <div class = ".col-xs-6 .col-md-4">
                <div class = "row">
                    <div class="col-md-12">
                        <div class="l-mini-hexagon"></div>
                    </div>               
                </div>
            </div>
            <!-- Column 2 -->
            <div class = "left .col-xs-6 .col-md-4">
		    	<div class ="hex-container">
			    	<div id = "trip-text">
						 <a [routerLink]="['', 'trips']">
						 	<h1> Add New Trip </h1> <p>
						 	<i class="fa fa-plus-circle" aria-hidden="true"></i>
						 </a>
					</div>
			   		<div class="hexagon"></div>
		   		</div>
		    	<div class ="hex-container">
			    	<div id = "trip-text-2">
						 	<h2> RECENT TRIP #1 </h2> <p>

					</div>
					
			   		<div class="hexagon"></div>
		   		</div>
		   	</div> 
		   	<!-- Column 3  -->
		   <div class = ".col-xs-6 .col-md-4">
	   			<div class = "row">
		            <div class="col-md-12">
		                <div class="r-mini-hexagon"></div>
		            </div>
	            </div>

		   </div>
		</div>
	</div>
    `

}) export class AddTrip {}