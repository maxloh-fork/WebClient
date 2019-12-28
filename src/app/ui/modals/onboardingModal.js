/* @ngInject */
function onboardingModal(pmModal, userType) {
    return pmModal({
        controllerAs: 'ctrl',
        templateUrl: require('../../../templates/ui/onboardingModal.tpl.html'),
        /* @ngInject */
        controller: function() {
            this.step = 0;
            this.hasCalendar = userType().isPaid;
            this.next = () => {
                if (this.step === 0 && !this.hasCalendar) {
                    this.step = 2;
                    return;
                }
                this.step++;
            };
            this.previous = () => {
                if (this.step === 2 && !this.hasCalendar) {
                    this.step = 0;
                    return;
                }
                this.step--;
            };
        }
    });
}
export default onboardingModal;
