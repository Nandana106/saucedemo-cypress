# 🧪 Cypress Automation Framework – SauceDemo E-commerce

![Cypress](https://img.shields.io/badge/Cypress-Testing_Framework-17202C?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=github-actions&logoColor=white)
[![Tests](https://github.com/Nandana106/saucedemo-cypress/actions/workflows/cypress.yml/badge.svg)](https://github.com/Nandana106/saucedemo-cypress/actions)

A maintainable and scalable **Cypress UI automation framework** for testing the [SauceDemo](https://www.saucedemo.com/) e-commerce application.

This project demonstrates real-world test automation practices including **Page Object Model, Fixtures, Custom Commands, Hooks, Assertions, Aliases, Environment Variables, Data-Driven Testing, Screenshots, Videos, Reporting, and GitHub Actions CI/CD**.

---

# 🏗️ Architecture – Page Object Model Flow

```
Test Specifications (cypress/e2e)
         ↓
   Page Objects (cypress/pages)
    ├─ LoginPage.js
    ├─ ProductsPage.js
    ├─ CartPage.js
    ├─ CheckoutPage.js
    ├─ FooterPage.js
    ├─ ProductDetailsPage.js
    └─ Sidebar.js
         ↓
   Custom Commands (cypress/support/commands.js)
    ├─ cy.login()
    ├─ cy.addAllProductsToCart()
    ├─ cy.logout()
    └─ ...
         ↓
   Test Data (cypress/fixtures)
    ├─ users.json
    ├─ products.json
    └─ checkoutData.json
         ↓
   SauceDemo Application
         ↓
   Test Evidence
    ├─ Screenshots (cypress/screenshots)
    ├─ Videos (cypress/videos)
    └─ Reports (cypress/reports)
```

---

# 🎯 Test Strategy & Coverage

| Module | What's Covered | Why | Importance |
|---|---|---|---|
| **Authentication** | Login, Invalid Credentials, Locked User, Logout | Secure access control & session management | 🔴 Critical |
| **Products** | Listing, Sorting, Details | Core e-commerce functionality | 🔴 Critical |
| **Cart** | Add Products, Remove Products | Shopping cart operations | 🟠 High |
| **Checkout** | Customer Info, Order Summary, Payment Flow | End-to-end purchase validation | 🔴 Critical |
| **Footer** | Social Links, Copyright, Navigation | UI completeness & legal compliance | 🟡 Medium |
| **Sidebar** | Menu Navigation, Filtering | User navigation & accessibility | 🟡 Medium |

**Total Tests:** 14 specs | **Test Cases:** 30+ | **Coverage:** E2E Functional & Negative scenarios

---

# ⚡ Performance – Parallel Execution Impact

| Metric | Sequential Execution | Parallel Matrix (6 jobs) | Improvement |
|---|---|---|---|
| **Total Execution Time** | ~2m 30s | ~35s | **58% faster** ⚡ |
| **Resource Usage** | 1 Worker | 6 Concurrent Workers | Better CPU utilization |
| **CI/CD Feedback** | Slow | Quick | Faster feedback loop |
| **Cost** | Full node runtime | Distributed load | Optimized |

Parallel execution with GitHub Actions Matrix Strategy delivers **~2 minutes time savings per run**!

---

# 📊 Test Reports

- **Live CI/CD Status:** [![Tests](https://github.com/Nandana106/saucedemo-cypress/actions/workflows/cypress.yml/badge.svg)](https://github.com/Nandana106/saucedemo-cypress/actions)
- **HTML Reports:** Generated in `cypress/reports/html/` after each test run
- **Artifacts:** Screenshots, Videos, and JSON reports available in [GitHub Actions](https://github.com/Nandana106/saucedemo-cypress/actions)

---

# 🧪 Test Coverage

## 🔐 Authentication

| Scenario | Status | File |
|---|---|---|
| Valid Login | ✅ | valid-login.cy.js |
| Invalid Login | ✅ | invalid-login.cy.js |
| Locked User | ✅ | locked-user.cy.js |
| Logout | ✅ | logout.cy.js |

## 🛍️ Products

| Scenario | Status | File |
|---|---|---|
| Product Listing | ✅ | product-listing.cy.js |
| Product Sorting | ✅ | product-sorting.cy.js |
| Product Details | ✅ | product-details.cy.js |

## 🛒 Cart

| Scenario | Status | File |
|---|---|---|
| Add to Cart | ✅ | add-to-cart.cy.js |
| Remove from Cart | ✅ | remove-from-cart.cy.js |

## 💳 Checkout

| Scenario | Status | File |
|---|---|---|
| Checkout Details | ✅ | checkout-details.cy.js |
| Place Order | ✅ | place-order.cy.js |
| Order Confirmation | ✅ | order-confirmation.cy.js |

## 🔗 Footer

| Scenario | Status | File |
|---|---|---|
| Footer Validation | ✅ | footer.cy.js |

## 🎯 Sidebar

| Scenario | Status | File |
|---|---|---|
| Sidebar Navigation | ✅ | sidebar.cy.js |

---



 # 📁 Project Structure

```
saucedemo-cypress/
│
├── .github/
│   └── workflows/
│       └── cypress.yml
│
├── cypress/
│   │
│   ├── e2e/
│   │   ├── authentication/
│   │   │   ├── invalid-login.cy.js
│   │   │   ├── locked-user.cy.js
│   │   │   ├── logout.cy.js
│   │   │   └── valid-login.cy.js
│   │   │
│   │   ├── products/
│   │   │   ├── product-listing.cy.js
│   │   │   ├── product-sorting.cy.js
│   │   │   └── product-details.cy.js
│   │   │
│   │   ├── cart/
│   │   │   ├── add-to-cart.cy.js
│   │   │   └── remove-from-cart.cy.js
│   │   │
│   │   ├── checkout/
│   │   │   ├── checkout-details.cy.js
│   │   │   ├── place-order.cy.js
│   │   │   └── order-confirmation.cy.js
│   │   │
│   │   ├── footer/
│   │   │   └── footer.cy.js
│   │   │
│   │   └── sidebar/
│   │       └── sidebar.cy.js
│   │
│   ├── fixtures/
│   │   ├── users.json
│   │   ├── products.json
│   │   └── checkoutData.json
│   │
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── ProductsPage.js
│   │   ├── ProductDetailsPage.js
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   ├── FooterPage.js
│   │   └── Sidebar.js
│   │
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   │
│   ├── reports/
│   │   └── html/
│   │
│   ├── screenshots/
│   │
│   └── videos/
│       ├── authentication/
│       ├── cart/
│       ├── checkout/
│       ├── footer/
│       ├── products/
│       └── sidebar/
│
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md
```

---
 # ⚙️ Prerequisites

 Make sure the following are installed:

 - Node.js 22
- npm
- Git
- VS Code or another code editor

 Verify the installation:

```
node --version
npm --version
git --version
```

 See **Quick Start** section below to clone and set up the project.

---

 # 🌐 Environment Configuration
**Security:** Use GitHub Actions Secrets for CI/CD: `CYPRESS_PASSWORD`

---

 # 📦 Available npm Scripts

| Command | Description | Use Case |
|---|---|---|
| `npm run cy:open` | Interactive Cypress Test Runner | Local development & debugging |
| `npm run test` or `npm run cy:run` | Run all tests (headless) | CI/CD & automated execution |
| `npm run test:chrome` | Run all tests in Chrome | Browser-specific testing |
| `npm run test:headed` | Run tests with browser visible | Visual debugging |
| `npm run report:html` | Generate HTML test report | Report generation |

---

 # 🎨 Custom Cypress Commands

Reusable commands available in `cypress/support/commands.js`:

```javascript
cy.login(username, password)           // Login to SauceDemo
cy.addAllProductsToCart()              // Add all products to cart
cy.fixture('users')                     // Load test data
```

---

 # 🌍 Browser & Environment Support

| Feature | Support | Notes |
|---|---|---|
| **Chrome** | ✅ Fully Supported | Primary browser for CI/CD |
| **Firefox** | ✅ Supported | Can run locally with `--browser firefox` |
| **Edge** | ✅ Supported | Can run locally with `--browser edge` |
| **Headless Mode** | ✅ Fully Supported | Default for CI/CD |
| **Headed Mode** | ✅ Fully Supported | For local debugging |
| **Viewport** | ✅ 1280x720 | Configured in cypress.config.js |
| **Node.js 22** | ✅ Required | Specified in GitHub Actions |

---

 # 🚀 Quick Start (5 Minutes)

1. **Clone & Install:**
   ```bash
   git clone https://github.com/Nandana106/saucedemo-cypress.git
   cd saucedemo-cypress
   npm install
   ```

2. **Run Tests Interactively:**
   ```bash
   npm run cy:open
   ```
   Select a test file and watch it run!

3. **Run All Tests (Headless):**
   ```bash
   npm run test
   ```

4. **Generate Report:**
   ```bash
   npm run report:html
   ```
   Open `cypress/reports/html/index.html` in browser

5. **View Results:**
   - Screenshots: `cypress/screenshots/`
   - Videos: `cypress/videos/`
   - Reports: `cypress/reports/html/`

---

 # 🔄 CI/CD – GitHub Actions

 The framework supports automated test execution using GitHub Actions with **parallel test execution** for faster feedback.

 ## Workflow Triggers

 The `.github/workflows/cypress.yml` workflow runs on:

 - **Push** to `main` branch
- **Pull Requests** to `main` branch
- **Manual trigger** (workflow_dispatch)

 ## Parallel Test Execution

 Tests are executed in parallel using a **matrix strategy** with 6 concurrent jobs, one for each test category:

| Job | Spec Pattern | Tests |
|---|---|---|
| Authentication | `cypress/e2e/authentication/**/*.cy.js` | Login, Invalid Login, Locked User, Logout |
| Products | `cypress/e2e/products/**/*.cy.js` | Product Listing, Sorting, Details |
| Cart | `cypress/e2e/cart/**/*.cy.js` | Add to Cart, Remove from Cart |
| Checkout | `cypress/e2e/checkout/**/*.cy.js` | Checkout Details, Place Order, Order Confirmation |
| Footer | `cypress/e2e/footer/**/*.cy.js` | Footer Validation |
| Sidebar | `cypress/e2e/sidebar/**/*.cy.js` | Sidebar Navigation |

 This parallel execution significantly reduces total CI/CD run time.

 ## Workflow Configuration

 📄 **View the complete workflow:** [`.github/workflows/cypress.yml`](.github/workflows/cypress.yml)

---

 # 🔐 GitHub Secrets

 Set `CYPRESS_PASSWORD` secret in GitHub repository settings for CI/CD authentication.

---

 # 🔧 Troubleshooting

| Issue | Solution |
|---|---|
| **Tests fail with "Cannot find module"** | Run `npm install` to install dependencies |
| **Screenshots/Videos missing** | Ensure `cypress/screenshots/` and `cypress/videos/` folders exist |
| **SauceDemo app not loading** | Check internet connection; verify `baseUrl: 'https://www.saucedemo.com'` in config |
| **Timeout errors** | Increase timeout in `cypress.config.js` or check app performance |
| **Test reports not generating** | Verify `cypress/reports/` folder exists and has write permissions |
| **GitHub Actions failing** | Check `CYPRESS_PASSWORD` secret is set in repository settings |
| **Parallel tests interfering** | Ensure tests are independent; use `cy.session()` for login optimization |

---

 # 📈 Future Enhancements

 - [ ] Allure Reporting
- [ ] ESLint Integration
- [ ] Prettier Integration
- [ ] Test Tagging
- [ ] Cross-Browser Testing
- [ ] cy.session() for authentication
- [ ] Visual Regression Testing

---

 # 👨‍💻 Author

 **Nandana Nambiar** | QA Automation Engineer | Cypress | JavaScript | UI Automation | CI/CD

 # 📄 License

 This project is created for learning, demonstration, and test automation practice.

 # ⭐ Support

 If you find this project useful, consider giving the repository a ⭐ on [GitHub](https://github.com/Nandana106/saucedemo-cypress)