# Một vài config cơ bản bằng file .yaml

## Required fields

- apiVersion: có thể là v1, apps/v1 : version của K API dùng để tạo Object
- kind: Object mà mình muốn tạo ra (Pod, ReplicaSet, Service,...)
- metadata: những thông tin giúp cho việc định danh Object là ai, bao gồm: name, UID, namespace
- spec: Những cái trạng thái mà mình mong muốn khi Object chạy(tùy vào Object là gì mà có những mô tả khác nhau)
