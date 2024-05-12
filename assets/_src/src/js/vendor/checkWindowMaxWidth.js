export default () => ({
    isWindowMaxWidth: undefined,
    sm() {
        this.isWindowMaxWidth = window.innerWidth < 576
    },
    md() {
        this.isWindowMaxWidth = window.innerWidth < 768
    },
    lg() {
        this.isWindowMaxWidth = window.innerWidth < 992
    },
    xl() {
        this.isWindowMaxWidth = window.innerWidth < 1200
    }
});
