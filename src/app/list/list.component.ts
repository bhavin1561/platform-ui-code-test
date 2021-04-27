import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public selectedProviders = [
    ];
  public unselectedProviders = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    },
    {
      id: '4',
      name: 'Tom',
      address: '45 Tom Blvd',
      phone: '8991234321'
    },
    {
      id: '5',
      name: 'Jerry',
      address: '12 Amazon Road',
      phone: '2233211903'
    },
    {
      id: '6',
      name: 'Bhavin',
      address: '12 Street RD',
      phone: '4343219384'
    }
  ];

  private selectedProvidersStorage = 'selectedProviders';
  private unselectedProvidersStorage = 'unselectedProviders';

  constructor() { }

  setSettings() {
    localStorage.setItem(this.selectedProvidersStorage, JSON.stringify(this.selectedProviders));
    localStorage.setItem(this.unselectedProvidersStorage, JSON.stringify(this.unselectedProviders));
  }

  ngOnInit() {

   const selectedProviders = JSON.parse(localStorage.getItem(this.selectedProvidersStorage));
   const unselectedProviders = JSON.parse(localStorage.getItem(this.unselectedProvidersStorage));
    if (selectedProviders != null && unselectedProviders != null) {
      this.selectedProviders = selectedProviders;
      this.unselectedProviders = unselectedProviders;
    }
  }

  // tslint:disable-next-line:max-line-length
  selectProvider(unselectedProvider: { address: string; phone: string; name: string; id: string } | { address: string; phone: string; name: string; id: string } | { address: string; phone: string; name: string; id: string }) {
    this.selectedProviders.push(unselectedProvider);
    const index = this.unselectedProviders.indexOf(unselectedProvider);
    this.unselectedProviders.splice(index, 1);
    this.setSettings();
    return unselectedProvider;
  }

  // tslint:disable-next-line:max-line-length
  unselectProvider(selectedProvider: { address: string; phone: string; name: string; id: string } | { address: string; phone: string; name: string; id: string } | { address: string; phone: string; name: string; id: string }) {
    this.unselectedProviders.push(selectedProvider);
    const index = this.selectedProviders.indexOf(selectedProvider);
    this.selectedProviders.splice(index, 1);
    this.setSettings();
    return selectedProvider;
  }
}
