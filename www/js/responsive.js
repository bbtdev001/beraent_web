const responsiveFactory=(()=>{
    var media={
        phone:0,
        tablet:600,
        desktop:900
    }//ALWAYS SORTED BY BREAK-POINT ASC
    
    var dispTogglers=[];
    var respElements=[];//directory of elements with responsive attributes    
    var rxRespAttr='data-(.+)-(phone|tablet|desktop)';
    var queryRespElems=`*`;

    function getDisplayTogglers(){
        dispTogglers=document.querySelectorAll('[data-display-toggler="true"]');
    }

    function resetDisplayTogglers(){
        for(let d of dispTogglers){
            d.checked = false;
        }
    }

    const attrChanges={
        clear:()=>{
            attrChanges._set=[];
            attrChanges._reset=[];
        },
        add:(chg)=>{
            if(chg.set){
                attrChanges._set.push(chg);
            }else{
                attrChanges._reset.push(chg);
            }
        },
        process:()=>{
            resetDisplayTogglers();

            //Process media matches first
            for(let chg of attrChanges._set){                                        
                attrChanges._processChange(chg);
            }
            
            //Process not matched media next - reset value of these attributes if not set in previous step
            for(let chg of attrChanges._reset){
                if(!attrChanges._set.find((f)=>(f.e === chg.e && f.attrName === chg.attrName))){
                    attrChanges._processChange(chg);
                }                                                
            }
        },
        _set:[],
        _reset:[],        
        _processChange(chg){
            switch(chg.attrName){
                case 'style':
                    let mergedStyle=mergeStyles(chg.attrValue, chg.e.originalAttributes[chg.attrName]);

                    chg.e.element.setAttribute(chg.attrName, mergedStyle);
                    break;
                default:
                    chg.e.element.setAttribute(chg.attrName, chg.attrValue);
            }
        }
    };

    function mergeStyles(newStyle, baseStyle){
        var aNew=[];

        for(let prop of newStyle.split(';')){
            let aProp=prop.split(':');
            
            if(aProp[0]){
                aNew.push({
                    name:aProp[0],
                    value:aProp[1]
                });
            }
        }
                
        for(let prop of baseStyle.split(';')){
            let aProp=prop.split(':');                        
            if(aProp[0] && !aNew.find((nw)=>nw.name==aProp[0])){
                aNew.push({
                    name:aProp[0],
                    value:aProp[1]
                });
            }
        }

        var res=``;

        for(let prop of aNew){
            if(res)
                res+=';';
            res+=prop.name+':'+prop.value
        }

        return res;
    }

    function getCurrentMedia(){
        var mRes=null;

        for(let m in media){
            if(window.innerWidth>media[m]){
                mRes=m;
            }else{
                break;
            }
        }

        return mRes;
    }

    function getMediaQuery(m){                
        for(let k in media){
            if(k==m){
                var pxFrom=media[k];
            }else if(pxFrom!==undefined){
                var pxTo=media[k];
                break;
            }
        }

        if(pxFrom<=0)
            return `(max-width:${pxTo}px)`;
        else if(pxTo===undefined)
            return `(min-width: ${pxFrom+1}px)`;
        else if(pxFrom>0 && pxTo>0)
            return `(min-width: ${pxFrom+1}px) and (max-width:${pxTo}px)`;
    }

    function getResponsiveElements(){
        respElements=[];

        document.querySelectorAll(queryRespElems).forEach((e)=>{            
            var respElem={
                element:e,
                responsiveAttributes:{},
                originalAttributes:{},
                isResponsive:false
            }

            for(let i=0;i<e.attributes.length;i++){
                var respAttr=e.attributes.item(i).name.match(rxRespAttr);

                if(respAttr){
                    respElem.isResponsive=true;

                    let m=respAttr[2];
                    let name=respAttr[1];

                    if(!respElem.responsiveAttributes[m])
                        respElem.responsiveAttributes[m]={};

                    respElem.responsiveAttributes[m][name]=e.getAttribute(respAttr[0]);
                    
                    if(!respElem.originalAttributes[name])
                        respElem.originalAttributes[name]=e.getAttribute(name)||'';
                }
            }

            if(respElem.isResponsive)
                respElements.push(respElem);
        });
    }

    function watchMedia(){
        var changeReady=1; //Binary 0,1 - media change/break comes always in pair

        for(let m in media){
            window.matchMedia(getMediaQuery(m)).addEventListener('change',(evt)=>{
                changeReady++;
                changeReady%=2;

                if(!changeReady){
                    attrChanges.clear();
                }
                
                for(let e of respElements){
                    if(!e.responsiveAttributes[m])
                        continue;                  

                    Object.entries(e.responsiveAttributes[m]).forEach(([attrName, attrValue])=>{                        
                        attrChanges.add({
                            e:e,
                            attrName:attrName,
                            attrValue:evt.matches?attrValue:e.originalAttributes[attrName],
                            set:evt.matches
                        });
                    });
                }

                if(changeReady)
                    attrChanges.process();
            });            
        }
    }

    function init(){
        getResponsiveElements();
        getDisplayTogglers();
        watchMedia();
    }

    function reload(){
        //Unset previous responsive attributes
        for(let e of respElements){
            for(let a in e.originalAttributes){
                e.element.setAttribute(a, e.originalAttributes[a]);
            }
        }

        //Set new responsible attributes
        getResponsiveElements();
        getDisplayTogglers();

        var m=getCurrentMedia();
        attrChanges.clear();

        for(let e of respElements){
            if(!e.responsiveAttributes[m])
                continue;                  

            Object.entries(e.responsiveAttributes[m]).forEach(([attrName, attrValue])=>{                        
                attrChanges.add({
                    e:e,
                    attrName:attrName,
                    attrValue:attrValue,
                    set:true
                });
            });
        }        

        attrChanges.process();
    }

    //Initialization - call once
    init();

    return {
        getCurrentMedia:getCurrentMedia,
        reload:reload
    };
})();