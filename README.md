# CampusFiltr

A static academic portal and notice dashboard for BIT Sindri, built using plain HTML, CSS, and JavaScript with a lightweight Node.js server for local hosting.

The project presents official institute notices, circulars, academic information, student services, and department content in a clean, responsive portal interface.

## Overview

This portal is designed to look and behave like a university information hub with:

- an institutional header and navigation bar
- notice and circular listing with filters
- cohort-based academic filtering
- urgency and deadline tracking
- student attendance eligibility simulator
- result lookup section
- grievance submission and tracking
- fee estimation tools
- department profile popups
- tender, holiday, and academic information sections

## Features

### Notice and Circular System
- Browse a curated set of official notices and circulars
- Filter by programme, branch, semester, and entry type
- Search by keyword
- Apply urgency filters such as due soon or no deadline
- See active filters as removable chips
- Open detailed notice information in modal views

### Student Services
- Attendance check and eligibility simulator
- Grade card / result display mockup
- Grievance logging and tracking overview
- Fee estimator for academic calculations
- Guest house booking confirmation section

### Institutional Content
- About BIT Sindri sections
- Administration and academic information pages
- Department profiles and research/lab details
- Placement, alumni, and ranking sections
- Holidays and statutory/proforma-related content

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Node.js HTTP server

## Project Structure

```text
.
├── app.js              # Portal logic, data, filters, modals, and interactivity
├── index.html          # Main portal structure and markup
├── styles.css          # UI styling and responsive behavior
├── server.js           # Local static file server
├── bit-sindri-logo.svg # Institutional logo asset
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Run locally

From the project root:

```bash
npm start
```

Or directly:

```bash
node server.js
```

Then open:

```text
http://localhost:5173/
```

## Scripts

In `package.json`:

```json
"scripts": {
  "dev": "node server.js",
  "start": "node server.js"
}
```

## Notes

- This is a front-end prototype/static portal, not a production backend-driven system.
- The data is embedded in JavaScript and rendered dynamically in the browser.
- No external package installation is required for the basic app to run.

## Purpose

The project demonstrates a complete academic portal experience for a college website with a modern dashboard layout, institutional structure, and interactive tools for students.

## License

ISC
