const emit = (function () {
    const emit = {}

    function sub(arrayName, fn) {
        emit[arrayName] = emit[arrayName] || []
        emit[arrayName].push(fn)
    }

    function pub(arrayName, data) {
        for (let key in emit) {
            if (key = arrayName) {
                emit[arrayName].forEach(fn => {
                    fn(data)
                });
            }
        }
    }

    function off(arrayName, fn) {
        for (let key in emit) {
            if (key = arrayName) {
                for (let i = 0; i < emit[arrayName].lenght; i++) {
                    if (emit[arrayName][i] = fn){
                        emit[arrayName].splice(i, 1)
                    }
                }
            }
        }
    }

    return { sub, off, pub }
})()

export {emit}