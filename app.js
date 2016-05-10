angular.module('sampleApp',[])
  .component('home',{
    templateUrl: 'views/home.html',
    controller: HomeController
  })
  .component('listComponent',{
    templateUrl:'views/list.html',
    controller: ListController,
    bindings: {
      name: '<',
      onListChange: '&'
    }
  })
  .component('paragraph',{
    templateUrl: 'views/paragraph.html',
    bindings: {
      name: '<'
    },
    controller: ParagraphController
  })


  function HomeController($scope) {
    var ctrl = this;
    this.name = "Raj";

    this.onChange = function(changedValue) {
      console.log(changedValue);
      this.name = changedValue;
    };

  };


  function ListController($scope) {
    var ctrl = this;
    // ctrl.onChangeText = function() {
    //   console.log("Triggered");
    // }
    console.log($scope);
  };

  function ParagraphController($scope) {
    // console.log($scope);
  }
