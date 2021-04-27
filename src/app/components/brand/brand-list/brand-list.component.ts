import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BrandService } from 'src/app/services/brand.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
  source: LocalDataSource;
  constructor(
    private _brandService: BrandService,
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
      id: {
        title: 'ID',
        type:'number'
      },
      name: {
        title: 'Marka İsmi',
        type: 'string'
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
    this._brandService.getAllBrands().subscribe(response => {
      this.source = new LocalDataSource(response.data);

    });
   }
}
