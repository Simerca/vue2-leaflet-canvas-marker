import LCanvasMarker from "./components/LCanvasMarker.vue";

export default {
    install(Vue, options) {
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("l-canvas-marker", LCanvasMarker);
    }
};