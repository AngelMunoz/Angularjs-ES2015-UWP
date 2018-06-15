class AppController {

  constructor() {
    this.routes = [
      { state: 'home', label: 'Home' },
      { state: 'about', label: 'About' },
      { state: 'users', label: 'Users' },
      { state: 'tickets', label: 'Tickets' },
    ];

    this.sireNavRef = document.querySelector('.sidenav');
    this.sideNav = M.Sidenav.init(this.sireNavRef);
  }


  openSideNav() {
    this.sideNav.open();
  }

  closeSideNav() {
    this.sideNav.close();
  }


}



export default AppController;