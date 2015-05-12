# linkage

多级联动菜单，常用的前端组件，用尽量少的代码实现最大的通用性，简单够用。

* 多级联动
* CMD模式加载

## Installation
```js
bower install linkage
```

## Usage

**HTML**

```html
<div class="location"></div>
```

**JavaScript**

- `data` 按 data.json 的格式输出数据，name 和 child 必须，可按需扩充字段
- `selects` 限定了显示级数和每级 select 的 name 值

```js
$.get('./data.json', function(data){
    $('.location').linkage({
        data: data,
        selects: ['country', 'region', 'city', 'county']
    });
})
```

## License

MIT