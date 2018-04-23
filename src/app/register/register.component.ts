import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  frmRegistro : FormGroup;
  constructor(private fb: FormBuilder) {
    this.frmRegistro=this.fb.group({
      nombre:['', Validators.required],
      email:['', Validators.email],
      clave:['', Validators.required],
      confirmar:['', Validators.required],

    })
   }

  ngOnInit() {
  }

  registro(){
    
  }
}
