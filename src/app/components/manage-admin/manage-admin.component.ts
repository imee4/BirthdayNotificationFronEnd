import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { AdminEndPoint } from '../../main/api/endpoints/Admin.endpoint';
import { CreateAdmin } from '../../main/api/models/requests/Create-Admin.model';
import { AdminResources } from '../../main/api/models/resources/admin.model';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.scss']
})
export class ManageAdminComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  adminResources:AdminResources[]=[];
  apiModel:CreateAdmin={
    profile_id: 0,
    email: '',
    password: '',
    user_type_id: 0
  }
  
  displayForm = false;
  operation = 'Add';
  id: any;
  user_type_id: number;
  profile_id: number;
  password: string;
  email: string;
  constructor(private adminEndPoint: AdminEndPoint) {  
    this.loadItem = this.loadItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  ngOnInit(): void {
    this.adminEndPoint.list()
      .subscribe({
        next: (response) => this.adminResources = response.data,
        error: (error) => console.log(error),
      });
  }
  showForm() {
   
    this.displayForm = true;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
  hideForm() {
    this.displayForm = false;
    this.form?.reset();
  }
  
processForm(e) {
  this.save();
}
save() {
  
  Swal.showLoading( );
 
  let httpCall =
    this.operation === 'Update'
      ? this.adminEndPoint.update(this.id,this.apiModel)    
      : this.adminEndPoint.create(this.apiModel);
  httpCall.subscribe(
    success => {
      Swal.close();
      this.updateList(this.id, success.data);  
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Operation successful',
        customClass: {
          confirmButton: 'btn btn-success'
        }
      });
      this.resetForm();
    },
    error => {
      Swal.close();
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error!!',
        text: error,
        customClass: {
          confirmButton: 'btn btn-danger'
        }
      });
    }
  );
}
updateList(id, updateAminResource) {
  this.adminResources = this.adminResources.filter(e => e.profile_id !== id);
  this.adminResources.push(updateAminResource);
  this.adminResources.sort(function (a, b) {
    return a.profile_id - b.profile_id;
  });
}
resetForm() {
  this.form?.reset();
  this.operation = "Add"; 
}
deleteItem(id) {
  Swal.fire({
    title: 'Delete',
    text: "Are you sure you want to delete this record?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-danger ml-1'
    }
  }).then(result => {
    if (result.value) {
      this.adminEndPoint.delete(id.row.data.id).subscribe(
        _ => {
          this.adminResources = this.adminResources.filter(
            e => e.profile_id !== id.row.data.id
          );
          // this.alert.success('Record deleted');
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Your record has been deleted.',
            customClass: {
              confirmButton: 'btn btn-success'
            }
          });
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Error!!',
            text: error,
            customClass: {
              confirmButton: 'btn btn-danger'
            }
          });
        }
      );
    } else if (result.dismiss === Swal.DismissReason.cancel) {
    }
  });
}
addItem() {
  this.showForm();
  this.resetForm();
}
loadItem(id) {
  let addUserResource = this.adminResources.find(
    item => item.password === id.row.data.id
  );
  console.log(addUserResource);
  Object.assign(this.apiModel, addUserResource);
  this.id = id.row.data.id;
  this.email =this.apiModel.email; 
  this.password = this.apiModel.password; 
  this.profile_id = this.apiModel.profile_id; 
  this.user_type_id = this.apiModel.user_type_id; 
  
  this.operation = 'Update';
  this.showForm();
}
}
