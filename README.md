# quadra-frontend-test
Frontend Test - Samuel Beuran

# Quadra Frontend Test Code Documentation

## Table of Contents

1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Dependencies](#dependencies)
4. [Setup and Installation](#setup-and-installation)
5. [WebSocket Server](#websocket-server)
6. [Redux Store](#redux-store)
7. [Components](#components)
   - [NumberDisplay Component](#numberdisplay-component)
8. [Bonus Feature: Number Color Change](#bonus-feature-number-color-change)
9. [Running the Application](#running-the-application)
10. [Acknowledgments](#acknowledgments)

## Overview

This documentation provides an overview of the Quadra Frontend Test codebase, which is designed to meet the following requirements:

- Create a Next.js 13 project.
- Communicate via WebSocket and receive numbers between 1000000 and 9999999 every 100ms.
- Store received numbers in the Redux state.
- Display received numbers in a client-side component.
- Implement a bonus feature to change the number color based on specific conditions.

## Project Structure

The project follows a standard Next.js project structure with some additional components for handling WebSocket communication, Redux state management, and the user interface.

- `pages/`: Contains Next.js pages.
- `components/`: Custom React components.
- `slices/`: Redux slices for state management.
- `middleware/`: Redux middleware for WebSocket integration.
- `public/`: Static assets.
- `styles/`: Stylesheets (using Tailwind CSS).
- `index.js`: WebSocket server code.

## Dependencies

The project relies on the following dependencies:

- `next`: Next.js for frontend development.
- `react` and `react-dom`: Core React libraries.
- `redux` and `react-redux`: For state management.
- `@reduxjs/toolkit`: Redux Toolkit for simplified Redux setup.
- `redux-thunk`: Middleware for asynchronous actions.
- `socket.io-client`: WebSocket client for real-time communication.
- `tailwindcss`: For styling the user interface.

## Setup and Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/sbeuran/quadra-frontend-test.git

Navigate to the project directory:
    
   ```bash
   cd quadra-frontend-test

Install project dependencies:
    
   ```bash
   npm install


## WebSocket Server

- The WebSocket server is implemented in index.js. It's responsible for generating random numbers between 1000000 and 9999999 every 100ms and sending them to connected clients via WebSocket.

## Redux Store

- The Redux store is set up in store.ts using Redux Toolkit. It manages the application state, including the received numbers and their associated colors.

## Components

- NumberDisplay Component
- The NumberDisplay.tsx component displays the received numbers. The color of the number changes based on the following conditions:

- If the new value is greater than the previous one, it changes to green.
- If the new value is lower than the previous one, it changes to red.
- If it is the same, it changes to white.