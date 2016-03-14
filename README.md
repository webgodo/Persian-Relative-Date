# Persian-Relative-Date
Get string representation of time in Persian (Farsi - فارسی)

Based on [relative-date](https://www.npmjs.com/package/relative-date)

##Usage
On browsers:

```js
<script src="persian-relative-date.js"></script>
<script>
  var a = persianRelativeDate(new Date());
  var b = persianRelativeDate(1299627946000);
  var c = persianRelativeDate(0);
  
  console.log(a);   // output: 'به تازگی'
  console.log(b);   // output: '12 دقیقه پیش'
  console.log(c);   // output: '41 سال پیش'
</script>
```
