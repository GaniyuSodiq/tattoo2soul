const pubSub = (function () {
    const emit = {
        // arrayName: [fn],
    }

    function sub(arrayName, fn) {
        emit[arrayName] = emit[arrayName] || []
        emit[arrayName].push(fn)
    }

    function pub(arrayName, data) {
        if (emit[arrayName]) {
            emit[arrayName].forEach(fn => {
                fn(data)
            });
        }
    }

    function off(arrayName, fn) {
        if (emit[arrayName]) {
            for (let i = 0; i < emit[arrayName].length; i++) {
                if (emit[arrayName][i] == fn)
                    emit[arrayName].splice(i, 1)
            }
        }
    }

    return { sub, pub, off }
})()
export {pubSub}