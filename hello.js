var a = [
    {
        "id": 1,
        "name": "火烧",
        "price": 3.5,
        "description": "菜火烧，味道鲜美！",
        "picture": "chs.png"
    },
    {
        "id": 2,
        "name": "豆腐脑",
        "price": 2,
        "description": "鸡汤豆腐脑，味道鲜美！",
        "picture": "dfn.jpg"
    },
    {
        "id": 3,
        "name": "刀切肉火烧",
        "price": 5,
        "description": "刀切肉，肉块看得见，品质有保证！",
        "picture": "rjm.png"
    },
    {
        "id": 4,
        "name": "油酥肉火烧",
        "price": 4.5,
        "description": "外皮酥的掉渣，内心暄软，皮薄层多，非常好吃。",
        "picture": "ysrhs.jpg"
    },
    {
        "id": 5,
        "name": "驴肉火烧",
        "price": 4.5,
        "description": "驴肉火烧可馋这口了。过节得到一块生驴肉，酱好了，自己做了饼，一样香酥可口哦！",
        "picture": "lurhs.jpg"
    }
]
var data2 = {}
for (let i = 0; i < a.length; i++) {
    var name = a[i].name
    if (name === "驴肉火烧")
        data2.id = a[i].id
        data2.name = a[i].name
        data2.price = a[i].price
        data2.description = a[i].description
        data2.picture = a[i].picture

}
console.log(JSON.stringify(data2))
