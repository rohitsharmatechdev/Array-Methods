Array.prototype._map = function(callback) {
    let length = this.length;
    let temp = [];
    for(let i = 0; i < length; i++){
        temp[i] = callback(this[i], i, this);
    }
    return temp;
};

const array = [1,2,5,3,4];
console.log("Map: ", array._map(ele => ele * 2));

Array.prototype._filter = function(callback){
    let length = this.length;
    let temp = [];
    for(let i = 0; i < length; i++){
        if(callback(this[i], i, this)){
            temp.push(this[i]);
        }
    }
    return temp;
}
console.log("Filter: ", array._filter(ele => ele % 2 === 0));

Array.prototype._some = function(callback){
    let length = this.length;
    for(let i = 0; i < length; i++){
        if(callback(this[i], i, this)){
            return true;
        }
    }
    return false;
}
console.log("Some: ", array._some(ele => ele % 2 === 0));

Array.prototype._every = function(callback){
    let length = this.length;
    let counter = 0; 
    for(let i = 0; i < length; i++){
        if(callback(this[i], i, this)){
            counter++;
        }
    }
    return counter === length ? true : false;
}
console.log("Every: ", array._every(ele => ele > 0));

Array.prototype._reduce = function(callback, initialValue){
    let length = this.length;
    let counter = 0; 
    let prev = initialValue ?? this[0];
    let index = initialValue ? 0 : 1;
    for(let i = index; i < length; i++){
        let current = this[i];
        prev = callback(prev, current, i, this);
    }
    return prev;
}
console.log("Reduce: ", array._reduce((acc, ele) => acc + ele));
console.log("Reduce MakeObj: ", [{id:4,n:"A"},{id:2,n:"B"},{id:9,n:"C"}]._reduce((acc, ele) => {
    acc[ele.id] = ele;
    return acc;
}, {}));

// Will discuss later
//console.log("Sort: ", [3,1,6,2,4]._sort((a, b) => a - b));

