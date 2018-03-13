/*
VIRTUAL DOM
ver: 0.1
*/

var vd = (function(){

    var parent;
    /*
    RETURN _parent for assigne element.
    if set in add function, set new one, else return old one
    */
    function getParent(p) {
        if(parent=== null){console.error("No parent element set."); return;}
        if(p.constructor === Array) parent = p[0];          
        return parent;
    }

    function ataributs(s, el) {
        // set id of element
        if(s.id) el.setAttribute("id", s.id);
        // set class of element
        if(s.className) el.setAttribute("class", s.className);
        // set styles
        if(s.style) {
            for(var i in s.style) {
                el.style[i] = s.style[i];
            }
        }
        if(s.content) el.innerHTML = s.content;

    }


    return {
        add: function(tag, set) {
            // Because IE: set var as object
            if(!set) set = {};
            var el, isTagName, _parent;

            // update parent
             parent = getParent(tag);
            // Check if it is id ore node and getElement.
            isTagName = document.getElementsByTagName(parent).length;
         //   console.log("isTagName " + isTagName + " : " + parent);
            isTagName == 0?_parent = document.getElementById(parent):_parent = document.getElementsByTagName(parent)[0];
            
             tag.constructor===Array?el=document.createElement(tag[1]):el=document.createElement(tag);
             ataributs(set, el);
             
            _parent.appendChild(el);
        }
    }
})();