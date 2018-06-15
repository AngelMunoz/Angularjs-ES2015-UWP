class HomeCtrl {

  constructor($scope) {
    'ngInject';
    this.count = 0;
    this.brackets = "{{ <variable name> }} Like: {{ $ctrl.count }}"
  }

  countAdd() {
    this.count++;
  }

  countMinus() {
    this.count--;
  }


  onKeyPress(event) {
    console.log(event, event.keyCode)
  }

  onNgChange() {
    console.log(this.perro)
    console.log(`The Model Changed on an input!`)
  }
}
export default HomeCtrl;