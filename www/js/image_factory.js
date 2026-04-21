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
   width="161.742mm"
   height="51.268261mm"
   viewBox="0 0 161.74201 51.268262"
   version="1.1"
   id="svg1"
   sodipodi:docname="logo_spf_flat.svg"
   inkscape:version="1.3 (0e150ed6c4, 2023-07-21)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     inkscape:zoom="0.52248525"
     inkscape:cx="-199.04868"
     inkscape:cy="-88.997727"
     inkscape:window-width="2560"
     inkscape:window-height="1369"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs1">
    <rect
       x="180.86633"
       y="315.79837"
       width="374.17322"
       height="194.26385"
       id="rect1" />
    <rect
       x="180.86633"
       y="315.79837"
       width="374.17322"
       height="194.26385"
       id="rect1-6" />
  </defs>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(-29.593205,-56.983005)">
    <path
       id="rect2"
       style="fill:${color};stroke:${color};stroke-width:0;fill-opacity:1"
       d="M 9.5942869 60.570857 L 9.5943105 114.67453 L 107.95058 114.67453 L 107.95056 60.570857 L 9.5942869 60.570857 z M 35.288407 68.430238 C 37.712877 68.430238 39.759986 68.880084 41.430012 69.780144 C 43.119695 70.662555 44.328153 72.039169 45.054913 73.909881 L 38.170877 80.369481 C 37.500066 79.116457 36.705684 78.171823 35.787764 77.536487 C 34.869844 76.90115 33.715259 76.583934 32.323944 76.583934 C 30.092328 76.583934 28.688333 77.448442 28.112138 79.177968 C 27.894596 79.830953 27.907271 80.351718 28.149858 80.739979 C 28.406219 81.12824 28.830767 81.446004 29.423448 81.69308 C 30.01613 81.940154 30.921879 82.240052 32.140503 82.593017 C 34.150543 83.175408 35.759142 83.846122 36.966514 84.604997 C 38.173888 85.36387 38.985116 86.546143 39.400581 88.152131 C 39.816047 89.758121 39.565223 91.937529 38.648016 94.690654 C 37.813122 97.196702 36.638255 99.358795 35.123485 101.17656 C 33.608717 102.99433 31.773556 104.38881 29.618052 105.35946 C 27.476324 106.33011 25.0626 106.81515 22.376395 106.81515 C 19.428458 106.81515 17.008759 106.24188 15.117987 105.09474 C 13.24687 103.92996 11.954611 102.22692 11.241119 99.985596 L 18.50303 93.446526 C 19.099423 94.964273 19.907584 96.155753 20.92815 97.020516 C 21.962492 97.885279 23.430313 98.317807 25.331319 98.317807 C 26.653759 98.317807 27.692574 98.114807 28.447696 97.708897 C 29.216594 97.302987 29.753819 96.640933 30.059555 95.723225 C 30.300616 94.999648 30.26652 94.399853 29.956903 93.92335 C 29.661063 93.446848 29.152704 93.049506 28.432011 92.731837 C 27.730973 92.396522 26.700042 92.017045 25.339631 91.593488 C 23.620891 91.046392 22.198462 90.375678 21.071725 89.581508 C 19.964643 88.76969 19.22185 87.587418 18.843847 86.034373 C 18.465845 84.48133 18.688524 82.469186 19.511658 79.998435 C 20.352432 77.474738 21.549871 75.34838 23.104119 73.618854 C 24.658367 71.889328 26.474855 70.592292 28.553754 69.727529 C 30.632654 68.862766 32.87771 68.430238 35.288407 68.430238 z M 125.03083 68.972831 L 112.60438 106.27255 L 121.05554 106.27255 L 133.482 68.972831 L 125.03083 68.972831 z M 134.63903 68.972831 L 131.64051 77.973302 L 140.09168 77.973302 L 130.66374 106.27255 L 139.13557 106.27255 L 148.56351 77.973302 L 157.01468 77.973302 L 160.0132 68.972831 L 134.63903 68.972831 z M 48.823351 68.985985 L 60.910986 68.985985 C 66.035437 68.985985 69.444951 70.495229 71.13953 73.513076 C 72.834109 76.530923 72.64656 81.145796 70.576965 87.357972 C 69.24231 91.36412 67.460886 94.788062 65.233168 97.629426 C 63.019227 100.47079 60.504419 102.62367 57.688373 104.08848 C 54.886104 105.55328 51.949186 106.28571 48.87727 106.28571 L 36.396895 106.28571 L 48.823351 68.985985 z M 78.618949 68.985985 L 88.557877 68.985985 L 90.378063 93.975965 C 90.736036 92.405273 91.688121 89.299095 93.234439 84.657612 L 98.455464 68.985985 L 106.24569 68.985985 L 93.81923 106.28571 L 83.756278 106.28571 L 81.778125 82.328297 C 80.73594 85.787351 79.618128 89.308188 78.424584 92.890779 L 73.962044 106.28571 L 66.192492 106.28571 L 78.618949 68.985985 z M 54.275813 77.987003 L 47.846579 97.285236 L 51.483049 97.285236 C 53.811093 97.285236 55.853546 96.446707 57.610562 94.770124 C 59.381353 93.093543 60.798989 90.65808 61.863185 87.46375 C 62.880344 84.410607 63.059895 82.072588 62.402352 80.448952 C 61.764463 78.807666 60.226506 77.987003 57.78826 77.987003 L 54.275813 77.987003 z "
       transform="matrix(1,0,0.33315145,0.94287333,0,0)" />
  </g>
</svg>`);
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