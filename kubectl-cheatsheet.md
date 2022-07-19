| STT |                  Ý nghĩa                   |                     Câu lệnh                     |
| :-: | :----------------------------------------: | :----------------------------------------------: |
|  1  |            Chạy với file .yaml             |             k apply -f <file .yaml>              |
|  2  | Xóa hết tài nguyên đã chạy bằng file .yaml |            k delete -f <file . yaml>             |
|  3  |       Để expose port of pod ra ngoài       |     k port-forward pod/hello-kube 3000:3000      |
|  4  |                 Delete pod                 |              k delete pod hello-k8s              |
|  5  |            List pod with label             |             k get pod --show-labels              |
|  6  |  Chọn chính xác cột label hiển thị với -L  |             k get pod -L label_name              |
|  7  |     Lọc pod theo label với -l options      |        k get pod -l enviroment=production        |
|  8  |        Xem logs of container in Pod        |                 k logs pod_name                  |
|  9  |       Kiem tra qua trinh running pod       |             k describe pod pod_name              |
| 10  |             Xem list namespace             |                 k get namespace                  |
| 11  | Xem list pod of namespace nào đó(testing)  |               k get pod -n testing               |
| 12  |                Kiểm tra ns                 |           k describe namespace testing           |
| 13  |   Chỉ định namespace khi chạy file yaml    | k apply -f test/deployment-nginx.yaml -n testing |
| 14  |                                            |                                                  |
| 15  |                                            |                                                  |
| 16  |                                            |                                                  |
| 17  |                                            |                                                  |
| 18  |                                            |                                                  |

---

> Note: k là alias cho kubectl
