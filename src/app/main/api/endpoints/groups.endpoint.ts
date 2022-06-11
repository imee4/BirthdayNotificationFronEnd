import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"; 
import { environment } from "src/environments/environment"; 
import { GroupsResources } from "../models/resources/group-resource.mdel";

@Injectable({
    providedIn: 'root',
})
export class GroupsEndPoint {
    baseUrl = `${environment.apiUrl}//admin/groups'`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<{ data: GroupsResources[] }>(`${this.baseUrl}`);
    }

    single(id: number) {
        return this.httpClient.get<{ data: GroupsResources }>(`${this.baseUrl}/${id}`);
    }

    create(data) {
        return this.httpClient.post<{ data: GroupsResources }>(`${this.baseUrl}`, data);
    }
       
    delete(id: number) {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }

    update(id: number, data) {
        return this.httpClient.put<{ data: GroupsResources }>(`${this.baseUrl}/${id}`, data);
    }
}