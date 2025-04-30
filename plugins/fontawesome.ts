import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    fas,
    faCheck,
    faBars,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    fas,
    faCheck,
    faBars,
);

const FontawesomePlugin: any = defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});

export default FontawesomePlugin;
