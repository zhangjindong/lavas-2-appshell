import Vue from 'vue';

import Skeleton from 'D:\\learn\\lavas\\lavas-2-appshell\\core\\Skeleton.vue';


export default new Vue({
    components: {
        
        Skeleton,
        
    },
    template: `
        <div>
            
            <skeleton id="skeleton" style="display:none"/>
            
        </div>
    `
});
