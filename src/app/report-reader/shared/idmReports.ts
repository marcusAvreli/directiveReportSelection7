import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http,
    ConnectionBackend,
    RequestOptions,
    RequestOptionsArgs,
	ResponseContentType,
    Response,
    Headers} from '@angular/http';
//import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MyReportModel } from './myReport.model';
/*const options = {
                headers: new HttpHeaders()
                    .set('Accept', 'application/json')
                    .set('Content-Type', 'application/x-www-form-urlencoded'),
                withCredentials: true
            };*/
/*const options = new RequestOptions();
            options.headers = new Headers();
            options.headers.append('Content-Type', 'application/json');
            options.headers.append('X-Requested-With', 'XMLHttpRequest');*/
@Injectable()
export class GoogleBooksService {
  private API_PATH = 'http://localhost:8080/jaxCustomRestApi2/rest/identities';

  constructor(private http: Http) {}
private _testObservable: Observable<MyReportModel[]>;
  searchBooks(): Observable<MyReportModel[]> {

//let myHeaders = new Headers();
   // myHeaders.append('Content-Type', 'application/json');    

	//  let headers = new Headers();
   // headers.append('Content-Type', 'application/json');

  //  let options = new RequestOptions({ headers: headers});

	  console.log("idmReports Search Books Called");


	  
	 //this._testObservable=  this.http.get(`${this.API_PATH}`,this.requestOptions()).map(res => res.json());
	 //this._testObservable.subscribe(val => console.log("ssssssss2"+val));
      
	 
	  return this.http.get(`${this.API_PATH}`,this.requestOptions())
      .map(res => res.json());
  }

searchFood(query: MyReportModel): Observable<MyReportModel[]> {
   
console.log("search food called");
console.log("query object:"+query.name);
let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json'); 
myHeaders.append('Accept', 'application/json'); 
myHeaders.append('Access-Control-Allow-Origin', '*');
 myHeaders.append('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE, PUT, OPTIONS');
 myHeaders.append('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
myHeaders.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

let myParams = new URLSearchParams();
var json = JSON.stringify(query);
//myParams.append('name', json); 
console.log("string json"+json);

let options = new RequestOptions({ headers: myHeaders, params: myParams }); 
options.withCredentials=false;
options.responseType = ResponseContentType.Json;
//getByIdentity
    return this.http.post('http://localhost:8080/jaxCustomRestApi2/rest/identities/getByIdentity',json,options)
      .map(res => res.json());
  }
  retrieveBook(volumeId: string): Observable<MyReportModel> {
	  console.log("retrieve Books");
    return this.http.get(`${this.API_PATH}/${volumeId}`)
      .map(res => res.json());
  }
   private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
			options.withCredentials=false;
        }
        if (options.headers == null) {
            options.headers = new Headers();
			options.headers.append('Content-Type', 'application/x-www-form-urlencoded');
			options.headers.append('Accept', 'application/json');
        }
        return options;
    }
}