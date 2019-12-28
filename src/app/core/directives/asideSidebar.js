/* @ngInject */
function asideSidebar(userType) {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: require('../../../templates/layout/asideSidebar.tpl.html'),
        scope: {},
        link(scope) {
            scope.hasCalendar = userType().isPaid;
        }
    };
}

export default asideSidebar;
