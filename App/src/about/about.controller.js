class AboutCtrl {

  constructor($scope) {
    'ngInject';
  }

  alert(button) {
    new Windows.UI.Popups.MessageDialog("Whaaaaat?", "Some Fancy Title").showAsync()
  }
}
export default AboutCtrl;