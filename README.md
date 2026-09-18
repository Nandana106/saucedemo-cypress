# 🧪 Cypress Automation Framework – SauceDemo E-commerce

![Cypress](https://img.shields.io/badge/Cypress-Testing_Framework-17202C?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=github-actions&logoColor=white)

A maintainable and scalable **Cypress UI automation framework** for testing the [SauceDemo](https://www.saucedemo.com/) e-commerce application.

This project demonstrates real-world test automation practices including **Page Object Model, Fixtures, Custom Commands, Hooks, Assertions, Aliases, Environment Variables, Data-Driven Testing, Screenshots, Videos, Reporting, and GitHub Actions CI/CD**.

---

## 📌 Application Under Test

**Application:** SauceDemo
**URL:** https://www.saucedemo.com/

SauceDemo is a sample e-commerce application covering:

- User Authentication
- Product Listing
- Product Sorting
- Product Details
- Shopping Cart
- Checkout
- Order Placement
- Order Confirmation

---

## 🎯 Project Objectives

The goal of this project is to build a **professional, reusable, maintainable, and scalable Cypress automation framework** rather than simply automating individual test cases.

### Key Objectives

- Implement Page Object Model
- Create reusable Cypress commands
- Use fixtures for test data
- Use hooks effectively
- Implement meaningful assertions
- Use aliases for reusable elements/data
- Support data-driven testing
- Capture screenshots and videos
- Generate test reports
- Integrate tests with GitHub Actions
- Follow clean and maintainable automation practices

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

# 🏗️ Framework Architecture

```text
                        Cypress Framework
                              │
              ┌───────────────┴───────────────┐
              │                               │
         Test Specs                       Test Data
              │                               │
       cypress/e2e/                    cypress/fixtures/
              │
              ▼
       Page Object Model
       cypress/pages/
              │
              ▼
      Custom Commands
      cypress/support/
              │
              ▼
        SauceDemo App
              │
              ▼
       Test Evidence
    Screenshots / Videos
              │
              ▼
          Reporting
              │
              ▼
       GitHub Actions
            CI/CD
````

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

 # 🧩 Technology Stack

 | Technology | Purpose |
| --- | --- |
| Cypress | End-to-End UI Automation |
| JavaScript | Test Scripting |
| Node.js | Runtime Environment |
| Mocha | Test Structure |
| Chai | Assertions |
| Page Object Model | Framework Design |
| Fixtures | Test Data Management |
| Custom Commands | Reusable Actions |
| Mochawesome | Test Reporting |
| Git | Version Control |
| GitHub Actions | CI/CD |

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

---

 # 🚀 Installation

 Clone the repository:

```
git clone https://github.com/Nandana106/saucedemo-cypress.git
```

 Navigate to the project:

```
cd saucedemo-cypress
```

 Install dependencies:

```
npm install
```

---

 # 🌐 Environment Configuration

 Configure the application URL and credentials using Cypress environment variables.

 Example:

```
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    video: true,
    screenshotOnRunFailure: true
  },
  env: {
    standardUser: 'standard_user',
    password: 'YOUR_PASSWORD'
  }
});
```

 Access environment variables:

```
Cypress.env('standardUser');
Cypress.env('password');
```

 > **Security:** Never commit real passwords, API keys, tokens, or other sensitive credentials to the repository. Use environment variables or GitHub Actions Secrets.

---

 # 🔑 SauceDemo Test Users

 Common SauceDemo users:

```
standard_user
locked_out_user
problem_user
performance_glitch_user
error_user
visual_user
```

 Use the password provided by the SauceDemo application.

---

 # 🧱 Page Object Model

 The framework uses the **Page Object Model (POM)** to separate page locators and actions from test scenarios.

 Example:

```
class LoginPage {
  usernameInput = '#user-name';
  passwordInput = '#password';
  loginButton = '#login-button';
  errorMessage = '[data-test="error"]';

  visit() {
    cy.visit('/');
  }

  login(username, password) {
    cy.get(this.usernameInput).clear().type(username);
    cy.get(this.passwordInput).clear().type(password);
    cy.get(this.loginButton).click();
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }
}

export default new LoginPage();
```

 ### Benefits

- Centralized locators
- Reduced duplicate code
- Improved readability
- Easier maintenance
- Better separation of responsibilities

---

 # 🧪 Fixtures

 Test data is maintained separately from test logic.

```
cypress/
└── fixtures/
    ├── users.json
    ├── products.json
    └── checkoutData.json
```

 Example `users.json`:

```
{
  "lockedUser": {
    "username": "locked_out_user"
  },
  "invalidUser": {
    "username": "invalid_user",
    "password": "invalid_password"
  }
}
```

 Load fixture data:

```
cy.fixture('users').as('users');
```

 Access fixture data:

```
this.users.validUser.username
```

---

 # 🔄 Data-Driven Testing

 The framework supports data-driven testing.

 Example:

```
const users = [
  {
    username: 'standard_user',
    expected: 'success'
  },
  {
    username: 'locked_out_user',
    expected: 'locked'
  }
];

users.forEach((user) => {

  it(`should validate login for ${user.username}`, () => {
    // Test implementation
  });

});
```

 ### Benefits

- Reduces duplicate test cases
- Improves test coverage
- Simplifies maintenance
- Makes adding new test data easier

---

 # 🛠️ Custom Cypress Commands

 Common application actions can be implemented as reusable commands.

 Example:

```
Cypress.Commands.add('login', (username, password) => {

  cy.visit('/');

  cy.get('#user-name').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();

});
```

 Usage:

```
cy.login(
  Cypress.env('standardUser'),
  Cypress.env('password')
);
```

 Possible reusable commands:

```
cy.login()
cy.logout()
cy.addProduct()
cy.removeProduct()
cy.completeCheckout()
```

---

 # 🪝 Hooks

 Cypress hooks are used for setup and cleanup.

 ### `before()`

 Runs once before all tests.

```
before(() => {
  // One-time setup
});
```

 ### `beforeEach()`

 Runs before every test.

```
beforeEach(() => {

  cy.login(
    Cypress.env('standardUser'),
    Cypress.env('password')
  );

});
```

 ### `afterEach()`

 Runs after every test.

```
afterEach(() => {
  cy.log('Test execution completed');
});
```

---

 # ✅ Assertions

 Assertions validate expected application behavior.

 Example:

```
cy.url()
  .should('include', '/inventory.html');
```

 Product validation:

```
cy.get('.inventory_item')
  .should('have.length.greaterThan', 0);
```

 Cart validation:

```
cy.get('.shopping_cart_badge')
  .should('have.text', '1');
```

 Order confirmation:

```
cy.get('.complete-header')
  .should('contain.text', 'Thank you');
```

---

 # 🏷️ Aliases

 Aliases make tests more readable and allow elements or data to be reused.

 Example:

```
cy.get('#user-name').as('username');

cy.get('@username')
  .should('be.visible')
  .type('standard_user');
```

 Fixture alias:

```
cy.fixture('users').as('users');
```

---

 # 🛍️ Product Testing

 ## Product Listing

 Validate:

    - Products are displayed
- Product names are visible
- Product prices are displayed
- Product images are displayed
- Add-to-cart buttons are available

 Example:

```
cy.get('.inventory_item')
  .should('have.length.greaterThan', 0);
```

 ## Product Sorting

 Validate:

```
Name (A to Z)
Name (Z to A)
Price (low to high)
Price (high to low)
```

 Example:

```
cy.get('.product_sort_container')
  .select('lohi');
```

 Validate the resulting product prices against the expected sorted order.

 ## Product Details

 Validate:

 - Product name
- Product description
- Product price
- Product image
- Add-to-cart functionality
- Back-to-products navigation

---

 # 🛒 Cart Testing

 Cart functionality includes:

 - Add product
- Remove product
- Validate product name
- Validate quantity
- Validate product price
- Validate cart badge
- Continue shopping
- Proceed to checkout

 Example:

```
productsPage.addProduct('Sauce Labs Backpack');

cartPage.openCart();

cartPage.verifyProduct('Sauce Labs Backpack');
```

---

 # 💳 Checkout Testing

 Checkout flow:

```
Product
   ↓
Add to Cart
   ↓
Cart
   ↓
Checkout
   ↓
Customer Information
   ↓
Overview
   ↓
Place Order
   ↓
Order Confirmation
```

 Customer information:

```
First Name
Last Name
Postal Code
```

 Example:

```
checkoutPage.enterCustomerDetails(
  'John',
  'Doe',
  '12345'
);
```

---

 # 🎉 Order Confirmation

 After placing an order, validate:

 - Checkout completion
- Confirmation page
- Confirmation message
- Order completion

 Example:

```
cy.get('.complete-header')
  .should('be.visible')
  .and('contain.text', 'Thank you for your order');
```

---

 # 📸 Screenshots and Videos

 Cypress can capture screenshots when tests fail and record test execution videos.

 Configuration:

```
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: true,
    video: true
  }
});
```

 Screenshots:

```
cypress/screenshots/
```

 Videos:

```
cypress/videos/
```

 These artifacts help with debugging failed tests locally and in CI/CD.

---

 # 📊 Test Reporting

 The project uses **Cypress Mochawesome Reporter** for automated HTML test reports.

 Installed Package:

```
cypress-mochawesome-reporter (v3.8.4)
```

 This plugin automatically generates HTML reports after test execution.

 ### Current npm Scripts:

```
{
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "test": "cypress run",
    "test:chrome": "cypress run --browser chrome",
    "test:headed": "cypress run --headed"
  }
}
```

 Report location:

```
cypress/reports/html/
```

 The HTML report will be automatically generated in the `cypress/reports/html/` directory after test execution.

---

 # ▶️ Running Tests

 ## Open Cypress Test Runner

```
npm run cy:open
```

 Or:

```
npx cypress open
```

---

 ## Run All Tests

```
npm run cy:run
```

 Or:

```
npm test
```

---

 ## Run Tests in Chrome

```
npm run test:chrome
```

---

 ## Run Tests in Headed Mode

```
npm run test:headed
```

---

 ## Run a Specific Spec

```
npx cypress run --spec "cypress/e2e/authentication/login.cy.js"
```

---

 # 📦 NPM Scripts

 The project uses the following npm scripts:

```
{
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "test": "cypress run",
    "test:chrome": "cypress run --browser chrome",
    "test:headed": "cypress run --headed"
  }
}
```

 | Command | Description |
| --- | --- |
| `npm run cy:open` | Opens Cypress Test Runner |
| `npm run cy:run` | Runs all Cypress tests |
| `npm test` | Runs all Cypress tests |
| `npm run test:chrome` | Runs tests using Chrome |
| `npm run test:headed` | Runs tests in headed mode |

---

 # 🔄 CI/CD – GitHub Actions

 The framework supports automated test execution using GitHub Actions.

 Example `.github/workflows/cypress.yml`:

```
name: Cypress E2E Tests

on:
  push:
    branches:
      - main

  pull_request:
    branches:
      - main

  workflow_dispatch:

jobs:
  cypress:

    runs-on: ubuntu-latest

    steps:

      # 1. Checkout repository
      - name: Checkout repository
        uses: actions/checkout@v4

      # 2. Setup Node.js
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      # 3. Install dependencies
      - name: Install dependencies
        run: npm ci

      # 4. Run Cypress tests
      - name: Run Cypress tests
        uses: cypress-io/github-action@v7
        with:
          browser: chrome
        env:
          CYPRESS_password: ${{ secrets.CYPRESS_PASSWORD }}

      # 5. Upload screenshots
      - name: Upload Cypress screenshots
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: cypress-screenshots
          path: cypress/screenshots/
          if-no-files-found: ignore

      # 6. Upload videos
      - name: Upload Cypress videos
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: cypress-videos
          path: cypress/videos/
          if-no-files-found: ignore

      # 7. Upload HTML reports
      - name: Upload Cypress reports
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: cypress-reports
          path: cypress/reports/html/
          if-no-files-found: ignore
```

---

 # 🔁 CI/CD Workflow

```
Developer Push
      ↓
GitHub Repository
      ↓
GitHub Actions
      ↓
Install Dependencies
      ↓
Run Cypress Tests
      ↓
Generate Screenshots / Videos
      ↓
Upload Artifacts
      ↓
Test Result
```

---

 # 🧹 Code Quality Guidelines

 ### Avoid Duplicate Code

 Move common functionality into:

 - Page Objects
- Custom Commands

 ### Keep Tests Readable

 Tests should describe business behavior.

 Example:

```
it('should add a product to the cart', () => {

  productsPage.addProduct('Sauce Labs Backpack');

  cartPage.openCart();

  cartPage.verifyProduct('Sauce Labs Backpack');

});
```

 ### Centralize Locators

 Avoid repeating selectors throughout multiple test files.

 Instead of:

```
cy.get('#user-name');
```

 Use:

```
loginPage.enterUsername(username);
```

 ### Separate Test Data

 Use fixtures for reusable test data.

 ### Use Stable Selectors

 Prefer:

```
[data-test="login-button"]
```

 when available instead of fragile CSS selectors.

---

 # 🧪 Example Test Case

```
import LoginPage from '../../pages/LoginPage';

describe('Authentication - Login', () => {

  beforeEach(() => {
    cy.visit();
  });

  it('should login successfully with valid credentials', () => {

    LoginPage.login(
      Cypress.env('standardUser'),
      Cypress.env('password')
    );

    cy.url()
      .should('include', '/inventory.html');

    cy.get('.title')
      .should('have.text', 'Products');

  });

});
```

---

 # 📋 Test Scenario Matrix

 | Module | Scenario | Type | File |
| --- | --- | --- | --- |
| Authentication | Valid Login | Positive | valid-login.cy.js |
| Authentication | Invalid Login | Negative | invalid-login.cy.js |
| Authentication | Locked User | Negative | locked-user.cy.js |
| Authentication | Logout | Functional | logout.cy.js |
| Products | Product Listing | UI / Functional | product-listing.cy.js |
| Products | Product Sorting | Functional | product-sorting.cy.js |
| Products | Product Details | Functional | product-details.cy.js |
| Cart | Add to Cart | Functional | add-to-cart.cy.js |
| Cart | Remove from Cart | Functional | remove-from-cart.cy.js |
| Checkout | Checkout Details | Functional | checkout-details.cy.js |
| Checkout | Place Order | End-to-End | place-order.cy.js |
| Checkout | Order Confirmation | Validation | order-confirmation.cy.js |
| Footer | Footer Validation | UI / Functional | footer.cy.js |
| Sidebar | Sidebar Navigation | Functional | sidebar.cy.js |

---

 # 🧠 Framework Design Principles

 The framework is designed around:

```
                    Maintainability
                          │
             ┌────────────┴────────────┐
             │                         │
        Page Objects              Custom Commands
             │                         │
             └────────────┬────────────┘
                          │
                    Test Specifications
                          │
             ┌────────────┴────────────┐
             │                         │
        Test Data                  Assertions
             │                         │
             └────────────┬────────────┘
                          │
                       Reports
                          │
                         CI/CD
```

 ### Framework Goals

 - Scalable
- Reusable
- Readable
- Maintainable
- CI/CD friendly
- Easy to debug

---

 # 🐛 Debugging Failed Tests

 Open Cypress interactively:

```
npm run cy:open
```

 Use `cy.pause()`:

```
cy.pause();
```

 Use `cy.debug()`:

```
cy.debug();
```

 Review screenshots:

```
cypress/screenshots/
```

 Review videos:

```
cypress/videos/
```

---

 # 📈 Future Enhancements

 - [ ] Allure Reporting
- [ ] ESLint Integration
- [ ] Prettier Integration
- [ ] Test Tagging
- [ ] Parallel Test Execution
- [ ] Cross-Browser Testing
- [ ] Docker Execution
- [ ] Slack/Teams Notifications
- [ ] GitHub Pages Report Publishing
- [ ] Accessibility Testing
- [ ] API Testing
- [ ] Visual Regression Testing
- [ ] Test Retry Strategy
- [ ] Advanced CI Artifact Management

---

 # 🏆 Cypress Concepts Demonstrated

```
✅ Cypress E2E Testing
✅ Page Object Model
✅ Fixtures
✅ Custom Commands
✅ before()
✅ beforeEach()
✅ afterEach()
✅ Assertions
✅ Aliases
✅ Environment Variables
✅ Data-Driven Testing
✅ Screenshots
✅ Videos
✅ Test Reporting
✅ Git
✅ GitHub Actions
✅ CI/CD
```

---

 # 📚 Learning Outcomes

 This project demonstrates the ability to:

 - Design a maintainable Cypress automation framework
- Automate an end-to-end e-commerce application
- Implement Page Object Model
- Separate test data from test logic
- Create reusable Cypress commands
- Create positive and negative test scenarios
- Implement effective assertions
- Generate test execution evidence
- Configure automated test reporting
- Integrate Cypress with GitHub Actions
- Structure an automation repository for team collaboration
- Build a scalable UI automation framework

---

 # 👨‍💻 Author

 **Nandana Nambiar**

 QA Automation Engineer | Cypress | JavaScript | UI Automation | CI/CD

---

 # 📄 License

 This project is created for learning, demonstration, and test automation practice.

---

 # ⭐ Repository

 If you find this project useful, consider giving the repository a ⭐ on GitHub.