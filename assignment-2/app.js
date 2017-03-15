(function(){
  'use strict';

  angular.module('SharingListApp',[])
  .controller('BuyingListController', BuyingListController)
  .controller('BoughtListController', BoughtListController)
  .provider('ShoppingList', ShoppingListProvider);


  BoughtListController.$inject = ['ShoppingList'];
  function BoughtListController(ShoppingList) {
    var bought = this;
    bought.items =  ShoppingList.getBoughtItems();
  }

  BuyingListController.$inject = ['ShoppingList'];
  function BuyingListController(ShoppingList) {
    var buyingList = this;

    buyingList.items = ShoppingList.getItemsToBuy();

    buyingList.bought = function(itemIndex) {
      ShoppingList.bought(itemIndex);
    };
  }

  function BuyingListService() {
    var service = this;
    var buyingList = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      },
      {
        name: "Fish",
        quantity: "6"
      }
    ];

    var boughtList = [];

    service.getItemsToBuy = function() {
      return buyingList;
    };

    service.bought = function(itemIndex) {
      if (itemIndex !== undefined) {
        var item = buyingList[itemIndex];
        boughtList.push(item);
        buyingList.splice(itemIndex, 1);
      }
    };

    service.getBoughtItems = function() {
      return boughtList;
    };
  }

  function ShoppingListProvider() {
    var provider = this;

    provider.$get = function() {
      var buyingList = new BuyingListService();
      return buyingList;
    }
  }

})();
