(function (window) {
    'use strict';
    //var SERVER_URL = ' http://localhost:2403/coffeeorders';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var App = window.App;
    //var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;
    var FireStore = App.FireStore;
    var FireDataStore = new App.FireStore();
    var Validation = App.Validation;
    //var truck = new Truck('ncc-1701', remoteDS());
    //var RemoteDataStore = App.RemoteDataStore;
    var truck = new Truck('ncc-1701', remoteFireBase);
    window.truck = truck;
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(truck.deliverOrder.bind(truck));
    var formHandler = new FormHandler(FORM_SELECTOR);
  
    formHandler.addSubmitHandler(function(data) {
        truck.createOrder.call(truck, data);
        checkList.addRow.call(checkList, data);
    });
    formHandler.addInputHandler(Validation.isCompanyEmail);
    console.log(formHandler);
  })(window);
  