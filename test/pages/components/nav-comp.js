class NavComponent {

    get listNavMenu() {
        return $$('#zak-primary-menu li[id*=menu]');
    }

    get expectedMenuStrings() {
        return [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
          ];
    }
}

const navComp = new NavComponent();
export default navComp;