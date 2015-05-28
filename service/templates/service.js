angular.module('<%= appname %>').factory('<%= _.camelize(name) %>', <%= _.camelize(name) %>);

/* @ngInject */
function <%= _.camelize(name) %> () {

    var <%= _.camelize(name) %> = {};

    return <%= _.camelize(name) %>;
});
