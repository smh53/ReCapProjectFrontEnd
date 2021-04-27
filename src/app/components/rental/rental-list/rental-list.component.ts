import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
source: LocalDataSource
  constructor(
    private _rentalService: RentalService,
    private _router:Router
  ) { }

 public settings = {
  pager: {
    display: true,
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

      brandName: {
        title: 'Marka İsmi',
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
      returnDate: {
        title: 'Araba Teslim Tarihi',
        type: 'Date'
      },

      rentDate: {
        title: 'Araba Kiralanma Tarihi',
        type: 'Date'
      },

    },
    attr: {
      class: 'table table-bordered'
    },
  };


  ngOnInit(): void {
    this.getAllBrands();
  }

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
  getAllBrands() {
    this._rentalService.getAllRentalDetails().subscribe(response => {
      this.source = new LocalDataSource(response.data);

    });
   }

}
