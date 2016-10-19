var expect = require('chai').expect;

var tools = require('./testing-tools');
var Prelogger = require('../src/index');

describe('Prelogger', function () {
    describe('constructor', function () {
        it('should throw an error if no prefix is supplied to the constructor', function () {
            expect(function () {
                new Prelogger();
            }).to.throw(Error);
        });

        it('should throw an error if a null prefix is supplied to the constructor', function () {
            expect(function () {
                new Prelogger(null);
            }).to.throw(Error);
        });

        it('should throw an error if an undefined prefix is supplied to the constructor', function () {
            expect(function () {
                new Prelogger(undefined);
            }).to.throw(Error);
        });

        it('should throw an error if an empty string prefix is supplied to the constructor', function () {
            expect(function () {
                new Prelogger('');
            }).to.throw(Error);
        });

        it('should not throw an error if constructed with a string', function () {
            expect(function () {
                new Prelogger('test');
            }).to.not.throw(Error);
        });

        it('should not throw an error if constructed with an object', function () {
            expect(function () {
                new Prelogger({ id: 'test' });
            }).to.not.throw(Error);
        });
    });

    describe('logging stdout', function () {
        it('should log a message with the prefix string prepended to stdout', function () {
            var hook = tools.captureStream(process.stdout);

            var logger = new Prelogger('prefix');

            logger.log('message');

            expect(hook.captured()).to.equal('prefix\t message\n');

            hook.unhook();
        });

        it('should log a message with the prefix object flattened and prepended to stdout', function () {
            var hook = tools.captureStream(process.stdout);

            var logger = new Prelogger({ id: 'id', workflow: 'wflow' });

            logger.log('message');

            expect(hook.captured()).to.equal('id:id workflow:wflow\t message\n');

            hook.unhook();
        });

        it('should info a message with the prefix string prepended to stdout', function () {
            var hook = tools.captureStream(process.stdout);

            var logger = new Prelogger('prefix');

            logger.info('message');

            expect(hook.captured()).to.equal('prefix\t message\n');

            hook.unhook();
        });

        it('should info a message with the prefix object flattened and prepended to stdout', function () {
            var hook = tools.captureStream(process.stdout);

            var logger = new Prelogger({ id: 'id', workflow: 'wflow' });

            logger.info('message');

            expect(hook.captured()).to.equal('id:id workflow:wflow\t message\n');

            hook.unhook();
        });
    });

    describe('logging stderr', function () {
        it('should error a message with the prefix string prepended to stderr', function () {
            var hook = tools.captureStream(process.stderr);

            var logger = new Prelogger('prefix');

            logger.error('message');

            expect(hook.captured()).to.equal('prefix\t message\n');

            hook.unhook();
        });

        it('should error a message with the prefix object flattened and prepended to stderr', function () {
            var hook = tools.captureStream(process.stderr);

            var logger = new Prelogger({ id: 'id', workflow: 'wflow' });

            logger.error('message');

            expect(hook.captured()).to.equal('id:id workflow:wflow\t message\n');

            hook.unhook();
        });

        it('should warn a message with the prefix string prepended to stderr', function () {
            var hook = tools.captureStream(process.stderr);

            var logger = new Prelogger('prefix');

            logger.warn('message');

            expect(hook.captured()).to.equal('prefix\t message\n');

            hook.unhook();
        });

        it('should warn a message with the prefix object flattened and prepended to stderr', function () {
            var hook = tools.captureStream(process.stderr);

            var logger = new Prelogger({ id: 'id', workflow: 'wflow' });

            logger.warn('message');

            expect(hook.captured()).to.equal('id:id workflow:wflow\t message\n');

            hook.unhook();
        });
    });
});



