var frames = require('frame-utils');

/**
 * Dimensions
 * @module ad-utils/dimensions
 */
module.exports = {

    /**
     * Get the top most documents height
     * @param {Document} context - document object containing the stage
     */
    docHeight: function(context) {

        var d = (context) ? context : frames.topWindow().document;

        return Math.max(
            Math.max(d.body.scrollHeight, d.documentElement.scrollHeight),
            Math.max(d.body.offsetHeight, d.documentElement.offsetHeight),
            Math.max(d.body.clientHeight, d.documentElement.clientHeight));
    },

    /**
     * Get the top most window dimensions
     * @returns {object} - size of the window {width: 0, height: 0}
     */
    windowSize: function() {

        var win = frames.topWindow();
        var d = win.document;
        var w = 0;
        var h = 0;

        if (!win.innerWidth) {

            if (d.documentElement.clientWidth !== 0) {

                w = d.documentElement.clientWidth;
                h = d.documentElement.clientHeight;

            } else {

                w = d.body.clientWidth;
                h = d.body.clientHeight;

            }

        } else {

            w = win.innerWidth;
            h = win.innerHeight;

        }

        return {
            width: w,
            height: h
        };

    },

    /**
     * Calculate the coordinates required to center an element
     * @param {Number} width - width of the element to center
     * @param {Number} height - height of the element to center
     * @param {object}
     */
    calculateCenter: function() {

        var win = frames.topWindow();
        var d = win.document;
        var _x = 0;
        var _y = 0;
        var offsetX = 0;
        var offsetY = 0;

        if (!win.pageYOffset) {

            if (d.documentElement.scrollTop !== 0) {

                offsetY = d.documentElement.scrollTop;
                offsetX = d.documentElement.scrollLeft;

            } else {

                offsetY = d.body.scrollTop;
                offsetX = d.body.scrollLeft;

            }

        } else {

            offsetX = win.pageXOffset;
            offsetY = win.pageYOffset;

        }

        _x = ((this.windowSize().width - width) / 2); //+ offsetX;
        _y = ((this.windowSize().height - height) / 2); //+ offsetY;

        return {
            x: _x,
            y: _y
        };
    }
};