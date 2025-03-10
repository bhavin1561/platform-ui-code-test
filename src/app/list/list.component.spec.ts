import {ListComponent} from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;

  beforeEach(() => {
    component = new ListComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('unselected providers', () => {
    it('should have an initial length of 3', () => {
      expect(component.unselectedProviders.length).toEqual(6);
    });

    it('should have an id', () => {
      expect(component.unselectedProviders[0].id).toEqual('1');
    });

    it('should have a name', () => {
      expect(component.unselectedProviders[0].name).toEqual('John');
    });

    it('should have an address', () => {
      expect(component.unselectedProviders[0].address).toEqual('123 Greenway Blvd');
    });

    it('should have a phone', () => {
      expect(component.unselectedProviders[0].phone).toEqual('8991234321');
    });
  });

  describe('selected providers', () => {
    it('should have no initial length', () => {
      expect(component.selectedProviders.length).toEqual(0);
    });
  });

  describe('Transfer from unselect to select list', () => {
    it('Should move element from unselect to select list', () => {
        // tslint:disable-next-line:max-line-length
        expect(component.selectProvider(component.unselectedProviders[0])).toEqual(component.selectedProviders[component.selectedProviders.length - 1]);
    });
    });

  describe('Transfer from select to unselect list', () => {
    it('Should move element from select to unselect list', () => {
      // tslint:disable-next-line:max-line-length
      expect(component.unselectProvider(component.selectedProviders[0])).toEqual(component.unselectedProviders[component.unselectedProviders.length - 1]);
    });
  });

});
