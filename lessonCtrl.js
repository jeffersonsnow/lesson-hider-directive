angular.module("directivePractice").controller("lessonCtrl", function($scope){
$scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
$scope.test = "two-way data binding!";
$scope.announceDay = function(lesson, day){
  if(day === undefined){
    alert(lesson + " is currently not scheduled.");
  } else {
  alert(lesson + ' is scheduled for ' + day + '.');
}
};
});
