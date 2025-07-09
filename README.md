# Luma Web Platform Automation

This repository contains automated test code developed for [Luma](https://magento.softwaretestingboard.com/) web platform. The main goal is to streamline and validate key functionalities related to product search, browsing, and shopping.

## 🛠️ Project Overview

The automation suite focuses on end-to-end tests covering the following features:

- **Authentication**: Login and registration flows
- **Products**: Search, filtering, and product detail validations
- **Cart**: Adding, updating, and removing items from the cart
- **Checkout**: Completing purchase flow with valid data
- **Contact**: Submitting the contact form

## ✅ Code Structure & Best Practices

- **Fixtures**: Used to store reusable test data and reduce repetition.
- **Custom Commands**: Created to simplify test steps and keep the codebase clean and maintainable.
- **Validation Checks**: Implemented across all features to ensure expected behaviors and UI responses.

## ⚙️ CI/CD Integration

A `.yml` configuration file has been added under `.github/workflows/` to enable **Continuous Integration**. This setup automatically runs the test suite every time new changes are pushed to the `main` branch, helping to catch issues early and maintain code reliability.

## 📁 Technologies Used

- **Cypress** for test automation
- **JavaScript**
- **GitHub Actions** for CI/CD

---

Feel free to fork, clone, and contribute. Let’s keep it stable and scalable. 🚀
