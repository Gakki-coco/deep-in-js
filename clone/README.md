# 深拷贝
## 含义
1. 简单理解
   - b 是 a 的一份拷贝，b 中没有对 a 中对象的引用
2. 另一种理解
   - b 是 a 的一份拷贝
   - 把 a、b 各画出图，a 与 b 没有连结

## 要考虑的
1. 数据类型
2. 数据规模
3. 性能要求
4. 运行环境
5. 其它

## JSON 序列化反序列化
`JSON.parse(JSON.strgify(object))`
### 弊端：
1. 不支持函数
2. 不支持 undefined
3. 不支持正则
4. 不支持 Date
5. 不支持循环引用
6. 只支持 object/array/string/number/'true'/'false'/'null'

## 递归克隆
### 递归
1. 看节点的类型（七种）
2. 如果是基本类型就直接拷贝
3. 如果是 Object 就分情况讨论

### 遇到的问题
1. 如何区分 array/function/RegExp/date
2. 对象循环引用
3. 是否拷贝对象原型属性
4. 爆栈要不要考虑

## 深拷贝要解决什么问题？
### 默认选项
`var config = $.extend({}, defaultConfig, initConfig)`

- 如果不希望 defaultConfig 被修改，则选择深拷贝
- immutable.js，解决浅复制不更新，深复制性能差的问题
- 函数式编程，所有数据都禁止被修改