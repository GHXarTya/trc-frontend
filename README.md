# IBD Team Thyroid Cancer Website

### The project is a frontend application built using Next.js.

## Project Structure Overview

### /public Directory

Contains various static files used throughout the application, such as images, icons, and other media assets.

### /src Directory

- **/api**: Contains TypeScript service files that handle API requests and interactions.
  - **_admin.service.ts_**: Manages API calls related to admin functionalities.
  - **_api.config.ts_**: Central configuration for API requests, including base URLs and headers.
  - **_api.helper.ts_**: Utility functions to assist with API operations.
  - **_appointment.service.ts_**: API service specifically for handling appointments.
  - **_imgbb.service.ts:_** Handles image uploads to the ImgBB service.
  - **_messages.service.ts_**: Manages API calls related to messages for localization.
- **/app**: Next.js directory for routing and page components, handling localization and layout.
  - **_[locale]_**: Dynamic routing based on locale.
    - **_[...rest]/page.tsx_**: Catch-all route for handling various paths.
    - **_admin/page.tsx_**: Page component for the admin panel.
    - **_layout.tsx_**: Defines the global layout structure for the application, which is dynamically determined by the locale parameter.
    - **_not-found.tsx_**: Custom 404 page.
    - **_page.tsx_**: The main entry point for rendering sections.
- **/assets**: Contains resources like fonts and global styles.
  - **_/fonts_**: Font files used throughout the application.
  - **_/styles_**: SCSS stylesheets for global styles, utilities, and specific components.
- **/components**: Reusable UI components, split into subdirectories for organizational purposes.
  - **_/layout_**: Components related to the overall structure.
    - **_/header_**: Header component with subcomponents for admin, locale selection, menu, and modals.
  - **_/sections_**: High-level sections, each with its own set of components.
  - **_/ui_**: Basic UI elements like buttons, inputs, loaders, modals and text, also includes elements used in the admin panel.
- **/config**: Configuration files for different aspects of the application.
  - **_admin.config.ts_**: Configuration related to admin functionalities.
  - **_locale.config.ts_**: Manages locales and their associated routes.
  - **_routes.config.ts_**: Defines the route structure of the application.
  - **_sections.config.ts_**: Maps high-level sections to their respective components.
- **/hooks**: Custom React hooks that encapsulate reusable logic.
  - **_useIntlLocale.ts_**: Fetches dynamically determined locale parameter.
  - **_useIntlMessages.ts_**: Fetches and manages localized messages.
  - **_useScrollTop.ts_**: Hook for Y scroll calculation.
  - **_useSectionLocation.ts_**: Tracks the Y location of sections.
  - **_useSections.ts_**: Fetches and manages sections.
  - **_useViewportSize.ts_**: Handles calculations related to viewport size.
- **/messages**: Contains the structure of localization files.
  - **_markup.json_**: JSON file with markup of localized messages.
- **/providers**: Contains components that provide context or state to the application.
  - **_/react-query-provider_**: Sets up React Query for managing server state.
- **/store**: Contains state management logic.
  - **_index.ts_**: Centralized Zustand store configuration.
- **/types**: TypeScript interfaces and types for strict type-checking.
  - **_api.interface.ts_**: Interfaces for API.
  - **_config.interface.ts_**: Types related to the configuration files.
  - **_hooks.interface.ts_**: Interfaces used within custom hooks.
  - **_store.interface.ts_**: Types and interfaces for state management.
- **/utils**: Utility functions for various operations.
  - **_debounce.ts_**: Function for debouncing calls to prevent excessive executions.
  - **_i18n.ts_**: Handles localization-related logic.
- **middleware.ts**: Custom middleware that handles incoming requests, including locale detection and routing.

### Root Level

- **global.d.ts**: Contains custom types for localized messages.

## Project Dependencies Overview

The **package.json** file lists the project dependencies that include the core libraries and tools needed to develop, build, and run the application. Below is an overview of the selective packages used in this project:

- **_@ant-design/react-slick_**: A React component wrapper for the popular Slick carousel. It provides a highly customizable and responsive carousel for displaying content in a sliding format.
- **_@nextui-org/calendar_**: A calendar component from NextUI, used for handling date selection.
- **_@internationalized/date_**: A library that provides utilities for working with dates in different locales.
- **_next-intl_**: A library for managing localization in Next.js applications. It provides tools for loading, formatting, and rendering localized messages based on the user’s locale.

### Development Dependencies

- **_@trivago/prettier-plugin-sort-imports_**: A Prettier plugin that automatically sorts imports, ensuring a consistent and organized import structure in the codebase.

## Project Exploitation Instructions

The project uses **Yarn** as the package manager. Use standard Next.js commands for development, production, and building the application.

### Environment Configuration

The project uses environment variables stored in a **.env** file to manage key configurations. These variables are essential for the successful operation of the application:

- **_API_URL_**: Specifies the base URL for the primary API used by the application. This is crucial for making API requests throughout the app, especially for managing localized messages.

- **_APPOINTMENT_API_URL_**: Defines the base URL for the appointment API. Specifically used by the appointment.service.ts file to handle booking appointments, fetch available times, and manage appointment-related data.

- **_IMGBB_API_KEY_**: An API key for the ImgBB service, used by the imgbb.service.ts to upload images. This key authenticates the application’s requests to ImgBB, allowing image storage.

Ensure that these variables are correctly set in your .env file for the application to function as intended.
