# Security Policy 🔐

## 🔑 Secrets Management

- Docker credentials are stored securely using GitHub Secrets
- Azure credentials (Service Principal) are stored in GitHub Secrets
- Kubernetes Secrets are used for runtime-sensitive data (e.g., DB passwords)

## 🛡️ Access Control

- AKS uses Role-Based Access Control (RBAC)
- Only authorized users can deploy via GitHub Actions
- Cluster access is restricted to service principal and local kubeconfig

## 🧪 Vulnerability Management

- Docker images are scanned via GitHub’s built-in security tools
- Dependencies are monitored for known vulnerabilities
- Regular updates are applied to base images and packages

## 📜 Compliance

- Project follows GDPR principles for data handling
- No personal data is stored in logs or exposed via APIs
- Secrets are never hardcoded in source code

## 📣 Reporting Issues

If you discover a security issue, please contact the project maintainer directly via GitHub or email.

