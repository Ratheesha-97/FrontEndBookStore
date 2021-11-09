import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TestimonialService } from 'src/app/testimonial.service';
import { CategoryService } from '../services/category.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	catSubscription: Subscription | undefined = undefined;
	catData: any[] = [];
	CurrMenu: String = "Category";
	CurrCategory: String | null = "";
    optionSelected:String|null="--Choose filter--";
	searchText:String|any="";

	Categories:String="All Categories";
	Title:String="Title";
	Author:String="Author";
	ISBN:String="ISBN";
	Tag="Tag";
	selected="Filter here";

	constructor(private testServ: TestimonialService, private catServ: CategoryService,private route:ActivatedRoute,private router:Router) { }

	ngOnInit(): void {

		this.route.paramMap.subscribe((params: ParamMap) => {
		this.catSubscription = this.testServ.getCategoryForDropdown()
			//3. get the response from the service
			.subscribe((res1: any) => {
				//console.log(res1);
				this.catData = res1;
				this.CurrMenu = this.catData[0].CName;
			});
		});
	}

	SearchByFilter():void{
		  
		  this.router.navigate(['/Searchbooks', this.optionSelected, this.searchText]);
		//this.router.navigate(['../Searchbooks'],{Filter:this.optionSelected,searchText:this.searchText});
	}



}
