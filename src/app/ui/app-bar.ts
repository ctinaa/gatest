import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bar',

  styles: [`

    h1, h2, h3{
      color: #ffc957;
      display:flex;
      justify-content:center;
      align-items:center;
      text-align: center;
      color: #ffc957;


    }
    .app-bar {
      height: 65px;
      padding: 5px 30px;
      font-weight: bold;
    }
    .logo {
      color: #ffc957;
      font-size: 30px;
      font-weight: 300;
      cursor: pointer;
      left: 20px;
    }
    .link {
      color: #ffc957;
      font-size: 24px;
      font-weight: 400;
      cursor: pointer;
      display: inline-block;
      margin: 20px;
    }
    .fa-2x {
      position: fixed; 
    }

    #help {
      margin: 20px;
    }

    #home {
      margin: 20px;
    }
    
    .row, .middle-xs, .between-xs{
      padding: 0px;
    }
    


  `],
  template: `
    <header class="app-bar row middle-xs">
      <span [routerLink]="[Main]" class="logo col-xs-10">
        B-STORM
      </span>
      <nav class="col-xs-2">

        <div id = "links">

            <div id = "home">
               <div class="row middle-xs between-xs">
                <span [routerLink]="['', '']" class="link">
                    <i class="fa fa-long-arrow-left fa-2x" aria-hidden="true"></i>     
                </span>
                <span [routerLink]="['', '']" class="link">
                    <i class="fa fa-home fa-2x" aria-hidden="true"></i>
                </span>


              </div>

            
          </div>
        </div> 
      </nav>
    </header>
   
  `
})

export class AppBar {
       constructor(private _location: Location) {
    }
    backClicked() {
        this._location.back();
    }

}
