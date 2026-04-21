const imageFactory=(()=>{
    function createElementId(){
      return Math.random().toString(36).slice(2);
    }

    function getLogo(param){
                let color  = param.color ||'black';
                let width  = param.width ||'100%';
                let height = param.height||'auto';

                var svgData = 'data:image/svg+xml;base64,'+
                btoa(`<svg
   width="116.01819mm"
   height="56.103882mm"
   viewBox="0 0 116.01819 56.103882"
   version="1.1"
   id="svg1"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1">
    <rect
       x="180.86633"
       y="315.79837"
       width="374.17322"
       height="194.26385"
       id="rect1" />
  </defs>
  <g
     id="layer1"
     transform="translate(-29.597037,-52.148189)">
    <path
       id="rect2"
       style="fill:${color};stroke:none;stroke-width:0.28101"
       d="M 13.00894 54.906244 L 13.008759 113.54525 L 110.74853 113.54525 L 110.74871 54.906244 L 13.00894 54.906244 z M 41.834691 68.487373 C 44.260036 68.487373 46.345286 68.856412 48.090427 69.594486 C 49.85377 70.318089 51.176392 71.446912 52.058284 72.98095 L 45.70678 78.277726 C 44.931994 77.25021 44.059174 76.475953 43.088326 75.954959 C 42.117477 75.433965 40.936141 75.173468 39.544324 75.173468 C 37.311904 75.173468 35.979081 75.8826 35.545861 77.300861 C 35.382299 77.836327 35.437926 78.263254 35.712743 78.581639 C 36.00134 78.900024 36.452315 79.160522 37.065664 79.363131 C 37.679014 79.565739 38.609834 79.811765 39.858117 80.101206 C 41.917096 80.578784 43.581907 81.128723 44.85254 81.751022 C 46.123173 82.37332 47.032778 83.34295 47.581348 84.659907 C 48.129919 85.976864 48.059397 87.764167 47.369783 90.021807 C 46.742057 92.076839 45.745778 93.84967 44.380952 95.340292 C 43.016125 96.830913 41.295746 97.974209 39.219824 98.770171 C 37.157682 99.566134 34.783018 99.964117 32.095846 99.964117 C 29.146848 99.964117 26.67913 99.493774 24.692708 98.55309 C 22.724488 97.597935 21.290722 96.201378 20.39142 94.363427 L 27.114216 89.001527 C 27.836473 90.246123 28.743867 91.22299 29.836393 91.93212 C 30.942699 92.641251 32.446702 92.995817 34.348392 92.995817 C 35.671308 92.995817 36.693664 92.829388 37.415454 92.496531 C 38.151025 92.163674 38.633747 91.62097 38.863619 90.868423 C 39.044863 90.275069 38.960897 89.783018 38.611721 89.392273 C 38.276325 89.001527 37.735 88.675905 36.987749 88.415408 C 36.258699 88.140439 35.196188 87.829289 33.800222 87.48196 C 32.03557 87.033326 30.556794 86.483387 29.363904 85.832144 C 28.189215 85.16643 27.348513 84.1968 26.841802 82.923259 C 26.335091 81.649719 26.391178 79.9999 27.010062 77.973812 C 27.642209 75.904309 28.664097 74.160422 30.075723 72.742161 C 31.487348 71.323899 33.197194 70.2602 35.205252 69.55107 C 37.213309 68.841939 39.423127 68.487373 41.834691 68.487373 z M 55.281176 68.943243 L 70.143318 68.943243 C 72.747808 68.943243 74.769613 69.384642 76.208722 70.267437 C 77.666032 71.13576 78.560287 72.358652 78.891483 73.936106 C 79.236459 75.51356 79.081823 77.373224 78.427573 79.515087 C 77.835212 81.454342 76.885214 83.256118 75.577583 84.920404 C 74.288153 86.570218 72.65279 87.908887 70.671503 88.936402 C 68.694636 89.949446 66.459072 90.455969 63.964826 90.455969 L 57.184878 90.455969 L 54.413157 99.529955 L 45.938222 99.529955 L 55.281176 68.943243 z M 83.192134 68.943243 L 104.93758 68.943243 L 102.68307 76.323997 L 89.391888 76.323997 L 87.773946 81.620773 L 100.69305 81.620773 L 98.412021 89.088359 L 85.492913 89.088359 L 82.303444 99.529955 L 73.84918 99.529955 L 83.192134 68.943243 z M 61.554648 76.150332 L 59.373079 83.292297 L 65.036816 83.292297 C 66.249488 83.292297 67.27666 82.952202 68.118325 82.272016 C 68.978191 81.577358 69.573899 80.687324 69.905444 79.60192 C 70.24141 78.502044 70.169286 77.655426 69.689073 77.062072 C 69.213281 76.454246 68.334595 76.150332 67.053021 76.150332 L 61.554648 76.150332 z "
       transform="matrix(1,0,0.30545794,0.95220557,0,0)" />
  </g></svg>`);
           return `<img src="${svgData}" style="width:${width};height:${height}">`;
    }

    function getEck(color, image, width, style){
        var pathId='eckpath'+createElementId();

        if(style===undefined)
            style='';

        var svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1" style="position:absolute;top:0;left:0;width:${width};${style}">
            <defs>
            <clipPath id="${pathId}" clipPathUnits="objectBoundingBox">
                <path
                d="M 0.00,1.00
                C 0.00,1.00 1.00,0.00 1.00,0.00
                1.00,0.00 0.00,0.00 0.00,0.00
                0.00,0.00 0.00,1.00 0.00,1.00 Z" />
            </clipPath>
            </defs>`;
        
        if(image)
            svg+=`<image href ="${image}" width="1" height="1" clip-path="url(#${pathId})" preserveAspectRatio="xMaxYMin slice"></image>`;
        else
            svg+=`<rect width="1" height="1" x="0" y="0" fill="${color}" clip-path="url(#${pathId})"></rect>`;

        return svg+'</svg>';
    }

    function getStripe(param){
        if(!param.target)
            throw 'getStripe: obligatory parameter "target" missing';

        let target  = param.target;              
        let width   = param.width||'100%';
        let height  = param.height||'100%';
        let content = param.content||'';
        let rtl     = param.rtl||false;

        let bgWidth = param.bgWidth||'100%';
        let bgColor = param.bgColor||'auto';
        let bgImage = param.bgImage||'';      
        let id      = param.id||createElementId();  

        if(target instanceof HTMLElement)
            var eTarget = target;
        else
            eTarget = document.querySelector(target);

        if(!rtl)
            var html=`<div id="${id}" style="position:relative;height:${height};width:${width};min-height:1rem;overflow:hidden">${getEck(bgColor,bgImage,bgWidth)}<div style="position:relative;">${content}</div></div>`;
        else
            html=`<div id="${id}" style="position:relative;height:${height};width:${width};min-height:1rem;overflow:hidden">${getEck(bgColor, bgImage, bgWidth, "transform: scaleX(-1);right:0;left:auto")}<div style="position:relative;">${content}</div></div>`;

        eTarget.innerHTML += html;

        return id;
    }

    function getIcon(icon){
        switch(icon){
            case 'grid':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`;
            case 'stack':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`;
        }
    }

    function setIcons(){        
        document.querySelectorAll('[data-imagefactory-icon]').forEach((e)=>{
            if(e.hasChildNodes())
                return;

            const i=e.getAttribute('data-imagefactory-icon');
            const icon=getIcon(i);
            e.innerHTML=icon;
        });
    }

    return {
        getLogo:getLogo,
        getStripe:getStripe,
        getIcon:getIcon,
        setIcons:setIcons
    };
})();