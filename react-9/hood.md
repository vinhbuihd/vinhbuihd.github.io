**useCallback**

`useCallback` là được sử dụng để tối ưu quá trình render của React functional components. Tránh trường hợp phải rerender lại những component ko cần thiết. Sẽ trả về 1 bản ghi nhớ của callback, chỉ thay đổi nếu 1 trong các thành phần của dependencies thay đổi

Cú pháp: nhận vào 2 tham số: 1 func, 1 mảng dependencies

`usememo` : tác dụng là giúp performance của app được tốt lên. Có 2 tham số đó là function và một list dependencies, nó sẽ memorizes value output của một function và chỉ recomputed memoried value này khi mà một trong các dependencies thay đổi. Nói cách khác thì useMemo sẽ lưu giá trị trả về của function và nó sẽ kiểm tra xem phụ thuộc thay đổi thì nó mới chạy hàm phía trong, còn không thì sẽ trả về value đã cached trước đó.

`useRef` : Tạo tham chiếu đến nút DOM
