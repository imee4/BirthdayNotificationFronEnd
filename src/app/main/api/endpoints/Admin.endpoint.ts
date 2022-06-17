import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { environment } from "src/environments/environment";
import { AdminResources } from "../models/resources/admin.model"; 

@Injectable({
    providedIn: 'root',
})
export class AdminEndPoint {
    baseUrl = `${environment.apiUrl}api/admin`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<AdminResources[] >(`${this.baseUrl}`);
    }

    single(id: number) {
        return this.httpClient.get<{ data: AdminResources }>(`${this.baseUrl}/${id}`);
    }

    create(data) {
        return this.httpClient.post<{ data: AdminResources }>(`${this.baseUrl}`, data);
    }
       
    delete(id: number) {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }

    update(id: number, data) {
        return this.httpClient.put<{ data: AdminResources }>(`${this.baseUrl}/${id}`, data);
    }
}