# Expensy 💸

Expensy is a full-stack expense tracking application deployed on Azure Kubernetes Service (AKS). It features containerized services, automated CI/CD via GitHub Actions, and integrated monitoring with Prometheus and Grafana.

---

## 🧱 Architecture

Expensy is composed of:

- **Frontend**: React-based UI served via Kubernetes LoadBalancer  
- **Backend**: Node.js + Express API  
- **Database**: MongoDB for persistent expense storage  
- **Cache**: Redis for fast data access  
- **Monitoring**: Prometheus + Grafana stack  
- **Ingress**: NGINX (optional, currently skipped)

---

## 🚀 Live Access

The frontend is exposed via Kubernetes LoadBalancer:

**http://192.168.139.2**

> Note: This IP is internal to the cloud network. For public access, configure a domain and ingress.

---

## 🔧 Tech Stack

- **Frontend**: React, HTML/CSS  
- **Backend**: Node.js, Express  
- **Database**: MongoDB  
- **Cache**: Redis  
- **Containerization**: Docker  
- **Orchestration**: Kubernetes (AKS)  
- **CI/CD**: GitHub Actions  
- **Monitoring**: Prometheus, Grafana

---

## 🔁 CI/CD Pipeline

GitHub Actions automates:

1. Docker image builds and pushes to Docker Hub  
2. Azure authentication and AKS context setup  
3. Kubernetes manifest application from the `k8s/` folder

Workflow file: `.github/workflows/ci-cd.yaml`

---

## 📦 Folder Structure


![Uploading Screenshot 2025-09-24 at 15.41.23.png…]()




---

## 📊 Monitoring

Prometheus and Grafana are deployed via Kubernetes manifests. Metrics include:

- Pod health and restarts  
- CPU and memory usage  
- HTTP request latency

Grafana access (local):

```bash
kubectl port-forward svc/monitoring-grafana 3000:80

🧠 Lessons Learned
Building a full CI/CD pipeline with GitHub Actions

Deploying multi-tier apps to AKS

Managing Kubernetes manifests and services

Integrating monitoring with Prometheus and Grafana

Troubleshooting GitHub authentication and DNS issues

👤 Author
Yahea Thakeb Cloud & DevOps Engineer Kiel, Germany
