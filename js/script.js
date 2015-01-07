(function () {
    'use strict';

    function CanvasSandbox() {
        /**
         * Function for checking required properties.
         * @param settings {object} object to check
         * @param properties {object} array with required properties
         * @returns {boolean}
         */
        function checkSettings(settings, properties) {
            var i = 0,
                l = properties.length,
                result = true;

            for (i; i < l; i += 1) {
                if (!settings.hasOwnProperty(properties[i])) {
                    result = false;
                }
            }

            return result;
        }

        /**
         * Initialization
         * @param id {string} element id
         */
        this.init = function (id) {
            if (typeof id === 'string') {
                this.element = document.getElementById(id);

                if (!!this.element) {
                    this.element.width = window.innerWidth;
                    this.element.height = window.innerHeight;

                    this.context = this.element.getContext('2d');
                }
            }

            return this;
        };

        /**
         * Drawing a vector line
         * @param settings
         * @returns {object} current object
         */
        this.drawVector = function (settings) {
            if (checkSettings(settings, ['x', 'y', 'angle', 'width'])) {
                return this;
            }

            return false;
        };

        /**
         * Drawing script
         * @returns {object} current object
         */
        this.draw = function () {
            this.drawVector({
                x: 228,
                y: 322,
                angle: 15,
                width: 1488
            });

            return this;
        };
    }

    $(document).ready(function () {
        (new CanvasSandbox()).init('workspace').draw();
    });
}());