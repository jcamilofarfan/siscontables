const analyticsTracking =(eventName)=>{
    if(typeof window != 'undefined'){
        window.ga('send', 'event', 'social', 'click', eventName,{
            nonInteraction: true
        });
    }
};

export default analyticsTracking;