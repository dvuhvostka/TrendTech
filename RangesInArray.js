class RangesInArray {
    constructor(array) {
        this._array = array.sort((a, b) => a - b);
        this._subarrays = [];
        this._result = [];
    }

    get array() {
        return this._array;
    }

    get result() {
        if (!this._subarrays)
            this._subarrayRanges();

        return  this._ranges();
    }

    get subarrays() {
        return this._subarrayRanges();
    }

    _subarrayRanges() {
        this._array.map((el, index) => {
            if ((el - 1) !== this._array[index - 1]) this._subarrays.push([el]);
            else if ((el - 1) === this._array[index - 1]) this._subarrays[this._subarrays.length - 1].push(el);
        });

        return this._subarrays;
    }

    _ranges() {
        this._subarrayRanges().map((el, index) => {
            if (el.length === 1) this._result.push(`${el[0]}`);
            else if ((el[0] + 1) === el[el.length - 1]) this._result.push(`${el[0]},${el[el.length - 1]}`);
            else this._result.push(`${el[0]}-${el[el.length - 1]}`);
        });

        return this._result.join(',');
    }
}

module.exports = { 
    RangesInArray 
};