// interface Perosn{
//     name:string,
//     age?:number,
//     say():void
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 定义一个类
var PerosnTwo = /** @class */ (function () {
    // constructor 是什么
    // 构造器
    // 执行：new Perosn super
    function PerosnTwo(options) {
        this.cname = 'aaa'; //仅在内部使用
        this.b = 'bbb'; //仅在本类和子类中访问使用
        this.d = 'ddd'; //任意部分都可以访问
        var name = options.name, age = options.age;
        // 给实例对象添加静态属性
        // this.name = name;
        // this.age = age;
    }
    // 添加的是原型方法
    PerosnTwo.prototype.get = function () {
        console.log(this.cname);
    };
    return PerosnTwo;
}());
// 类的作用：创建实例对象
var p = new PerosnTwo({
    name: 'found',
    age: 19
});
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(test) {
        var _this = 
        // super触发PersonTwo类中的构造器
        _super.call(this, { name: 'found', age: 19 }) || this;
        _this.test = test;
        return _this;
    }
    return User;
}(PerosnTwo));
var u = new User({
    test: '123'
});
