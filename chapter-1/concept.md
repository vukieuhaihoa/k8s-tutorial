# Overview

## What is Kubernetes

Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation. It has a large, rapidly growing ecosystem. Kubernetes services, support, and tools are widely available.

## Kubernetes components

Một kubernetes cluster bao gồm 1 master node và tập hơn những worker nodes

## The Kubernetes API

- Cái này cho phép mình query và điều khiển trạng thái của objects trong K,
- Cốt lõi của The Kubernetes Master Node là API server và HTTP API do thằng API series expose ra
- Users và phần khác của cluster và những thành phần bên ngoài nói chuyện với nhau thông qua thằng API server này.

## Kubernetes Objects

Kubernetes Objects là những thực thể(entities) bên trong hệ sinh thái của K.

Kubernetes uses these entities to represent the state of your cluster. Learn about the Kubernetes object model and how to work with these objects.(đại khái là K sử dụng các object này để thể hiện trạng thái của cluster)
