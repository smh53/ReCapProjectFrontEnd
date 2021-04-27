import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss']
})
export class ColorListComponent implements OnInit {
source: LocalDataSource
  constructor(
    private _colorService: ColorService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.getAllColors()
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
        id: {
          title: 'ID',
          type:'number'
        },
        name: {
          title: 'Renk İsmi',
          type: 'string'
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
    getAllColors() {
      this._colorService.getAllColors().subscribe(response => {
        this.source = new LocalDataSource(response.data);
        console.log(this.source);
      });
     }
}
