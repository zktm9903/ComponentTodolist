export default class Component {
    $target;
    $state;
    constructor ($target) {
      this.$target = $target;
      this.setup();
      this.render();
      this.setEvent();
    }
    setup () {};
    template () { return ''; }
    mounted(){};
    render () {
      this.$target.innerHTML = this.template();
      this.mounted();
    }
    setEvent () {};
    setState (newState) {
      this.$state = { ...this.$state, ...newState };
      this.render();
    }
}