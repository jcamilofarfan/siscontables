const analyticsTracking =(eventName)=>{
    if(typeof window != 'undefined'){
        gtag('send', 'event', 'social', 'click', eventName,{
            nonInteraction: true
        });
    }
};

export default analyticsTracking;