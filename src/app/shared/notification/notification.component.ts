import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit {
  mensaje: string = "Bienvenido al Programa"
  tipo: string = 'info'
  constructor(private notificaSrv: NotificationService) { 
    this.borrarMensaje();
    this.notificaSrv.emiter.subscribe((d:any)=>{
      this.mensaje=d.mensaje;
      this.tipo= d.tipo;
      this.borrarMensaje();
    })
  }

  ngOnInit() {
  }

  borrarMensaje(){
    setTimeout(()=>{
      this.mensaje=null;
      this.tipo=null;
    }, 2000)
  }

}
