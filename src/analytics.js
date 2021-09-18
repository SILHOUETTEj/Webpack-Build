import * as $ from 'jquery';


function createAnalytics() {
    let counter = 0;
    let isDestroyed = false;
    const listener = () => counter++;

    $(document).on('click',listener)

    return {
        destroy(){
            $(document).off('click',listener)
            let isDestroyed = true;
        },

        getClicks(){
            if(isDestroyed) return `Analytics is destroyed. Total click = ${counter}`;
             return counter
        }
    }
}

window.analytics = createAnalytics();