// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { environment } from "environments/environment"; 
// import { CourtResource } from "../models/resources/court.model";

// @Injectable({
//     providedIn: 'root',
// })
// export class CourtEndPoint {
//     baseUrl = `${environment.apiUrl}/court`;

//     constructor(private readonly httpClient: HttpClient) {}

//     list() {
//         return this.httpClient.get<{ data: CourtResource[] }>(`${this.baseUrl}`);
//     }

//     single(id: number) {
//         return this.httpClient.get<{ data: CourtResource }>(`${this.baseUrl}/${id}`);
//     }

//     create(data) {
//         return this.httpClient.post<{ data: CourtResource }>(`${this.baseUrl}`, data);
//     }
       
//     delete(id: number) {
//         return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
//     }

//     update(id: number, data) {
//         return this.httpClient.put<{ data: CourtResource }>(`${this.baseUrl}/${id}`, data);
//     }
// }