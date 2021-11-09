import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminServicesService } from '../../Services/admin-services.service';
import { SearchPanelServiceService } from './Services/search-panel-service.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

  @Input() controllerName : any;

  @Output() userEntireData : EventEmitter<any> = new EventEmitter()

  toSearchTerm : any;
  res:any;
  
  constructor(private userService : AdminServicesService, private searchPanelService: SearchPanelServiceService) { }

  ngOnInit(): void {
  }

  handleSearch(){
    
    if(this.toSearchTerm?.includes("@"))
     {  this.res = this.userService.FindUserByUserNameOREmail("", this.toSearchTerm);}
    else{
       this.res = this.userService.FindUserByUserNameOREmail( this.toSearchTerm, "")
    }
    
    
    this.res.subscribe( (userEntireData:any) =>{
        console.log("User found", userEntireData);

        this.userEntireData.emit(userEntireData); //contains entire user info

        
          // this.searchPanelService.getAllDataOfUserById(res.UId, this.controllerName)
        //   .subscribe( (res:any) => {
        //     console.log("Table Data found for User -> ", res);

        //     
        //   },
        //   (error:string) => {
        //     console.log("Error in fetching table Data for User");
        //   })
    },
      (error: any) => {
      console.log("USer Not found Error ->" ,error);

    })
    
  }

}
