import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/notification/notification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VariableService } from '../shared/variable.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;
  constructor(private notificaSrv: NotificationService,
    private fb: FormBuilder,
    private variableSrv: VariableService
  ) {
    this.frmLogin= this.fb. group({
      "email":['ejemplo@gmail.com', Validators.email],
      'clave':['', Validators.minLength(8)],
    })
  }

  ngOnInit() {
  }

  login(){
    const frm = this.frmLogin.value;
    this.variableSrv.bloggIn.next(true);
  }
  // mostrarInfo(){
  //   this.notificaSrv.show('info', 'mensaje de notificacion');
  // }

  // mostrarError(){
  //   this.notificaSrv.show('error', 'mensaje de error');
  // }
}
