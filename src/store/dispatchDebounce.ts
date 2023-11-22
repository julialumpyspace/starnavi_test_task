export class DispatchDebounce {
    lastCall: number = 0;
    lastCallTimer: any;

    debounce(callee: any, timeoutMs: number) {
        return (...args: any[]) => {
            let previousCall = this.lastCall;
            this.lastCall = Date.now();
            if (previousCall && this.lastCall - previousCall <= timeoutMs) {
                clearTimeout(this.lastCallTimer);
            }
            this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
        };
    };
}
