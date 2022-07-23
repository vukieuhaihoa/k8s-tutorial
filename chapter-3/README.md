# ReplicationControllers and other controller

Chạy Pod xong rồi, mọi thứ ngon lành rồi ? Cái RC này dùng để làm gì ?
Trong thực tế, người ta không chạy trực tiếp Pod như này, nó gặp nhiều hạn chế. Người ta dùng nhiều resource khác để tự động và quản lý Pod.

## ReplicationControllers

ReplicationControllers là một resource mà sẽ tạo và quản lý pod, và chắc chắn là số lượng pod nó quản lý không thay đổi và kept running. ReplicationControllers sẽ tạo số lượng pod bằng với số ta chỉ định ở thuộc tính replicas và quản lý pod thông qua labels của Pod.

## Tại sao dùng RC mà ko dùng Pod trực tiếp

Pod: nó giám sát container, nếu container bị crash nó sẽ restart lại, pod chạy trong một worker. Nếu worker bị die thì sao ? pod sẽ downtime luôn
RC: Nếu chạy cluster có nhiều hơn 1 worker thì khi 1 wk bị die mà có pod đang chạy trong wk đó được quản lý bởi RC. RC nó luôn đảm bảo số lượng pod(replicas = 5), nếu pod die, nó sẽ tạo ra đúng số lượng pod ở một wk khác.
Nói chung là Rc sẽ đảm bảo tạo ra chừng đó pod, không dư, không thiếu.

Sử dụng ReplicationControllers để chạy pod sẽ giúp ứng dụng của chúng ta luôn luôn availability nhất có thể. Ngoài ra ta có thể tăng performance của ứng dụng bằng cách chỉ định số lượng replicas trong RC để RC tạo ra nhiều pod chạy cùng một version của ứng dụng.

> Túm cái váy lại, là RC luôn luôn make sure là tụi pod nó luôn up và available

## Sử dụng ReplicaSets thay thế RC

Đây là một resource tương tự như RC, nhưng nó là một phiên bản mới hơn của RC và sẽ được sử dụng để thay thế RC. Chúng ta sẽ dùng ReplicaSets (RS) để deploy pod thay vì dùng RC.

## So sánh ReplicaSets và ReplicationController

RS và RC sẽ hoạt động tương tự nhau. Nhưng RS linh hoạt hơn ở phần label selector, trong khi label selector thằng RC chỉ có thể chọn pod mà hoàn toàn giống với label nó chỉ định, thì thằng RS sẽ cho phép dùng một số expressions hoặc matching để chọn pod nó quản lý.

Ví dụ, thằng RC không thể nào match với pod mà có env=production và env=testing cùng lúc được, trong khi thằng RS có thể, bằng cách chỉ định label selector như env=\* . Ngoài ra, ta có thể dùng operators với thuộc tính matchExpressions như sau:

```
selector:
  matchExpressions:
    - key: app
      operator: In
      values:
        - kubia
```

## References

1. [Viblo](https://viblo.asia/p/kubernetes-series-bai-3-replicationcontrollers-and-other-controller-Qbq5Q60GKD8https://viblo.asia/p/kubernetes-series-bai-3-replicationcontrollers-and-other-controller-Qbq5Q60GKD8)

2. [CloudNativeViet](https://www.cloudnativeviet.net/documents/kubernetes/controllers/replication-controller/#) - dich tu trang chu cua k8s
