(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.tracker = global.tracker || {}, global.tracker.js = {})));
})(undefined, (function (exports) {
    // Auto-generated, do not edit
    /* eslint-disable */
    function Timestamp(timestamp) {
        return [
            0 /* Messages.Type.Timestamp */,
            timestamp,
        ];
    }
    function SetPageLocation(url, referrer, navigationStart) {
        return [
            4 /* Messages.Type.SetPageLocation */,
            url,
            referrer,
            navigationStart,
        ];
    }
    function SetViewportSize(width, height) {
        return [
            5 /* Messages.Type.SetViewportSize */,
            width,
            height,
        ];
    }
    function SetViewportScroll(x, y) {
        return [
            6 /* Messages.Type.SetViewportScroll */,
            x,
            y,
        ];
    }
    function CreateDocument() {
        return [
            7 /* Messages.Type.CreateDocument */,
        ];
    }
    function CreateElementNode(id, parentID, index, tag, svg) {
        return [
            8 /* Messages.Type.CreateElementNode */,
            id,
            parentID,
            index,
            tag,
            svg,
        ];
    }
    function CreateTextNode(id, parentID, index) {
        return [
            9 /* Messages.Type.CreateTextNode */,
            id,
            parentID,
            index,
        ];
    }
    function MoveNode(id, parentID, index) {
        return [
            10 /* Messages.Type.MoveNode */,
            id,
            parentID,
            index,
        ];
    }
    function RemoveNode(id) {
        return [
            11 /* Messages.Type.RemoveNode */,
            id,
        ];
    }
    function RemoveNodeAttribute(id, name) {
        return [
            13 /* Messages.Type.RemoveNodeAttribute */,
            id,
            name,
        ];
    }
    function SetNodeData(id, data) {
        return [
            14 /* Messages.Type.SetNodeData */,
            id,
            data,
        ];
    }
    function SetNodeScroll(id, x, y) {
        return [
            16 /* Messages.Type.SetNodeScroll */,
            id,
            x,
            y,
        ];
    }
    function SetInputValue(id, value, mask) {
        return [
            18 /* Messages.Type.SetInputValue */,
            id,
            value,
            mask,
        ];
    }
    function SetInputChecked(id, checked) {
        return [
            19 /* Messages.Type.SetInputChecked */,
            id,
            checked,
        ];
    }
    function MouseMove(x, y) {
        return [
            20 /* Messages.Type.MouseMove */,
            x,
            y,
        ];
    }
    function ConsoleLog(level, value) {
        return [
            22 /* Messages.Type.ConsoleLog */,
            level,
            value,
        ];
    }
    function PageLoadTiming(requestStart, responseStart, responseEnd, domContentLoadedEventStart, domContentLoadedEventEnd, loadEventStart, loadEventEnd, firstPaint, firstContentfulPaint) {
        return [
            23 /* Messages.Type.PageLoadTiming */,
            requestStart,
            responseStart,
            responseEnd,
            domContentLoadedEventStart,
            domContentLoadedEventEnd,
            loadEventStart,
            loadEventEnd,
            firstPaint,
            firstContentfulPaint,
        ];
    }
    function PageRenderTiming(speedIndex, visuallyComplete, timeToInteractive) {
        return [
            24 /* Messages.Type.PageRenderTiming */,
            speedIndex,
            visuallyComplete,
            timeToInteractive,
        ];
    }
    function CustomEvent(name, payload) {
        return [
            27 /* Messages.Type.CustomEvent */,
            name,
            payload,
        ];
    }
    function UserID(id) {
        return [
            28 /* Messages.Type.UserID */,
            id,
        ];
    }
    function UserAnonymousID(id) {
        return [
            29 /* Messages.Type.UserAnonymousID */,
            id,
        ];
    }
    function Metadata(key, value) {
        return [
            30 /* Messages.Type.Metadata */,
            key,
            value,
        ];
    }
    function PerformanceTrack(frames, ticks, totalJSHeapSize, usedJSHeapSize) {
        return [
            49 /* Messages.Type.PerformanceTrack */,
            frames,
            ticks,
            totalJSHeapSize,
            usedJSHeapSize,
        ];
    }
    function ConnectionInformation(downlink, type) {
        return [
            54 /* Messages.Type.ConnectionInformation */,
            downlink,
            type,
        ];
    }
    function SetPageVisibility(hidden) {
        return [
            55 /* Messages.Type.SetPageVisibility */,
            hidden,
        ];
    }
    function LoadFontFace(parentID, family, source, descriptors) {
        return [
            57 /* Messages.Type.LoadFontFace */,
            parentID,
            family,
            source,
            descriptors,
        ];
    }
    function SetNodeFocus(id) {
        return [
            58 /* Messages.Type.SetNodeFocus */,
            id,
        ];
    }
    function SetNodeAttributeURLBased(id, name, value, baseURL) {
        return [
            60 /* Messages.Type.SetNodeAttributeURLBased */,
            id,
            name,
            value,
            baseURL,
        ];
    }
    function SetCSSDataURLBased(id, data, baseURL) {
        return [
            61 /* Messages.Type.SetCSSDataURLBased */,
            id,
            data,
            baseURL,
        ];
    }
    function TechnicalInfo(type, value) {
        return [
            63 /* Messages.Type.TechnicalInfo */,
            type,
            value,
        ];
    }
    function CustomIssue(name, payload) {
        return [
            64 /* Messages.Type.CustomIssue */,
            name,
            payload,
        ];
    }
    function MouseClick(id, hesitationTime, label, selector) {
        return [
            69 /* Messages.Type.MouseClick */,
            id,
            hesitationTime,
            label,
            selector,
        ];
    }
    function CreateIFrameDocument(frameID, id) {
        return [
            70 /* Messages.Type.CreateIFrameDocument */,
            frameID,
            id,
        ];
    }
    function AdoptedSSReplaceURLBased(sheetID, text, baseURL) {
        return [
            71 /* Messages.Type.AdoptedSSReplaceURLBased */,
            sheetID,
            text,
            baseURL,
        ];
    }
    function AdoptedSSInsertRuleURLBased(sheetID, rule, index, baseURL) {
        return [
            73 /* Messages.Type.AdoptedSSInsertRuleURLBased */,
            sheetID,
            rule,
            index,
            baseURL,
        ];
    }
    function AdoptedSSDeleteRule(sheetID, index) {
        return [
            75 /* Messages.Type.AdoptedSSDeleteRule */,
            sheetID,
            index,
        ];
    }
    function AdoptedSSAddOwner(sheetID, id) {
        return [
            76 /* Messages.Type.AdoptedSSAddOwner */,
            sheetID,
            id,
        ];
    }
    function AdoptedSSRemoveOwner(sheetID, id) {
        return [
            77 /* Messages.Type.AdoptedSSRemoveOwner */,
            sheetID,
            id,
        ];
    }
    function JSException(name, message, payload, metadata) {
        return [
            78 /* Messages.Type.JSException */,
            name,
            message,
            payload,
            metadata,
        ];
    }
    function NetworkRequest(type, method, url, request, response, status, timestamp, duration, transferredBodySize) {
        return [
            83 /* Messages.Type.NetworkRequest */,
            type,
            method,
            url,
            request,
            response,
            status,
            timestamp,
            duration,
            transferredBodySize,
        ];
    }
    function InputChange(id, value, valueMasked, label, hesitationTime, inputDuration) {
        return [
            112 /* Messages.Type.InputChange */,
            id,
            value,
            valueMasked,
            label,
            hesitationTime,
            inputDuration,
        ];
    }
    function SelectionChange(selectionStart, selectionEnd, selection) {
        return [
            113 /* Messages.Type.SelectionChange */,
            selectionStart,
            selectionEnd,
            selection,
        ];
    }
    function MouseThrashing(timestamp) {
        return [
            114 /* Messages.Type.MouseThrashing */,
            timestamp,
        ];
    }
    function UnbindNodes(totalRemovedPercent) {
        return [
            115 /* Messages.Type.UnbindNodes */,
            totalRemovedPercent,
        ];
    }
    function ResourceTiming(timestamp, duration, ttfb, headerSize, encodedBodySize, decodedBodySize, url, initiator, transferredSize, cached) {
        return [
            116 /* Messages.Type.ResourceTiming */,
            timestamp,
            duration,
            ttfb,
            headerSize,
            encodedBodySize,
            decodedBodySize,
            url,
            initiator,
            transferredSize,
            cached,
        ];
    }
    function TabChange(tabId) {
        return [
            117 /* Messages.Type.TabChange */,
            tabId,
        ];
    }
    function TabData(tabId) {
        return [
            118 /* Messages.Type.TabData */,
            tabId,
        ];
    }

    const DEPRECATED_ATTRS = { htmlmasked: 'hidden', masked: 'obscured' };
    const IN_BROWSER = !(typeof window === 'undefined');
    const IS_FIREFOX = IN_BROWSER && navigator.userAgent.match(/firefox|fxios/i);
    const MAX_STR_LEN = 1e5;
    // Buggy to use `performance.timeOrigin || performance.timing.navigationStart`
    // https://github.com/mdn/content/issues/4713
    // Maybe move to timer/ticker
    let timeOrigin = IN_BROWSER ? Date.now() - performance.now() : 0;
    function adjustTimeOrigin() {
        timeOrigin = Date.now() - performance.now();
    }
    function getTimeOrigin() {
        return timeOrigin;
    }
    const now = IN_BROWSER && !!performance.now
        ? () => Math.round(performance.now() + timeOrigin)
        : () => Date.now();
    const stars = 'repeat' in String.prototype
        ? (str) => '*'.repeat(str.length)
        : (str) => str.replace(/./g, '*');
    function normSpaces(str) {
        return str.trim().replace(/\s+/g, ' ');
    }
    // isAbsoluteUrl regexp:  /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
    function isURL(s) {
        return s.startsWith('https://') || s.startsWith('http://');
    }
    // TODO: JOIN IT WITH LOGGER somehow (use logging decorators?); Don't forget about index.js loggin when there is no logger instance.
    const DOCS_HOST = 'https://docs.openreplay.com';
    const warnedFeatures = {};
    function deprecationWarn(nameOfFeature, useInstead, docsPath = '/') {
        if (warnedFeatures[nameOfFeature]) {
            return;
        }
        console.warn(`OpenReplay: ${nameOfFeature} is deprecated. ${useInstead ? `Please, use ${useInstead} instead.` : ''} Visit ${DOCS_HOST}${docsPath} for more information.`);
        warnedFeatures[nameOfFeature] = true;
    }
    function getLabelAttribute(e) {
        let value = e.getAttribute('data-openreplay-label');
        if (value !== null) {
            return value;
        }
        value = e.getAttribute('data-asayer-label');
        if (value !== null) {
            deprecationWarn('"data-asayer-label" attribute', '"data-openreplay-label" attribute', '/');
        }
        return value;
    }
    function hasOpenreplayAttribute(e, attr) {
        const newName = `data-openreplay-${attr}`;
        if (e.hasAttribute(newName)) {
            // @ts-ignore
            if (DEPRECATED_ATTRS[attr]) {
                deprecationWarn(`"${newName}" attribute`, 
                // @ts-ignore
                `"${DEPRECATED_ATTRS[attr]}" attribute`, '/installation/sanitize-data');
            }
            return true;
        }
        return false;
    }
    /**
     * checks if iframe is accessible
     **/
    function canAccessIframe(iframe) {
        try {
            return Boolean(iframe.contentDocument);
        }
        catch (e) {
            return false;
        }
    }
    function dec2hex(dec) {
        return dec.toString(16).padStart(2, '0');
    }
    function generateRandomId(len) {
        const arr = new Uint8Array((len || 40) / 2);
        // msCrypto = IE11
        // @ts-ignore
        const safeCrypto = window.crypto || window.msCrypto;
        safeCrypto.getRandomValues(arr);
        return Array.from(arr, dec2hex).join('');
    }
    function inIframe() {
        try {
            return window.self !== window.top;
        }
        catch (e) {
            return true;
        }
    }
    /**
     * Because angular devs decided that its a good idea to override a browser apis
     * we need to use this to achieve safe behavior
     * */
    function ngSafeBrowserMethod(method) {
        // @ts-ignore
        return window.Zone && '__symbol__' in window.Zone
            ? // @ts-ignore
                window['Zone']['__symbol__'](method)
            : method;
    }
    function createMutationObserver(cb) {
        const mObserver = ngSafeBrowserMethod('MutationObserver');
        return new window[mObserver](cb);
    }
    function createEventListener(target, event, cb, capture) {
        const safeAddEventListener = ngSafeBrowserMethod('addEventListener');
        try {
            target[safeAddEventListener](event, cb, capture);
        }
        catch (e) {
            console.debug(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `Openreplay: ${e.messages}; if this error is caused by an IframeObserver, ignore it`);
        }
    }
    function deleteEventListener(target, event, cb, capture) {
        const safeRemoveEventListener = ngSafeBrowserMethod('removeEventListener');
        try {
            target[safeRemoveEventListener](event, cb, capture);
        }
        catch (e) {
            console.debug(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `Openreplay: ${e.messages}; if this error is caused by an IframeObserver, ignore it`);
        }
    }
    /**
     * This is a brief polyfill that suits our needs
     * I took inspiration from Microsoft Clarity polyfill on this one
     * then adapted it a little bit
     *
     * I'm very grateful for their bright idea
     * */
    function requestIdleCb(callback) {
        const taskTimeout = 3000;
        if (window.requestIdleCallback) {
            return window.requestIdleCallback(callback, { timeout: taskTimeout });
        }
        else {
            const channel = new MessageChannel();
            const incoming = channel.port1;
            const outgoing = channel.port2;
            incoming.onmessage = () => {
                callback();
            };
            requestAnimationFrame(() => {
                outgoing.postMessage(1);
            });
        }
    }

    class Nodes {
        constructor(node_id) {
            this.node_id = node_id;
            this.nodes = [];
            this.totalNodeAmount = 0;
            this.nodeCallbacks = [];
            this.elementListeners = new Map();
        }
        // Attached once per Tracker instance
        attachNodeCallback(nodeCallback) {
            this.nodeCallbacks.push(nodeCallback);
        }
        attachNodeListener(node, type, listener, useCapture = true) {
            const id = this.getID(node);
            if (id === undefined) {
                return;
            }
            createEventListener(node, type, listener, useCapture);
            let listeners = this.elementListeners.get(id);
            if (listeners === undefined) {
                listeners = [];
                this.elementListeners.set(id, listeners);
            }
            listeners.push([type, listener, useCapture]);
        }
        registerNode(node) {
            let id = node[this.node_id];
            const isNew = id === undefined;
            if (isNew) {
                this.totalNodeAmount++;
                id = this.nodes.length;
                this.nodes[id] = node;
                node[this.node_id] = id;
            }
            return [id, isNew];
        }
        unregisterNode(node) {
            const id = node[this.node_id];
            if (id !== undefined) {
                delete node[this.node_id];
                delete this.nodes[id];
                const listeners = this.elementListeners.get(id);
                if (listeners !== undefined) {
                    this.elementListeners.delete(id);
                    listeners.forEach((listener) => deleteEventListener(node, listener[0], listener[1], listener[2]));
                }
                this.totalNodeAmount--;
            }
            return id;
        }
        cleanTree() {
            // sadly we keep empty items in array here resulting in some memory still being used
            // but its still better than keeping dead nodes or undef elements
            // plus we keep our index positions for new/alive nodes
            // performance test: 3ms for 30k nodes with 17k dead ones
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                if (node && !document.contains(node)) {
                    this.unregisterNode(node);
                }
            }
        }
        callNodeCallbacks(node, isStart) {
            this.nodeCallbacks.forEach((cb) => cb(node, isStart));
        }
        getID(node) {
            if (!node)
                return undefined;
            return node[this.node_id];
        }
        getNode(id) {
            return this.nodes[id];
        }
        getNodeCount() {
            return this.totalNodeAmount;
        }
        clear() {
            for (let id = 0; id < this.nodes.length; id++) {
                const node = this.nodes[id];
                if (!node) {
                    continue;
                }
                this.unregisterNode(node);
            }
            this.nodes.length = 0;
        }
    }

    //@ts-ignore
    function isNode(sth) {
        return !!sth && sth.nodeType != null;
    }
    function isSVGElement(node) {
        return node.namespaceURI === 'http://www.w3.org/2000/svg';
    }
    function isElementNode(node) {
        return node.nodeType === Node.ELEMENT_NODE;
    }
    function isCommentNode(node) {
        return node.nodeType === Node.COMMENT_NODE;
    }
    function isTextNode(node) {
        return node.nodeType === Node.TEXT_NODE;
    }
    function isDocument(node) {
        return node.nodeType === Node.DOCUMENT_NODE;
    }
    function isRootNode(node) {
        return node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
    }
    function hasTag(el, tagName) {
        // @ts-ignore
        return el.localName === tagName;
    }

    function isIgnored(node) {
        if (isCommentNode(node)) {
            return true;
        }
        if (isTextNode(node)) {
            return false;
        }
        if (!isElementNode(node)) {
            return true;
        }
        const tag = node.tagName.toUpperCase();
        if (tag === 'LINK') {
            const rel = node.getAttribute('rel');
            const as = node.getAttribute('as');
            return !((rel === null || rel === void 0 ? void 0 : rel.includes('stylesheet')) || as === 'style' || as === 'font');
        }
        return (tag === 'SCRIPT' || tag === 'NOSCRIPT' || tag === 'META' || tag === 'TITLE' || tag === 'BASE');
    }
    function isObservable(node) {
        if (isRootNode(node)) {
            return true;
        }
        return !isIgnored(node);
    }
    /*
      TODO:
        - fix unbinding logic + send all removals first (ensure sequence is correct)
        - use document as a 0-node in the upper context (should be updated in player at first)
    */
    var RecentsType;
    (function (RecentsType) {
        RecentsType[RecentsType["New"] = 0] = "New";
        RecentsType[RecentsType["Removed"] = 1] = "Removed";
        RecentsType[RecentsType["Changed"] = 2] = "Changed";
    })(RecentsType || (RecentsType = {}));
    class Observer {
        constructor(app, isTopContext = false) {
            this.app = app;
            this.isTopContext = isTopContext;
            this.commited = [];
            this.recents = new Map();
            this.indexes = [];
            this.attributesMap = new Map();
            this.textSet = new Set();
            this.observer = createMutationObserver(this.app.safe((mutations) => {
                for (const mutation of mutations) {
                    // mutations order is sequential
                    const target = mutation.target;
                    const type = mutation.type;
                    if (!isObservable(target)) {
                        continue;
                    }
                    if (type === 'childList') {
                        for (let i = 0; i < mutation.removedNodes.length; i++) {
                            // Should be the same as bindTree(mutation.removedNodes[i]), but logic needs to be be untied
                            if (isObservable(mutation.removedNodes[i])) {
                                this.bindNode(mutation.removedNodes[i]);
                            }
                        }
                        for (let i = 0; i < mutation.addedNodes.length; i++) {
                            this.bindTree(mutation.addedNodes[i]);
                        }
                        continue;
                    }
                    const id = this.app.nodes.getID(target);
                    if (id === undefined) {
                        continue;
                    }
                    if (!this.recents.has(id)) {
                        this.recents.set(id, RecentsType.Changed); // TODO only when altered
                    }
                    if (type === 'attributes') {
                        const name = mutation.attributeName;
                        if (name === null) {
                            continue;
                        }
                        let attr = this.attributesMap.get(id);
                        if (attr === undefined) {
                            this.attributesMap.set(id, (attr = new Set()));
                        }
                        attr.add(name);
                        continue;
                    }
                    if (type === 'characterData') {
                        this.textSet.add(id);
                        continue;
                    }
                }
                this.commitNodes();
            }));
        }
        clear() {
            this.commited.length = 0;
            this.recents.clear();
            this.indexes.length = 1;
            this.attributesMap.clear();
            this.textSet.clear();
        }
        sendNodeAttribute(id, node, name, value) {
            if (isSVGElement(node)) {
                if (name.substr(0, 6) === 'xlink:') {
                    name = name.substr(6);
                }
                if (value === null) {
                    this.app.send(RemoveNodeAttribute(id, name));
                }
                else if (name === 'href') {
                    if (value.length > 1e5) {
                        value = '';
                    }
                    this.app.send(SetNodeAttributeURLBased(id, name, value, this.app.getBaseHref()));
                }
                else {
                    this.app.attributeSender.sendSetAttribute(id, name, value);
                }
                return;
            }
            if (name === 'src' ||
                name === 'srcset' ||
                name === 'integrity' ||
                name === 'crossorigin' ||
                name === 'autocomplete' ||
                name.substr(0, 2) === 'on') {
                return;
            }
            if (name === 'value' &&
                hasTag(node, 'input') &&
                node.type !== 'button' &&
                node.type !== 'reset' &&
                node.type !== 'submit') {
                return;
            }
            if (value === null) {
                this.app.send(RemoveNodeAttribute(id, name));
                return;
            }
            if (name === 'style' || (name === 'href' && hasTag(node, 'link'))) {
                this.app.send(SetNodeAttributeURLBased(id, name, value, this.app.getBaseHref()));
                return;
            }
            if (name === 'href' || value.length > 1e5) {
                value = '';
            }
            this.app.attributeSender.sendSetAttribute(id, name, value);
        }
        sendNodeData(id, parentElement, data) {
            if (hasTag(parentElement, 'style')) {
                this.app.send(SetCSSDataURLBased(id, data, this.app.getBaseHref()));
                return;
            }
            data = this.app.sanitizer.sanitize(id, data);
            this.app.send(SetNodeData(id, data));
        }
        bindNode(node) {
            const [id, isNew] = this.app.nodes.registerNode(node);
            if (isNew) {
                this.recents.set(id, RecentsType.New);
            }
            else if (this.recents.get(id) !== RecentsType.New) {
                this.recents.set(id, RecentsType.Removed);
            }
        }
        bindTree(node) {
            if (!isObservable(node)) {
                return;
            }
            this.bindNode(node);
            const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT + NodeFilter.SHOW_TEXT, {
                acceptNode: (node) => isIgnored(node) || this.app.nodes.getID(node) !== undefined
                    ? NodeFilter.FILTER_REJECT
                    : NodeFilter.FILTER_ACCEPT,
            }, 
            // @ts-ignore
            false);
            while (walker.nextNode()) {
                this.bindNode(walker.currentNode);
            }
        }
        unbindTree(node) {
            const id = this.app.nodes.unregisterNode(node);
            if (id !== undefined && this.recents.get(id) === RecentsType.Removed) {
                // Sending RemoveNode only for parent to maintain
                this.app.send(RemoveNode(id));
                // Unregistering all the children in order to clear the memory
                const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT + NodeFilter.SHOW_TEXT, {
                    acceptNode: (node) => isIgnored(node) || this.app.nodes.getID(node) === undefined
                        ? NodeFilter.FILTER_REJECT
                        : NodeFilter.FILTER_ACCEPT,
                }, 
                // @ts-ignore
                false);
                let removed = 0;
                const totalBeforeRemove = this.app.nodes.getNodeCount();
                while (walker.nextNode()) {
                    removed += 1;
                    this.app.nodes.unregisterNode(walker.currentNode);
                }
                const removedPercent = Math.floor((removed / totalBeforeRemove) * 100);
                if (removedPercent > 30) {
                    this.app.send(UnbindNodes(removedPercent));
                }
            }
        }
        // A top-consumption function on the infinite lists test. (~1% of performance resources)
        _commitNode(id, node) {
            if (isRootNode(node)) {
                return true;
            }
            const parent = node.parentNode;
            let parentID;
            // Disable parent check for the upper context HTMLHtmlElement, because it is root there... (before)
            // TODO: get rid of "special" cases (there is an issue with CreateDocument altered behaviour though)
            // TODO: Clean the logic (though now it workd fine)
            if (!hasTag(node, 'html') || !this.isTopContext) {
                if (parent === null) {
                    // Sometimes one observation contains attribute mutations for the removimg node, which gets ignored here.
                    // That shouldn't affect the visual rendering ( should it? maybe when transition applied? )
                    this.unbindTree(node);
                    return false;
                }
                parentID = this.app.nodes.getID(parent);
                if (parentID === undefined) {
                    this.unbindTree(node);
                    return false;
                }
                if (!this.commitNode(parentID)) {
                    this.unbindTree(node);
                    return false;
                }
                this.app.sanitizer.handleNode(id, parentID, node);
                if (this.app.sanitizer.isHidden(parentID)) {
                    return false;
                }
            }
            // From here parentID === undefined if node is top context HTML node
            let sibling = node.previousSibling;
            while (sibling !== null) {
                const siblingID = this.app.nodes.getID(sibling);
                if (siblingID !== undefined) {
                    this.commitNode(siblingID);
                    this.indexes[id] = this.indexes[siblingID] + 1;
                    break;
                }
                sibling = sibling.previousSibling;
            }
            if (sibling === null) {
                this.indexes[id] = 0;
            }
            const recentsType = this.recents.get(id);
            const isNew = recentsType === RecentsType.New;
            const index = this.indexes[id];
            if (index === undefined) {
                throw 'commitNode: missing node index';
            }
            if (isNew) {
                if (isElementNode(node)) {
                    let el = node;
                    if (parentID !== undefined) {
                        if (this.app.sanitizer.isHidden(id)) {
                            const width = el.clientWidth;
                            const height = el.clientHeight;
                            el = node.cloneNode();
                            el.style.width = `${width}px`;
                            el.style.height = `${height}px`;
                        }
                        this.app.send(CreateElementNode(id, parentID, index, el.tagName, isSVGElement(node)));
                    }
                    for (let i = 0; i < el.attributes.length; i++) {
                        const attr = el.attributes[i];
                        this.sendNodeAttribute(id, el, attr.nodeName, attr.value);
                    }
                }
                else if (isTextNode(node)) {
                    // for text node id != 0, hence parentID !== undefined and parent is Element
                    this.app.send(CreateTextNode(id, parentID, index));
                    this.sendNodeData(id, parent, node.data);
                }
                return true;
            }
            if (recentsType === RecentsType.Removed && parentID !== undefined) {
                this.app.send(MoveNode(id, parentID, index));
            }
            const attr = this.attributesMap.get(id);
            if (attr !== undefined) {
                if (!isElementNode(node)) {
                    throw 'commitNode: node is not an element';
                }
                for (const name of attr) {
                    this.sendNodeAttribute(id, node, name, node.getAttribute(name));
                }
            }
            if (this.textSet.has(id)) {
                if (!isTextNode(node)) {
                    throw 'commitNode: node is not a text';
                }
                // for text node id != 0, hence parent is Element
                this.sendNodeData(id, parent, node.data);
            }
            return true;
        }
        commitNode(id) {
            const node = this.app.nodes.getNode(id);
            if (node === undefined) {
                return false;
            }
            const cmt = this.commited[id];
            if (cmt !== undefined) {
                return cmt;
            }
            return (this.commited[id] = this._commitNode(id, node));
        }
        commitNodes(isStart = false) {
            let node;
            this.recents.forEach((type, id) => {
                this.commitNode(id);
                if (type === RecentsType.New && (node = this.app.nodes.getNode(id))) {
                    this.app.nodes.callNodeCallbacks(node, isStart);
                }
            });
            this.clear();
        }
        // ISSSUE (nodeToBinde should be the same as node in all cases. Look at the comment about 0-node at the beginning of the file.)
        // TODO: use one observer instance for all iframes/shadowRoots (composition instiad of inheritance)
        observeRoot(node, beforeCommit, nodeToBind = node) {
            this.observer.observe(node, {
                childList: true,
                attributes: true,
                characterData: true,
                subtree: true,
                attributeOldValue: false,
                characterDataOldValue: false,
            });
            this.bindTree(nodeToBind);
            beforeCommit(this.app.nodes.getID(node));
            this.commitNodes(true);
        }
        disconnect() {
            this.observer.disconnect();
            this.clear();
        }
    }

    class IFrameObserver extends Observer {
        observe(iframe) {
            const doc = iframe.contentDocument;
            const hostID = this.app.nodes.getID(iframe);
            if (!doc || hostID === undefined) {
                return;
            } //log TODO common app.logger
            // Have to observe document, because the inner <html> might be changed
            this.observeRoot(doc, (docID) => {
                //MBTODO: do not send if empty (send on load? it might be in-place iframe, like our replayer, which does not get loaded)
                if (docID === undefined) {
                    console.log('OpenReplay: Iframe document not bound');
                    return;
                }
                this.app.send(CreateIFrameDocument(hostID, docID));
            });
        }
    }

    class ShadowRootObserver extends Observer {
        observe(el) {
            const shRoot = el.shadowRoot;
            const hostID = this.app.nodes.getID(el);
            if (!shRoot || hostID === undefined) {
                return;
            } // log
            this.observeRoot(shRoot, (rootID) => {
                if (rootID === undefined) {
                    console.log('OpenReplay: Shadow Root was not bound');
                    return;
                }
                this.app.send(CreateIFrameDocument(hostID, rootID));
            });
        }
    }

    // Le truc - for defining an absolute offset for (nested) iframe documents. (To track mouse movments)
    class IFrameOffsets {
        constructor() {
            this.states = new Map();
        }
        calcOffset(state) {
            let parLeft = 0, parTop = 0;
            if (state.parent) {
                [parLeft, parTop] = this.calcOffset(state.parent);
            }
            if (!state.offset) {
                const { left, top } = state.iFrame.getBoundingClientRect();
                state.offset = [left, top];
            }
            const [left, top] = state.offset;
            return [parLeft + left, parTop + top]; // TODO: store absolute sum, invalidate whole subtree. Otherwise it is summated on each mousemove
        }
        getDocumentOffset(doc) {
            const state = this.states.get(doc);
            if (!state) {
                return [0, 0];
            } // topmost doc
            return this.calcOffset(state);
        }
        observe(iFrame) {
            var _a;
            const doc = iFrame.contentDocument;
            if (!doc) {
                return;
            }
            const parentDoc = iFrame.ownerDocument;
            const parentState = this.states.get(parentDoc);
            const state = {
                offset: null,
                iFrame,
                parent: parentState || null,
                clear: () => {
                    var _a;
                    parentDoc.removeEventListener('scroll', invalidateOffset);
                    (_a = parentDoc.defaultView) === null || _a === void 0 ? void 0 : _a.removeEventListener('resize', invalidateOffset);
                },
            };
            const invalidateOffset = () => {
                state.offset = null;
            };
            // anything more reliable? This does not cover all cases (layout changes are ignored, for ex.)
            parentDoc.addEventListener('scroll', invalidateOffset);
            (_a = parentDoc.defaultView) === null || _a === void 0 ? void 0 : _a.addEventListener('resize', invalidateOffset);
            this.states.set(doc, state);
        }
        clear() {
            this.states.forEach((s) => s.clear());
            this.states.clear();
        }
    }

    const attachShadowNativeFn = IN_BROWSER ? Element.prototype.attachShadow : () => new ShadowRoot();
    class TopObserver extends Observer {
        constructor(app, options) {
            super(app, true);
            this.iframeOffsets = new IFrameOffsets();
            this.contextCallbacks = [];
            // Attached once per Tracker instance
            this.contextsSet = new Set();
            this.iframeObservers = [];
            this.shadowRootObservers = [];
            this.options = Object.assign({
                captureIFrames: true,
            }, options);
            // IFrames
            this.app.nodes.attachNodeCallback((node) => {
                if (hasTag(node, 'iframe') &&
                    ((this.options.captureIFrames && !hasOpenreplayAttribute(node, 'obscured')) ||
                        hasOpenreplayAttribute(node, 'capture'))) {
                    this.handleIframe(node);
                }
            });
            // ShadowDOM
            this.app.nodes.attachNodeCallback((node) => {
                if (isElementNode(node) && node.shadowRoot !== null) {
                    this.handleShadowRoot(node.shadowRoot);
                }
            });
        }
        attachContextCallback(cb) {
            this.contextCallbacks.push(cb);
        }
        getDocumentOffset(doc) {
            return this.iframeOffsets.getDocumentOffset(doc);
        }
        handleIframe(iframe) {
            let doc = null;
            // setTimeout is required. Otherwise some event listeners (scroll, mousemove) applied in modules
            //     do not work on the iframe document when it 've been loaded dynamically ((why?))
            const handle = this.app.safe(() => setTimeout(() => {
                const id = this.app.nodes.getID(iframe);
                if (id === undefined) {
                    //log
                    return;
                }
                if (!canAccessIframe(iframe))
                    return;
                const currentWin = iframe.contentWindow;
                const currentDoc = iframe.contentDocument;
                if (currentDoc && currentDoc !== doc) {
                    const observer = new IFrameObserver(this.app);
                    this.iframeObservers.push(observer);
                    observer.observe(iframe); // TODO: call unregisterNode for the previous doc if present (incapsulate: one iframe - one observer)
                    doc = currentDoc;
                    this.iframeOffsets.observe(iframe);
                }
                if (currentWin &&
                    // Sometimes currentWin.window is null (not in specification). Such window object is not functional
                    currentWin === currentWin.window &&
                    !this.contextsSet.has(currentWin) // for each context callbacks called once per Tracker (TopObserver) instance
                //TODO: more explicit logic
                ) {
                    this.contextsSet.add(currentWin);
                    //@ts-ignore https://github.com/microsoft/TypeScript/issues/41684
                    this.contextCallbacks.forEach((cb) => cb(currentWin));
                }
                // we need this delay because few iframes stacked one in another with rapid updates will break the player (or browser engine rather?)
            }, 100));
            iframe.addEventListener('load', handle); // why app.attachEventListener not working?
            handle();
        }
        handleShadowRoot(shRoot) {
            const observer = new ShadowRootObserver(this.app);
            this.shadowRootObservers.push(observer);
            observer.observe(shRoot.host);
        }
        observe() {
            // Protection from several subsequent calls?
            const observer = this;
            Element.prototype.attachShadow = function () {
                // eslint-disable-next-line
                const shadow = attachShadowNativeFn.apply(this, arguments);
                observer.handleShadowRoot(shadow);
                return shadow;
            };
            // Can observe documentElement (<html>) here, because it is not supposed to be changing.
            // However, it is possible in some exotic cases and may cause an ignorance of the newly created <html>
            // In this case context.document have to be observed, but this will cause
            // the change in the re-player behaviour caused by CreateDocument message:
            //   the 0-node ("fRoot") will become #document rather than documentElement as it is now.
            // Alternatively - observe(#document) then bindNode(documentElement)
            this.observeRoot(window.document, () => {
                this.app.send(CreateDocument());
                // it has no node_id here
                this.app.nodes.callNodeCallbacks(document, true);
            }, window.document.documentElement);
        }
        disconnect() {
            this.iframeOffsets.clear();
            Element.prototype.attachShadow = attachShadowNativeFn;
            this.iframeObservers.forEach((o) => o.disconnect());
            this.iframeObservers = [];
            this.shadowRootObservers.forEach((o) => o.disconnect());
            this.shadowRootObservers = [];
            super.disconnect();
        }
    }

    var SanitizeLevel;
    (function (SanitizeLevel) {
        SanitizeLevel[SanitizeLevel["Plain"] = 0] = "Plain";
        SanitizeLevel[SanitizeLevel["Obscured"] = 1] = "Obscured";
        SanitizeLevel[SanitizeLevel["Hidden"] = 2] = "Hidden";
    })(SanitizeLevel || (SanitizeLevel = {}));
    const stringWiper = (input) => input
        .trim()
        .replace(/[^\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]/g, '█');
    class Sanitizer {
        constructor(app, options) {
            this.app = app;
            this.obscured = new Set();
            this.hidden = new Set();
            this.options = Object.assign({
                obscureTextEmails: true,
                obscureTextNumbers: false,
            }, options);
        }
        handleNode(id, parentID, node) {
            if (this.obscured.has(parentID) ||
                (isElementNode(node) &&
                    (hasOpenreplayAttribute(node, 'masked') || hasOpenreplayAttribute(node, 'obscured')))) {
                this.obscured.add(id);
            }
            if (this.hidden.has(parentID) ||
                (isElementNode(node) &&
                    (hasOpenreplayAttribute(node, 'htmlmasked') || hasOpenreplayAttribute(node, 'hidden')))) {
                this.hidden.add(id);
            }
            if (this.options.domSanitizer !== undefined && isElementNode(node)) {
                const sanitizeLevel = this.options.domSanitizer(node);
                if (sanitizeLevel === SanitizeLevel.Obscured) {
                    this.obscured.add(id);
                }
                if (sanitizeLevel === SanitizeLevel.Hidden) {
                    this.hidden.add(id);
                }
            }
        }
        sanitize(id, data) {
            if (this.obscured.has(id)) {
                // TODO: is it the best place to put trim() ? Might trimmed spaces be considered in layout in certain cases?
                return stringWiper(data);
            }
            if (this.options.obscureTextNumbers) {
                data = data.replace(/\d/g, '0');
            }
            if (this.options.obscureTextEmails) {
                data = data.replace(/^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,3}$/g, (email) => {
                    const [name, domain] = email.split('@');
                    const [domainName, host] = domain.split('.');
                    return `${stars(name)}@${stars(domainName)}.${stars(host)}`;
                });
            }
            return data;
        }
        isObscured(id) {
            return this.obscured.has(id);
        }
        isHidden(id) {
            return this.hidden.has(id);
        }
        getInnerTextSecure(el) {
            const id = this.app.nodes.getID(el);
            if (!id) {
                return '';
            }
            return this.sanitize(id, el.innerText);
        }
        clear() {
            this.obscured.clear();
            this.hidden.clear();
        }
    }

    function wrap(callback, n) {
        let t = 0;
        return () => {
            if (t++ >= n) {
                t = 0;
                callback();
            }
        };
    }
    class Ticker {
        constructor(app) {
            this.app = app;
            this.timer = null;
            this.callbacks = [];
        }
        /**
         * @param {Callback} callback - repeated cb
         * @param {number} n - number of turn skips; ticker have a 30 ms cycle
         * @param {boolean} useSafe - using safe wrapper to check if app is active
         * @param {object} thisArg - link to <this>
         * */
        attach(callback, n = 0, useSafe = true, thisArg) {
            if (thisArg) {
                callback = callback.bind(thisArg);
            }
            if (useSafe) {
                callback = this.app.safe(callback);
            }
            this.callbacks.unshift(n ? wrap(callback, n) : callback) - 1;
        }
        start() {
            if (this.timer === null) {
                this.timer = setInterval(() => this.callbacks.forEach((cb) => {
                    if (cb)
                        cb();
                }), 30);
            }
        }
        stop() {
            if (this.timer !== null) {
                clearInterval(this.timer);
                this.timer = null;
            }
        }
    }

    const LogLevel = {
        Verbose: 5,
        Log: 4,
        Warnings: 3,
        Errors: 2,
        Silent: 0,
    };
    function IsCustomLevel(l) {
        return typeof l === 'object';
    }
    class Logger {
        constructor(options = LogLevel.Silent) {
            this.options =
                options === true
                    ? { level: LogLevel.Verbose }
                    : typeof options === 'number'
                        ? { level: options }
                        : options;
        }
        log(...args) {
            if (IsCustomLevel(this.options.level)
                ? this.options.level.log
                : this.options.level >= LogLevel.Log) {
                console.log(...args);
            }
        }
        warn(...args) {
            if (IsCustomLevel(this.options.level)
                ? this.options.level.warn
                : this.options.level >= LogLevel.Warnings) {
                console.warn(...args);
            }
        }
        error(...args) {
            if (IsCustomLevel(this.options.level)
                ? this.options.level.error
                : this.options.level >= LogLevel.Errors) {
                console.error(...args);
            }
        }
    }

    class Session {
        constructor(app, options) {
            this.app = app;
            this.options = options;
            this.metadata = {};
            this.userID = null;
            this.callbacks = [];
            this.timestamp = 0;
            this.createTabId();
        }
        attachUpdateCallback(cb) {
            this.callbacks.push(cb);
        }
        handleUpdate(newInfo) {
            if (newInfo.userID == null) {
                delete newInfo.userID;
            }
            if (newInfo.sessionID == null) {
                delete newInfo.sessionID;
            }
            this.callbacks.forEach((cb) => cb(newInfo));
        }
        assign(newInfo) {
            if (newInfo.userID !== undefined) {
                // TODO clear nullable/undefinable types
                this.userID = newInfo.userID;
            }
            if (newInfo.metadata !== undefined) {
                Object.entries(newInfo.metadata).forEach(([k, v]) => (this.metadata[k] = v));
            }
            if (newInfo.sessionID !== undefined) {
                this.sessionID = newInfo.sessionID;
            }
            if (newInfo.timestamp !== undefined) {
                this.timestamp = newInfo.timestamp;
            }
            if (newInfo.projectID !== undefined) {
                this.projectID = newInfo.projectID;
            }
            this.handleUpdate(newInfo);
        }
        setMetadata(key, value) {
            this.metadata[key] = value;
            this.handleUpdate({ metadata: { [key]: value } });
        }
        setUserID(userID) {
            this.userID = userID;
            this.handleUpdate({ userID });
        }
        setUserInfo(userInfo) {
            this.userInfo = userInfo;
        }
        getPageNumber() {
            const pageNoStr = this.app.sessionStorage.getItem(this.options.session_pageno_key);
            if (pageNoStr == null) {
                return undefined;
            }
            return parseInt(pageNoStr);
        }
        incPageNo() {
            let pageNo = this.getPageNumber();
            if (pageNo === undefined) {
                pageNo = 0;
            }
            else {
                pageNo++;
            }
            this.app.sessionStorage.setItem(this.options.session_pageno_key, pageNo.toString());
            return pageNo;
        }
        getSessionToken() {
            return this.app.sessionStorage.getItem(this.options.session_token_key) || undefined;
        }
        setSessionToken(token) {
            this.app.sessionStorage.setItem(this.options.session_token_key, token);
        }
        applySessionHash(hash) {
            const hashParts = decodeURI(hash).split('&');
            let token = hash;
            let pageNoStr = '100500'; // back-compat for sessionToken
            if (hashParts.length == 2) {
                [pageNoStr, token] = hashParts;
            }
            if (!pageNoStr || !token) {
                return;
            }
            this.app.sessionStorage.setItem(this.options.session_token_key, token);
            this.app.sessionStorage.setItem(this.options.session_pageno_key, pageNoStr);
        }
        getSessionHash() {
            const pageNo = this.getPageNumber();
            const token = this.getSessionToken();
            if (pageNo === undefined || token === undefined) {
                return;
            }
            return encodeURI(String(pageNo) + '&' + token);
        }
        getTabId() {
            if (!this.tabId)
                this.createTabId();
            return this.tabId;
        }
        regenerateTabId() {
            const randomId = generateRandomId(12);
            this.app.sessionStorage.setItem(this.options.session_tabid_key, randomId);
            this.tabId = randomId;
        }
        createTabId() {
            const localId = this.app.sessionStorage.getItem(this.options.session_tabid_key);
            if (localId) {
                this.tabId = localId;
            }
            else {
                this.regenerateTabId();
            }
        }
        getInfo() {
            return {
                sessionID: this.sessionID,
                metadata: this.metadata,
                userID: this.userID,
                timestamp: this.timestamp,
                projectID: this.projectID,
            };
        }
        reset() {
            this.app.sessionStorage.removeItem(this.options.session_token_key);
            this.metadata = {};
            this.userID = null;
            this.sessionID = undefined;
            this.timestamp = 0;
        }
    }

    // DEFLATE is a complex format; to read this code, you should probably check the RFC first:
    // https://tools.ietf.org/html/rfc1951
    // You may also wish to take a look at the guide I made about this program:
    // https://gist.github.com/101arrowz/253f31eb5abc3d9275ab943003ffecad
    // Some of the following code is similar to that of UZIP.js:
    // https://github.com/photopea/UZIP.js
    // However, the vast majority of the codebase has diverged from UZIP.js to increase performance and reduce bundle size.
    // Sometimes 0 will appear where -1 would be more appropriate. This is because using a uint
    // is better for memory in most engines (I *think*).
    var ch2 = {};
    var wk = (function (c, id, msg, transfer, cb) {
        var w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([
            c + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'
        ], { type: 'text/javascript' }))));
        w.onmessage = function (e) {
            var d = e.data, ed = d.$e$;
            if (ed) {
                var err = new Error(ed[0]);
                err['code'] = ed[1];
                err.stack = ed[2];
                cb(err, null);
            }
            else
                cb(null, d);
        };
        w.postMessage(msg, transfer);
        return w;
    });

    // aliases for shorter compressed code (most minifers don't do this)
    var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
    // fixed length extra bits
    var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, /* unused */ 0, 0, /* impossible */ 0]);
    // fixed distance extra bits
    var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, /* unused */ 0, 0]);
    // code length index map
    var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    // get base, reverse index map from extra bits
    var freb = function (eb, start) {
        var b = new u16(31);
        for (var i = 0; i < 31; ++i) {
            b[i] = start += 1 << eb[i - 1];
        }
        // numbers here are at max 18 bits
        var r = new i32(b[30]);
        for (var i = 1; i < 30; ++i) {
            for (var j = b[i]; j < b[i + 1]; ++j) {
                r[j] = ((j - b[i]) << 5) | i;
            }
        }
        return { b: b, r: r };
    };
    var _a$1 = freb(fleb, 2), fl = _a$1.b, revfl = _a$1.r;
    // we can ignore the fact that the other numbers are wrong; they never happen anyway
    fl[28] = 258, revfl[258] = 28;
    var _b = freb(fdeb, 0), revfd = _b.r;
    // map of value to reverse (assuming 16 bits)
    var rev = new u16(32768);
    for (var i = 0; i < 32768; ++i) {
        // reverse table algorithm from SO
        var x = ((i & 0xAAAA) >> 1) | ((i & 0x5555) << 1);
        x = ((x & 0xCCCC) >> 2) | ((x & 0x3333) << 2);
        x = ((x & 0xF0F0) >> 4) | ((x & 0x0F0F) << 4);
        rev[i] = (((x & 0xFF00) >> 8) | ((x & 0x00FF) << 8)) >> 1;
    }
    // create huffman tree from u8 "map": index -> code length for code index
    // mb (max bits) must be at most 15
    // TODO: optimize/split up?
    var hMap = (function (cd, mb, r) {
        var s = cd.length;
        // index
        var i = 0;
        // u16 "map": index -> # of codes with bit length = index
        var l = new u16(mb);
        // length of cd must be 288 (total # of codes)
        for (; i < s; ++i) {
            if (cd[i])
                ++l[cd[i] - 1];
        }
        // u16 "map": index -> minimum code for bit length = index
        var le = new u16(mb);
        for (i = 1; i < mb; ++i) {
            le[i] = (le[i - 1] + l[i - 1]) << 1;
        }
        var co;
        if (r) {
            // u16 "map": index -> number of actual bits, symbol for code
            co = new u16(1 << mb);
            // bits to remove for reverser
            var rvb = 15 - mb;
            for (i = 0; i < s; ++i) {
                // ignore 0 lengths
                if (cd[i]) {
                    // num encoding both symbol and bits read
                    var sv = (i << 4) | cd[i];
                    // free bits
                    var r_1 = mb - cd[i];
                    // start value
                    var v = le[cd[i] - 1]++ << r_1;
                    // m is end value
                    for (var m = v | ((1 << r_1) - 1); v <= m; ++v) {
                        // every 16 bit value starting with the code yields the same result
                        co[rev[v] >> rvb] = sv;
                    }
                }
            }
        }
        else {
            co = new u16(s);
            for (i = 0; i < s; ++i) {
                if (cd[i]) {
                    co[i] = rev[le[cd[i] - 1]++] >> (15 - cd[i]);
                }
            }
        }
        return co;
    });
    // fixed length tree
    var flt = new u8(288);
    for (var i = 0; i < 144; ++i)
        flt[i] = 8;
    for (var i = 144; i < 256; ++i)
        flt[i] = 9;
    for (var i = 256; i < 280; ++i)
        flt[i] = 7;
    for (var i = 280; i < 288; ++i)
        flt[i] = 8;
    // fixed distance tree
    var fdt = new u8(32);
    for (var i = 0; i < 32; ++i)
        fdt[i] = 5;
    // fixed length map
    var flm = /*#__PURE__*/ hMap(flt, 9, 0);
    // fixed distance map
    var fdm = /*#__PURE__*/ hMap(fdt, 5, 0);
    // get end of byte
    var shft = function (p) { return ((p + 7) / 8) | 0; };
    // typed array slice - allows garbage collector to free original reference,
    // while being more compatible than .slice
    var slc = function (v, s, e) {
        if (s == null || s < 0)
            s = 0;
        if (e == null || e > v.length)
            e = v.length;
        // can't use .constructor in case user-supplied
        return new u8(v.subarray(s, e));
    };
    // error codes
    var ec = [
        'unexpected EOF',
        'invalid block type',
        'invalid length/literal',
        'invalid distance',
        'stream finished',
        'no stream handler',
        ,
        'no callback',
        'invalid UTF-8 data',
        'extra field too long',
        'date not in range 1980-2099',
        'filename too long',
        'stream finishing',
        'invalid zip data'
        // determined by unknown compression method
    ];
    var err = function (ind, msg, nt) {
        var e = new Error(msg || ec[ind]);
        e.code = ind;
        if (Error.captureStackTrace)
            Error.captureStackTrace(e, err);
        if (!nt)
            throw e;
        return e;
    };
    // starting at p, write the minimum number of bits that can hold v to d
    var wbits = function (d, p, v) {
        v <<= p & 7;
        var o = (p / 8) | 0;
        d[o] |= v;
        d[o + 1] |= v >> 8;
    };
    // starting at p, write the minimum number of bits (>8) that can hold v to d
    var wbits16 = function (d, p, v) {
        v <<= p & 7;
        var o = (p / 8) | 0;
        d[o] |= v;
        d[o + 1] |= v >> 8;
        d[o + 2] |= v >> 16;
    };
    // creates code lengths from a frequency table
    var hTree = function (d, mb) {
        // Need extra info to make a tree
        var t = [];
        for (var i = 0; i < d.length; ++i) {
            if (d[i])
                t.push({ s: i, f: d[i] });
        }
        var s = t.length;
        var t2 = t.slice();
        if (!s)
            return { t: et, l: 0 };
        if (s == 1) {
            var v = new u8(t[0].s + 1);
            v[t[0].s] = 1;
            return { t: v, l: 1 };
        }
        t.sort(function (a, b) { return a.f - b.f; });
        // after i2 reaches last ind, will be stopped
        // freq must be greater than largest possible number of symbols
        t.push({ s: -1, f: 25001 });
        var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
        t[0] = { s: -1, f: l.f + r.f, l: l, r: r };
        // efficient algorithm from UZIP.js
        // i0 is lookbehind, i2 is lookahead - after processing two low-freq
        // symbols that combined have high freq, will start processing i2 (high-freq,
        // non-composite) symbols instead
        // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/
        while (i1 != s - 1) {
            l = t[t[i0].f < t[i2].f ? i0++ : i2++];
            r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
            t[i1++] = { s: -1, f: l.f + r.f, l: l, r: r };
        }
        var maxSym = t2[0].s;
        for (var i = 1; i < s; ++i) {
            if (t2[i].s > maxSym)
                maxSym = t2[i].s;
        }
        // code lengths
        var tr = new u16(maxSym + 1);
        // max bits in tree
        var mbt = ln(t[i1 - 1], tr, 0);
        if (mbt > mb) {
            // more algorithms from UZIP.js
            // TODO: find out how this code works (debt)
            //  ind    debt
            var i = 0, dt = 0;
            //    left            cost
            var lft = mbt - mb, cst = 1 << lft;
            t2.sort(function (a, b) { return tr[b.s] - tr[a.s] || a.f - b.f; });
            for (; i < s; ++i) {
                var i2_1 = t2[i].s;
                if (tr[i2_1] > mb) {
                    dt += cst - (1 << (mbt - tr[i2_1]));
                    tr[i2_1] = mb;
                }
                else
                    break;
            }
            dt >>= lft;
            while (dt > 0) {
                var i2_2 = t2[i].s;
                if (tr[i2_2] < mb)
                    dt -= 1 << (mb - tr[i2_2]++ - 1);
                else
                    ++i;
            }
            for (; i >= 0 && dt; --i) {
                var i2_3 = t2[i].s;
                if (tr[i2_3] == mb) {
                    --tr[i2_3];
                    ++dt;
                }
            }
            mbt = mb;
        }
        return { t: new u8(tr), l: mbt };
    };
    // get the max length and assign length codes
    var ln = function (n, l, d) {
        return n.s == -1
            ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1))
            : (l[n.s] = d);
    };
    // length codes generation
    var lc = function (c) {
        var s = c.length;
        // Note that the semicolon was intentional
        while (s && !c[--s])
            ;
        var cl = new u16(++s);
        //  ind      num         streak
        var cli = 0, cln = c[0], cls = 1;
        var w = function (v) { cl[cli++] = v; };
        for (var i = 1; i <= s; ++i) {
            if (c[i] == cln && i != s)
                ++cls;
            else {
                if (!cln && cls > 2) {
                    for (; cls > 138; cls -= 138)
                        w(32754);
                    if (cls > 2) {
                        w(cls > 10 ? ((cls - 11) << 5) | 28690 : ((cls - 3) << 5) | 12305);
                        cls = 0;
                    }
                }
                else if (cls > 3) {
                    w(cln), --cls;
                    for (; cls > 6; cls -= 6)
                        w(8304);
                    if (cls > 2)
                        w(((cls - 3) << 5) | 8208), cls = 0;
                }
                while (cls--)
                    w(cln);
                cls = 1;
                cln = c[i];
            }
        }
        return { c: cl.subarray(0, cli), n: s };
    };
    // calculate the length of output from tree, code lengths
    var clen = function (cf, cl) {
        var l = 0;
        for (var i = 0; i < cl.length; ++i)
            l += cf[i] * cl[i];
        return l;
    };
    // writes a fixed block
    // returns the new bit pos
    var wfblk = function (out, pos, dat) {
        // no need to write 00 as type: TypedArray defaults to 0
        var s = dat.length;
        var o = shft(pos + 2);
        out[o] = s & 255;
        out[o + 1] = s >> 8;
        out[o + 2] = out[o] ^ 255;
        out[o + 3] = out[o + 1] ^ 255;
        for (var i = 0; i < s; ++i)
            out[o + i + 4] = dat[i];
        return (o + 4 + s) * 8;
    };
    // writes a block
    var wblk = function (dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
        wbits(out, p++, final);
        ++lf[256];
        var _a = hTree(lf, 15), dlt = _a.t, mlb = _a.l;
        var _b = hTree(df, 15), ddt = _b.t, mdb = _b.l;
        var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
        var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
        var lcfreq = new u16(19);
        for (var i = 0; i < lclt.length; ++i)
            ++lcfreq[lclt[i] & 31];
        for (var i = 0; i < lcdt.length; ++i)
            ++lcfreq[lcdt[i] & 31];
        var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
        var nlcc = 19;
        for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
            ;
        var flen = (bl + 5) << 3;
        var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
        var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
        if (bs >= 0 && flen <= ftlen && flen <= dtlen)
            return wfblk(out, p, dat.subarray(bs, bs + bl));
        var lm, ll, dm, dl;
        wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
        if (dtlen < ftlen) {
            lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
            var llm = hMap(lct, mlcb, 0);
            wbits(out, p, nlc - 257);
            wbits(out, p + 5, ndc - 1);
            wbits(out, p + 10, nlcc - 4);
            p += 14;
            for (var i = 0; i < nlcc; ++i)
                wbits(out, p + 3 * i, lct[clim[i]]);
            p += 3 * nlcc;
            var lcts = [lclt, lcdt];
            for (var it = 0; it < 2; ++it) {
                var clct = lcts[it];
                for (var i = 0; i < clct.length; ++i) {
                    var len = clct[i] & 31;
                    wbits(out, p, llm[len]), p += lct[len];
                    if (len > 15)
                        wbits(out, p, (clct[i] >> 5) & 127), p += clct[i] >> 12;
                }
            }
        }
        else {
            lm = flm, ll = flt, dm = fdm, dl = fdt;
        }
        for (var i = 0; i < li; ++i) {
            var sym = syms[i];
            if (sym > 255) {
                var len = (sym >> 18) & 31;
                wbits16(out, p, lm[len + 257]), p += ll[len + 257];
                if (len > 7)
                    wbits(out, p, (sym >> 23) & 31), p += fleb[len];
                var dst = sym & 31;
                wbits16(out, p, dm[dst]), p += dl[dst];
                if (dst > 3)
                    wbits16(out, p, (sym >> 5) & 8191), p += fdeb[dst];
            }
            else {
                wbits16(out, p, lm[sym]), p += ll[sym];
            }
        }
        wbits16(out, p, lm[256]);
        return p + ll[256];
    };
    // deflate options (nice << 13) | chain
    var deo = /*#__PURE__*/ new i32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
    // empty
    var et = /*#__PURE__*/ new u8(0);
    // compresses data into a raw DEFLATE buffer
    var dflt = function (dat, lvl, plvl, pre, post, st) {
        var s = st.z || dat.length;
        var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7000)) + post);
        // writing to this writes to the output buffer
        var w = o.subarray(pre, o.length - post);
        var lst = st.l;
        var pos = (st.r || 0) & 7;
        if (lvl) {
            if (pos)
                w[0] = st.r >> 3;
            var opt = deo[lvl - 1];
            var n = opt >> 13, c = opt & 8191;
            var msk_1 = (1 << plvl) - 1;
            //    prev 2-byte val map    curr 2-byte val map
            var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
            var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
            var hsh = function (i) { return (dat[i] ^ (dat[i + 1] << bs1_1) ^ (dat[i + 2] << bs2_1)) & msk_1; };
            // 24576 is an arbitrary number of maximum symbols per block
            // 424 buffer for last block
            var syms = new i32(25000);
            // length/literal freq   distance freq
            var lf = new u16(288), df = new u16(32);
            //  l/lcnt  exbits  index          l/lind  waitdx          blkpos
            var lc_1 = 0, eb = 0, i = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
            for (; i + 2 < s; ++i) {
                // hash value
                var hv = hsh(i);
                // index mod 32768    previous index mod
                var imod = i & 32767, pimod = head[hv];
                prev[imod] = pimod;
                head[hv] = imod;
                // We always should modify head and prev, but only add symbols if
                // this data is not yet processed ("wait" for wait index)
                if (wi <= i) {
                    // bytes remaining
                    var rem = s - i;
                    if ((lc_1 > 7000 || li > 24576) && (rem > 423 || !lst)) {
                        pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
                        li = lc_1 = eb = 0, bs = i;
                        for (var j = 0; j < 286; ++j)
                            lf[j] = 0;
                        for (var j = 0; j < 30; ++j)
                            df[j] = 0;
                    }
                    //  len    dist   chain
                    var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
                    if (rem > 2 && hv == hsh(i - dif)) {
                        var maxn = Math.min(n, rem) - 1;
                        var maxd = Math.min(32767, i);
                        // max possible length
                        // not capped at dif because decompressors implement "rolling" index population
                        var ml = Math.min(258, rem);
                        while (dif <= maxd && --ch_1 && imod != pimod) {
                            if (dat[i + l] == dat[i + l - dif]) {
                                var nl = 0;
                                for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                                    ;
                                if (nl > l) {
                                    l = nl, d = dif;
                                    // break out early when we reach "nice" (we are satisfied enough)
                                    if (nl > maxn)
                                        break;
                                    // now, find the rarest 2-byte sequence within this
                                    // length of literals and search for that instead.
                                    // Much faster than just using the start
                                    var mmd = Math.min(dif, nl - 2);
                                    var md = 0;
                                    for (var j = 0; j < mmd; ++j) {
                                        var ti = i - dif + j & 32767;
                                        var pti = prev[ti];
                                        var cd = ti - pti & 32767;
                                        if (cd > md)
                                            md = cd, pimod = ti;
                                    }
                                }
                            }
                            // check the previous match
                            imod = pimod, pimod = prev[imod];
                            dif += imod - pimod & 32767;
                        }
                    }
                    // d will be nonzero only when a match was found
                    if (d) {
                        // store both dist and len data in one int32
                        // Make sure this is recognized as a len/dist with 28th bit (2^28)
                        syms[li++] = 268435456 | (revfl[l] << 18) | revfd[d];
                        var lin = revfl[l] & 31, din = revfd[d] & 31;
                        eb += fleb[lin] + fdeb[din];
                        ++lf[257 + lin];
                        ++df[din];
                        wi = i + l;
                        ++lc_1;
                    }
                    else {
                        syms[li++] = dat[i];
                        ++lf[dat[i]];
                    }
                }
            }
            for (i = Math.max(i, wi); i < s; ++i) {
                syms[li++] = dat[i];
                ++lf[dat[i]];
            }
            pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
            if (!lst) {
                st.r = (pos & 7) | w[(pos / 8) | 0] << 3;
                // shft(pos) now 1 less if pos & 7 != 0
                pos -= 7;
                st.h = head, st.p = prev, st.i = i, st.w = wi;
            }
        }
        else {
            for (var i = st.w || 0; i < s + lst; i += 65535) {
                // end
                var e = i + 65535;
                if (e >= s) {
                    // write final block
                    w[(pos / 8) | 0] = lst;
                    e = s;
                }
                pos = wfblk(w, pos + 1, dat.subarray(i, e));
            }
            st.i = s;
        }
        return slc(o, 0, pre + shft(pos) + post);
    };
    // CRC32 table
    var crct = /*#__PURE__*/ (function () {
        var t = new Int32Array(256);
        for (var i = 0; i < 256; ++i) {
            var c = i, k = 9;
            while (--k)
                c = ((c & 1) && -306674912) ^ (c >>> 1);
            t[i] = c;
        }
        return t;
    })();
    // CRC32
    var crc = function () {
        var c = -1;
        return {
            p: function (d) {
                // closures have awful performance
                var cr = c;
                for (var i = 0; i < d.length; ++i)
                    cr = crct[(cr & 255) ^ d[i]] ^ (cr >>> 8);
                c = cr;
            },
            d: function () { return ~c; }
        };
    };
    // deflate with opts
    var dopt = function (dat, opt, pre, post, st) {
        if (!st) {
            st = { l: 1 };
            if (opt.dictionary) {
                var dict = opt.dictionary.subarray(-32768);
                var newDat = new u8(dict.length + dat.length);
                newDat.set(dict);
                newDat.set(dat, dict.length);
                dat = newDat;
                st.w = dict.length;
            }
        }
        return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : (12 + opt.mem), pre, post, st);
    };
    // Walmart object spread
    var mrg = function (a, b) {
        var o = {};
        for (var k in a)
            o[k] = a[k];
        for (var k in b)
            o[k] = b[k];
        return o;
    };
    // worker clone
    // This is possibly the craziest part of the entire codebase, despite how simple it may seem.
    // The only parameter to this function is a closure that returns an array of variables outside of the function scope.
    // We're going to try to figure out the variable names used in the closure as strings because that is crucial for workerization.
    // We will return an object mapping of true variable name to value (basically, the current scope as a JS object).
    // The reason we can't just use the original variable names is minifiers mangling the toplevel scope.
    // This took me three weeks to figure out how to do.
    var wcln = function (fn, fnStr, td) {
        var dt = fn();
        var st = fn.toString();
        var ks = st.slice(st.indexOf('[') + 1, st.lastIndexOf(']')).replace(/\s+/g, '').split(',');
        for (var i = 0; i < dt.length; ++i) {
            var v = dt[i], k = ks[i];
            if (typeof v == 'function') {
                fnStr += ';' + k + '=';
                var st_1 = v.toString();
                if (v.prototype) {
                    // for global objects
                    if (st_1.indexOf('[native code]') != -1) {
                        var spInd = st_1.indexOf(' ', 8) + 1;
                        fnStr += st_1.slice(spInd, st_1.indexOf('(', spInd));
                    }
                    else {
                        fnStr += st_1;
                        for (var t in v.prototype)
                            fnStr += ';' + k + '.prototype.' + t + '=' + v.prototype[t].toString();
                    }
                }
                else
                    fnStr += st_1;
            }
            else
                td[k] = v;
        }
        return fnStr;
    };
    var ch = [];
    // clone bufs
    var cbfs = function (v) {
        var tl = [];
        for (var k in v) {
            if (v[k].buffer) {
                tl.push((v[k] = new v[k].constructor(v[k])).buffer);
            }
        }
        return tl;
    };
    // use a worker to execute code
    var wrkr = function (fns, init, id, cb) {
        if (!ch[id]) {
            var fnStr = '', td_1 = {}, m = fns.length - 1;
            for (var i = 0; i < m; ++i)
                fnStr = wcln(fns[i], fnStr, td_1);
            ch[id] = { c: wcln(fns[m], fnStr, td_1), e: td_1 };
        }
        var td = mrg({}, ch[id].e);
        return wk(ch[id].c + ';onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=' + init.toString() + '}', id, td, cbfs(td), cb);
    };
    var bDflt = function () { return [u8, u16, i32, fleb, fdeb, clim, revfl, revfd, flm, flt, fdm, fdt, rev, deo, et, hMap, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, shft, slc, dflt, dopt, deflateSync, pbf]; };
    // gzip extra
    var gze = function () { return [gzh, gzhl, wbytes, crc, crct]; };
    // post buf
    var pbf = function (msg) { return postMessage(msg, [msg.buffer]); };
    // async helper
    var cbify = function (dat, opts, fns, init, id, cb) {
        var w = wrkr(fns, init, id, function (err, dat) {
            w.terminate();
            cb(err, dat);
        });
        w.postMessage([dat, opts], opts.consume ? [dat.buffer] : []);
        return function () { w.terminate(); };
    };
    // write bytes
    var wbytes = function (d, b, v) {
        for (; v; ++b)
            d[b] = v, v >>>= 8;
    };
    // gzip header
    var gzh = function (c, o) {
        var fn = o.filename;
        c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3; // assume Unix
        if (o.mtime != 0)
            wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1000));
        if (fn) {
            c[3] = 8;
            for (var i = 0; i <= fn.length; ++i)
                c[i + 10] = fn.charCodeAt(i);
        }
    };
    // gzip header length
    var gzhl = function (o) { return 10 + (o.filename ? o.filename.length + 1 : 0); };
    /**
     * Compresses data with DEFLATE without any wrapper
     * @param data The data to compress
     * @param opts The compression options
     * @returns The deflated version of the data
     */
    function deflateSync(data, opts) {
        return dopt(data, opts || {}, 0, 0);
    }
    function gzip(data, opts, cb) {
        if (!cb)
            cb = opts, opts = {};
        if (typeof cb != 'function')
            err(7);
        return cbify(data, opts, [
            bDflt,
            gze,
            function () { return [gzipSync]; }
        ], function (ev) { return pbf(gzipSync(ev.data[0], ev.data[1])); }, 2, cb);
    }
    /**
     * Compresses data with GZIP
     * @param data The data to compress
     * @param opts The compression options
     * @returns The gzipped version of the data
     */
    function gzipSync(data, opts) {
        if (!opts)
            opts = {};
        var c = crc(), l = data.length;
        c.p(data);
        var d = dopt(data, opts, gzhl(opts), 8), s = d.length;
        return gzh(d, opts), wbytes(d, s - 8, c.d()), wbytes(d, s - 4, l), d;
    }
    // text decoder
    var td = typeof TextDecoder != 'undefined' && /*#__PURE__*/ new TextDecoder();
    // text decoder stream
    var tds = 0;
    try {
        td.decode(et, { stream: true });
        tds = 1;
    }
    catch (e) { }

    const perf = IN_BROWSER && 'performance' in window && 'memory' in performance // works in Chrome only
        ? performance
        : { memory: {} };
    const deviceMemory = IN_BROWSER ? (navigator.deviceMemory || 0) * 1024 : 0;
    const jsHeapSizeLimit = perf.memory.jsHeapSizeLimit || 0;
    function Performance (app, opts) {
        const options = Object.assign({
            capturePerformance: true,
        }, opts);
        if (!options.capturePerformance) {
            return;
        }
        let frames;
        let ticks;
        const nextFrame = () => {
            if (frames === undefined || frames === -1) {
                return;
            }
            frames++;
            requestAnimationFrame(nextFrame);
        };
        app.ticker.attach(() => {
            if (ticks === undefined || ticks === -1) {
                return;
            }
            ticks++;
        }, 0, false);
        const sendPerformanceTrack = () => {
            if (frames === undefined || ticks === undefined) {
                return;
            }
            app.send(PerformanceTrack(frames, ticks, perf.memory.totalJSHeapSize || 0, perf.memory.usedJSHeapSize || 0));
            ticks = frames = document.hidden ? -1 : 0;
        };
        app.attachStartCallback(() => {
            ticks = frames = -1;
            sendPerformanceTrack();
            nextFrame();
        });
        app.attachStopCallback(() => {
            ticks = frames = undefined;
        });
        app.ticker.attach(sendPerformanceTrack, 40, false);
        if (document.hidden !== undefined) {
            app.attachEventListener(document, 'visibilitychange', sendPerformanceTrack, false, false);
        }
    }

    class StringDictionary {
        constructor() {
            this.idx = 1;
            this.backDict = {};
        }
        getKey(str) {
            let isNew = false;
            if (!this.backDict[str]) {
                isNew = true;
                this.backDict[str] = this.idx++;
            }
            return [this.backDict[str], isNew];
        }
    }
    class AttributeSender {
        constructor(app, isDictDisabled) {
            this.app = app;
            this.isDictDisabled = isDictDisabled;
            this.dict = new StringDictionary();
        }
        sendSetAttribute(id, name, value) {
            if (this.isDictDisabled) {
                const msg = [12 /* Type.SetNodeAttribute */, id, name, value];
                return this.app.send(msg);
            }
            else {
                const message = [
                    51 /* Type.SetNodeAttributeDict */,
                    id,
                    this.applyDict(name),
                    this.applyDict(value),
                ];
                return this.app.send(message);
            }
        }
        applyDict(str) {
            const [key, isNew] = this.dict.getKey(str);
            if (isNew) {
                this.app.send([50 /* Type.StringDict */, key, str]);
            }
            return key;
        }
        clear() {
            this.dict = new StringDictionary();
        }
    }

    const CANCELED = 'canceled';
    const START_ERROR = ':(';
    const UnsuccessfulStart = (reason) => ({ reason, success: false });
    const SuccessfulStart = (body) => (Object.assign(Object.assign({}, body), { success: true }));
    var ActivityState;
    (function (ActivityState) {
        ActivityState[ActivityState["NotActive"] = 0] = "NotActive";
        ActivityState[ActivityState["Starting"] = 1] = "Starting";
        ActivityState[ActivityState["Active"] = 2] = "Active";
    })(ActivityState || (ActivityState = {}));
    // TODO: use backendHost only
    const DEFAULT_INGEST_POINT = 'https://api.openreplay.com/ingest';
    function getTimezone() {
        const offset = new Date().getTimezoneOffset() * -1;
        const sign = offset >= 0 ? '+' : '-';
        const hours = Math.floor(Math.abs(offset) / 60);
        const minutes = Math.abs(offset) % 60;
        return `UTC${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    }
    class App {
        constructor(projectKey, sessionToken, options) {
            var _a, _b;
            this.messages = [];
            this.startCallbacks = [];
            this.stopCallbacks = [];
            this.commitCallbacks = [];
            this.activityState = ActivityState.NotActive;
            this.version = '10.0.3'; // TODO: version compatability check inside each plugin.
            this.compressionThreshold = 24 * 1000;
            this.restartAttempts = 0;
            this.bc = null;
            this._usingOldFetchPlugin = false;
            this.delay = 0;
            // if (options.onStart !== undefined) {
            //   deprecationWarn("'onStart' option", "tracker.start().then(/* handle session info */)")
            // } ?? maybe onStart is good
            this.contextId = Math.random().toString(36).slice(2);
            this.projectKey = projectKey;
            this.networkOptions = options.network;
            this.options = Object.assign({
                revID: '',
                node_id: '__openreplay_id',
                session_token_key: '__openreplay_token',
                session_pageno_key: '__openreplay_pageno',
                session_reset_key: '__openreplay_reset',
                session_tabid_key: '__openreplay_tabid',
                local_uuid_key: '__openreplay_uuid',
                ingestPoint: DEFAULT_INGEST_POINT,
                resourceBaseHref: null,
                verbose: false,
                __is_snippet: false,
                __debug_report_edp: null,
                localStorage: null,
                sessionStorage: null,
                disableStringDict: false,
                forceSingleTab: false,
            }, options);
            if (!this.options.forceSingleTab && globalThis && 'BroadcastChannel' in globalThis) {
                this.bc = inIframe() ? null : new BroadcastChannel('rick');
            }
            this.revID = this.options.revID;
            this.localStorage = (_a = this.options.localStorage) !== null && _a !== void 0 ? _a : window.localStorage;
            this.sessionStorage = (_b = this.options.sessionStorage) !== null && _b !== void 0 ? _b : window.sessionStorage;
            this.sanitizer = new Sanitizer(this, options);
            this.nodes = new Nodes(this.options.node_id);
            this.observer = new TopObserver(this, options);
            this.ticker = new Ticker(this);
            this.ticker.attach(() => this.commit());
            this.debug = new Logger(this.options.__debug__);
            this.notify = new Logger(this.options.verbose ? LogLevel.Warnings : LogLevel.Silent);
            this.session = new Session(this, this.options);
            this.attributeSender = new AttributeSender(this, Boolean(this.options.disableStringDict));
            this.session.attachUpdateCallback(({ userID, metadata }) => {
                if (userID != null) {
                    // TODO: nullable userID
                    this.send(UserID(userID));
                }
                if (metadata != null) {
                    Object.entries(metadata).forEach(([key, value]) => this.send(Metadata(key, value)));
                }
            });
            // @deprecated (use sessionHash on start instead)
            if (sessionToken != null) {
                this.session.applySessionHash(sessionToken);
            }
            try {
                this.worker = new Worker(URL.createObjectURL(new Blob(['"use strict";class t{constructor(t,s,i,e=10,n=1e3,h){this.onUnauthorised=s,this.onFailure=i,this.MAX_ATTEMPTS_COUNT=e,this.ATTEMPT_TIMEOUT=n,this.onCompress=h,this.attemptsCount=0,this.busy=!1,this.queue=[],this.token=null,this.ingestURL=t+"/v1/web/i",this.isCompressing=void 0!==h}authorise(t){this.token=t,this.busy||this.sendNext()}push(t){this.busy||!this.token?this.queue.push(t):(this.busy=!0,this.isCompressing&&this.onCompress?this.onCompress(t):this.sendBatch(t))}sendNext(){const t=this.queue.shift();t?(this.busy=!0,this.isCompressing&&this.onCompress?this.onCompress(t):this.sendBatch(t)):this.busy=!1}retry(t,s){this.attemptsCount>=this.MAX_ATTEMPTS_COUNT?this.onFailure(`Failed to send batch after ${this.attemptsCount} attempts.`):(this.attemptsCount++,setTimeout((()=>this.sendBatch(t,s)),this.ATTEMPT_TIMEOUT*this.attemptsCount))}sendBatch(t,s){this.busy=!0;const i={Authorization:`Bearer ${this.token}`};s&&(i["Content-Encoding"]="gzip"),null!==this.token?fetch(this.ingestURL,{body:t,method:"POST",headers:i,keepalive:t.length<65536}).then((i=>{if(401===i.status)return this.busy=!1,void this.onUnauthorised();i.status>=400?this.retry(t,s):(this.attemptsCount=0,this.sendNext())})).catch((i=>{console.warn("OpenReplay:",i),this.retry(t,s)})):setTimeout((()=>{this.sendBatch(t,s)}),500)}sendCompressed(t){this.sendBatch(t,!0)}sendUncompressed(t){this.sendBatch(t,!1)}clean(){this.sendNext(),setTimeout((()=>{this.token=null,this.queue.length=0}),10)}}const s="function"==typeof TextEncoder?new TextEncoder:{encode(t){const s=t.length,i=new Uint8Array(3*s);let e=-1;for(let n=0,h=0,r=0;r!==s;){if(n=t.charCodeAt(r),r+=1,n>=55296&&n<=56319){if(r===s){i[e+=1]=239,i[e+=1]=191,i[e+=1]=189;break}if(h=t.charCodeAt(r),!(h>=56320&&h<=57343)){i[e+=1]=239,i[e+=1]=191,i[e+=1]=189;continue}if(n=1024*(n-55296)+h-56320+65536,r+=1,n>65535){i[e+=1]=240|n>>>18,i[e+=1]=128|n>>>12&63,i[e+=1]=128|n>>>6&63,i[e+=1]=128|63&n;continue}}n<=127?i[e+=1]=0|n:n<=2047?(i[e+=1]=192|n>>>6,i[e+=1]=128|63&n):(i[e+=1]=224|n>>>12,i[e+=1]=128|n>>>6&63,i[e+=1]=128|63&n)}return i.subarray(0,e+1)}};class i{constructor(t){this.size=t,this.offset=0,this.checkpointOffset=0,this.data=new Uint8Array(t)}getCurrentOffset(){return this.offset}checkpoint(){this.checkpointOffset=this.offset}get isEmpty(){return 0===this.offset}skip(t){return this.offset+=t,this.offset<=this.size}set(t,s){this.data.set(t,s)}boolean(t){return this.data[this.offset++]=+t,this.offset<=this.size}uint(t){for((t<0||t>Number.MAX_SAFE_INTEGER)&&(t=0);t>=128;)this.data[this.offset++]=t%256|128,t=Math.floor(t/128);return this.data[this.offset++]=t,this.offset<=this.size}int(t){return t=Math.round(t),this.uint(t>=0?2*t:-2*t-1)}string(t){const i=s.encode(t),e=i.byteLength;return!(!this.uint(e)||this.offset+e>this.size)&&(this.data.set(i,this.offset),this.offset+=e,!0)}reset(){this.offset=0,this.checkpointOffset=0}flush(){const t=this.data.slice(0,this.checkpointOffset);return this.reset(),t}}class e extends i{encode(t){switch(t[0]){case 0:case 11:case 114:case 115:return this.uint(t[1]);case 4:case 44:case 47:return this.string(t[1])&&this.string(t[2])&&this.uint(t[3]);case 5:case 20:case 38:case 70:case 75:case 76:case 77:case 82:return this.uint(t[1])&&this.uint(t[2]);case 6:return this.int(t[1])&&this.int(t[2]);case 7:return!0;case 8:return this.uint(t[1])&&this.uint(t[2])&&this.uint(t[3])&&this.string(t[4])&&this.boolean(t[5]);case 9:case 10:case 24:case 51:return this.uint(t[1])&&this.uint(t[2])&&this.uint(t[3]);case 12:case 61:case 71:return this.uint(t[1])&&this.string(t[2])&&this.string(t[3]);case 13:case 14:case 17:case 50:case 54:return this.uint(t[1])&&this.string(t[2]);case 16:return this.uint(t[1])&&this.int(t[2])&&this.int(t[3]);case 18:return this.uint(t[1])&&this.string(t[2])&&this.int(t[3]);case 19:return this.uint(t[1])&&this.boolean(t[2]);case 21:return this.string(t[1])&&this.string(t[2])&&this.string(t[3])&&this.string(t[4])&&this.string(t[5])&&this.uint(t[6])&&this.uint(t[7])&&this.uint(t[8]);case 22:case 27:case 30:case 41:case 45:case 46:case 63:case 64:case 79:return this.string(t[1])&&this.string(t[2]);case 23:return this.uint(t[1])&&this.uint(t[2])&&this.uint(t[3])&&this.uint(t[4])&&this.uint(t[5])&&this.uint(t[6])&&this.uint(t[7])&&this.uint(t[8])&&this.uint(t[9]);case 28:case 29:case 42:case 117:case 118:return this.string(t[1]);case 37:return this.uint(t[1])&&this.string(t[2])&&this.uint(t[3]);case 39:return this.string(t[1])&&this.string(t[2])&&this.string(t[3])&&this.string(t[4])&&this.uint(t[5])&&this.uint(t[6])&&this.uint(t[7]);case 40:return this.string(t[1])&&this.uint(t[2])&&this.string(t[3])&&this.string(t[4]);case 48:case 78:return this.string(t[1])&&this.string(t[2])&&this.string(t[3])&&this.string(t[4]);case 49:return this.int(t[1])&&this.int(t[2])&&this.uint(t[3])&&this.uint(t[4]);case 53:return this.uint(t[1])&&this.uint(t[2])&&this.uint(t[3])&&this.uint(t[4])&&this.uint(t[5])&&this.uint(t[6])&&this.string(t[7])&&this.string(t[8]);case 55:return this.boolean(t[1]);case 57:case 60:return this.uint(t[1])&&this.string(t[2])&&this.string(t[3])&&this.string(t[4]);case 58:return this.int(t[1]);case 59:return this.uint(t[1])&&this.uint(t[2])&&this.uint(t[3])&&this.uint(t[4])&&this.string(t[5])&&this.string(t[6])&&this.string(t[7]);case 67:case 73:return this.uint(t[1])&&this.string(t[2])&&this.uint(t[3])&&this.string(t[4]);case 69:return this.uint(t[1])&&this.uint(t[2])&&this.string(t[3])&&this.string(t[4]);case 81:return this.uint(t[1])&&this.uint(t[2])&&this.uint(t[3])&&this.int(t[4])&&this.string(t[5]);case 83:return this.string(t[1])&&this.string(t[2])&&this.string(t[3])&&this.string(t[4])&&this.string(t[5])&&this.uint(t[6])&&this.uint(t[7])&&this.uint(t[8])&&this.uint(t[9]);case 112:return this.uint(t[1])&&this.string(t[2])&&this.boolean(t[3])&&this.string(t[4])&&this.int(t[5])&&this.int(t[6]);case 113:return this.uint(t[1])&&this.uint(t[2])&&this.string(t[3]);case 116:return this.uint(t[1])&&this.uint(t[2])&&this.uint(t[3])&&this.uint(t[4])&&this.uint(t[5])&&this.uint(t[6])&&this.string(t[7])&&this.string(t[8])&&this.uint(t[9])&&this.boolean(t[10])}}}class n{constructor(t,s,i,n,h){this.pageNo=t,this.timestamp=s,this.url=i,this.onBatch=n,this.tabId=h,this.nextIndex=0,this.beaconSize=2e5,this.encoder=new e(this.beaconSize),this.sizeBuffer=new Uint8Array(3),this.isEmpty=!0,this.beaconSizeLimit=1e6,this.prepare()}writeType(t){return this.encoder.uint(t[0])}writeFields(t){return this.encoder.encode(t)}writeSizeAt(t,s){for(let s=0;s<3;s++)this.sizeBuffer[s]=t>>8*s;this.encoder.set(this.sizeBuffer,s)}prepare(){if(!this.encoder.isEmpty)return;const t=[81,1,this.pageNo,this.nextIndex,this.timestamp,this.url],s=[118,this.tabId];this.writeType(t),this.writeFields(t),this.writeWithSize(s),this.isEmpty=!0}writeWithSize(t){const s=this.encoder;if(!this.writeType(t)||!s.skip(3))return!1;const i=s.getCurrentOffset(),e=this.writeFields(t);if(e){const e=s.getCurrentOffset()-i;if(e>16777215)return console.warn("OpenReplay: max message size overflow."),!1;this.writeSizeAt(e,i-3),s.checkpoint(),this.isEmpty=this.isEmpty&&0===t[0],this.nextIndex++}return e}setBeaconSizeLimit(t){this.beaconSizeLimit=t}writeMessage(t){0===t[0]&&(this.timestamp=t[1]),4===t[0]&&(this.url=t[1]),this.writeWithSize(t)||(this.finaliseBatch(),this.writeWithSize(t)||(this.encoder=new e(this.beaconSizeLimit),this.prepare(),this.writeWithSize(t)?this.finaliseBatch():console.warn("OpenReplay: beacon size overflow. Skipping large message.",t,this),this.encoder=new e(this.beaconSize),this.prepare()))}finaliseBatch(){if(this.isEmpty)return;const t=this.encoder.flush();this.onBatch(t),this.prepare()}clean(){this.encoder.reset()}}var h;!function(t){t[t.NotActive=0]="NotActive",t[t.Starting=1]="Starting",t[t.Stopping=2]="Stopping",t[t.Active=3]="Active",t[t.Stopped=4]="Stopped"}(h||(h={}));let r=null,a=null,u=h.NotActive;function o(){a&&a.finaliseBatch()}function c(){u=h.Stopping,null!==d&&(clearInterval(d),d=null),a&&(a.clean(),a=null),r&&(r.clean(),setTimeout((()=>{r=null}),20)),setTimeout((()=>{u=h.NotActive}),100)}function p(){u!==h.Stopped&&(postMessage("restart"),c())}let f,d=null;self.onmessage=({data:s})=>{if(null!=s){if("stop"===s)return o(),c(),u=h.Stopped;if("forceFlushBatch"!==s){if(!Array.isArray(s)){if("compressed"===s.type){if(!r)return console.debug("WebWorker: sender not initialised. Compressed batch."),void p();r.sendCompressed(s.batch)}if("uncompressed"===s.type){if(!r)return console.debug("WebWorker: sender not initialised. Uncompressed batch."),void p();r.sendUncompressed(s.batch)}return"start"===s.type?(u=h.Starting,r=new t(s.ingestPoint,(()=>{p()}),(t=>{!function(t){postMessage({type:"failure",reason:t}),c()}(t)}),s.connAttemptCount,s.connAttemptGap,(t=>{postMessage({type:"compress",batch:t},[t.buffer])})),a=new n(s.pageNo,s.timestamp,s.url,(t=>r&&r.push(t)),s.tabId),null===d&&(d=setInterval(o,1e4)),u=h.Active):"auth"===s.type?r?a?(r.authorise(s.token),void(s.beaconSizeLimit&&a.setBeaconSizeLimit(s.beaconSizeLimit))):(console.debug("WebWorker: writer not initialised. Received auth."),void p()):(console.debug("WebWorker: sender not initialised. Received auth."),void p()):void 0}if(null!==a){const t=a;s.forEach((s=>{55===s[0]&&(s[1]?f=setTimeout((()=>p()),18e5):clearTimeout(f)),t.writeMessage(s)}))}a||(postMessage("not_init"),p())}else o()}else o()};'], { type: 'text/javascript' })));
                this.worker.onerror = (e) => {
                    this._debug('webworker_error', e);
                };
                this.worker.onmessage = ({ data }) => {
                    var _a;
                    if (data === 'restart') {
                        this.stop(false);
                        void this.start({}, true);
                    }
                    else if (data === 'not_init') {
                        console.warn('WebWorker: writer not initialised. Restarting tracker');
                    }
                    else if (data.type === 'failure') {
                        this.stop(false);
                        this._debug('worker_failed', data.reason);
                    }
                    else if (data.type === 'compress') {
                        const batch = data.batch;
                        const batchSize = batch.byteLength;
                        if (batchSize > this.compressionThreshold) {
                            gzip(data.batch, { mtime: 0 }, (err, result) => {
                                var _a;
                                if (err) {
                                    console.error('Openreplay compression error:', err);
                                    this.stop(false);
                                    if (this.restartAttempts < 3) {
                                        this.restartAttempts += 1;
                                        void this.start({}, true);
                                    }
                                }
                                // @ts-ignore
                                (_a = this.worker) === null || _a === void 0 ? void 0 : _a.postMessage({ type: 'compressed', batch: result });
                            });
                        }
                        else {
                            (_a = this.worker) === null || _a === void 0 ? void 0 : _a.postMessage({ type: 'uncompressed', batch: batch });
                        }
                    }
                };
                const alertWorker = () => {
                    if (this.worker) {
                        this.worker.postMessage(null);
                    }
                };
                // keep better tactics, discard others?
                this.attachEventListener(window, 'beforeunload', alertWorker, false);
                this.attachEventListener(document.body, 'mouseleave', alertWorker, false, false);
                // TODO: stop session after inactivity timeout (make configurable)
                this.attachEventListener(document, 'visibilitychange', alertWorker, false);
            }
            catch (e) {
                this._debug('worker_start', e);
            }
            const thisTab = this.session.getTabId();
            const proto = {
                // ask if there are any tabs alive
                ask: 'never-gonna-give-you-up',
                // yes, there are someone out there
                resp: 'never-gonna-let-you-down',
                // you stole someone's identity
                reg: 'never-gonna-run-around-and-desert-you',
            };
            if (this.bc) {
                this.bc.postMessage({
                    line: proto.ask,
                    source: thisTab,
                    context: this.contextId,
                });
            }
            if (this.bc !== null) {
                this.bc.onmessage = (ev) => {
                    if (ev.data.context === this.contextId) {
                        return;
                    }
                    if (ev.data.line === proto.resp) {
                        const sessionToken = ev.data.token;
                        this.session.setSessionToken(sessionToken);
                    }
                    if (ev.data.line === proto.reg) {
                        const sessionToken = ev.data.token;
                        this.session.regenerateTabId();
                        this.session.setSessionToken(sessionToken);
                    }
                    if (ev.data.line === proto.ask) {
                        const token = this.session.getSessionToken();
                        if (token && this.bc) {
                            this.bc.postMessage({
                                line: ev.data.source === thisTab ? proto.reg : proto.resp,
                                token,
                                source: thisTab,
                                context: this.contextId,
                            });
                        }
                    }
                };
            }
        }
        _debug(context, e) {
            if (this.options.__debug_report_edp !== null) {
                void fetch(this.options.__debug_report_edp, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        context,
                        // @ts-ignore
                        error: `${e}`,
                    }),
                });
            }
            this.debug.error('OpenReplay error: ', context, e);
        }
        send(message, urgent = false) {
            if (this.activityState === ActivityState.NotActive) {
                return;
            }
            // === Back compatibility with Fetch/Axios plugins ===
            if (message[0] === 39 /* MType.Fetch */) {
                this._usingOldFetchPlugin = true;
                deprecationWarn('Fetch plugin', "'network' init option", '/installation/network-options');
                deprecationWarn('Axios plugin', "'network' init option", '/installation/network-options');
            }
            if (this._usingOldFetchPlugin && message[0] === 83 /* MType.NetworkRequest */) {
                return;
            }
            // ====================================================
            this.messages.push(message);
            // TODO: commit on start if there were `urgent` sends;
            // Clarify where urgent can be used for;
            // Clarify workflow for each type of message in case it was sent before start
            //      (like Fetch before start; maybe add an option "preCapture: boolean" or sth alike)
            // Careful: `this.delay` is equal to zero before start hense all Timestamp-s will have to be updated on start
            if (this.activityState === ActivityState.Active && urgent) {
                this.commit();
            }
        }
        commit() {
            if (this.worker !== undefined && this.messages.length) {
                requestIdleCb(() => {
                    this.messages.unshift(TabData(this.session.getTabId()));
                    this.messages.unshift(Timestamp(this.timestamp()));
                    // ? why I need to do this?
                    this.worker.postMessage(this.messages);
                    this.commitCallbacks.forEach((cb) => cb(this.messages));
                    this.messages.length = 0;
                });
            }
        }
        timestamp() {
            return now() + this.delay;
        }
        safe(fn) {
            const app = this;
            return function (...args) {
                try {
                    fn.apply(this, args);
                }
                catch (e) {
                    app._debug('safe_fn_call', e);
                    // time: this.timestamp(),
                    // name: e.name,
                    // message: e.message,
                    // stack: e.stack
                }
            }; // TODO: correct typing
        }
        attachCommitCallback(cb) {
            this.commitCallbacks.push(cb);
        }
        attachStartCallback(cb, useSafe = false) {
            if (useSafe) {
                cb = this.safe(cb);
            }
            this.startCallbacks.push(cb);
        }
        attachStopCallback(cb, useSafe = false) {
            if (useSafe) {
                cb = this.safe(cb);
            }
            this.stopCallbacks.push(cb);
        }
        // Use  app.nodes.attachNodeListener for registered nodes instead
        attachEventListener(target, type, listener, useSafe = true, useCapture = true) {
            if (useSafe) {
                listener = this.safe(listener);
            }
            this.attachStartCallback(() => (target ? createEventListener(target, type, listener, useCapture) : null), useSafe);
            this.attachStopCallback(() => (target ? deleteEventListener(target, type, listener, useCapture) : null), useSafe);
        }
        // TODO: full correct semantic
        checkRequiredVersion(version) {
            const reqVer = version.split(/[.-]/);
            const ver = this.version.split(/[.-]/);
            for (let i = 0; i < 3; i++) {
                if (isNaN(Number(ver[i])) || isNaN(Number(reqVer[i]))) {
                    return false;
                }
                if (Number(ver[i]) > Number(reqVer[i])) {
                    return true;
                }
                if (Number(ver[i]) < Number(reqVer[i])) {
                    return false;
                }
            }
            return true;
        }
        getTrackerInfo() {
            return {
                userUUID: this.localStorage.getItem(this.options.local_uuid_key),
                projectKey: this.projectKey,
                revID: this.revID,
                trackerVersion: this.version,
                isSnippet: this.options.__is_snippet,
            };
        }
        getSessionInfo() {
            return Object.assign(Object.assign({}, this.session.getInfo()), this.getTrackerInfo());
        }
        getSessionToken() {
            return this.session.getSessionToken();
        }
        getSessionID() {
            return this.session.getInfo().sessionID || undefined;
        }
        getSessionURL(options) {
            const { projectID, sessionID, timestamp } = this.session.getInfo();
            if (!projectID || !sessionID) {
                this.debug.error('OpenReplay error: Unable to build session URL');
                return undefined;
            }
            const ingest = this.options.ingestPoint;
            const isSaas = /api\.openreplay\.com/.test(ingest);
            const projectPath = isSaas ? 'https://app.openreplay.com/ingest' : ingest;
            const url = projectPath.replace(/ingest$/, `${projectID}/session/${sessionID}`);
            if (options === null || options === void 0 ? void 0 : options.withCurrentTime) {
                const jumpTo = now() - timestamp;
                return `${url}?jumpto=${jumpTo}`;
            }
            return url;
        }
        getHost() {
            return new URL(this.options.ingestPoint).host;
        }
        getProjectKey() {
            return this.projectKey;
        }
        getBaseHref() {
            var _a, _b;
            if (typeof this.options.resourceBaseHref === 'string') {
                return this.options.resourceBaseHref;
            }
            else if (typeof this.options.resourceBaseHref === 'object') ;
            if (document.baseURI) {
                return document.baseURI;
            }
            // IE only
            return (((_b = (_a = document.head) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('base')[0]) === null || _b === void 0 ? void 0 : _b.getAttribute('href')) ||
                location.origin + location.pathname);
        }
        resolveResourceURL(resourceURL) {
            const base = new URL(this.getBaseHref());
            base.pathname += '/' + new URL(resourceURL).pathname;
            base.pathname.replace(/\/+/g, '/');
            return base.toString();
        }
        isServiceURL(url) {
            return url.startsWith(this.options.ingestPoint);
        }
        active() {
            return this.activityState === ActivityState.Active;
        }
        resetNextPageSession(flag) {
            if (flag) {
                this.sessionStorage.setItem(this.options.session_reset_key, 't');
            }
            else {
                this.sessionStorage.removeItem(this.options.session_reset_key);
            }
        }
        _start(startOpts = {}, resetByWorker = false) {
            if (!this.worker) {
                return Promise.resolve(UnsuccessfulStart('No worker found: perhaps, CSP is not set.'));
            }
            if (this.activityState !== ActivityState.NotActive) {
                return Promise.resolve(UnsuccessfulStart('OpenReplay: trying to call `start()` on the instance that has been started already.'));
            }
            this.activityState = ActivityState.Starting;
            adjustTimeOrigin();
            if (startOpts.sessionHash) {
                this.session.applySessionHash(startOpts.sessionHash);
            }
            if (startOpts.forceNew) {
                // Reset session metadata only if requested directly
                this.session.reset();
            }
            this.session.assign({
                // MBTODO: maybe it would make sense to `forceNew` if the `userID` was changed
                userID: startOpts.userID,
                metadata: startOpts.metadata,
            });
            const timestamp = now();
            this.worker.postMessage({
                type: 'start',
                pageNo: this.session.incPageNo(),
                ingestPoint: this.options.ingestPoint,
                timestamp,
                url: document.URL,
                connAttemptCount: this.options.connAttemptCount,
                connAttemptGap: this.options.connAttemptGap,
                tabId: this.session.getTabId(),
            });
            const lsReset = this.sessionStorage.getItem(this.options.session_reset_key) !== null;
            this.sessionStorage.removeItem(this.options.session_reset_key);
            const needNewSessionID = startOpts.forceNew || lsReset || resetByWorker;
            const sessionToken = this.session.getSessionToken();
            const isNewSession = needNewSessionID || !sessionToken;
            console.log('OpenReplay: starting session; need new session id?', needNewSessionID, 'session token: ', sessionToken);
            return window
                .fetch(this.options.ingestPoint + '/v1/web/start', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Object.assign(Object.assign({}, this.getTrackerInfo()), { timestamp, userID: this.session.getInfo().userID, token: isNewSession ? undefined : sessionToken, deviceMemory,
                    jsHeapSizeLimit, timezone: getTimezone() })),
            })
                .then((r) => {
                if (r.status === 200) {
                    return r.json();
                }
                else {
                    return r
                        .text()
                        .then((text) => text === CANCELED
                        ? Promise.reject(CANCELED)
                        : Promise.reject(`Server error: ${r.status}. ${text}`));
                }
            })
                .then((r) => {
                if (!this.worker) {
                    return Promise.reject('no worker found after start request (this might not happen)');
                }
                if (this.activityState === ActivityState.NotActive) {
                    return Promise.reject('Tracker stopped during authorization');
                }
                const { token, userUUID, projectID, beaconSizeLimit, compressionThreshold, // how big the batch should be before we decide to compress it
                delay, //  derived from token
                sessionID, //  derived from token
                startTimestamp, // real startTS (server time), derived from sessionID
                userBrowser, userCity, userCountry, userDevice, userOS, userState, } = r;
                if (typeof token !== 'string' ||
                    typeof userUUID !== 'string' ||
                    (typeof startTimestamp !== 'number' && typeof startTimestamp !== 'undefined') ||
                    typeof sessionID !== 'string' ||
                    typeof delay !== 'number' ||
                    (typeof beaconSizeLimit !== 'number' && typeof beaconSizeLimit !== 'undefined')) {
                    return Promise.reject(`Incorrect server response: ${JSON.stringify(r)}`);
                }
                this.delay = delay;
                this.session.setSessionToken(token);
                this.session.setUserInfo({
                    userBrowser,
                    userCity,
                    userCountry,
                    userDevice,
                    userOS,
                    userState,
                });
                this.session.assign({
                    sessionID,
                    timestamp: startTimestamp || timestamp,
                    projectID,
                });
                if (!isNewSession && token === sessionToken) {
                    console.log('continuing session on new tab', this.session.getTabId());
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    this.send(TabChange(this.session.getTabId()));
                }
                // (Re)send Metadata for the case of a new session
                Object.entries(this.session.getInfo().metadata).forEach(([key, value]) => this.send(Metadata(key, value)));
                this.localStorage.setItem(this.options.local_uuid_key, userUUID);
                this.worker.postMessage({
                    type: 'auth',
                    token,
                    beaconSizeLimit,
                });
                this.compressionThreshold = compressionThreshold;
                const onStartInfo = { sessionToken: token, userUUID, sessionID };
                // TODO: start as early as possible (before receiving the token)
                this.startCallbacks.forEach((cb) => cb(onStartInfo)); // MBTODO: callbacks after DOM "mounted" (observed)
                this.observer.observe();
                this.ticker.start();
                this.activityState = ActivityState.Active;
                this.notify.log('OpenReplay tracking started.');
                // get rid of onStart ?
                if (typeof this.options.onStart === 'function') {
                    this.options.onStart(onStartInfo);
                }
                this.restartAttempts = 0;
                return SuccessfulStart(onStartInfo);
            })
                .catch((reason) => {
                this.stop();
                this.session.reset();
                if (reason === CANCELED) {
                    return UnsuccessfulStart(CANCELED);
                }
                this.notify.log('OpenReplay was unable to start. ', reason);
                this._debug('session_start', reason);
                return UnsuccessfulStart(START_ERROR);
            });
        }
        /**
         * basically we ask other tabs during constructor
         * and here we just apply 10ms delay just in case
         * */
        start(...args) {
            if (!document.hidden) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(this._start(...args));
                    }, 25);
                });
            }
            else {
                return new Promise((resolve) => {
                    const onVisibilityChange = () => {
                        if (!document.hidden) {
                            document.removeEventListener('visibilitychange', onVisibilityChange);
                            setTimeout(() => {
                                resolve(this._start(...args));
                            }, 25);
                        }
                    };
                    document.addEventListener('visibilitychange', onVisibilityChange);
                });
            }
        }
        forceFlushBatch() {
            var _a;
            (_a = this.worker) === null || _a === void 0 ? void 0 : _a.postMessage('forceFlushBatch');
        }
        getTabId() {
            return this.session.getTabId();
        }
        stop(stopWorker = true) {
            if (this.activityState !== ActivityState.NotActive) {
                try {
                    this.attributeSender.clear();
                    this.sanitizer.clear();
                    this.observer.disconnect();
                    this.nodes.clear();
                    this.ticker.stop();
                    this.stopCallbacks.forEach((cb) => cb());
                    this.notify.log('OpenReplay tracking stopped.');
                    if (this.worker && stopWorker) {
                        this.worker.postMessage('stop');
                    }
                }
                finally {
                    this.activityState = ActivityState.NotActive;
                }
            }
        }
    }

    function Connection (app) {
        const connection = navigator.connection ||
            navigator.mozConnection ||
            navigator.webkitConnection;
        if (connection === undefined) {
            return;
        }
        const sendConnectionInformation = () => app.send(ConnectionInformation(Math.round(connection.downlink * 1000), connection.type || 'unknown'));
        sendConnectionInformation();
        connection.addEventListener('change', sendConnectionInformation);
    }

    const printError = IN_BROWSER && 'InstallTrigger' in window // detect Firefox
        ? (e) => e.message + '\n' + e.stack
        : (e) => e.stack || e.message;
    function printString(arg) {
        if (arg === undefined) {
            return 'undefined';
        }
        if (arg === null) {
            return 'null';
        }
        if (arg instanceof Error) {
            return printError(arg);
        }
        if (Array.isArray(arg)) {
            return `Array(${arg.length})`;
        }
        return String(arg);
    }
    function printFloat(arg) {
        if (typeof arg !== 'number')
            return 'NaN';
        return arg.toString();
    }
    function printInt(arg) {
        if (typeof arg !== 'number')
            return 'NaN';
        return Math.floor(arg).toString();
    }
    function printObject(arg) {
        if (arg === undefined) {
            return 'undefined';
        }
        if (arg === null) {
            return 'null';
        }
        if (arg instanceof Error) {
            return printError(arg);
        }
        if (Array.isArray(arg)) {
            const length = arg.length;
            const values = arg.slice(0, 10).map(printString).join(', ');
            return `Array(${length})[${values}]`;
        }
        if (typeof arg === 'object') {
            const res = [];
            let i = 0;
            for (const k in arg) {
                if (++i === 10) {
                    break;
                }
                const v = arg[k];
                res.push(k + ': ' + printString(v));
            }
            return '{' + res.join(', ') + '}';
        }
        return arg.toString();
    }
    function printf(args) {
        if (typeof args[0] === 'string') {
            args.unshift(args.shift().replace(/%(o|s|f|d|i)/g, (s, t) => {
                const arg = args.shift();
                if (arg === undefined)
                    return s;
                switch (t) {
                    case 'o':
                        return printObject(arg);
                    case 's':
                        return printString(arg);
                    case 'f':
                        return printFloat(arg);
                    case 'd':
                    case 'i':
                        return printInt(arg);
                    default:
                        return s;
                }
            }));
        }
        return args.map(printObject).join(' ');
    }
    const consoleMethods = ['log', 'info', 'warn', 'error', 'debug', 'assert'];
    function Console (app, opts) {
        const options = Object.assign({
            consoleMethods,
            consoleThrottling: 30,
        }, opts);
        if (!Array.isArray(options.consoleMethods) || options.consoleMethods.length === 0) {
            return;
        }
        const sendConsoleLog = app.safe((level, args) => app.send(ConsoleLog(level, printf(args))));
        let n = 0;
        const reset = () => {
            n = 0;
        };
        app.attachStartCallback(reset);
        app.ticker.attach(reset, 33, false);
        const patchConsole = (console, ctx) => {
            const handler = {
                apply: function (target, thisArg, argumentsList) {
                    Reflect.apply(target, ctx, argumentsList);
                    n = n + 1;
                    if (n > options.consoleThrottling) {
                        return;
                    }
                    else {
                        sendConsoleLog(target.name, argumentsList);
                    }
                },
            };
            options.consoleMethods.forEach((method) => {
                if (consoleMethods.indexOf(method) === -1) {
                    app.debug.error(`OpenReplay: unsupported console method "${method}"`);
                    return;
                }
                const fn = ctx.console[method];
                console[method] = new Proxy(fn, handler);
            });
        };
        const patchContext = app.safe((context) => patchConsole(context.console, context));
        patchContext(window);
        app.observer.attachContextCallback(patchContext);
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var stackframe = createCommonjsModule(function (module, exports) {
    (function(root, factory) {
        // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

        /* istanbul ignore next */
        {
            module.exports = factory();
        }
    }(commonjsGlobal, function() {
        function _isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }

        function _capitalize(str) {
            return str.charAt(0).toUpperCase() + str.substring(1);
        }

        function _getter(p) {
            return function() {
                return this[p];
            };
        }

        var booleanProps = ['isConstructor', 'isEval', 'isNative', 'isToplevel'];
        var numericProps = ['columnNumber', 'lineNumber'];
        var stringProps = ['fileName', 'functionName', 'source'];
        var arrayProps = ['args'];
        var objectProps = ['evalOrigin'];

        var props = booleanProps.concat(numericProps, stringProps, arrayProps, objectProps);

        function StackFrame(obj) {
            if (!obj) return;
            for (var i = 0; i < props.length; i++) {
                if (obj[props[i]] !== undefined) {
                    this['set' + _capitalize(props[i])](obj[props[i]]);
                }
            }
        }

        StackFrame.prototype = {
            getArgs: function() {
                return this.args;
            },
            setArgs: function(v) {
                if (Object.prototype.toString.call(v) !== '[object Array]') {
                    throw new TypeError('Args must be an Array');
                }
                this.args = v;
            },

            getEvalOrigin: function() {
                return this.evalOrigin;
            },
            setEvalOrigin: function(v) {
                if (v instanceof StackFrame) {
                    this.evalOrigin = v;
                } else if (v instanceof Object) {
                    this.evalOrigin = new StackFrame(v);
                } else {
                    throw new TypeError('Eval Origin must be an Object or StackFrame');
                }
            },

            toString: function() {
                var fileName = this.getFileName() || '';
                var lineNumber = this.getLineNumber() || '';
                var columnNumber = this.getColumnNumber() || '';
                var functionName = this.getFunctionName() || '';
                if (this.getIsEval()) {
                    if (fileName) {
                        return '[eval] (' + fileName + ':' + lineNumber + ':' + columnNumber + ')';
                    }
                    return '[eval]:' + lineNumber + ':' + columnNumber;
                }
                if (functionName) {
                    return functionName + ' (' + fileName + ':' + lineNumber + ':' + columnNumber + ')';
                }
                return fileName + ':' + lineNumber + ':' + columnNumber;
            }
        };

        StackFrame.fromString = function StackFrame$$fromString(str) {
            var argsStartIndex = str.indexOf('(');
            var argsEndIndex = str.lastIndexOf(')');

            var functionName = str.substring(0, argsStartIndex);
            var args = str.substring(argsStartIndex + 1, argsEndIndex).split(',');
            var locationString = str.substring(argsEndIndex + 1);

            if (locationString.indexOf('@') === 0) {
                var parts = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(locationString, '');
                var fileName = parts[1];
                var lineNumber = parts[2];
                var columnNumber = parts[3];
            }

            return new StackFrame({
                functionName: functionName,
                args: args || undefined,
                fileName: fileName,
                lineNumber: lineNumber || undefined,
                columnNumber: columnNumber || undefined
            });
        };

        for (var i = 0; i < booleanProps.length; i++) {
            StackFrame.prototype['get' + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);
            StackFrame.prototype['set' + _capitalize(booleanProps[i])] = (function(p) {
                return function(v) {
                    this[p] = Boolean(v);
                };
            })(booleanProps[i]);
        }

        for (var j = 0; j < numericProps.length; j++) {
            StackFrame.prototype['get' + _capitalize(numericProps[j])] = _getter(numericProps[j]);
            StackFrame.prototype['set' + _capitalize(numericProps[j])] = (function(p) {
                return function(v) {
                    if (!_isNumber(v)) {
                        throw new TypeError(p + ' must be a Number');
                    }
                    this[p] = Number(v);
                };
            })(numericProps[j]);
        }

        for (var k = 0; k < stringProps.length; k++) {
            StackFrame.prototype['get' + _capitalize(stringProps[k])] = _getter(stringProps[k]);
            StackFrame.prototype['set' + _capitalize(stringProps[k])] = (function(p) {
                return function(v) {
                    this[p] = String(v);
                };
            })(stringProps[k]);
        }

        return StackFrame;
    }));
    });

    var errorStackParser = createCommonjsModule(function (module, exports) {
    (function(root, factory) {
        // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

        /* istanbul ignore next */
        {
            module.exports = factory(stackframe);
        }
    }(commonjsGlobal, function ErrorStackParser(StackFrame) {

        var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
        var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
        var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;

        return {
            /**
             * Given an Error object, extract the most information from it.
             *
             * @param {Error} error object
             * @return {Array} of StackFrames
             */
            parse: function ErrorStackParser$$parse(error) {
                if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
                    return this.parseOpera(error);
                } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
                    return this.parseV8OrIE(error);
                } else if (error.stack) {
                    return this.parseFFOrSafari(error);
                } else {
                    throw new Error('Cannot parse given Error object');
                }
            },

            // Separate line and column numbers from a string of the form: (URI:Line:Column)
            extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
                // Fail-fast but return locations like "(native)"
                if (urlLike.indexOf(':') === -1) {
                    return [urlLike];
                }

                var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
                var parts = regExp.exec(urlLike.replace(/[()]/g, ''));
                return [parts[1], parts[2] || undefined, parts[3] || undefined];
            },

            parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
                var filtered = error.stack.split('\n').filter(function(line) {
                    return !!line.match(CHROME_IE_STACK_REGEXP);
                }, this);

                return filtered.map(function(line) {
                    if (line.indexOf('(eval ') > -1) {
                        // Throw away eval information until we implement stacktrace.js/stackframe#8
                        line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^()]*)|(,.*$)/g, '');
                    }
                    var sanitizedLine = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').replace(/^.*?\s+/, '');

                    // capture and preseve the parenthesized location "(/foo/my bar.js:12:87)" in
                    // case it has spaces in it, as the string is split on \s+ later on
                    var location = sanitizedLine.match(/ (\(.+\)$)/);

                    // remove the parenthesized location from the line, if it was matched
                    sanitizedLine = location ? sanitizedLine.replace(location[0], '') : sanitizedLine;

                    // if a location was matched, pass it to extractLocation() otherwise pass all sanitizedLine
                    // because this line doesn't have function name
                    var locationParts = this.extractLocation(location ? location[1] : sanitizedLine);
                    var functionName = location && sanitizedLine || undefined;
                    var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];

                    return new StackFrame({
                        functionName: functionName,
                        fileName: fileName,
                        lineNumber: locationParts[1],
                        columnNumber: locationParts[2],
                        source: line
                    });
                }, this);
            },

            parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
                var filtered = error.stack.split('\n').filter(function(line) {
                    return !line.match(SAFARI_NATIVE_CODE_REGEXP);
                }, this);

                return filtered.map(function(line) {
                    // Throw away eval information until we implement stacktrace.js/stackframe#8
                    if (line.indexOf(' > eval') > -1) {
                        line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ':$1');
                    }

                    if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
                        // Safari eval frames only have function names and nothing else
                        return new StackFrame({
                            functionName: line
                        });
                    } else {
                        var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
                        var matches = line.match(functionNameRegex);
                        var functionName = matches && matches[1] ? matches[1] : undefined;
                        var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));

                        return new StackFrame({
                            functionName: functionName,
                            fileName: locationParts[0],
                            lineNumber: locationParts[1],
                            columnNumber: locationParts[2],
                            source: line
                        });
                    }
                }, this);
            },

            parseOpera: function ErrorStackParser$$parseOpera(e) {
                if (!e.stacktrace || (e.message.indexOf('\n') > -1 &&
                    e.message.split('\n').length > e.stacktrace.split('\n').length)) {
                    return this.parseOpera9(e);
                } else if (!e.stack) {
                    return this.parseOpera10(e);
                } else {
                    return this.parseOpera11(e);
                }
            },

            parseOpera9: function ErrorStackParser$$parseOpera9(e) {
                var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
                var lines = e.message.split('\n');
                var result = [];

                for (var i = 2, len = lines.length; i < len; i += 2) {
                    var match = lineRE.exec(lines[i]);
                    if (match) {
                        result.push(new StackFrame({
                            fileName: match[2],
                            lineNumber: match[1],
                            source: lines[i]
                        }));
                    }
                }

                return result;
            },

            parseOpera10: function ErrorStackParser$$parseOpera10(e) {
                var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
                var lines = e.stacktrace.split('\n');
                var result = [];

                for (var i = 0, len = lines.length; i < len; i += 2) {
                    var match = lineRE.exec(lines[i]);
                    if (match) {
                        result.push(
                            new StackFrame({
                                functionName: match[3] || undefined,
                                fileName: match[2],
                                lineNumber: match[1],
                                source: lines[i]
                            })
                        );
                    }
                }

                return result;
            },

            // Opera 10.65+ Error.stack very similar to FF/Safari
            parseOpera11: function ErrorStackParser$$parseOpera11(error) {
                var filtered = error.stack.split('\n').filter(function(line) {
                    return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
                }, this);

                return filtered.map(function(line) {
                    var tokens = line.split('@');
                    var locationParts = this.extractLocation(tokens.pop());
                    var functionCall = (tokens.shift() || '');
                    var functionName = functionCall
                        .replace(/<anonymous function(: (\w+))?>/, '$2')
                        .replace(/\([^)]*\)/g, '') || undefined;
                    var argsRaw;
                    if (functionCall.match(/\(([^)]*)\)/)) {
                        argsRaw = functionCall.replace(/^[^(]+\(([^)]*)\)$/, '$1');
                    }
                    var args = (argsRaw === undefined || argsRaw === '[arguments not available]') ?
                        undefined : argsRaw.split(',');

                    return new StackFrame({
                        functionName: functionName,
                        args: args,
                        fileName: locationParts[0],
                        lineNumber: locationParts[1],
                        columnNumber: locationParts[2],
                        source: line
                    });
                }, this);
            }
        };
    }));
    });

    function getDefaultStack(e) {
        return [
            {
                columnNumber: e.colno,
                lineNumber: e.lineno,
                fileName: e.filename,
                functionName: '',
                source: '',
            },
        ];
    }
    function getExceptionMessage(error, fallbackStack, metadata = {}) {
        let stack = fallbackStack;
        try {
            stack = errorStackParser.parse(error);
        }
        catch (e) { }
        return JSException(error.name, error.message, JSON.stringify(stack), JSON.stringify(metadata));
    }
    function getExceptionMessageFromEvent(e, context = window, metadata = {}) {
        if (e instanceof ErrorEvent) {
            if (e.error instanceof Error) {
                return getExceptionMessage(e.error, getDefaultStack(e), metadata);
            }
            else {
                let [name, message] = e.message.split(':');
                if (!message) {
                    name = 'Error';
                    message = e.message;
                }
                return JSException(name, message, JSON.stringify(getDefaultStack(e)), JSON.stringify(metadata));
            }
        }
        else if ('PromiseRejectionEvent' in context && e instanceof context.PromiseRejectionEvent) {
            if (e.reason instanceof Error) {
                return getExceptionMessage(e.reason, [], metadata);
            }
            else {
                let message;
                try {
                    message = JSON.stringify(e.reason);
                }
                catch (_) {
                    message = String(e.reason);
                }
                return JSException('Unhandled Promise Rejection', message, '[]', JSON.stringify(metadata));
            }
        }
        return null;
    }
    function Exception (app, opts) {
        const options = Object.assign({
            captureExceptions: true,
        }, opts);
        function patchContext(context) {
            function handler(e) {
                const msg = getExceptionMessageFromEvent(e, context);
                if (msg != null) {
                    app.send(msg);
                }
            }
            app.attachEventListener(context, 'unhandledrejection', handler);
            app.attachEventListener(context, 'error', handler);
        }
        if (options.captureExceptions) {
            app.observer.attachContextCallback(patchContext); // TODO: attach once-per-iframe (?)
            patchContext(window);
        }
    }

    function resolveURL(url, location = document.location) {
        url = url.trim();
        if (url.startsWith('//') ||
            url.startsWith('http://') ||
            url.startsWith('https://') ||
            url.startsWith('data:') // any other possible value here? https://bugzilla.mozilla.org/show_bug.cgi?id=1758035
        ) {
            return url;
        }
        else if (url.startsWith('/')) {
            return location.origin + url;
        }
        else {
            return location.origin + location.pathname + url;
        }
    }
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1607081
    function isSVGInFireFox(url) {
        return IS_FIREFOX && (url.startsWith('data:image/svg+xml') || url.match(/.svg$|/i));
    }
    const PLACEHOLDER_SRC = 'https://static.openreplay.com/tracker/placeholder.jpeg';
    function Img (app) {
        function sendPlaceholder(id, node) {
            app.attributeSender.sendSetAttribute(id, 'src', PLACEHOLDER_SRC);
            const { width, height } = node.getBoundingClientRect();
            if (!node.hasAttribute('width')) {
                app.attributeSender.sendSetAttribute(id, 'width', String(width));
            }
            if (!node.hasAttribute('height')) {
                app.attributeSender.sendSetAttribute(id, 'height', String(height));
            }
        }
        const sendSrcset = function (id, img) {
            const { srcset } = img;
            if (!srcset) {
                return;
            }
            const resolvedSrcset = srcset
                .split(',')
                .map((str) => resolveURL(str))
                .join(',');
            app.attributeSender.sendSetAttribute(id, 'srcset', resolvedSrcset);
        };
        const sendSrc = function (id, img) {
            if (img.src.length > MAX_STR_LEN) {
                sendPlaceholder(id, img);
            }
            app.send(SetNodeAttributeURLBased(id, 'src', img.src, app.getBaseHref()));
        };
        const sendImgError = app.safe(function (img) {
            const resolvedSrc = resolveURL(img.src || ''); // Src type is null sometimes. - is it true?
            if (isURL(resolvedSrc)) {
                app.send(ResourceTiming(app.timestamp(), 0, 0, 0, 0, 0, resolvedSrc, 'img', 0, false));
            }
        });
        const sendImgAttrs = app.safe(function (img) {
            const id = app.nodes.getID(img);
            if (id === undefined) {
                return;
            }
            if (!img.complete) {
                return;
            }
            if (img.naturalHeight === 0 && img.naturalWidth === 0 && !isSVGInFireFox(img.src)) {
                sendImgError(img);
            }
            else if (app.sanitizer.isHidden(id) || app.sanitizer.isObscured(id)) {
                sendPlaceholder(id, img);
            }
            else {
                sendSrc(id, img);
                sendSrcset(id, img);
            }
        });
        const observer = createMutationObserver(app.safe((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === 'attributes') {
                    const target = mutation.target;
                    const id = app.nodes.getID(target);
                    if (id === undefined) {
                        return;
                    }
                    if (mutation.attributeName === 'src') {
                        sendSrc(id, target);
                    }
                    if (mutation.attributeName === 'srcset') {
                        sendSrcset(id, target);
                    }
                }
            }
        }));
        app.attachStopCallback(() => {
            observer.disconnect();
        });
        app.nodes.attachNodeCallback((node) => {
            if (!hasTag(node, 'img')) {
                return;
            }
            app.nodes.attachNodeListener(node, 'error', () => sendImgError(node));
            app.nodes.attachNodeListener(node, 'load', () => sendImgAttrs(node));
            sendImgAttrs(node);
            observer.observe(node, { attributes: true, attributeFilter: ['src', 'srcset'] });
        });
    }

    const INPUT_TYPES = [
        'text',
        'password',
        'email',
        'search',
        'number',
        'range',
        'date',
        'tel',
        'time',
    ];
    function isTextFieldElement(node) {
        if (hasTag(node, 'textarea')) {
            return true;
        }
        if (!hasTag(node, 'input')) {
            return false;
        }
        return INPUT_TYPES.includes(node.type);
    }
    function isCheckbox(node) {
        if (!hasTag(node, 'input')) {
            return false;
        }
        const type = node.type;
        return type === 'checkbox' || type === 'radio';
    }
    const labelElementFor = IN_BROWSER && 'labels' in HTMLInputElement.prototype
        ? (node) => {
            let p = node;
            while ((p = p.parentNode) !== null) {
                if (hasTag(p, 'label')) {
                    return p;
                }
            }
            const labels = node.labels;
            if (labels !== null && labels.length === 1) {
                return labels[0];
            }
        }
        : (node) => {
            let p = node;
            while ((p = p.parentNode) !== null) {
                if (hasTag(p, 'label')) {
                    return p;
                }
            }
            const id = node.id;
            if (id) {
                const labels = node.ownerDocument.querySelectorAll('label[for="' + id + '"]');
                if (labels !== null && labels.length === 1) {
                    return labels[0];
                }
            }
        };
    function getInputLabel(node) {
        let label = getLabelAttribute(node);
        if (label === null) {
            const labelElement = labelElementFor(node);
            label =
                (labelElement && labelElement.innerText) ||
                    node.placeholder ||
                    node.name ||
                    node.id ||
                    node.className ||
                    node.type;
        }
        return normSpaces(label).slice(0, 100);
    }
    const InputMode = {
        Plain: 0,
        Obscured: 1,
        Hidden: 2,
    };
    function Input (app, opts) {
        const options = Object.assign({
            obscureInputNumbers: true,
            obscureInputEmails: true,
            defaultInputMode: InputMode.Obscured,
            obscureInputDates: false,
        }, opts);
        function getInputValue(id, node) {
            let value = node.value;
            let inputMode = options.defaultInputMode;
            if (node.type === 'password' || app.sanitizer.isHidden(id)) {
                inputMode = InputMode.Hidden;
            }
            else if (app.sanitizer.isObscured(id) ||
                (inputMode === InputMode.Plain &&
                    ((options.obscureInputNumbers && node.type !== 'date' && /\d\d\d\d/.test(value)) ||
                        (options.obscureInputDates && node.type === 'date') ||
                        (options.obscureInputEmails && (node.type === 'email' || !!~value.indexOf('@')))))) {
                inputMode = InputMode.Obscured;
            }
            let mask = 0;
            switch (inputMode) {
                case InputMode.Hidden:
                    mask = -1;
                    value = '';
                    break;
                case InputMode.Obscured:
                    mask = value.length;
                    value = '';
                    break;
            }
            return { value, mask };
        }
        function sendInputValue(id, node) {
            const { value, mask } = getInputValue(id, node);
            app.send(SetInputValue(id, value, mask));
        }
        const inputValues = new Map();
        const checkboxValues = new Map();
        app.attachStopCallback(() => {
            inputValues.clear();
            checkboxValues.clear();
        });
        function trackInputValue(id, node) {
            if (inputValues.get(id) === node.value) {
                return;
            }
            inputValues.set(id, node.value);
            sendInputValue(id, node);
        }
        function trackCheckboxValue(id, value) {
            if (checkboxValues.get(id) === value) {
                return;
            }
            checkboxValues.set(id, value);
            app.send(SetInputChecked(id, value));
        }
        // The only way (to our knowledge) to track all kinds of input changes, including those made by JS
        app.ticker.attach(() => {
            inputValues.forEach((value, id) => {
                const node = app.nodes.getNode(id);
                if (!node)
                    return inputValues.delete(id);
                trackInputValue(id, node);
            });
            checkboxValues.forEach((checked, id) => {
                const node = app.nodes.getNode(id);
                if (!node)
                    return checkboxValues.delete(id);
                trackCheckboxValue(id, node.checked);
            });
        }, 3);
        function sendInputChange(id, node, hesitationTime, inputTime) {
            const { value, mask } = getInputValue(id, node);
            const label = getInputLabel(node);
            app.send(InputChange(id, value, mask !== 0, label, hesitationTime, inputTime));
        }
        app.nodes.attachNodeCallback(app.safe((node) => {
            const id = app.nodes.getID(node);
            if (id === undefined) {
                return;
            }
            // TODO: support multiple select (?): use selectedOptions;
            if (hasTag(node, 'select')) {
                sendInputValue(id, node);
                app.nodes.attachNodeListener(node, 'change', () => sendInputValue(id, node));
            }
            if (isTextFieldElement(node)) {
                trackInputValue(id, node);
                let nodeFocusTime = 0;
                let nodeHesitationTime = 0;
                let inputTime = 0;
                const onFocus = () => {
                    nodeFocusTime = now();
                };
                const onInput = () => {
                    if (nodeHesitationTime === 0 && nodeFocusTime !== 0) {
                        nodeHesitationTime = now() - nodeFocusTime;
                    }
                };
                const onChange = () => {
                    if (nodeFocusTime !== 0) {
                        inputTime = now() - nodeFocusTime;
                    }
                    sendInputChange(id, node, nodeHesitationTime, inputTime);
                    nodeHesitationTime = 0;
                    inputTime = 0;
                    nodeFocusTime = 0;
                };
                app.nodes.attachNodeListener(node, 'focus', onFocus);
                app.nodes.attachNodeListener(node, 'input', onInput);
                app.nodes.attachNodeListener(node, 'change', onChange);
                return;
            }
            if (isCheckbox(node)) {
                trackCheckboxValue(id, node.checked);
                app.nodes.attachNodeListener(node, 'change', () => trackCheckboxValue(id, node.checked));
                return;
            }
        }));
    }

    // License: MIT
    // Author: Anton Medvedev <anton@medv.io>
    // Source: https://github.com/antonmedv/finder
    let config;
    let rootDocument;
    function finder(input, options) {
        if (input.nodeType !== Node.ELEMENT_NODE) {
            throw new Error(`Can't generate CSS selector for non-element node type.`);
        }
        if ('html' === input.tagName.toLowerCase()) {
            return 'html';
        }
        const defaults = {
            root: document.body,
            idName: (name) => true,
            className: (name) => true,
            tagName: (name) => true,
            attr: (name, value) => false,
            seedMinLength: 1,
            optimizedMinLength: 2,
            threshold: 1000,
            maxNumberOfTries: 10000,
        };
        config = { ...defaults, ...options };
        rootDocument = findRootDocument(config.root, defaults);
        let path = bottomUpSearch(input, 'all', () => bottomUpSearch(input, 'two', () => bottomUpSearch(input, 'one', () => bottomUpSearch(input, 'none'))));
        if (path) {
            const optimized = sort(optimize(path, input));
            if (optimized.length > 0) {
                path = optimized[0];
            }
            return selector(path);
        }
        else {
            throw new Error(`Selector was not found.`);
        }
    }
    function findRootDocument(rootNode, defaults) {
        if (rootNode.nodeType === Node.DOCUMENT_NODE) {
            return rootNode;
        }
        if (rootNode === defaults.root) {
            return rootNode.ownerDocument;
        }
        return rootNode;
    }
    function bottomUpSearch(input, limit, fallback) {
        let path = null;
        let stack = [];
        let current = input;
        let i = 0;
        while (current) {
            let level = maybe(id(current)) ||
                maybe(...attr(current)) ||
                maybe(...classNames(current)) ||
                maybe(tagName(current)) || [any()];
            const nth = index(current);
            if (limit == 'all') {
                if (nth) {
                    level = level.concat(level.filter(dispensableNth).map((node) => nthChild(node, nth)));
                }
            }
            else if (limit == 'two') {
                level = level.slice(0, 1);
                if (nth) {
                    level = level.concat(level.filter(dispensableNth).map((node) => nthChild(node, nth)));
                }
            }
            else if (limit == 'one') {
                const [node] = (level = level.slice(0, 1));
                if (nth && dispensableNth(node)) {
                    level = [nthChild(node, nth)];
                }
            }
            else if (limit == 'none') {
                level = [any()];
                if (nth) {
                    level = [nthChild(level[0], nth)];
                }
            }
            for (let node of level) {
                node.level = i;
            }
            stack.push(level);
            if (stack.length >= config.seedMinLength) {
                path = findUniquePath(stack, fallback);
                if (path) {
                    break;
                }
            }
            current = current.parentElement;
            i++;
        }
        if (!path) {
            path = findUniquePath(stack, fallback);
        }
        if (!path && fallback) {
            return fallback();
        }
        return path;
    }
    function findUniquePath(stack, fallback) {
        const paths = sort(combinations(stack));
        if (paths.length > config.threshold) {
            return fallback ? fallback() : null;
        }
        for (let candidate of paths) {
            if (unique(candidate)) {
                return candidate;
            }
        }
        return null;
    }
    function selector(path) {
        let node = path[0];
        let query = node.name;
        for (let i = 1; i < path.length; i++) {
            const level = path[i].level || 0;
            if (node.level === level - 1) {
                query = `${path[i].name} > ${query}`;
            }
            else {
                query = `${path[i].name} ${query}`;
            }
            node = path[i];
        }
        return query;
    }
    function penalty(path) {
        return path.map((node) => node.penalty).reduce((acc, i) => acc + i, 0);
    }
    function unique(path) {
        const css = selector(path);
        switch (rootDocument.querySelectorAll(css).length) {
            case 0:
                throw new Error(`Can't select any node with this selector: ${css}`);
            case 1:
                return true;
            default:
                return false;
        }
    }
    function id(input) {
        const elementId = input.getAttribute('id');
        if (elementId && config.idName(elementId)) {
            return {
                name: '#' + CSS.escape(elementId),
                penalty: 0,
            };
        }
        return null;
    }
    function attr(input) {
        const attrs = Array.from(input.attributes).filter((attr) => config.attr(attr.name, attr.value));
        return attrs.map((attr) => ({
            name: `[${CSS.escape(attr.name)}="${CSS.escape(attr.value)}"]`,
            penalty: 0.5,
        }));
    }
    function classNames(input) {
        const names = Array.from(input.classList).filter(config.className);
        return names.map((name) => ({
            name: '.' + CSS.escape(name),
            penalty: 1,
        }));
    }
    function tagName(input) {
        const name = input.tagName.toLowerCase();
        if (config.tagName(name)) {
            return {
                name,
                penalty: 2,
            };
        }
        return null;
    }
    function any() {
        return {
            name: '*',
            penalty: 3,
        };
    }
    function index(input) {
        const parent = input.parentNode;
        if (!parent) {
            return null;
        }
        let child = parent.firstChild;
        if (!child) {
            return null;
        }
        let i = 0;
        while (child) {
            if (child.nodeType === Node.ELEMENT_NODE) {
                i++;
            }
            if (child === input) {
                break;
            }
            child = child.nextSibling;
        }
        return i;
    }
    function nthChild(node, i) {
        return {
            name: node.name + `:nth-child(${i})`,
            penalty: node.penalty + 1,
        };
    }
    function dispensableNth(node) {
        return node.name !== 'html' && !node.name.startsWith('#');
    }
    function maybe(...level) {
        const list = level.filter(notEmpty);
        if (list.length > 0) {
            return list;
        }
        return null;
    }
    function notEmpty(value) {
        return value !== null && value !== undefined;
    }
    function* combinations(stack, path = []) {
        if (stack.length > 0) {
            for (let node of stack[0]) {
                yield* combinations(stack.slice(1, stack.length), path.concat(node));
            }
        }
        else {
            yield path;
        }
    }
    function sort(paths) {
        return [...paths].sort((a, b) => penalty(a) - penalty(b));
    }
    function* optimize(path, input, scope = {
        counter: 0,
        visited: new Map(),
    }) {
        if (path.length > 2 && path.length > config.optimizedMinLength) {
            for (let i = 1; i < path.length - 1; i++) {
                if (scope.counter > config.maxNumberOfTries) {
                    return; // Okay At least I tried!
                }
                scope.counter += 1;
                const newPath = [...path];
                newPath.splice(i, 1);
                const newPathKey = selector(newPath);
                if (scope.visited.has(newPathKey)) {
                    return;
                }
                if (unique(newPath) && same(newPath, input)) {
                    yield newPath;
                    scope.visited.set(newPathKey, true);
                    yield* optimize(newPath, input, scope);
                }
            }
        }
    }
    function same(path, input) {
        return rootDocument.querySelector(selector(path)) === input;
    }

    function _getSelector(target, document, options) {
        const selector = finder(target, {
            root: document.body,
            seedMinLength: 3,
            optimizedMinLength: (options === null || options === void 0 ? void 0 : options.minSelectorDepth) || 2,
            threshold: (options === null || options === void 0 ? void 0 : options.nthThreshold) || 1000,
            maxNumberOfTries: (options === null || options === void 0 ? void 0 : options.maxOptimiseTries) || 10000,
        });
        return selector;
    }
    function isClickable(element) {
        const tag = element.tagName.toUpperCase();
        return (tag === 'BUTTON' ||
            tag === 'A' ||
            tag === 'LI' ||
            tag === 'SELECT' ||
            tag === 'TR' ||
            tag === 'TH' ||
            element.onclick != null ||
            element.getAttribute('role') === 'button');
        //|| element.className.includes("btn")
        // MBTODO: intercept addEventListener
    }
    //TODO: fix (typescript is not sure about target variable after assignation of svg)
    function getTarget(target, document) {
        if (target instanceof Element) {
            return _getTarget(target, document);
        }
        return null;
    }
    function _getTarget(target, document) {
        let element = target;
        while (element !== null && element !== document.documentElement) {
            if (hasOpenreplayAttribute(element, 'masked')) {
                return null;
            }
            element = element.parentElement;
        }
        if (isSVGElement(target)) {
            let owner = target.ownerSVGElement;
            while (owner !== null) {
                target = owner;
                owner = owner.ownerSVGElement;
            }
        }
        element = target;
        while (element !== null && element !== document.documentElement) {
            const tag = element.tagName.toUpperCase();
            if (tag === 'LABEL') {
                return null;
            }
            if (tag === 'INPUT') {
                return element;
            }
            if (isClickable(element) || getLabelAttribute(element) !== null) {
                return element;
            }
            element = element.parentElement;
        }
        return target === document.documentElement ? null : target;
    }
    function Mouse (app, options) {
        const { disableClickmaps = false } = options || {};
        function getTargetLabel(target) {
            const dl = getLabelAttribute(target);
            if (dl !== null) {
                return dl;
            }
            if (hasTag(target, 'input')) {
                return getInputLabel(target);
            }
            if (isClickable(target)) {
                let label = '';
                if (target instanceof HTMLElement) {
                    label = app.sanitizer.getInnerTextSecure(target);
                }
                label = label || target.id || target.className;
                return normSpaces(label).slice(0, 100);
            }
            return '';
        }
        let mousePositionX = -1;
        let mousePositionY = -1;
        let mousePositionChanged = false;
        let mouseTarget = null;
        let mouseTargetTime = 0;
        let selectorMap = {};
        let velocity = 0;
        let direction = 0;
        let directionChangeCount = 0;
        let distance = 0;
        let checkIntervalId;
        const shakeThreshold = 0.008;
        const shakeCheckInterval = 225;
        function checkMouseShaking() {
            const nextVelocity = distance / shakeCheckInterval;
            if (!velocity) {
                velocity = nextVelocity;
                return;
            }
            const acceleration = (nextVelocity - velocity) / shakeCheckInterval;
            if (directionChangeCount > 4 && acceleration > shakeThreshold) {
                app.send(MouseThrashing(now()));
            }
            distance = 0;
            directionChangeCount = 0;
            velocity = nextVelocity;
        }
        app.attachStartCallback(() => {
            checkIntervalId = setInterval(() => checkMouseShaking(), shakeCheckInterval);
        });
        app.attachStopCallback(() => {
            mousePositionX = -1;
            mousePositionY = -1;
            mousePositionChanged = false;
            mouseTarget = null;
            selectorMap = {};
            if (checkIntervalId) {
                clearInterval(checkIntervalId);
            }
        });
        const sendMouseMove = () => {
            if (mousePositionChanged) {
                app.send(MouseMove(mousePositionX, mousePositionY));
                mousePositionChanged = false;
            }
        };
        const patchDocument = (document, topframe = false) => {
            function getSelector(id, target, options) {
                return (selectorMap[id] = selectorMap[id] || _getSelector(target, document, options));
            }
            const attachListener = topframe
                ? app.attachEventListener.bind(app) // attached/removed on start/stop
                : app.nodes.attachNodeListener.bind(app.nodes); // attached/removed on node register/unregister
            attachListener(document.documentElement, 'mouseover', (e) => {
                const target = getTarget(e.target, document);
                if (target !== mouseTarget) {
                    mouseTarget = target;
                    mouseTargetTime = performance.now();
                }
            });
            attachListener(document, 'mousemove', (e) => {
                const [left, top] = app.observer.getDocumentOffset(document); // MBTODO?: document-id related message
                mousePositionX = e.clientX + left;
                mousePositionY = e.clientY + top;
                mousePositionChanged = true;
                const nextDirection = Math.sign(e.movementX);
                distance += Math.abs(e.movementX) + Math.abs(e.movementY);
                if (nextDirection !== direction) {
                    direction = nextDirection;
                    directionChangeCount++;
                }
            }, false);
            attachListener(document, 'click', (e) => {
                const target = getTarget(e.target, document);
                if ((!e.clientX && !e.clientY) || target === null) {
                    return;
                }
                const id = app.nodes.getID(target);
                if (id !== undefined) {
                    sendMouseMove();
                    app.send(MouseClick(id, mouseTarget === target ? Math.round(performance.now() - mouseTargetTime) : 0, getTargetLabel(target), isClickable(target) && !disableClickmaps ? getSelector(id, target, options) : ''), true);
                }
                mouseTarget = null;
            });
        };
        app.nodes.attachNodeCallback((node) => {
            if (isDocument(node)) {
                patchDocument(node);
            }
        });
        patchDocument(document, true);
        app.ticker.attach(sendMouseMove, (options === null || options === void 0 ? void 0 : options.trackingOffset) || 7);
    }

    function getPaintBlocks(resources) {
        const paintBlocks = [];
        const elements = document.getElementsByTagName('*');
        const styleURL = /url\(("[^"]*"|'[^']*'|[^)]*)\)/i;
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            let src = '';
            if (hasTag(element, 'img')) {
                src = element.currentSrc || element.src;
            }
            if (!src) {
                const backgroundImage = getComputedStyle(element).getPropertyValue('background-image');
                if (backgroundImage) {
                    const matches = styleURL.exec(backgroundImage);
                    if (matches !== null) {
                        src = matches[1];
                        if (src.startsWith('"') || src.startsWith("'")) {
                            src = src.substr(1, src.length - 2);
                        }
                    }
                }
            }
            if (!src)
                continue;
            const time = src.substr(0, 10) === 'data:image' ? 0 : resources[src];
            if (time === undefined)
                continue;
            const rect = element.getBoundingClientRect();
            const top = Math.max(rect.top, 0);
            const left = Math.max(rect.left, 0);
            const bottom = Math.min(rect.bottom, window.innerHeight ||
                (document.documentElement && document.documentElement.clientHeight) ||
                0);
            const right = Math.min(rect.right, window.innerWidth || (document.documentElement && document.documentElement.clientWidth) || 0);
            if (bottom <= top || right <= left)
                continue;
            const area = (bottom - top) * (right - left);
            paintBlocks.push({ time, area });
        }
        return paintBlocks;
    }
    function calculateSpeedIndex(firstContentfulPaint, paintBlocks) {
        let a = (Math.max((document.documentElement && document.documentElement.clientWidth) || 0, window.innerWidth || 0) *
            Math.max((document.documentElement && document.documentElement.clientHeight) || 0, window.innerHeight || 0)) /
            10;
        let s = a * firstContentfulPaint;
        for (let i = 0; i < paintBlocks.length; i++) {
            const { time, area } = paintBlocks[i];
            a += area;
            s += area * (time > firstContentfulPaint ? time : firstContentfulPaint);
        }
        return a === 0 ? 0 : s / a;
    }
    function Timing (app, opts) {
        const options = Object.assign({
            captureResourceTimings: true,
            capturePageLoadTimings: true,
            capturePageRenderTimings: true,
            excludedResourceUrls: [],
        }, opts);
        if (!('PerformanceObserver' in window)) {
            options.captureResourceTimings = false;
        }
        if (!options.captureResourceTimings) {
            return;
        } // Resources are necessary for all timings
        let resources = {};
        function resourceTiming(entry) {
            var _a;
            if (entry.duration < 0 || !isURL(entry.name) || app.isServiceURL(entry.name))
                return;
            if (resources !== null) {
                resources[entry.name] = entry.startTime + entry.duration;
            }
            let shouldSkip = false;
            (_a = options.excludedResourceUrls) === null || _a === void 0 ? void 0 : _a.forEach((url) => {
                if (entry.name.startsWith(url)) {
                    shouldSkip = true;
                    return;
                }
            });
            if (shouldSkip) {
                return;
            }
            app.send(ResourceTiming(entry.startTime + getTimeOrigin(), entry.duration, entry.responseStart && entry.startTime ? entry.responseStart - entry.startTime : 0, entry.transferSize > entry.encodedBodySize ? entry.transferSize - entry.encodedBodySize : 0, entry.encodedBodySize || 0, entry.decodedBodySize || 0, entry.name, entry.initiatorType, entry.transferSize, 
            // @ts-ignore
            (entry.responseStatus && entry.responseStatus === 304) || entry.transferSize === 0));
        }
        const observer = new PerformanceObserver((list) => list.getEntries().forEach(resourceTiming));
        let prevSessionID;
        app.attachStartCallback(function ({ sessionID }) {
            if (sessionID !== prevSessionID) {
                // Send past page resources on a newly started session
                performance.getEntriesByType('resource').forEach(resourceTiming);
                prevSessionID = sessionID;
            }
            observer.observe({ entryTypes: ['resource'] });
        });
        app.attachStopCallback(function () {
            observer.disconnect();
        });
        let firstPaint = 0, firstContentfulPaint = 0;
        if (options.capturePageLoadTimings) {
            let pageLoadTimingSent = false;
            app.ticker.attach(() => {
                if (pageLoadTimingSent) {
                    return;
                }
                if (firstPaint === 0 || firstContentfulPaint === 0) {
                    performance.getEntriesByType('paint').forEach((entry) => {
                        const { name, startTime } = entry;
                        switch (name) {
                            case 'first-paint':
                                firstPaint = startTime;
                                break;
                            case 'first-contentful-paint':
                                firstContentfulPaint = startTime;
                                break;
                        }
                    });
                }
                if (performance.timing.loadEventEnd || performance.now() > 30000) {
                    pageLoadTimingSent = true;
                    const { 
                    // should be ok to use here, (https://github.com/mdn/content/issues/4713)
                    // since it is compared with the values obtained on the page load (before any possible sleep state)
                    // deprecated though
                    navigationStart, requestStart, responseStart, responseEnd, domContentLoadedEventStart, domContentLoadedEventEnd, loadEventStart, loadEventEnd, } = performance.timing;
                    app.send(PageLoadTiming(requestStart - navigationStart || 0, responseStart - navigationStart || 0, responseEnd - navigationStart || 0, domContentLoadedEventStart - navigationStart || 0, domContentLoadedEventEnd - navigationStart || 0, loadEventStart - navigationStart || 0, loadEventEnd - navigationStart || 0, firstPaint, firstContentfulPaint));
                }
            }, 30);
        }
        if (options.capturePageRenderTimings) {
            let visuallyComplete = 0, interactiveWindowStartTime = 0, interactiveWindowTickTime = 0, paintBlocks = null;
            let pageRenderTimingSent = false;
            app.ticker.attach(() => {
                if (pageRenderTimingSent) {
                    return;
                }
                const time = performance.now();
                if (resources !== null) {
                    visuallyComplete = Math.max.apply(null, Object.keys(resources).map((k) => resources[k]));
                    if (time - visuallyComplete > 1000) {
                        paintBlocks = getPaintBlocks(resources);
                        resources = null;
                    }
                }
                if (interactiveWindowTickTime !== null) {
                    if (time - interactiveWindowTickTime > 50) {
                        interactiveWindowStartTime = time;
                    }
                    interactiveWindowTickTime = time - interactiveWindowStartTime > 5000 ? null : time;
                }
                if ((paintBlocks !== null && interactiveWindowTickTime === null) || time > 30000) {
                    pageRenderTimingSent = true;
                    resources = null;
                    const speedIndex = paintBlocks === null
                        ? 0
                        : calculateSpeedIndex(firstContentfulPaint || firstPaint, paintBlocks);
                    const { domContentLoadedEventEnd, navigationStart } = performance.timing;
                    const timeToInteractive = interactiveWindowTickTime === null
                        ? Math.max(interactiveWindowStartTime, firstContentfulPaint, domContentLoadedEventEnd - navigationStart || 0)
                        : 0;
                    app.send(PageRenderTiming(speedIndex, firstContentfulPaint > visuallyComplete ? firstContentfulPaint : visuallyComplete, timeToInteractive));
                }
            });
        }
    }

    function getDocumentScroll(doc) {
        const win = doc.defaultView;
        return [
            (win && win.pageXOffset) ||
                (doc.documentElement && doc.documentElement.scrollLeft) ||
                (doc.body && doc.body.scrollLeft) ||
                0,
            (win && win.pageYOffset) ||
                (doc.documentElement && doc.documentElement.scrollTop) ||
                (doc.body && doc.body.scrollTop) ||
                0,
        ];
    }
    function Scroll (app) {
        let documentScroll = false;
        const nodeScroll = new Map();
        function setNodeScroll(target) {
            if (!isNode(target)) {
                return;
            }
            if (isElementNode(target)) {
                nodeScroll.set(target, [target.scrollLeft, target.scrollTop]);
            }
            if (isDocument(target)) {
                nodeScroll.set(target, getDocumentScroll(target));
            }
        }
        const sendSetViewportScroll = app.safe(() => app.send(SetViewportScroll(...getDocumentScroll(document))));
        const sendSetNodeScroll = app.safe((s, node) => {
            const id = app.nodes.getID(node);
            if (id !== undefined) {
                app.send(SetNodeScroll(id, s[0], s[1]));
            }
        });
        app.attachStartCallback(sendSetViewportScroll);
        app.attachStopCallback(() => {
            documentScroll = false;
            nodeScroll.clear();
        });
        app.nodes.attachNodeCallback((node, isStart) => {
            // MBTODO: iterate over all the nodes on start instead of using isStart hack
            if (isStart) {
                if (isElementNode(node) && node.scrollLeft + node.scrollTop > 0) {
                    nodeScroll.set(node, [node.scrollLeft, node.scrollTop]);
                }
                else if (isDocument(node)) {
                    // DRY somehow?
                    nodeScroll.set(node, getDocumentScroll(node));
                }
            }
            if (isRootNode(node)) {
                // scroll is not-composed event (https://javascript.info/shadow-dom-events)
                app.nodes.attachNodeListener(node, 'scroll', (e) => {
                    setNodeScroll(e.target);
                });
            }
        });
        app.attachEventListener(document, 'scroll', (e) => {
            const target = e.target;
            if (target === document) {
                documentScroll = true;
                return;
            }
            setNodeScroll(target);
        });
        app.ticker.attach(() => {
            if (documentScroll) {
                sendSetViewportScroll();
                documentScroll = false;
            }
            nodeScroll.forEach(sendSetNodeScroll);
            nodeScroll.clear();
        }, 5, false);
    }

    function Viewport (app) {
        let url, width, height;
        let navigationStart;
        let referrer = document.referrer;
        const sendSetPageLocation = app.safe(() => {
            const { URL } = document;
            if (URL !== url) {
                url = URL;
                app.send(SetPageLocation(url, referrer, navigationStart));
                navigationStart = 0;
                referrer = url;
            }
        });
        const sendSetViewportSize = app.safe(() => {
            const { innerWidth, innerHeight } = window;
            if (innerWidth !== width || innerHeight !== height) {
                width = innerWidth;
                height = innerHeight;
                app.send(SetViewportSize(width, height));
            }
        });
        const sendSetPageVisibility = document.hidden === undefined
            ? Function.prototype
            : app.safe(() => app.send(SetPageVisibility(document.hidden)));
        app.attachStartCallback(() => {
            url = '';
            navigationStart = getTimeOrigin();
            width = height = -1;
            sendSetPageLocation();
            sendSetViewportSize();
            sendSetPageVisibility();
        });
        if (document.hidden !== undefined) {
            app.attachEventListener(document, 'visibilitychange', sendSetPageVisibility, false, false);
        }
        app.ticker.attach(sendSetPageLocation, 1, false);
        app.ticker.attach(sendSetViewportSize, 5, false);
    }

    function hasAdoptedSS(node) {
        return (isRootNode(node) &&
            // @ts-ignore
            !!node.adoptedStyleSheets);
    }
    // TODO: encapsulate to be init-ed on-start and join with cssrules.ts under one folder
    let _id = 0xf;
    function nextID() {
        return _id++;
    }
    const styleSheetIDMap = new Map();
    function ConstructedStyleSheets (app) {
        if (app === null) {
            return;
        }
        if (!hasAdoptedSS(document)) {
            return;
        }
        const styleSheetIDMap = new Map();
        const adoptedStyleSheetsOwnings = new Map();
        const sendAdoptedStyleSheetsUpdate = (root) => setTimeout(() => {
            let nodeID = app.nodes.getID(root);
            if (root === document) {
                nodeID = 0; // main document doesn't have nodeID. ID count starts from the documentElement
            }
            if (nodeID === undefined) {
                return;
            }
            let pastOwning = adoptedStyleSheetsOwnings.get(nodeID);
            if (!pastOwning) {
                pastOwning = [];
            }
            const nowOwning = [];
            const styleSheets = root.adoptedStyleSheets;
            if (Symbol.iterator in styleSheets) {
                for (const s of styleSheets) {
                    let sheetID = styleSheetIDMap.get(s);
                    const init = !sheetID;
                    if (!sheetID) {
                        sheetID = nextID();
                        styleSheetIDMap.set(s, sheetID);
                    }
                    if (!pastOwning.includes(sheetID)) {
                        app.send(AdoptedSSAddOwner(sheetID, nodeID));
                    }
                    if (init) {
                        const rules = s.cssRules;
                        for (let i = 0; i < rules.length; i++) {
                            app.send(AdoptedSSInsertRuleURLBased(sheetID, rules[i].cssText, i, app.getBaseHref()));
                        }
                    }
                    nowOwning.push(sheetID);
                }
            }
            if (Symbol.iterator in pastOwning) {
                for (const sheetID of pastOwning) {
                    if (!nowOwning.includes(sheetID)) {
                        app.send(AdoptedSSRemoveOwner(sheetID, nodeID));
                    }
                }
            }
            adoptedStyleSheetsOwnings.set(nodeID, nowOwning);
        }, 20); // Mysterious bug:
        /* On the page https://explore.fast.design/components/fast-accordion
          the only rule inside the only adoptedStyleSheet of the iframe-s document
          gets changed during first milliseconds after the load.
          However, none of the documented methods (replace, insertRule) is triggered.
          The rule is not substituted (remains the same object), however the text gets changed.
        */
        function patchAdoptedStyleSheets(prototype) {
            const nativeAdoptedStyleSheetsDescriptor = Object.getOwnPropertyDescriptor(prototype, 'adoptedStyleSheets');
            if (nativeAdoptedStyleSheetsDescriptor) {
                Object.defineProperty(prototype, 'adoptedStyleSheets', Object.assign(Object.assign({}, nativeAdoptedStyleSheetsDescriptor), { set: function (value) {
                        // @ts-ignore
                        const retVal = nativeAdoptedStyleSheetsDescriptor.set.call(this, value);
                        sendAdoptedStyleSheetsUpdate(this);
                        return retVal;
                    } }));
            }
        }
        const patchContext = (context) => {
            // @ts-ignore
            if (context.__openreplay_adpss_patched__) {
                return;
            }
            else {
                // @ts-ignore
                context.__openreplay_adpss_patched__ = true;
            }
            patchAdoptedStyleSheets(context.Document.prototype);
            patchAdoptedStyleSheets(context.ShadowRoot.prototype);
            //@ts-ignore TODO: upgrade ts to 4.8+
            const { replace, replaceSync } = context.CSSStyleSheet.prototype;
            //@ts-ignore
            context.CSSStyleSheet.prototype.replace = function (text) {
                return replace.call(this, text).then((sheet) => {
                    const sheetID = styleSheetIDMap.get(this);
                    if (sheetID) {
                        app.send(AdoptedSSReplaceURLBased(sheetID, text, app.getBaseHref()));
                    }
                    return sheet;
                });
            };
            //@ts-ignore
            context.CSSStyleSheet.prototype.replaceSync = function (text) {
                const sheetID = styleSheetIDMap.get(this);
                if (sheetID) {
                    app.send(AdoptedSSReplaceURLBased(sheetID, text, app.getBaseHref()));
                }
                return replaceSync.call(this, text);
            };
        };
        patchContext(window);
        app.observer.attachContextCallback(app.safe(patchContext));
        app.attachStopCallback(() => {
            styleSheetIDMap.clear();
            adoptedStyleSheetsOwnings.clear();
        });
        // So far main Document is not triggered with nodeCallbacks
        app.attachStartCallback(() => {
            sendAdoptedStyleSheetsUpdate(document);
        });
        app.nodes.attachNodeCallback((node) => {
            if (hasAdoptedSS(node)) {
                sendAdoptedStyleSheetsUpdate(node);
            }
        });
    }

    function CSSRules (app) {
        if (app === null) {
            return;
        }
        if (!window.CSSStyleSheet) {
            app.send(TechnicalInfo('no_stylesheet_prototype_in_window', ''));
            return;
        }
        const sendInsertDeleteRule = app.safe((sheet, index, rule) => {
            const sheetID = styleSheetIDMap.get(sheet);
            if (!sheetID) {
                // OK-case. Sheet haven't been registered yet. Rules will be sent on registration.
                return;
            }
            if (typeof rule === 'string') {
                app.send(AdoptedSSInsertRuleURLBased(sheetID, rule, index, app.getBaseHref()));
            }
            else {
                app.send(AdoptedSSDeleteRule(sheetID, index));
            }
        });
        // TODO: proper rule insertion/removal (how?)
        const sendReplaceGroupingRule = app.safe((rule) => {
            let topmostRule = rule;
            while (topmostRule.parentRule) {
                topmostRule = topmostRule.parentRule;
            }
            const sheet = topmostRule.parentStyleSheet;
            if (!sheet) {
                app.debug.warn('No parent StyleSheet found for', topmostRule, rule);
                return;
            }
            const sheetID = styleSheetIDMap.get(sheet);
            if (!sheetID) {
                app.debug.warn('No sheedID found for', sheet, styleSheetIDMap);
                return;
            }
            const cssText = topmostRule.cssText;
            const ruleList = sheet.cssRules;
            const idx = Array.from(ruleList).indexOf(topmostRule);
            if (idx >= 0) {
                app.send(AdoptedSSInsertRuleURLBased(sheetID, cssText, idx, app.getBaseHref()));
                app.send(AdoptedSSDeleteRule(sheetID, idx + 1)); // Remove previous clone
            }
            else {
                app.debug.warn('Rule index not found in', sheet, topmostRule);
            }
        });
        const patchContext = app.safe((context) => {
            const { insertRule, deleteRule } = context.CSSStyleSheet.prototype;
            const { insertRule: groupInsertRule, deleteRule: groupDeleteRule } = context.CSSGroupingRule.prototype;
            context.CSSStyleSheet.prototype.insertRule = function (rule, index = 0) {
                sendInsertDeleteRule(this, index, rule);
                return insertRule.call(this, rule, index);
            };
            context.CSSStyleSheet.prototype.deleteRule = function (index) {
                sendInsertDeleteRule(this, index);
                return deleteRule.call(this, index);
            };
            context.CSSGroupingRule.prototype.insertRule = function (rule, index = 0) {
                const result = groupInsertRule.call(this, rule, index);
                sendReplaceGroupingRule(this);
                return result;
            };
            context.CSSGroupingRule.prototype.deleteRule = function (index = 0) {
                const result = groupDeleteRule.call(this, index);
                sendReplaceGroupingRule(this);
                return result;
            };
        });
        patchContext(window);
        app.observer.attachContextCallback(patchContext);
        app.nodes.attachNodeCallback((node) => {
            if (!hasTag(node, 'style') || !node.sheet) {
                return;
            }
            if (node.textContent !== null && node.textContent.trim().length > 0) {
                return; // Non-virtual styles captured by the observer as a text
            }
            const nodeID = app.nodes.getID(node);
            if (!nodeID) {
                return;
            }
            const sheet = node.sheet;
            const sheetID = nextID();
            styleSheetIDMap.set(sheet, sheetID);
            app.send(AdoptedSSAddOwner(sheetID, nodeID));
            const rules = sheet.cssRules;
            for (let i = 0; i < rules.length; i++) {
                sendInsertDeleteRule(sheet, i, rules[i].cssText);
            }
        });
    }

    function Focus (app) {
        function sendSetNodeFocus(n) {
            const id = app.nodes.getID(n);
            if (id !== undefined) {
                app.send(SetNodeFocus(id));
            }
        }
        let blurred = false;
        app.nodes.attachNodeCallback((node) => {
            if (!hasTag(node, 'body')) {
                return;
            }
            app.nodes.attachNodeListener(node, 'focus', (e) => {
                if (!isNode(e.target)) {
                    return;
                }
                sendSetNodeFocus(e.target);
                blurred = false;
            });
            app.nodes.attachNodeListener(node, 'blur', (e) => {
                if (e.relatedTarget === null) {
                    blurred = true;
                    setTimeout(() => {
                        if (blurred) {
                            app.send(SetNodeFocus(-1));
                        }
                    }, 0);
                }
            });
        });
        app.attachStartCallback(() => {
            let elem = document.activeElement;
            while (elem && hasTag(elem, 'iframe') && elem.contentDocument) {
                elem = elem.contentDocument.activeElement;
            }
            if (elem && elem !== elem.ownerDocument.body) {
                sendSetNodeFocus(elem);
            }
        }, true);
    }

    function Fonts (app) {
        if (!window.FontFace) {
            return;
        }
        const docFonts = new Map();
        const patchWindow = (wnd) => {
            class FontFaceInterceptor extends wnd.FontFace {
                constructor(...args) {
                    //maybe do this on load(). In this case check if the document.fonts.load(...) function calls the font's load()
                    if (typeof args[1] === 'string') {
                        let desc = '';
                        if (args[2]) {
                            app.safe(() => {
                                desc = JSON.stringify(args[2]);
                            });
                        }
                        const ffData = [args[0], args[1], desc];
                        const ffDataArr = docFonts.get(wnd.document) || [];
                        ffDataArr.push(ffData);
                        docFonts.set(wnd.document, ffDataArr);
                        const parentID = wnd === window ? 0 : app.nodes.getID(wnd.document);
                        if (parentID === undefined) {
                            return;
                        }
                        if (app.active()) {
                            app.send(LoadFontFace(parentID, ...ffData));
                        }
                    }
                    super(...args);
                }
            }
            wnd.FontFace = FontFaceInterceptor;
        };
        app.observer.attachContextCallback(patchWindow);
        patchWindow(window);
        app.nodes.attachNodeCallback(app.safe((node) => {
            if (!isDocument(node)) {
                return;
            }
            const ffDataArr = docFonts.get(node);
            if (!ffDataArr) {
                return;
            }
            const parentID = node.defaultView === window ? 0 : app.nodes.getID(node);
            if (parentID === undefined) {
                return;
            }
            ffDataArr.forEach((ffData) => {
                app.send(LoadFontFace(parentID, ...ffData));
            });
        }));
    }

    function axiosSpy (app, instance, opts, sanitize, stringify) {
        app.debug.log('Openreplay: attaching axios spy to instance', instance);
        function captureResponseData(axiosResponseObj) {
            app.debug.log('Openreplay: capturing axios response data', axiosResponseObj);
            const { headers: reqHs, data: reqData, method, url, baseURL } = axiosResponseObj.config;
            const { data: rData, headers: rHs, status: globStatus, response } = axiosResponseObj;
            const { data: resData, headers: resHs, status: resStatus } = response || {};
            const ihOpt = opts.ignoreHeaders;
            const isHIgnoring = Array.isArray(ihOpt) ? (name) => ihOpt.includes(name) : () => ihOpt;
            function writeHeader(hsObj, header) {
                if (!isHIgnoring(header[0])) {
                    hsObj[header[0]] = header[1];
                }
            }
            let requestHs = {};
            let responseHs = {};
            if (reqHs.toJSON) {
                requestHs = reqHs.toJSON();
            }
            else if (reqHs instanceof Headers) {
                reqHs.forEach((v, n) => writeHeader(requestHs, [n, v]));
            }
            else if (Array.isArray(reqHs)) {
                reqHs.forEach((h) => writeHeader(requestHs, h));
            }
            else if (typeof reqHs === 'object') {
                Object.entries(reqHs).forEach((h) => writeHeader(requestHs, h));
            }
            const usedResHeader = resHs ? resHs : rHs;
            if (usedResHeader.toJSON) {
                responseHs = usedResHeader.toJSON();
            }
            else if (usedResHeader instanceof Headers) {
                usedResHeader.forEach((v, n) => writeHeader(responseHs, [n, v]));
            }
            else if (Array.isArray(usedResHeader)) {
                usedResHeader.forEach((h) => writeHeader(responseHs, h));
            }
            else if (typeof usedResHeader === 'object') {
                Object.entries(usedResHeader).forEach(([n, v]) => {
                    if (!isHIgnoring(n))
                        responseHs[n] = v;
                });
            }
            const reqResInfo = sanitize({
                url,
                method: method || '',
                status: globStatus || resStatus || 0,
                request: {
                    headers: requestHs,
                    body: reqData,
                },
                response: {
                    headers: responseHs,
                    body: resData || rData,
                },
            });
            if (!reqResInfo) {
                app.debug.log('Openreplay: empty request/response info, skipping');
                return;
            }
            const requestStart = axiosResponseObj.config.__openreplay_timing;
            const duration = performance.now() - requestStart;
            app.debug.log('Openreplay: final req object', reqResInfo);
            app.send(NetworkRequest('xhr', String(method), String(reqResInfo.url), stringify(reqResInfo.request), stringify(reqResInfo.response), reqResInfo.status, requestStart + getTimeOrigin(), duration, 0));
        }
        function getStartTime(config) {
            app.debug.log('Openreplay: capturing API request', config);
            config.__openreplay_timing = performance.now();
            if (opts.sessionTokenHeader) {
                const header = typeof opts.sessionTokenHeader === 'string'
                    ? opts.sessionTokenHeader
                    : 'X-OpenReplay-Session-Token';
                const headerValue = app.getSessionToken();
                if (headerValue) {
                    config.headers.set(header, headerValue);
                }
            }
            return config;
        }
        function captureNetworkRequest(response) {
            if (opts.failuresOnly)
                return response;
            captureResponseData(response);
            return response;
        }
        function captureNetworkError(error) {
            app.debug.log('Openreplay: capturing API request error', error);
            if (isAxiosError(error) && Boolean(error.response)) {
                captureResponseData(error.response);
            }
            else if (error instanceof Error) {
                app.send(getExceptionMessage(error, []));
            }
            return Promise.reject(error);
        }
        function logRequestError(ev) {
            app.debug.log('Openreplay: failed API request, skipping', ev);
        }
        const reqInt = instance.interceptors.request.use(getStartTime, logRequestError, {
            synchronous: true,
        });
        const resInt = instance.interceptors.response.use(captureNetworkRequest, captureNetworkError, {
            synchronous: true,
        });
        app.attachStopCallback(() => {
            var _a, _b, _c, _d;
            (_b = (_a = instance.interceptors.request).eject) === null || _b === void 0 ? void 0 : _b.call(_a, reqInt);
            (_d = (_c = instance.interceptors.response).eject) === null || _d === void 0 ? void 0 : _d.call(_c, resInt);
        });
    }
    function isAxiosError(payload) {
        return isObject(payload) && payload.isAxiosError === true;
    }
    function isObject(thing) {
        return thing !== null && typeof thing === 'object';
    }

    var RequestState;
    (function (RequestState) {
        RequestState[RequestState["UNSENT"] = 0] = "UNSENT";
        RequestState[RequestState["OPENED"] = 1] = "OPENED";
        RequestState[RequestState["HEADERS_RECEIVED"] = 2] = "HEADERS_RECEIVED";
        RequestState[RequestState["LOADING"] = 3] = "LOADING";
        RequestState[RequestState["DONE"] = 4] = "DONE";
    })(RequestState || (RequestState = {}));
    /**
     * I know we're not using most of the information from this class
     * but it can be useful in the future if we will decide to display more stuff in our ui
     * */
    class NetworkMessage {
        constructor(ignoredHeaders = [], setSessionTokenHeader, sanitize) {
            this.ignoredHeaders = ignoredHeaders;
            this.setSessionTokenHeader = setSessionTokenHeader;
            this.sanitize = sanitize;
            this.id = '';
            this.name = '';
            this.method = '';
            this.url = '';
            this.status = 0;
            this.statusText = '';
            this.cancelState = 0;
            this.readyState = 0;
            this.header = {};
            this.responseType = '';
            this.requestHeader = {};
            this.responseSize = 0; // bytes
            this.responseSizeText = '';
            this.startTime = 0;
            this.endTime = 0;
            this.duration = 0;
            this.getData = {};
            this.requestData = null;
        }
        getMessage() {
            const { reqHs, resHs } = this.writeHeaders();
            const request = {
                headers: reqHs,
                body: this.method === 'GET' ? JSON.stringify(this.getData) : this.requestData,
            };
            const response = { headers: resHs, body: this.response };
            const messageInfo = this.sanitize({
                url: this.url,
                method: this.method,
                status: this.status,
                request,
                response,
            });
            return NetworkRequest(this.requestType, messageInfo.method, messageInfo.url, JSON.stringify(messageInfo.request), JSON.stringify(messageInfo.response), messageInfo.status, this.startTime + getTimeOrigin(), this.duration, this.responseSize);
        }
        writeHeaders() {
            const reqHs = {};
            Object.entries(this.requestHeader).forEach(([key, value]) => {
                if (this.isHeaderIgnored(key))
                    return;
                reqHs[key] = value;
            });
            this.setSessionTokenHeader((name, value) => {
                reqHs[name] = value;
            });
            const resHs = {};
            Object.entries(this.header).forEach(([key, value]) => {
                if (this.isHeaderIgnored(key))
                    return;
                resHs[key] = value;
            });
            return { reqHs, resHs };
        }
        isHeaderIgnored(key) {
            if (Array.isArray(this.ignoredHeaders)) {
                return this.ignoredHeaders.map((k) => k.toLowerCase()).includes(key.toLowerCase());
            }
            else {
                return this.ignoredHeaders;
            }
        }
    }

    const getStringResponseByType = (responseType, response) => {
        let result = '';
        switch (responseType) {
            case '':
            case 'text':
            case 'json':
                if (typeof response == 'string') {
                    result = response;
                }
                else if (isPureObject(response) || Array.isArray(response)) {
                    result = JSON.stringify(response);
                }
                else if (typeof response !== 'undefined') {
                    result = Object.prototype.toString.call(response);
                }
                break;
            case 'blob':
            case 'document':
            case 'arraybuffer':
            default:
                if (typeof response !== 'undefined') {
                    result = Object.prototype.toString.call(response);
                }
                break;
        }
        return result;
    };
    const genStringBody = (body) => {
        if (!body) {
            return null;
        }
        let result;
        if (typeof body === 'string') {
            if (body[0] === '{' || body[0] === '[') {
                result = body;
            }
            // 'a=1&b=2' => try to parse as query
            const arr = body.split('&');
            if (arr.length === 1) {
                // not a query, parse as original string
                result = body;
            }
            else {
                // 'a=1&b=2&c' => parse as query
                result = arr.join(',');
            }
        }
        else if (isIterable(body)) {
            // FormData or URLSearchParams or Array
            const arr = [];
            for (const [key, value] of body) {
                arr.push(`${key}=${typeof value === 'string' ? value : '[object Object]'}`);
            }
            result = arr.join(',');
        }
        else if (body instanceof Blob ||
            body instanceof ReadableStream ||
            body instanceof ArrayBuffer) {
            result = 'byte data';
        }
        else if (isPureObject(body)) {
            // overriding ArrayBufferView which is not convertable to string
            result = body;
        }
        else {
            result = `can't parse body ${typeof body}`;
        }
        return result;
    };
    const genGetDataByUrl = (url, getData = {}) => {
        if (!isPureObject(getData)) {
            getData = {};
        }
        let query = url ? url.split('?') : []; // a.php?b=c&d=?e => ['a.php', 'b=c&d=', 'e']
        query.shift(); // => ['b=c&d=', 'e']
        if (query.length > 0) {
            query = query.join('?').split('&'); // => 'b=c&d=?e' => ['b=c', 'd=?e']
            for (const q of query) {
                const kv = q.split('=');
                try {
                    getData[kv[0]] = decodeURIComponent(kv[1]);
                }
                catch (e) {
                    // "URIError: URI malformed" will be thrown when `kv[1]` contains "%", so just use raw data
                    // @issue #470
                    // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Malformed_URI
                    getData[kv[0]] = kv[1];
                }
            }
        }
        return getData;
    };
    function isPureObject(input) {
        return null !== input && typeof input === 'object';
    }
    function isIterable(value) {
        if (value === null || value === undefined) {
            return false;
        }
        return typeof Symbol !== 'undefined' && typeof value[Symbol.iterator] === 'function';
    }
    function formatByteSize(bytes) {
        if (bytes <= 0) {
            // shouldn't happen?
            return '';
        }
        if (bytes >= 1000 * 1000) {
            return (bytes / 1000 / 1000).toFixed(1) + ' MB';
        }
        if (bytes >= 1000) {
            return (bytes / 1000).toFixed(1) + ' KB';
        }
        return `${bytes}B`;
    }
    const getURL = (urlString) => {
        if (urlString.startsWith('//')) {
            const baseUrl = new URL(window.location.href);
            urlString = `${baseUrl.protocol}${urlString}`;
        }
        if (urlString.startsWith('http')) {
            return new URL(urlString);
        }
        else {
            return new URL(urlString, window.location.href);
        }
    };

    /**
     * I took inspiration in few stack exchange posts
     * and Tencent vConsole library (MIT)
     * by wrapping the XMLHttpRequest object in a Proxy
     * we can intercept the network requests
     * in not-so-hacky way
     * */
    class ResponseProxyHandler {
        constructor(resp, item) {
            this.resp = resp;
            this.item = item;
            this.mockReader();
        }
        set(target, key, value) {
            return Reflect.set(target, key, value);
        }
        get(target, key) {
            const value = Reflect.get(target, key);
            switch (key) {
                case 'arrayBuffer':
                case 'blob':
                case 'formData':
                case 'json':
                case 'text':
                    return () => {
                        this.item.responseType = key.toLowerCase();
                        // @ts-ignore
                        return value.apply(target).then((resp) => {
                            this.item.response = getStringResponseByType(this.item.responseType, resp);
                            return resp;
                        });
                    };
            }
            if (typeof value === 'function') {
                return value.bind(target);
            }
            else {
                return value;
            }
        }
        mockReader() {
            let readerReceivedValue;
            if (!this.resp.body) {
                // some browsers do not return `body` in some cases, like `OPTIONS` method
                return;
            }
            if (typeof this.resp.body.getReader !== 'function') {
                return;
            }
            const _getReader = this.resp.body.getReader;
            // @ts-ignore
            this.resp.body.getReader = () => {
                const reader = _getReader.apply(this.resp.body);
                // when readyState is already 4,
                // it's not a chunked stream, or it had already been read.
                // so should not update status.
                if (this.item.readyState === RequestState.DONE) {
                    return reader;
                }
                const _read = reader.read;
                const _cancel = reader.cancel;
                this.item.responseType = 'arraybuffer';
                // @ts-ignore
                reader.read = () => {
                    return _read.apply(reader).then((result) => {
                        if (!readerReceivedValue) {
                            // @ts-ignore
                            readerReceivedValue = new Uint8Array(result.value);
                        }
                        else {
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            const newValue = new Uint8Array(readerReceivedValue.length + result.value.length);
                            newValue.set(readerReceivedValue);
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            newValue.set(result.value, readerReceivedValue.length);
                            readerReceivedValue = newValue;
                        }
                        this.item.endTime = performance.now();
                        this.item.duration = this.item.endTime - (this.item.startTime || this.item.endTime);
                        this.item.readyState = result.done ? 4 : 3;
                        this.item.statusText = result.done ? String(this.item.status) : 'Loading';
                        this.item.responseSize = readerReceivedValue.length;
                        this.item.responseSizeText = formatByteSize(this.item.responseSize);
                        if (result.done) {
                            this.item.response = getStringResponseByType(this.item.responseType, readerReceivedValue);
                        }
                        return result;
                    });
                };
                reader.cancel = (...args) => {
                    this.item.cancelState = 2;
                    this.item.statusText = 'Cancel';
                    this.item.endTime = performance.now();
                    this.item.duration = this.item.endTime - (this.item.startTime || this.item.endTime);
                    this.item.response = getStringResponseByType(this.item.responseType, readerReceivedValue);
                    return _cancel.apply(reader, args);
                };
                return reader;
            };
        }
    }
    class FetchProxyHandler {
        constructor(ignoredHeaders, setSessionTokenHeader, sanitize, sendMessage, isServiceUrl, tokenUrlMatcher) {
            this.ignoredHeaders = ignoredHeaders;
            this.setSessionTokenHeader = setSessionTokenHeader;
            this.sanitize = sanitize;
            this.sendMessage = sendMessage;
            this.isServiceUrl = isServiceUrl;
            this.tokenUrlMatcher = tokenUrlMatcher;
        }
        apply(target, _, argsList) {
            const input = argsList[0];
            const init = argsList[1];
            // @ts-ignore
            if (!(input === null || input === void 0 ? void 0 : input.url) && !input)
                return target.apply(window, argsList);
            const isORUrl = input instanceof URL || typeof input === 'string'
                ? this.isServiceUrl(String(input))
                : this.isServiceUrl(String(input.url));
            if (isORUrl) {
                return target.apply(window, argsList);
            }
            const item = new NetworkMessage(this.ignoredHeaders, this.setSessionTokenHeader, this.sanitize);
            this.beforeFetch(item, input, init);
            this.setSessionTokenHeader((name, value) => {
                if (this.tokenUrlMatcher !== undefined) {
                    if (!this.tokenUrlMatcher(item.url)) {
                        return;
                    }
                }
                if (argsList[1] === undefined && argsList[0] instanceof Request) {
                    return argsList[0].headers.append(name, value);
                }
                else {
                    if (!argsList[1])
                        argsList[1] = {};
                    if (argsList[1].headers === undefined) {
                        argsList[1] = Object.assign(Object.assign({}, argsList[1]), { headers: {} });
                    }
                    if (argsList[1].headers instanceof Headers) {
                        argsList[1].headers.append(name, value);
                    }
                    else if (Array.isArray(argsList[1].headers)) {
                        argsList[1].headers.push([name, value]);
                    }
                    else {
                        // @ts-ignore
                        argsList[1].headers[name] = value;
                    }
                }
            });
            return target.apply(window, argsList)
                .then(this.afterFetch(item))
                .catch((e) => {
                // mock finally
                item.endTime = performance.now();
                item.duration = item.endTime - (item.startTime || item.endTime);
                throw e;
            });
        }
        beforeFetch(item, input, init) {
            let url, method = 'GET', requestHeader = {};
            // handle `input` content
            if (typeof input === 'string') {
                // when `input` is a string
                method = (init === null || init === void 0 ? void 0 : init.method) || 'GET';
                url = getURL(input);
                requestHeader = (init === null || init === void 0 ? void 0 : init.headers) || {};
            }
            else {
                // when `input` is a `Request` object
                method = input.method || 'GET';
                url = getURL(input.url);
                requestHeader = input.headers;
            }
            item.method = method;
            item.requestType = 'fetch';
            item.requestHeader = requestHeader;
            item.url = url.toString();
            item.name = (url.pathname.split('/').pop() || '') + url.search;
            item.status = 0;
            item.statusText = 'Pending';
            item.readyState = 1;
            if (!item.startTime) {
                // UNSENT
                item.startTime = performance.now();
            }
            if (Object.prototype.toString.call(requestHeader) === '[object Headers]') {
                item.requestHeader = {};
                for (const [key, value] of requestHeader) {
                    item.requestHeader[key] = value;
                }
            }
            else {
                item.requestHeader = requestHeader;
            }
            // save GET data
            if (url.search && url.searchParams) {
                item.getData = {};
                for (const [key, value] of url.searchParams) {
                    item.getData[key] = value;
                }
            }
            // save POST data
            if (init === null || init === void 0 ? void 0 : init.body) {
                item.requestData = genStringBody(init.body);
            }
        }
        afterFetch(item) {
            return (resp) => {
                item.endTime = performance.now();
                item.duration = item.endTime - (item.startTime || item.endTime);
                item.status = resp.status;
                item.statusText = String(resp.status);
                let isChunked = false;
                item.header = {};
                for (const [key, value] of resp.headers) {
                    item.header[key] = value;
                    isChunked = value.toLowerCase().indexOf('chunked') > -1 ? true : isChunked;
                }
                if (isChunked) {
                    // when `transfer-encoding` is chunked, the response is a stream which is under loading,
                    // so the `readyState` should be 3 (Loading),
                    // and the response should NOT be `clone()` which will affect stream reading.
                    item.readyState = 3;
                }
                else {
                    // Otherwise, not chunked, the response is not a stream,
                    // so it's completed and can be cloned for `text()` calling.
                    item.readyState = 4;
                    void this.handleResponseBody(resp.clone(), item).then((responseValue) => {
                        item.responseSize =
                            typeof responseValue === 'string' ? responseValue.length : responseValue.byteLength;
                        item.responseSizeText = formatByteSize(item.responseSize);
                        item.response = getStringResponseByType(item.responseType, responseValue);
                        this.sendMessage(item.getMessage());
                    });
                }
                return new Proxy(resp, new ResponseProxyHandler(resp, item));
            };
        }
        handleResponseBody(resp, item) {
            // parse response body by Content-Type
            const contentType = resp.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                item.responseType = 'json';
                return resp.text();
            }
            else if (contentType &&
                (contentType.includes('text/html') || contentType.includes('text/plain'))) {
                item.responseType = 'text';
                return resp.text();
            }
            else {
                item.responseType = 'arraybuffer';
                return resp.arrayBuffer();
            }
        }
    }
    class FetchProxy {
        static create(ignoredHeaders, setSessionTokenHeader, sanitize, sendMessage, isServiceUrl, tokenUrlMatcher) {
            return new Proxy(fetch, new FetchProxyHandler(ignoredHeaders, setSessionTokenHeader, sanitize, sendMessage, isServiceUrl, tokenUrlMatcher));
        }
    }

    /**
     * I took inspiration in few stack exchange posts
     * and Tencent vConsole library (MIT)
     * by wrapping the XMLHttpRequest object in a Proxy
     * we can intercept the network requests
     * in not-so-hacky way
     * */
    class XHRProxyHandler {
        constructor(XMLReq, ignoredHeaders, setSessionTokenHeader, sanitize, sendMessage, isServiceUrl, tokenUrlMatcher) {
            this.ignoredHeaders = ignoredHeaders;
            this.setSessionTokenHeader = setSessionTokenHeader;
            this.sanitize = sanitize;
            this.sendMessage = sendMessage;
            this.isServiceUrl = isServiceUrl;
            this.tokenUrlMatcher = tokenUrlMatcher;
            this.XMLReq = XMLReq;
            this.XMLReq.onreadystatechange = () => {
                this.onReadyStateChange();
            };
            this.XMLReq.onabort = () => {
                this.onAbort();
            };
            this.XMLReq.ontimeout = () => {
                this.onTimeout();
            };
            this.item = new NetworkMessage(ignoredHeaders, setSessionTokenHeader, sanitize);
            this.item.requestType = 'xhr';
        }
        get(target, key) {
            switch (key) {
                case 'open':
                    return this.getOpen(target);
                case 'send':
                    this.setSessionTokenHeader((name, value) => {
                        if (this.tokenUrlMatcher !== undefined) {
                            if (!this.tokenUrlMatcher(this.item.url)) {
                                return;
                            }
                        }
                        target.setRequestHeader(name, value);
                    });
                    return this.getSend(target);
                case 'setRequestHeader':
                    return this.getSetRequestHeader(target);
                default:
                    // eslint-disable-next-line no-case-declarations
                    const value = Reflect.get(target, key);
                    if (typeof value === 'function') {
                        return value.bind(target);
                    }
                    else {
                        return value;
                    }
            }
        }
        set(target, key, value) {
            switch (key) {
                case 'onreadystatechange':
                    return this.setOnReadyStateChange(target, key, value);
                case 'onabort':
                    return this.setOnAbort(target, key, value);
                case 'ontimeout':
                    return this.setOnTimeout(target, key, value);
                // not tracked methods
            }
            return Reflect.set(target, key, value);
        }
        onReadyStateChange() {
            if (this.item.url && this.isServiceUrl(this.item.url))
                return;
            this.item.readyState = this.XMLReq.readyState;
            this.item.responseType = this.XMLReq.responseType;
            this.item.endTime = performance.now();
            this.item.duration = this.item.endTime - this.item.startTime;
            this.updateItemByReadyState();
            setTimeout(() => {
                this.item.response = getStringResponseByType(this.item.responseType, this.item.response);
            }, 0);
            if (this.XMLReq.readyState === RequestState.DONE) {
                this.sendMessage(this.item.getMessage());
            }
        }
        onAbort() {
            this.item.cancelState = 1;
            this.item.statusText = 'Abort';
            this.sendMessage(this.item.getMessage());
        }
        onTimeout() {
            this.item.cancelState = 3;
            this.item.statusText = 'Timeout';
            this.sendMessage(this.item.getMessage());
        }
        getOpen(target) {
            const targetFunction = Reflect.get(target, 'open');
            return (...args) => {
                const method = args[0];
                const url = args[1];
                this.item.method = method ? method.toUpperCase() : 'GET';
                this.item.url = url || '';
                this.item.name = this.item.url.replace(new RegExp('/*$'), '').split('/').pop() || '';
                this.item.getData = genGetDataByUrl(this.item.url, {});
                return targetFunction.apply(target, args);
            };
        }
        getSend(target) {
            const targetFunction = Reflect.get(target, 'send');
            return (...args) => {
                const data = args[0];
                this.item.requestData = genStringBody(data);
                return targetFunction.apply(target, args);
            };
        }
        getSetRequestHeader(target) {
            const targetFunction = Reflect.get(target, 'setRequestHeader');
            return (...args) => {
                if (!this.item.requestHeader) {
                    this.item.requestHeader = {};
                }
                // @ts-ignore
                this.item.requestHeader[args[0]] = args[1];
                return targetFunction.apply(target, args);
            };
        }
        setOnReadyStateChange(target, key, orscFunction) {
            return Reflect.set(target, key, (...args) => {
                this.onReadyStateChange();
                orscFunction.apply(target, args);
            });
        }
        setOnAbort(target, key, oaFunction) {
            return Reflect.set(target, key, (...args) => {
                this.onAbort();
                oaFunction.apply(target, args);
            });
        }
        setOnTimeout(target, key, otFunction) {
            return Reflect.set(target, key, (...args) => {
                this.onTimeout();
                otFunction.apply(target, args);
            });
        }
        /**
         * Update item's properties according to readyState.
         */
        updateItemByReadyState() {
            switch (this.XMLReq.readyState) {
                case RequestState.UNSENT:
                case RequestState.OPENED:
                    this.item.status = RequestState.UNSENT;
                    this.item.statusText = 'Pending';
                    if (!this.item.startTime) {
                        this.item.startTime = performance.now();
                    }
                    break;
                case RequestState.HEADERS_RECEIVED:
                    this.item.status = this.XMLReq.status;
                    this.item.statusText = 'Loading';
                    this.item.header = {};
                    // eslint-disable-next-line no-case-declarations
                    const header = this.XMLReq.getAllResponseHeaders() || '', headerArr = header.split('\n');
                    // extract plain text to key-value format
                    for (let i = 0; i < headerArr.length; i++) {
                        const line = headerArr[i];
                        if (!line) {
                            continue;
                        }
                        const arr = line.split(': ');
                        const key = arr[0];
                        this.item.header[key] = arr.slice(1).join(': ');
                    }
                    break;
                case RequestState.LOADING:
                    this.item.status = this.XMLReq.status;
                    this.item.statusText = 'Loading';
                    if (!!this.XMLReq.response && this.XMLReq.response.length) {
                        this.item.responseSize = this.XMLReq.response.length;
                        this.item.responseSizeText = formatByteSize(this.item.responseSize);
                    }
                    break;
                case RequestState.DONE:
                    // `XMLReq.abort()` will change `status` from 200 to 0, so use previous value in this case
                    this.item.status = this.XMLReq.status || this.item.status || 0;
                    // show status code when request completed
                    this.item.statusText = String(this.item.status);
                    this.item.endTime = performance.now();
                    this.item.duration = this.item.endTime - (this.item.startTime || this.item.endTime);
                    this.item.response = this.XMLReq.response;
                    if (!!this.XMLReq.response && this.XMLReq.response.length) {
                        this.item.responseSize = this.XMLReq.response.length;
                        this.item.responseSizeText = formatByteSize(this.item.responseSize);
                    }
                    break;
                default:
                    this.item.status = this.XMLReq.status;
                    this.item.statusText = 'Unknown';
                    break;
            }
        }
    }
    class XHRProxy {
        static create(ignoredHeaders, setSessionTokenHeader, sanitize, sendMessage, isServiceUrl, tokenUrlMatcher) {
            return new Proxy(XMLHttpRequest, {
                construct(original) {
                    const XMLReq = new original();
                    return new Proxy(XMLReq, new XHRProxyHandler(XMLReq, ignoredHeaders, setSessionTokenHeader, sanitize, sendMessage, isServiceUrl, tokenUrlMatcher));
                },
            });
        }
    }

    var _a;
    // https://fetch.spec.whatwg.org/#concept-bodyinit-extract
    const getContentType = (data) => {
        if (data instanceof Blob) {
            return data.type;
        }
        if (data instanceof FormData) {
            return 'multipart/form-data';
        }
        if (data instanceof URLSearchParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        return 'text/plain;charset=UTF-8';
    };
    class BeaconProxyHandler {
        constructor(ignoredHeaders, setSessionTokenHeader, sanitize, sendMessage, isServiceUrl) {
            this.ignoredHeaders = ignoredHeaders;
            this.setSessionTokenHeader = setSessionTokenHeader;
            this.sanitize = sanitize;
            this.sendMessage = sendMessage;
            this.isServiceUrl = isServiceUrl;
        }
        apply(target, thisArg, argsList) {
            const urlString = argsList[0];
            const data = argsList[1];
            const item = new NetworkMessage(this.ignoredHeaders, this.setSessionTokenHeader, this.sanitize);
            if (this.isServiceUrl(urlString)) {
                return target.apply(thisArg, argsList);
            }
            const url = getURL(urlString);
            item.method = 'POST';
            item.url = urlString;
            item.name = (url.pathname.split('/').pop() || '') + url.search;
            item.requestType = 'beacon';
            item.requestHeader = { 'Content-Type': getContentType(data) };
            item.status = 0;
            item.statusText = 'Pending';
            if (url.search && url.searchParams) {
                item.getData = {};
                for (const [key, value] of url.searchParams) {
                    item.getData[key] = value;
                }
            }
            item.requestData = genStringBody(data);
            if (!item.startTime) {
                item.startTime = performance.now();
            }
            const isSuccess = target.apply(thisArg, argsList);
            if (isSuccess) {
                item.endTime = performance.now();
                item.duration = item.endTime - (item.startTime || item.endTime);
                item.status = 0;
                item.statusText = 'Sent';
                item.readyState = 4;
            }
            else {
                item.status = 500;
                item.statusText = 'Unknown';
            }
            this.sendMessage(item.getMessage());
            return isSuccess;
        }
    }
    class BeaconProxy {
        static hasSendBeacon() {
            return !!BeaconProxy.origSendBeacon;
        }
        static create(ignoredHeaders, setSessionTokenHeader, sanitize, sendMessage, isServiceUrl) {
            if (!BeaconProxy.hasSendBeacon()) {
                return undefined;
            }
            return new Proxy(BeaconProxy.origSendBeacon, new BeaconProxyHandler(ignoredHeaders, setSessionTokenHeader, sanitize, sendMessage, isServiceUrl));
        }
    }
    BeaconProxy.origSendBeacon = (_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.sendBeacon;

    const getWarning = (api) => console.warn(`Openreplay: Can't find ${api} in global context. 
If you're using serverside rendering in your app, make sure that tracker is loaded dynamically, otherwise ${api} won't be tracked.`);
    function setProxy(context, ignoredHeaders, setSessionTokenHeader, sanitize, sendMessage, isServiceUrl, tokenUrlMatcher) {
        var _a;
        if (context.XMLHttpRequest) {
            context.XMLHttpRequest = XHRProxy.create(ignoredHeaders, setSessionTokenHeader, sanitize, sendMessage, isServiceUrl, tokenUrlMatcher);
        }
        else {
            getWarning('XMLHttpRequest');
        }
        if (context.fetch) {
            context.fetch = FetchProxy.create(ignoredHeaders, setSessionTokenHeader, sanitize, sendMessage, isServiceUrl, tokenUrlMatcher);
        }
        else {
            getWarning('fetch');
        }
        if ((_a = context === null || context === void 0 ? void 0 : context.navigator) === null || _a === void 0 ? void 0 : _a.sendBeacon) {
            context.navigator.sendBeacon = BeaconProxy.create(ignoredHeaders, setSessionTokenHeader, sanitize, sendMessage, isServiceUrl);
        }
    }

    function getXHRRequestDataObject(xhr) {
        // @ts-ignore  this is 3x faster than using Map<XHR, XHRRequestData>
        if (!xhr.__or_req_data__) {
            // @ts-ignore
            xhr.__or_req_data__ = { body: undefined, headers: {} };
        }
        // @ts-ignore
        return xhr.__or_req_data__;
    }
    function strMethod(method) {
        return typeof method === 'string' ? method.toUpperCase() : 'GET';
    }
    function Network (app, opts = {}) {
        const options = Object.assign({
            failuresOnly: false,
            ignoreHeaders: ['cookie', 'set-cookie', 'authorization'],
            capturePayload: false,
            sessionTokenHeader: false,
            captureInIframes: true,
            axiosInstances: undefined,
            useProxy: true,
        }, opts);
        if (options.useProxy === false) {
            app.debug.warn('Network module is migrating to proxy api, to gradually migrate and test it set useProxy to true');
        }
        const ignoreHeaders = options.ignoreHeaders;
        const isHIgnored = Array.isArray(ignoreHeaders)
            ? (name) => ignoreHeaders.includes(name)
            : () => ignoreHeaders;
        const stHeader = options.sessionTokenHeader === true ? 'X-OpenReplay-SessionToken' : options.sessionTokenHeader;
        function setSessionTokenHeader(setRequestHeader) {
            if (stHeader) {
                const sessionToken = app.getSessionToken();
                if (sessionToken) {
                    app.safe(setRequestHeader)(stHeader, sessionToken);
                }
            }
        }
        function sanitize(reqResInfo) {
            if (!options.capturePayload) {
                // @ts-ignore
                delete reqResInfo.request.body;
                delete reqResInfo.response.body;
            }
            if (options.sanitizer) {
                const resBody = reqResInfo.response.body;
                if (typeof resBody === 'string') {
                    // Parse response in order to have handy view in sanitization function
                    try {
                        reqResInfo.response.body = JSON.parse(resBody);
                    }
                    catch (_a) { }
                }
                return options.sanitizer(reqResInfo);
            }
            return reqResInfo;
        }
        function stringify(r) {
            if (r && typeof r.body !== 'string') {
                try {
                    r.body = JSON.stringify(r.body);
                }
                catch (_a) {
                    r.body = '<unable to stringify>';
                    app.notify.warn("Openreplay fetch couldn't stringify body:", r.body);
                }
            }
            return JSON.stringify(r);
        }
        const patchWindow = (context) => {
            /* ====== modern way ====== */
            if (options.useProxy) {
                return setProxy(context, options.ignoreHeaders, setSessionTokenHeader, sanitize, (message) => app.send(message), (url) => app.isServiceURL(url), options.tokenUrlMatcher);
            }
            /* ====== Fetch ====== */
            const origFetch = context.fetch.bind(context);
            const trackFetch = (input, init = {}) => {
                if (!(typeof input === 'string' || input instanceof URL) || app.isServiceURL(String(input))) {
                    return origFetch(input, init);
                }
                setSessionTokenHeader(function (name, value) {
                    if (init.headers === undefined) {
                        init.headers = {};
                    }
                    if (init.headers instanceof Headers) {
                        init.headers.append(name, value);
                    }
                    else if (Array.isArray(init.headers)) {
                        init.headers.push([name, value]);
                    }
                    else {
                        init.headers[name] = value;
                    }
                });
                const startTime = performance.now();
                return origFetch(input, init).then((response) => {
                    const duration = performance.now() - startTime;
                    if (options.failuresOnly && response.status < 400) {
                        return response;
                    }
                    const r = response.clone();
                    r.text()
                        .then((text) => {
                        const reqHs = {};
                        const resHs = {};
                        if (ignoreHeaders !== true) {
                            // request headers
                            const writeReqHeader = ([n, v]) => {
                                if (!isHIgnored(n)) {
                                    reqHs[n] = v;
                                }
                            };
                            if (init.headers instanceof Headers) {
                                init.headers.forEach((v, n) => writeReqHeader([n, v]));
                            }
                            else if (Array.isArray(init.headers)) {
                                init.headers.forEach(writeReqHeader);
                            }
                            else if (typeof init.headers === 'object') {
                                Object.entries(init.headers).forEach(writeReqHeader);
                            }
                            // response headers
                            r.headers.forEach((v, n) => {
                                if (!isHIgnored(n))
                                    resHs[n] = v;
                            });
                        }
                        const method = strMethod(init.method);
                        const reqResInfo = sanitize({
                            url: String(input),
                            method,
                            status: r.status,
                            request: {
                                headers: reqHs,
                                // @ts-ignore
                                body: init.body || null,
                            },
                            response: {
                                headers: resHs,
                                body: text,
                            },
                        });
                        if (!reqResInfo) {
                            return;
                        }
                        app.send(NetworkRequest('fetch', method, String(reqResInfo.url), stringify(reqResInfo.request), stringify(reqResInfo.response), r.status, startTime + getTimeOrigin(), duration, 0));
                    })
                        .catch((e) => app.debug.error('Could not process Fetch response:', e));
                    return response;
                });
            };
            // @ts-ignore
            context.fetch = trackFetch;
            /* ====== <> ====== */
            /* ====== XHR ====== */
            const nativeOpen = context.XMLHttpRequest.prototype.open;
            const nativeSetRequestHeader = context.XMLHttpRequest.prototype.setRequestHeader;
            const nativeSend = context.XMLHttpRequest.prototype.send;
            function trackXMLHttpReqOpen(initMethod, url) {
                const xhr = this;
                setSessionTokenHeader((name, value) => xhr.setRequestHeader(name, value));
                let startTime = 0;
                xhr.addEventListener('loadstart', (e) => {
                    startTime = e.timeStamp;
                });
                xhr.addEventListener('load', app.safe((e) => {
                    const { headers: reqHs, body: reqBody } = getXHRRequestDataObject(xhr);
                    const duration = startTime > 0 ? e.timeStamp - startTime : 0;
                    const hString = xhr.getAllResponseHeaders() || ''; // might be null (only if no response received though)
                    const headersArr = hString.trim().split(/[\r\n]+/);
                    const headerMap = {};
                    headersArr.forEach(function (line) {
                        const parts = line.split(': ');
                        const header = parts.shift();
                        if (!isHIgnored(header)) {
                            headerMap[header] = parts.join(': ');
                        }
                    });
                    const method = strMethod(initMethod);
                    const reqResInfo = sanitize({
                        url: String(url),
                        method,
                        status: xhr.status,
                        request: {
                            headers: reqHs,
                            // @ts-ignore
                            body: reqBody || null,
                        },
                        response: {
                            headers: headerMap,
                            body: xhr.response,
                        },
                    });
                    if (!reqResInfo) {
                        return;
                    }
                    app.send(NetworkRequest('xhr', method, String(reqResInfo.url), stringify(reqResInfo.request), stringify(reqResInfo.response), xhr.status, startTime + getTimeOrigin(), duration, 0));
                }));
                //TODO: handle error (though it has no Error API nor any useful information)
                //xhr.addEventListener('error', (e) => {})
                return nativeOpen.apply(this, arguments);
            }
            function trackXHRSend(body) {
                const rdo = getXHRRequestDataObject(this);
                rdo.body = body;
                // @ts-ignore ??? this -> XMLHttpRequest
                return nativeSend.apply(this, arguments);
            }
            function trackSetReqHeader(name, value) {
                if (!isHIgnored(name)) {
                    const rdo = getXHRRequestDataObject(this);
                    rdo.headers[name] = value;
                }
                return nativeSetRequestHeader.apply(this, arguments);
            }
            if (!options.axiosInstances) {
                context.XMLHttpRequest.prototype.open = trackXMLHttpReqOpen;
                context.XMLHttpRequest.prototype.send = trackXHRSend;
                context.XMLHttpRequest.prototype.setRequestHeader = trackSetReqHeader;
            }
            /* ====== <> ====== */
        };
        patchWindow(window);
        if (options.axiosInstances) {
            options.axiosInstances.forEach((axiosInstance) => {
                axiosSpy(app, axiosInstance, options, sanitize, stringify);
            });
        }
        if (options.captureInIframes) {
            app.observer.attachContextCallback(app.safe(patchWindow));
        }
    }

    function selection(app) {
        app.attachEventListener(document, 'selectionchange', () => {
            const selection = document.getSelection();
            if (selection !== null && !selection.isCollapsed) {
                const selectionStart = app.nodes.getID(selection.anchorNode);
                const selectionEnd = app.nodes.getID(selection.focusNode);
                const selectedText = selection.toString().replace(/\s+/g, ' ');
                if (selectionStart && selectionEnd) {
                    app.send(SelectionChange(selectionStart, selectionEnd, selectedText));
                }
            }
            else {
                app.send(SelectionChange(-1, -1, ''));
            }
        });
    }
    /** TODO: research how to get all in-between nodes inside selection range
     *        including nodes between anchor and focus nodes and their children
     *        without recursively searching the dom tree
     */
    // if (selection.rangeCount) {
    //   const nodes = [];
    //   for (let i = 0; i < selection.rangeCount; i++) {
    //     const range = selection.getRangeAt(i);
    //     let node: Node | null = range.startContainer;
    //     while (node) {
    //       nodes.push(node);
    //       if (node === range.endContainer) break;
    //       node = node.nextSibling;
    //     }
    //   }
    //   // send selected nodes
    // }

    function Tabs (app) {
        function changeTab() {
            if (!document.hidden) {
                app.debug.log('Openreplay: tab change to' + app.session.getTabId());
                app.send(TabChange(app.session.getTabId()));
            }
        }
        app.attachEventListener(window, 'focus', changeTab, false, false);
    }

    var __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    class FeatureFlags {
        constructor(app) {
            this.app = app;
            this.flags = [];
            this.storageKey = '__openreplay_flags';
            const persistFlags = this.app.sessionStorage.getItem(this.storageKey);
            if (persistFlags) {
                const persistFlagsStrArr = persistFlags.split(';').filter(Boolean);
                this.flags = persistFlagsStrArr.map((flag) => JSON.parse(flag));
            }
        }
        getFeatureFlag(flagName) {
            return this.flags.find((flag) => flag.key === flagName);
        }
        isFlagEnabled(flagName) {
            return this.flags.findIndex((flag) => flag.key === flagName) !== -1;
        }
        onFlagsLoad(cb) {
            this.onFlagsCb = cb;
        }
        reloadFlags() {
            return __awaiter(this, void 0, void 0, function* () {
                const persistFlagsStr = this.app.sessionStorage.getItem(this.storageKey);
                const persistFlags = {};
                if (persistFlagsStr) {
                    const persistArray = persistFlagsStr.split(';').filter(Boolean);
                    persistArray.forEach((flag) => {
                        const flagObj = JSON.parse(flag);
                        persistFlags[flagObj.key] = { key: flagObj.key, value: flagObj.value };
                    });
                }
                const sessionInfo = this.app.session.getInfo();
                const userInfo = this.app.session.userInfo;
                const requestObject = {
                    projectID: sessionInfo.projectID,
                    userID: sessionInfo.userID,
                    metadata: sessionInfo.metadata,
                    referrer: document.referrer,
                    os: userInfo.userOS,
                    device: userInfo.userDevice,
                    country: userInfo.userCountry,
                    state: userInfo.userState,
                    city: userInfo.userCity,
                    browser: userInfo.userBrowser,
                    persistFlags: persistFlags,
                };
                const resp = yield fetch(this.app.options.ingestPoint + '/v1/web/feature-flags', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${this.app.session.getSessionToken()}`,
                    },
                    body: JSON.stringify(requestObject),
                });
                if (resp.status === 200) {
                    const data = yield resp.json();
                    return this.handleFlags(data.flags);
                }
            });
        }
        handleFlags(flags) {
            var _a;
            const persistFlags = [];
            flags.forEach((flag) => {
                if (flag.is_persist)
                    persistFlags.push(flag);
            });
            let str = '';
            const uniquePersistFlags = this.diffPersist(persistFlags);
            uniquePersistFlags.forEach((flag) => {
                str += `${JSON.stringify(flag)};`;
            });
            this.app.sessionStorage.setItem(this.storageKey, str);
            this.flags = flags;
            return (_a = this.onFlagsCb) === null || _a === void 0 ? void 0 : _a.call(this, flags);
        }
        clearPersistFlags() {
            this.app.sessionStorage.removeItem(this.storageKey);
        }
        diffPersist(flags) {
            const persistFlags = this.app.sessionStorage.getItem(this.storageKey);
            if (!persistFlags)
                return flags;
            const persistFlagsStrArr = persistFlags.split(';').filter(Boolean);
            const persistFlagsArr = persistFlagsStrArr.map((flag) => JSON.parse(flag));
            return flags.filter((flag) => persistFlagsArr.findIndex((pf) => pf.key === flag.key) === -1);
        }
    }

    const DOCS_SETUP = '/installation/javascript-sdk';
    function processOptions(obj) {
        if (obj == null) {
            console.error(`OpenReplay: invalid options argument type. Please, check documentation on ${DOCS_HOST}${DOCS_SETUP}`);
            return false;
        }
        if (typeof obj.projectKey !== 'string') {
            if (typeof obj.projectKey !== 'number') {
                if (typeof obj.projectID !== 'number') {
                    // Back compatability
                    console.error(`OpenReplay: projectKey is missing or wrong type (string is expected). Please, check ${DOCS_HOST}${DOCS_SETUP} for more information.`);
                    return false;
                }
                else {
                    obj.projectKey = obj.projectID.toString();
                    deprecationWarn('`projectID` option', '`projectKey` option', DOCS_SETUP);
                }
            }
            else {
                console.warn('OpenReplay: projectKey is expected to have a string type.');
                obj.projectKey = obj.projectKey.toString();
            }
        }
        if (obj.sessionToken != null) {
            deprecationWarn('`sessionToken` option', '`sessionHash` start() option', '/');
        }
        return true;
    }
    class API {
        constructor(options) {
            this.options = options;
            this.app = null;
            this.handleError = (e, metadata = {}) => {
                if (this.app === null) {
                    return;
                }
                if (e instanceof Error) {
                    const msg = getExceptionMessage(e, [], metadata);
                    this.app.send(msg);
                }
                else if (e instanceof ErrorEvent ||
                    ('PromiseRejectionEvent' in window && e instanceof PromiseRejectionEvent)) {
                    const msg = getExceptionMessageFromEvent(e, undefined, metadata);
                    if (msg != null) {
                        this.app.send(msg);
                    }
                }
            };
            if (!IN_BROWSER || !processOptions(options)) {
                return;
            }
            if (window.__OPENREPLAY__) {
                console.error('OpenReplay: one tracker instance has been initialised already');
                return;
            }
            if (!options.__DISABLE_SECURE_MODE && location.protocol !== 'https:') {
                console.error('OpenReplay: Your website must be publicly accessible and running on SSL in order for OpenReplay to properly capture and replay the user session. You can disable this check by setting `__DISABLE_SECURE_MODE` option to `true` if you are testing in localhost. Keep in mind, that asset files on a local machine are not available to the outside world. This might affect tracking if you use css files.');
                return;
            }
            const doNotTrack = options.respectDoNotTrack &&
                (navigator.doNotTrack == '1' ||
                    // @ts-ignore
                    window.doNotTrack == '1');
            const app = (this.app =
                doNotTrack ||
                    !('Map' in window) ||
                    !('Set' in window) ||
                    !('MutationObserver' in window) ||
                    !('performance' in window) ||
                    !('timing' in performance) ||
                    !('startsWith' in String.prototype) ||
                    !('Blob' in window) ||
                    !('Worker' in window)
                    ? null
                    : new App(options.projectKey, options.sessionToken, options));
            if (app !== null) {
                Viewport(app);
                CSSRules(app);
                ConstructedStyleSheets(app);
                Connection(app);
                Console(app, options);
                Exception(app, options);
                Img(app);
                Input(app, options);
                Mouse(app, options.mouse);
                Timing(app, options);
                Performance(app, options);
                Scroll(app);
                Focus(app);
                Fonts(app);
                Network(app, options.network);
                selection(app);
                Tabs(app);
                this.featureFlags = new FeatureFlags(app);
                window.__OPENREPLAY__ = this;
                app.attachStartCallback(() => {
                    var _a;
                    if ((_a = options.flags) === null || _a === void 0 ? void 0 : _a.onFlagsLoad) {
                        this.onFlagsLoad(options.flags.onFlagsLoad);
                    }
                    void this.featureFlags.reloadFlags();
                });
                const wOpen = window.open;
                if (options.autoResetOnWindowOpen || options.resetTabOnWindowOpen) {
                    app.attachStartCallback(() => {
                        var _a;
                        const tabId = app.getTabId();
                        const sessStorage = (_a = app.sessionStorage) !== null && _a !== void 0 ? _a : window.sessionStorage;
                        // @ts-ignore ?
                        window.open = function (...args) {
                            if (options.autoResetOnWindowOpen) {
                                app.resetNextPageSession(true);
                            }
                            if (options.resetTabOnWindowOpen) {
                                sessStorage.removeItem(options.session_tabid_key || '__openreplay_tabid');
                            }
                            wOpen.call(window, ...args);
                            app.resetNextPageSession(false);
                            sessStorage.setItem(options.session_tabid_key || '__openreplay_tabid', tabId);
                        };
                    });
                    app.attachStopCallback(() => {
                        window.open = wOpen;
                    });
                }
            }
            else {
                console.log("OpenReplay: browser doesn't support API required for tracking or doNotTrack is set to 1.");
                const req = new XMLHttpRequest();
                const orig = options.ingestPoint || DEFAULT_INGEST_POINT;
                req.open('POST', orig + '/v1/web/not-started');
                // no-cors issue only with text/plain or not-set Content-Type
                // req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                req.send(JSON.stringify({
                    trackerVersion: '10.0.3',
                    projectKey: options.projectKey,
                    doNotTrack,
                    // TODO: add precise reason (an exact API missing)
                }));
            }
        }
        isFlagEnabled(flagName) {
            return this.featureFlags.isFlagEnabled(flagName);
        }
        onFlagsLoad(callback) {
            this.featureFlags.onFlagsLoad(callback);
        }
        clearPersistFlags() {
            this.featureFlags.clearPersistFlags();
        }
        reloadFlags() {
            return this.featureFlags.reloadFlags();
        }
        getFeatureFlag(flagName) {
            return this.featureFlags.getFeatureFlag(flagName);
        }
        getAllFeatureFlags() {
            return this.featureFlags.flags;
        }
        use(fn) {
            return fn(this.app, this.options);
        }
        isActive() {
            if (this.app === null) {
                return false;
            }
            return this.app.active();
        }
        start(startOpts) {
            if (!IN_BROWSER) {
                console.error(`OpenReplay: you are trying to start Tracker on a node.js environment. If you want to use OpenReplay with SSR, please, use componentDidMount or useEffect API for placing the \`tracker.start()\` line. Check documentation on ${DOCS_HOST}${DOCS_SETUP}`);
                return Promise.reject('Trying to start not in browser.');
            }
            if (this.app === null) {
                return Promise.reject("Browser doesn't support required api, or doNotTrack is active.");
            }
            // TODO: check argument type
            return this.app.start(startOpts);
        }
        stop() {
            if (this.app === null) {
                return;
            }
            this.app.stop();
            return this.app.session.getSessionHash();
        }
        forceFlushBatch() {
            if (this.app === null) {
                return;
            }
            this.app.forceFlushBatch();
        }
        getSessionToken() {
            if (this.app === null) {
                return null;
            }
            return this.app.getSessionToken();
        }
        getSessionID() {
            if (this.app === null) {
                return null;
            }
            return this.app.getSessionID();
        }
        getTabId() {
            if (this.app === null) {
                return null;
            }
            return this.app.getTabId();
        }
        sessionID() {
            deprecationWarn("'sessionID' method", "'getSessionID' method", '/');
            return this.getSessionID();
        }
        getSessionURL(options) {
            if (this.app === null) {
                return undefined;
            }
            return this.app.getSessionURL(options);
        }
        setUserID(id) {
            if (typeof id === 'string' && this.app !== null) {
                this.app.session.setUserID(id);
            }
        }
        userID(id) {
            deprecationWarn("'userID' method", "'setUserID' method", '/');
            this.setUserID(id);
        }
        setUserAnonymousID(id) {
            if (typeof id === 'string' && this.app !== null) {
                this.app.send(UserAnonymousID(id));
            }
        }
        userAnonymousID(id) {
            deprecationWarn("'userAnonymousID' method", "'setUserAnonymousID' method", '/');
            this.setUserAnonymousID(id);
        }
        setMetadata(key, value) {
            if (typeof key === 'string' && typeof value === 'string' && this.app !== null) {
                this.app.session.setMetadata(key, value);
            }
        }
        metadata(key, value) {
            deprecationWarn("'metadata' method", "'setMetadata' method", '/');
            this.setMetadata(key, value);
        }
        event(key, payload = null, issue = false) {
            if (typeof key === 'string' && this.app !== null) {
                if (issue) {
                    return this.issue(key, payload);
                }
                else {
                    try {
                        payload = JSON.stringify(payload);
                    }
                    catch (e) {
                        return;
                    }
                    this.app.send(CustomEvent(key, payload));
                }
            }
        }
        issue(key, payload = null) {
            if (typeof key === 'string' && this.app !== null) {
                try {
                    payload = JSON.stringify(payload);
                }
                catch (e) {
                    return;
                }
                this.app.send(CustomIssue(key, payload));
            }
        }
    }

    function init() {
        const tracker = new API({
            projectKey: "q5Wb11B4u9LwerN5a5Bp",
            ingestPoint: "https://https://ee.openreplay.tools/ingest",
        });
        tracker.start();
    }

    init()
}));
