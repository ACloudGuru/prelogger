function captureStream(stream) {
    var oldWrite = stream.write;
    var buf = '';
    stream.write = function (chunk, encoding, callback) {
        buf += chunk.toString(); // chunk is a String or Buffer
    }

    return {
        unhook: function unhook() {
            stream.write = oldWrite;
        },
        captured: function () {
            return buf;
        }
    };
}

module.exports = {
    captureStream: captureStream
};