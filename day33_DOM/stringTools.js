String.prototype.trim = function () {

    var start, end;
    start = 0;
    end = this.length-1;
    while(start<=end && this.charAt(start) == "A"){
        start++;
    }
    while (start<=end && this.charAt(end) == "A"){
        end--;
    }
    return this.substring(start, end+1);
}

/*将字符串转成字符数组*/
String.prototype.toCharArray = function () {

    //定义一个字符串数组
    var chs = [];
    for(var x = 0; x < this.length; x++){

        chs[x] = this.charAt(x);
    }

    return chs;

}

/*添加共能字符串的反转*/
String.prototype.reverse = function () {
    var  arr = this.toCharArray();

    //将位置置换功能封装到反转功能内部
    function swap(arr, x, y) {
        var temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }


    for (var x = 0, y = arr.length-1; x < y; x++, y--) {
        swap(arr, x, y);
    }
    return arr.join("");
}


