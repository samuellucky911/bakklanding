/*
 * After making changes to this file create the minified version cd in to ui.apps.src and run the following command:
 *
 uglifyjs ../ui.apps/src/main/content/jcr_root/etc/designs/componentlibrary/sriFallback/sriFallback.js -o ../ui.apps/src/main/content/jcr_root/etc/designs/componentlibrary/sriFallback/sriFallback.min.js
 *
 * Commit BOTH version to Stash
 */

(function () {
    try {
        const loadErrCb = window.resourceLoadError || (() => {
        });
        const fbAttr = 'data-sri-fallback-url';

        const processNode = function (node) {
            const tagName = (node.tagName || '').toLowerCase();
            if (
                (tagName === 'link' || tagName === 'script')
                && node.integrity
            ) {
                node.onerror = function (e) {
                    if (node.getAttribute(fbAttr)) {
                        const fbNode = document.createElement(tagName);
                        const parent = node.parentNode;
                        fbNode.crossOrigin = node.crossOrigin;
                        fbNode.setAttribute('integrity', node.dataset.sriFallbackHash);
                        fbNode.setAttribute("async", true);

                        if (node.src) {
                            fbNode.setAttribute('src', node.getAttribute(fbAttr));
                        }
                        if (node.href) {
                            fbNode.setAttribute('href', node.getAttribute(fbAttr));
                        }

                        fbNode.onerror = function (e) {
                            loadErrCb(e, true);
                        };

                        parent.appendChild(fbNode);
                        node.remove();
                    } else {
                        loadErrCb(e, false);
                    }
                };
            }
        };
        const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        // Browsers without MO won't support SRI
        if (MutationObserver) {
            new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    mutation.addedNodes.forEach(processNode);
                });
            }).observe(document, {childList: true, subtree: true});
        }
    } catch (e) {
        console.error(e)
    }
})();