# Operator Portal

A production-ready Vue 3 + TypeScript Single Page Application (SPA) built with a modular architecture

## Project Architecture

This project follows a **Domain-Driven Modular** structure to ensure high maintainability and scalability.

### Core Structure

* **`src/modules/`**: The application is split into feature-based modules (e.g., `home`, `security`). Each module is self-contained with its own components, views, and local state.
* **`src/services/`**: The **Data Access Layer**. All API logic is decoupled from the UI. 
* **`src/mocks/`**: Contains static JSON data that mimics real backend responses. This enables rapid prototyping without a live backend.
* **`src/stores/`**: Global state management via **Pinia**. It coordinates data flow between services and components, managing `loading` and `error` states globally.
* **`src/layouts/`**: Shared UI wrappers (Sidebars, Navbars) that provide a consistent shell for all feature modules.

---

## Code Quality & Standards

Use a "Shift-Left" approach to quality, catching errors locally before they ever reach the repository.

| Guard | Tool | Responsibility |
| :--- | :--- | :--- |
| **Linting** | `Oxlint` & `ESLint` | Enforces logic standards and catches "code smells." |
| **Type Checking** | `vue-tsc` | Ensures strict TypeScript compliance and prevents data type mismatches. |
| **Formatting** | `Prettier` | Maintains a unified visual style (indentation, quotes, etc.). |
| **Unit Testing** | `Vitest` | Validates that Services and Stores process data as expected. |

---

## Getting Started

To get the project running locally, simply run:

```bash
chmod +x setup.sh
./setup.sh