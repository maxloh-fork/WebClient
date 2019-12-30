/* @ngInject */
function asideSidebar() {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: require('../../../templates/layout/asideSidebar.tpl.html'),
        scope: {},
        link() {}
    };
}

export default asideSidebar;
