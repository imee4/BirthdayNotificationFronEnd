import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserResource } from "src/app/main/api/models/resources/user.model";    
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class UserEndPoint {
     
    baseUrl = `${environment.apiUrl}/users`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<{ data: UserResource[] }>(`${this.baseUrl}`);
    }

    single(id: number) {
        return this.httpClient.get<{ data: UserResource }>(`${this.baseUrl}/${id}`);
    }

    create(data) {
        return this.httpClient.post<{ data: UserResource }>(`${this.baseUrl}`, data);
    }
       
    delete(id: number) {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }

    update(id: number, data) {
        return this.httpClient.put<{ data: UserResource }>(`${this.baseUrl}/${id}`, data);
    }
}