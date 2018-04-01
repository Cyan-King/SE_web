//求最大值
Array.prototype.getMax = function () {

    var max = 0;
    for(var x = 1; x < this.length; x++){
        if(this[x] > this[max]){
            max = x;
        }
    }
    return this[max];
}

//求字符串的表现形式
Array.prototype.toString = function () {
    return "--"+this.join(", ")+"--";
}