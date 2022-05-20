import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

/*import { ArticleComponent }  from './article.component';
import { TechnologyComponent }  from './technology.component';
import { PostItem } from './post-item';
import { MyPost } from './mypost';*/
import { ReportItem } from './report.item';
@Injectable()
export class ReportService { 
        constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
	
	loadComponent(viewContainerRef: ViewContainerRef, postItem: ReportItem) {
		let componentFactory = this.componentFactoryResolver
		                      .resolveComponentFactory(postItem.component);
		viewContainerRef.clear();
		let componentRef = viewContainerRef.createComponent(componentFactory);
		//let myPost: MyPost = <MyPost>componentRef.instance;
		//myPost.post = postItem.data;
	}
}