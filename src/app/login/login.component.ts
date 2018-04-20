import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private notificaSrv: NotificationService) { }

  ngOnInit() {
  }

  mostrarInfo(){
    this.notificaSrv.show('info', 'mensaje de notificacion');
  }

  mostrarError(){
    this.notificaSrv.show('error', 'mensaje de error');
  }
}
