app.directive('tooltip', function() {
  return {
    restrict: 'EA',
    link: function(scope, element, attrs) {
      attrs.tooltipTrigger = attrs.tooltipTrigger;
      attrs.tooltipPlacement = attrs.tooltipPlacement || 'top';
    }
  }
})
.directive('getFile', ['$parse', function($parse){
   
   return{  
     restrict: 'A',
     link: function(scope, element, attr){
        
      element.on('change', function(e){
        $parse(attr.getFile).assign(scope, element[0].files[0]);

      });  

     }

  };
 
}]);