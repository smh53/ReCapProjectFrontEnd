import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
source: LocalDataSource
  constructor(
    private _customerService: CustomerService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.getAllCustomers()
  }


  public settings = {
    pager: {
      display: false,
    },
    position: 'right',
    actions: {
      columnTitle: 'İşlemler',
      position: 'right',
      add: false,
      edit: false,
      delete: false,
      custom: [
        { name: 'onEditAction', title: '<i class="nb-edit"></i>' },
        { name: 'onDeleteAction', title: '<i class="nb-trash"></i>' },
      ],
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
      columns: {

        companyName: {
          title: 'Firma İsmi',
          type: 'string'
        },

        firstName: {
          title: 'Müşteri Adı',
          type: 'string'
        },
        lastName: {
          title: 'Müşteri Soyadı',
          type: 'string'
        },
        email: {
          title: 'Müşteri Emaili',
          type: 'string'
        },

        status: {
          title: 'Hesap Durumu',
          type: 'boolean'
        },

      },
      attr: {
        class: 'table table-hover'
      },
    };

    public onCustomAction(event) {
      switch (event.action) {
        case 'onEditAction':
          this._router.navigateByUrl('/' + event.data.id);
          break;
        case 'onDeleteAction':

          event.confirm.reject();
          event.confirm.resolve();
          break;
      }
    }
    getAllCustomers() {
      this._customerService.getAllCustomerDetails().subscribe(response => {
        this.source = new LocalDataSource(response.data);
        console.log(this.source);
      });
     }
}
