import { Component } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
username : string = "";
email : string ="";
course_type : string ="";
course : string[] =[];
age : number = 0;
i : number = 0;

log(form:any){
  this.username = form.controls.user.value;
  this.email = form.controls.email.value;
  this.age = form.controls.age.value;
  this.course_type = form.controls.tcourse.value;
  if(form.controls.deepl.value)
  this.course[this.i++] = "Deep Learning";
  if(form.controls.webd.value)
  this.course[this.i++] = "Web Development";
  if(form.controls.dsa.value)
  this.course[this.i++] = "Data Structure and Algorithms";
  if(form.controls.ml.value)
  this.course[this.i++] = "Machine Learning";
  if(form.controls.verilog.value)
  this.course[this.i++] = "Verilog";
  if(form.controls.pic.value)
  this.course[this.i++] = "PIC Microcontroller";
  if(form.controls.python.value)
this.course[this.i++] = "Python for everybody ";
if(form.controls.Angular.value)
this.course[this.i++] = "Angular js ";
if(form.controls.Java.value)
this.course[this.i++] = "Java full stack development ";
if(form.controls.digital.value)
this.course[this.i++] = "digital Marketing ";
if(form.controls.Django.value)
this.course[this.i++] = "Django for professionals ";
if(form.controls.content.value)
this.course[this.i++] = "content writing for beginners ";
  alert("welcome "+this.username+"to "+this.course+" course"+"\n thank you!");
  }
  }

