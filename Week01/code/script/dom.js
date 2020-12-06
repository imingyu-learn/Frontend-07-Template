function createElement(tagName, attrs, children, appendToParent) {
    var el = document.createElement(tagName);
    if (attrs) {
        for (let attrName in attrs) {
            el.setAttribute(attrName, attrs[attrName]);
        }
    }
    if (Array.isArray(children)) {
        children.forEach(child => {
            el.appendChild(child);
        })
    } else if (typeof children === 'string') {
        el.innerText = children;
    }
    if (appendToParent && appendToParent.appendChild) {
        appendToParent.appendChild(el);
    }
    return el;
}

function setElementProp(el, props) {
    for (let prop in props) {
        if (prop in el) {
            el[prop] = props[prop]
        } else {
            el.setAttribute(prop, props[prop]);
        }
    }
}
function filterValidItems(arr) {
    return arr.filter(item => {
        return item;
    })
}
function getElClassNameArray(el) {
    const elClass = el.className || el.getAttribute('class') || '';
    return filterValidItems(elClass.split(' '));
}
function removeClass(el, className) {
    const arr = filterValidItems((className || '').split(' '));
    if (!arr.length) return el;
    setElementProp(el, {
        'class': getElClassNameArray(el).filter(item => {
            return arr.indexOf(item) === -1;
        }).join(' ')
    });
    return el;
}
function addClass(el, className) {
    const arr = filterValidItems((className || '').split(' '));
    if (!arr.length) return el;
    const readyClass = getElClassNameArray(el);
    arr.forEach(item => {
        if (readyClass.indexOf(item) === -1) {
            readyClass.push(item);
        }
    })
    setElementProp(el, {
        'class': readyClass.join(' ')
    });
    return el;
}

function isClass(el, className) {
    const arr = filterValidItems((className || '').split(' '));
    if (!arr.length) return false;
    const readyClass = getElClassNameArray(el);
    return readyClass.some(item => arr.indexOf(item) !== -1);
}