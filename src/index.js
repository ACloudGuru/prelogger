'use strict';

function prefixToString(prefix, prefixType) {
    switch (prefixType) {
        case 'string':
            return prefix + '\t';
        case 'object':
            var newPrefix = '';
            // JavaScript forEach is blocking so we can safely do this 
            Object.keys(prefix).forEach(function (key) {
                if (newPrefix) {
                    newPrefix = newPrefix + ' ';
                }
                newPrefix = newPrefix + key + ':' + prefix[key];
            });

            return newPrefix + '\t';
        default:
            return '';
    }
}

class Prelogger {
    constructor(prefix) {
        if (!prefix) {
            throw new Error("Prelogger expected 'prefix' not to be null");
        }

        if (prefix === Object(prefix)) {
            this.prefixType = 'object';
        }

        if (typeof prefix === 'string') {
            this.prefixType = 'string';
        }

        this.prefix = prefix;
    }

    log() {
        var args = Array.prototype.slice.call(arguments);

        args.unshift(prefixToString(this.prefix, this.prefixType));

        console.log.apply(console, args);
    }

    info() {
        var args = Array.prototype.slice.call(arguments);

        args.unshift(prefixToString(this.prefix, this.prefixType));

        console.info.apply(console, args);
    }

    error() {
        var args = Array.prototype.slice.call(arguments);

        args.unshift(prefixToString(this.prefix, this.prefixType));

        console.error.apply(console, args);
    }

    warn() {
        var args = Array.prototype.slice.call(arguments);

        args.unshift(prefixToString(this.prefix, this.prefixType));

        console.warn.apply(console, args);
    }
}

module.exports = Prelogger;