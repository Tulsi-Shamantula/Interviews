# Lead Management Suite Automation

This project is an automated testing suite for managing Leads within a web application. It uses Playwright for browser automation and is designed to ensure end-to-end validation of the Lead Management functionality. The suite supports serial execution to ensure state persistence across tests without closing the browser.

---

## Features

1. **Persistent Browser Session:**
   - The browser session remains open for the entire suite, preserving state and avoiding re-login.

2. **End-to-End Test Coverage:**
   - Covers creating, editing, filtering, selecting, and deleting leads.

3. **Serial Execution:**
   - Tests execute sequentially using `test.describe.serial`, ensuring dependencies between tests are handled.

4. **Reusability:**
   - Uses a `beforeAll` hook to set up the browser context and login process, shared across all tests.

5. **Playwright Framework:**
   - Modern, fast, and reliable testing framework.

---

## Prerequisites

1. **Node.js:** Install Node.js (>= 14.x recommended).
2. **Playwright:** Ensure Playwright is installed with browser dependencies.
   ```bash
   npm install playwright
   ```

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Test Scenarios

### 1. **User Login**
- **Description:** Logs in to the application using valid credentials.
- **Steps:**
  1. Navigate to the application.
  2. Enter username and password.
  3. Verify successful login.

### 2. **Create Leads**
- **Description:** Creates a new lead with required details.
- **Steps:**
  1. Validate the "Create Lead" page.
  2. Enter company name, last name, and email.
  3. Save the lead.

### 3. **Edit Leads**
- **Description:** Edits an existing lead.
- **Steps:**
  1. Select a lead to edit.
  2. Update the company name.
  3. Save the changes.

### 4. **Filter and Select Leads**
- **Description:** Filters leads by email and selects the desired lead.
- **Steps:**
  1. Filter leads using the email field.
  2. Match the email and select the corresponding lead.

### 5. **Delete Leads**
- **Description:** Deletes a lead after selecting it.
- **Steps:**
  1. Select "More Options" for a lead.
  2. Click delete and confirm the action.

---

## Project Structure

```plaintext
.
├── pages/                     # Page Object Models
│   ├── HomePage.js           # Home Page methods
│   ├── Login.js          # Login Page methods
│   └── Leads.js          # Lead Management methods
├── tests/                     # Test files
│   └── leadManagement.spec.js  # Single test file covers the whole functionality
│   └── leadManagement.spec.js  # Test suite in serial 
├── playwright.config.js       # Playwright configuration
├── package.json               # NPM configuration
├── README.md                  # Project documentation
```

---

## Running Tests

### All Tests
```bash
npx playwright test
```

### Headed Mode
```bash
npx playwright test --headed
```

### Specific Test Suite
```bash
npx playwright test tests/leadManagement.spec.js
```
```bash
npx playwright test tests/leadIndivWf.spec.js
```

---

## Scope of Automation

1. **User Login:**
   - Verifies login functionality with valid credentials.

2. **CRUD Operations on Leads:**
   - Create, edit, filter, select, and delete leads.

3. **State Persistence:**
   - Preserves session across tests for seamless execution.

4. **Sequential Execution:**
   - Ensures dependent tests execute in order.

---

## Future Enhancements

1. **Error Handling:**
   - Add error handling for unexpected scenarios.

2. **Data-Driven Testing:**
   - Use external files (e.g., JSON/CSV) for test data.

3. **Parallel Execution:**
   - Implement parallel execution for independent test suites.

4. **CI/CD Integration:**
   - Integrate with Jenkins Actions for automated pipeline execution.

---

## Troubleshooting

### Issue: Playwright Not Installed
- Run the following command:
  ```bash
  npm install playwright
  ```

### Issue: Browser Not Launching
- Ensure the required browser dependencies are installed:
  ```bash
  npx playwright install
  ```

---