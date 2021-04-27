import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  source: LocalDataSource
  constructor(
    private _carService: CarService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.getAllCars()
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

        brandName: {
          title: 'Marka',
          type: 'string'
        },

        colorName: {
          title: 'Renk',
          type: 'string'
        },

        modelYear: {
          title: 'Model Senesi',
          type: 'number'
        },

        description: {
          title: 'Açıklama',
          type: 'string'
        },

        dailyPrice: {
          title: 'Günlük Fiyat',
          type: 'number'
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
    getAllCars() {
      this._carService.getAllCarDetails().subscribe(response => {
        this.source = new LocalDataSource(response.data);
        console.log(this.source);
      });
     }
}
