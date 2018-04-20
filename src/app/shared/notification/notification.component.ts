import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit {
  mensaje: string = ""
  tipo: string = ''
  constructor(private notificaSrv: NotificationService) { 
    this.notificaSrv.emiter.subscribe((d:any)=>{
      this.mensaje=d.mensaje;
      this.tipo= d.tipo;
    })
  }

  ngOnInit() {
  }

}
