function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function () {
        if (running) { throw new Error('Stopwatch has already started') };
        running = true;
        startTime = new Date();
        console.log('Stopwatch is started');
    }
    this.stop = function () {
        if (!running) { throw new Error('Stopwatch is not started'); }
        console.log('Stopwatch is ended');
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }
    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
        console.log('Stopwatch is reset');
    }
    Object.defineProperty(this, 'duration', {
        get: function () { return duration }
    })

}



