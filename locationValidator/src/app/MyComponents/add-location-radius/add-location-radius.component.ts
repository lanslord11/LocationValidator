import { Component } from '@angular/core';
import {DataEntriesService } from "../../data-entries.service"

@Component({
  selector: 'app-add-location-radius',
  templateUrl: './add-location-radius.component.html',
  styleUrls: ['./add-location-radius.component.css']
})
export class AddLocationRadiusComponent {

  data:any;
  latitude:number;
  longitude:number;
  vali:boolean;

  constructor(private dataEntries:DataEntriesService){
    this.dataEntries.getEntries().subscribe(data =>{
      this.data=data;
      
    })
    this.latitude=0;
    this.longitude=0;
    this.vali=false;
  }

  deleteAll(){

    this.dataEntries.deleteEntries().subscribe((result)=>{
      console.log(result);
      this.data=[];
      this.vali=false;
    });
  }

  

  onSubmitHander(dataEntry:any) {
    console.log(dataEntry);
    this.dataEntries.postEntries(dataEntry).subscribe((result) =>{
      this.data=result;
      
    });
    
  }

  validate(){
    this.dataEntries.getLocation().then(response=>{

      for ( var val of this.data){
        if( val.radius > 3440.1*1.852*Math.acos(Math.sin(val.latitude)*Math.sin(response.latitude)+Math.cos(val.latitude)*Math.cos(response.latitude)*Math.cos(response.longitude-val.longitude)))
          {
            this.vali=true;
            alert(this.vali);
            console.log(this.vali);
            return 
          }
      }
      alert(this.vali)
      
    })
    
  }

 
}
