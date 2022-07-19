# Kubernetes là cái gì ?

> Theo định nghĩa từ trang chủ: Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation. It has a large, rapidly growing ecosystem. Kubernetes services, support, and tools are widely available.

> Kurbernetes là một nền tảng open-source được phát triển và quản lý bởi Google, nó sinh ra để quản lý container

> Người ta hay dùng cái này để vận hành, phát triển, triển khai ứng dụng

## Các cách deploy ứng dụng phổ biến

![https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/](../imgs/container_evolution.svg)

### 1. Chạy thẳng ứng dụng lên server

Thuở mới khai sinh lập địa, Khi người ta phát triển ứng dụng xong, làm sao để show nó ra thế giới, cho mọi người có thể truy cập được. Lúc này người ta phải đi thuê một server vật lý(có kết nối mạng) sau đó triển khai ứng dụng của mình lên trên đó. Khi triển khai một ứng dụng thì không sao, mọi chuyện trở lên rắc rối khi càng ngày có nhiều ứng dụng được deploy lên trên sv đó. Khi deploy 1 ứng dụng thì việc config để cho phép chạy ứng dụng thì quá là easy nhưng khi nhiều ứng dụng => càng nhiều config, tới một ngày đẹp trời những cái config này tự dưng conflict với nhau, rồi thằng này chiếm nhiều tài nguyên chèn ép thằng kia, ... ui trời, Đâu ai đi solve conflict được mãi :V. Có giải pháp nào không trời ? Làm sao để trên một sv vật lý, tui có thể chạy được các app trên các môi trường độc lập ? Helppppp meeeeee....xN

### 2. Virtualization ra đời, càng khôn đã thay đổi

Tui cũng không biết ai nghĩ ra cái này nữa, tui lười tìm hiểu quá. Đại khái là cái này sử dụng một cái middleware software layer gọi là Hypervisor. Ủa rồi cái này là cái gì ? Ukm thì cái này nó cho phép mình tạo ra nhiều Virtual Machine - máy ảo (nó giống như một máy tính thật, dùng như máy tính thật, mà không có thật thì gọi là máy ảo vl thật) trên cùng một máy vật lý. Vậy thì tốt quá, em chỉ cần thuê sv vật lý rồi cài máy ảo trên đó, rồi triển khai app của em lên đó là em giải quyết xong vấn đề rồi. Vậy thì cái Virtualization còn có những ưu điểm, nhược điểm nào nữa không ta ? Ukm thì có đó, ai mà không vậy

- Ưu điểm:
  - Tạo ra môi trường độc lập(isolation) => giảm conflict, tăng security.
  - Sử dụng tài nguyên của sv vật lý tốt hơn, hiệu quả hơn.
  - Tiết kiệm chi phí hardware cho người nghèo như tui, Nếu bạn quá giàu rồi thì không cần cho lắm hahaha(ui bạn ơi, tôi giàu mà, nên tôi thuê chục con sv vật lý luôn, khỏi cài VM làm gì cho mệt)
- Nhược điểm:
  - Bởi vì kiến trúc của VM nó có cả OS, Lib/Bin nên nó rất là nặng nên 1 sv vật lý không thể nào mà tạo nhiều VM được.
  - Cái cấu hình cho VM là do mình tự custom về RAM, CPU, bla.....

### 3. Thời đại của container

Thế giới này luôn vận động, công nghệ ngày càng phát triển cái sau sinh ra để giải quyết vấn để của cái trước để lại, container cũng vậy. Docker là một đại diện.

Vậy container giải quyết được vấn đề gì? Container nó chạy trên môi trường container runtime, nó cũng tạo ra môi trường isolation, cũng có lib/bin, điểm mấu chốt ở đây là nó share OS với host OS do đó nó rất là nhẹ(lightweight), nó có nhiều cái
hay ho lắm:

- Do nó nhẹ nên tạo ra được nhiều container trên sv vật lý hơn.
- Đóng gói ứng dụng, rồi mang đi đâu chạy cũng được.
- Tạo ra môi trường đồng bộ, tránh tình trạng chạy đc ở máy này, mà fail ở máy #.
- Bớt cực khi phải setup một đống môi trường.
- Bla Bla, bạn thêm khảo thêm [ở đây nà](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/)

## Kubernetes là cái gì ?

Ủa rồi nãy giờ lang mang mà chưa đề cập gì đến chủ đề chính ???? sorry Mình nói liền đây :'(

Khi mình tạo ra nhiều container như vậy rồi, giờ làm sao để có thể quản lý nó, làm sao để biết nó thuộc về dự án nào, làm sao biết nó đang ở môi trường nào(dev, test, stage, product), rồi giả sử có 1000 container rồi làm sao biết con nào die để start nó lên lại. Vấn đề bây giờ là cần một người đứng ra làm quản lý, cầm đầu tụi container này. Kubernetes ra đời đề giải quyết vấn đề này. Ngoài ra nó còn tùm la tùm lum cái tính năng hay ho mà mình chưa học nên chưa biết :V chỉ biết là nó hay vl hahaha

### Kiến trúc của một kubernetes cluster - Kubernetés components

![https://kubernetes.io/docs/concepts/overview/components/](../imgs/components-of-kubernetes.svg)

Tại sao không phải là kubernetes mà là kubernetes cluster? À tại vì Kubernetes chỉ là công cụ thôi, Khi deploy một kubernetes thì mình nhận lại là một cluster để có thể run app trong đó.

Thì khi tạo ra một cluster, thì nó chứa trong đó là một Master node và các Worker Nodes

Master Node nó giống như đại ca vậy, quản lý một danh sách đàn em - worker nodes

1. Master node core component

- kube-apiserver: cái này dùng để quản lý cluster, tương tác với các worker trong hệ sinh thái của k
- etcd: database lưu trữ dạng key value, baking store cho cluster data
- kube-scheduler: Quan sát xem có thằng Pod nào được tạo mới không, đặt pod mới vào một worker
- kube-controller-manager: runs controller processes.

2. Worker node core component:

- kubelet: An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod.
- k-proxy: kube-proxy is a network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept. kube-proxy maintains network rules on nodes. These network rules allow network communication to your Pods from network sessions inside or outside of your cluster.
- container runtime: responsible for running containers.
