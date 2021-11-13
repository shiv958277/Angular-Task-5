import { Component } from '@angular/core';
import { Employee } from './Employee';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form';


  department=['Computer science and engineering','Civil engineering','Mechanical engineering','Electrical/electronic engineering']
  skills={'Computer science and engineering':['c','c++','python','java'],'Civil engineering':['Technical Skills','Project Management','Communication Skills','Problem Solving'],'Mechanical engineering':['Collaboration','Mathematics','Clear communication abilities','Problem Solving'],'Electrical/electronic engineering':['Basic circuit knowledge','Critical thinking','Organisation','Numeracy']}
  demoarray:string[]=[];
  result:Employee[]=[];
  selecteddepartment:string='';
  employeeObj:Employee = new Employee('',0,'','',[],'');
  checkvalue:string='';
  secondcheck:string='';

  onSubmit(employeeForm:NgForm)
  {
    if(this.checkvalue!=''){
      alert(this.checkvalue);
     
    }

    else{
      alert(this.secondcheck);
    }
    if(this.checkvalue==="Fine" || this.secondcheck==="Fine"){

    console.log("form submitted..."+employeeForm.value.name);

    this.employeeObj.name = employeeForm.value.name;
    this.employeeObj.salary = employeeForm.value.salary;
    this.employeeObj.experience = employeeForm.value.experience;
    this.employeeObj.task = employeeForm.value.task;
    this.employeeObj.department=this.selecteddepartment;
    this.employeeObj.skills=this.demoarray;


    console.log(this.employeeObj);
    this.result.push(this.employeeObj);

    }
    else{
      // console.log(this.checkvalue);
      // console.log(this.secondcheck);
    }
    
  }

  selectChangeHandler(event:any){
    this.selecteddepartment=event.target.value;
  }

  getSkill(event:any,j:string){
    if(event.target.checked){
      // console.log("entredt");
      this.employeeObj.skills.push(j);
    }
   

    else{
      this.employeeObj.skills=this.employeeObj.skills.filter(m=>m!=j);
    }

    console.log(this.employeeObj.skills);
    this.demoarray=this.employeeObj.skills;
  }

  check(){
  //  console.log("button clicked");
      if(parseInt(this.employeeObj.experience)>=3){
        if(this.employeeObj.skills.length>=2){
         this.checkvalue="Fine";
        }
        else{
          this.checkvalue="Skills selected should be more than 2 since experience is more than 3 years";
        }

      }
      else if(parseInt(this.employeeObj.experience)<=2){
        if(this.employeeObj.salary>=50000){
            this.secondcheck="Salary cannot be greater than 50000 since experience is less than 2 years";
        }
        else{
          this.secondcheck="Fine";
        }
      }
  }




   

}
