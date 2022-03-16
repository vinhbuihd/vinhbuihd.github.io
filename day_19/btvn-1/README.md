Cho mảng màu:

```javascript
let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];
```

### Yêu cầu

- Render số box = số lượng màu ra ngoài màn hình bằng js (5 box)
- Box được tạo bởi thẻ `div`, có `class="box"`, background tương ứng với từng mã màu
- Cập nhật số lượng total box trong thẻ có class `"points"`
- Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1
- Khi click vào nút `"more box"` thì số lượng box tăng lên `5` (tương ứng với 5 màu trong mảng colors), đồng thời số lượng total box cũng tăng lên `5`

### Minh họa

**Khi mới đầu load trang**

![](https://techmaster.vn/media/static/9479/btkamb451co41h2qcqo0)

---

**Khi click vào 1 box bất kỳ**

![](https://techmaster.vn/media/static/9479/btkamlc51co41h2qcqog)

---

**Khi click "more box"**

![](https://techmaster.vn/media/static/9479/btkamrs51co41h2qcqp0)
