import { Component, OnInit } from '@angular/core';
import { VariableService } from '../variable.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  loggedIn : boolean=false;
  constructor(
    private variableSrv: VariableService
  ) { }

  ngOnInit() {
    this.variableSrv.bloggIn.subscribe(
      v=>this.loggedIn=v
    )
  }

  logout(){
    this.variableSrv.bloggIn.next(false);
  }

}
