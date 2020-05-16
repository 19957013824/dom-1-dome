window.dom = {


    //dom.find('选择器',node)[0] 用于获取标签或标签们
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    //dom.parent(node) 用于获取父元素
    parent(node) {
        return node.parentNode
    },
    //dom.children(node) 用于获取子元素
    children(node) {
        return node.children
    },
    //dom.siblings(dom.find('选择器')[0]) 用于获取兄弟姐妹元素
    siblings(node) {
        return Array(node.parentNode.children.children).filter(n => n !== node)
    },




    //用于修改style
    style(node, name, value) {
        if (arguments.length === 3) {
            //dom.style(div, 'color', 'red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                //dom.style(div, 'color')
                return node.style[name]
            } else if (name instanceof object) {
                //dom.style(div, {color:'red'})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },




    //dom.each(dom.children(dom.find('选择器')), fn)[0] 用于遍历所有节点
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    }
}