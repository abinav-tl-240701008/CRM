# FlowCRM

A modern CRM web application for managing leads, companies, contacts, tasks, sales pipeline stages, and reports. FlowCRM is built with React, TypeScript, Vite, Supabase, and Azure Static Web Apps.

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Vite](https://img.shields.io/badge/Vite-7-646CFF)
![Supabase](https://img.shields.io/badge/Supabase-Auth%20%2B%20Database-3ECF8E)
![Azure Static Web Apps](https://img.shields.io/badge/Azure-Static%20Web%20Apps-0078D4)

## Overview

FlowCRM gives sales teams a single workspace for tracking prospects from first contact to closed deal. The app includes a public landing page, Supabase authentication, a protected CRM dashboard, a drag-and-drop pipeline board, searchable lead and company records, task tracking, and PDF report export.

## Features

- Public marketing landing page served from `public/landing`.
- Supabase email/password sign in and sign up.
- Protected CRM routes with persisted Supabase sessions.
- Dashboard with sales KPIs, activity feed, and pipeline summaries.
- Drag-and-drop Kanban pipeline powered by `@dnd-kit`.
- Lead CRUD, lead detail modals, stage movement, tags, notes, and deal values.
- CSV lead import using the format in `sample-leads.csv`.
- Company and contact management with relationship fields.
- Task management with priority, due date, and completion state.
- Global fuzzy search across leads and companies.
- Reports page with PDF export using `jspdf`.
- Responsive UI with CSS modules, Framer Motion, and Lucide icons.

## Tech Stack

| Area | Technology |
| --- | --- |
| Frontend | React 19, TypeScript |
| Build tool | Vite 7 |
| Routing | React Router |
| State | React Context |
| Backend | Supabase Auth and Supabase database |
| Drag and drop | `@dnd-kit` |
| Animation | Framer Motion |
| Icons | Lucide React |
| PDF export | jsPDF |
| Hosting | Azure Static Web Apps |

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm
- Supabase project
- Azure Static Web Apps resource, only required for deployment

### Install

```bash
git clone https://github.com/abinav-tl-240701008/CRM.git
cd CRM
npm install
```

### Environment Variables

Create a local `.env` file from the example:

```bash
cp .env.example .env
```

Required variables:

| Variable | Description |
| --- | --- |
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `VITE_APP_TITLE` | App title used by the frontend |
| `VITE_APP_VERSION` | App version or build identifier |

### Run Locally

```bash
npm run dev
```

Open the local URL printed by Vite.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and build production assets |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

## Supabase Setup

The app expects these Supabase tables:

| Table | Purpose |
| --- | --- |
| `companies` | Account records |
| `contacts` | People linked to companies |
| `leads` | Sales opportunities and pipeline records |
| `tasks` | Follow-up work linked to leads or contacts |
| `activities` | Notes and timeline events |
| `settings` | Per-user UI and pipeline settings |

The frontend uses camelCase TypeScript fields and maps them to snake_case Supabase columns where needed, for example `companyId` to `company_id`, `leadId` to `lead_id`, and `createdAt` to `created_at`.

If you enable row-level security for per-user data, add user ownership columns to the relevant tables and update the queries in `src/store/CRMContext.tsx` so each select, insert, update, and delete is scoped to the authenticated user.

## CSV Import

Lead import is available from the Leads page. Use `sample-leads.csv` as the reference format:

```csv
name,email,phone,company,position,value,stage,tags,notes
```

Supported pipeline stages are:

```text
lead, contacted, qualified, proposal, won, lost
```

## Routing

Public routes:

| Route | Description |
| --- | --- |
| `/landing` | React route that sends unauthenticated users to the static landing page |
| `/landing/index.html` | Static landing page |
| `/login` | Sign in and sign up page |

Protected routes:

| Route | Description |
| --- | --- |
| `/` | Dashboard |
| `/pipeline` | Kanban pipeline |
| `/leads` | Leads list and CSV import |
| `/companies` | Company records |
| `/contacts` | Contact records |
| `/tasks` | Task manager |
| `/reports` | Analytics and PDF export |
| `/settings` | User and pipeline settings |

## Project Structure

```text
src/
  App.tsx
  main.tsx
  index.css
  assets/
  components/
    GlobalSearch.tsx
    KanbanBoard.tsx
    Layout.tsx
    LeadCard.tsx
    LeadModal.tsx
    Modal.tsx
    Sidebar.tsx
  lib/
    supabase.ts
  pages/
    Companies.tsx
    Contacts.tsx
    Dashboard.tsx
    Landing.tsx
    Leads.tsx
    Login.tsx
    Pipeline.tsx
    Reports.tsx
    Settings.tsx
    Tasks.tsx
  store/
    AuthContext.tsx
    CRMContext.tsx
    SearchContext.tsx
  types/
    index.ts
  utils/
    index.ts
public/
  landing/
    index.html
    script.js
    styles.css
```

## Azure Deployment

The project is configured for Azure Static Web Apps using `.github/workflows/azure-static-web-apps.yml`.

Deployment flow:

1. GitHub Actions installs dependencies with `npm ci`.
2. The app is built with `npm run build`.
3. The generated `dist` folder is uploaded to Azure.
4. `staticwebapp.config.json` handles SPA fallback, static asset MIME types, and security headers.

Required GitHub secrets:

| Secret | Purpose |
| --- | --- |
| `AZURE_STATIC_WEB_APPS_API_TOKEN` | Azure deployment token |
| `VITE_SUPABASE_URL` | Supabase project URL for production builds |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon key for production builds |

## Notes

- The static landing page assets are served from `/landing/styles.css` and `/landing/script.js`.
- The main CRM application is rendered by React from `src/main.tsx`.
- `staticwebapp.config.json` excludes `/landing/*` and `/assets/*` from SPA fallback so Azure serves those files directly.
- The repository includes `USER_STORIES.md` for Azure DevOps-style user stories.
