angular.module('<%= appname %>').directive('<%= _.camelize(name) %>', <%= _.camelize(name) %>);
function <%= _.camelize(name) %>() {
    var directive = {
            restrict: 'EA',
            replace: true,
            scope: {

            },
            templateUrl: '<%= htmlPath %>',
            link: link,
            controller: <%= _.camelize(name) %>,
        controllerAs: 'vm',
        bindToController: true
};

return directive;

function link(scope, element, attrs, fn) {

}

}

/* @ngInject */
function <%= _.camelize(name) %> () {
    'use strict';
    /* jshint validthis: true */
    var vm = this;
}
