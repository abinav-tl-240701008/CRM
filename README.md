# FlowCRM

A modern, full-featured Customer Relationship Management (CRM) web application built with React, TypeScript, and Supabase, deployed on Azure Static Web Apps.

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![Azure](https://img.shields.io/badge/Azure-Static%20Web%20Apps-0078D4)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E)

## Overview

FlowCRM helps businesses manage their sales pipeline, track leads, organize contacts, and monitor team performance — all from a single intuitive interface. It features a drag-and-drop Kanban pipeline, real-time data sync, animated dashboards, and PDF report generation.

## Features

- **Dashboard** — KPI cards, activity feed, and pipeline overview with animated charts
- **Pipeline Board** — Drag-and-drop Kanban board for visual lead tracking
- **Leads Management** — Full CRUD with CSV bulk import, filtering, and search
- **Companies** — Company directory with industry and size tracking
- **Contacts** — Contact management linked to companies
- **Tasks** — Task tracking with priority levels and due dates
- **Reports** — Analytics dashboard with PDF export
- **Authentication** — Secure login with Supabase Auth and session persistence
- **Global Search** — Search across leads, contacts, and companies instantly
- **Responsive UI** — Clean design with Framer Motion animations

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, TypeScript 5.9 |
| Build Tool | Vite 7 |
| Backend | Supabase (PostgreSQL + Auth + Realtime) |
| Hosting | Azure Static Web Apps |
| CI/CD | GitHub Actions |
| Drag & Drop | @dnd-kit |
| Animations | Framer Motion |
| Icons | Lucide React |
| PDF Export | jsPDF |

## Project Structure

src/
├── components/ # Reusable UI components
│ ├── Layout.tsx # App layout with sidebar
│ ├── Sidebar.tsx # Navigation sidebar
│ ├── KanbanBoard.tsx # Drag-and-drop pipeline board
│ ├── LeadCard.tsx # Pipeline lead cards
│ ├── LeadModal.tsx # Lead detail/edit modal
│ ├── Modal.tsx # Generic modal component
│ ├── DeleteModal.tsx # Delete confirmation dialog
│ └── GlobalSearch.tsx # App-wide search
├── pages/ # Route pages
│ ├── Dashboard.tsx
│ ├── Pipeline.tsx
│ ├── Leads.tsx
│ ├── Companies.tsx
│ ├── Contacts.tsx
│ ├── Tasks.tsx
│ ├── Reports.tsx
│ ├── Settings.tsx
│ ├── Login.tsx
│ └── Landing.tsx
├── store/ # State management (React Context)
│ ├── CRMContext.tsx
│ ├── AuthContext.tsx
│ └── SearchContext.tsx
├── lib/
│ └── supabase.ts # Supabase client setup
├── types/
│ └── index.ts # TypeScript interfaces & types
├── utils/
│ └── index.ts # Helper functions
├── App.tsx # Router & provider setup
└── main.tsx # Application entry point

text


## Getting Started

### Prerequisites

- Node.js 20+
- npm 9+
- Supabase account (free tier)
- Azure account (student free tier)

### Installation

```bash
# Clone the repository
git clone https://github.com/abinav-tl-240701008/CRM.git
cd CRM

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Start development server
npm run dev

Environment Variables
Variable	Description
VITE_SUPABASE_URL	Your Supabase project URL
VITE_SUPABASE_ANON_KEY	Your Supabase anonymous/public key
Deployment

The application is deployed on Azure Static Web Apps with automatic CI/CD via GitHub Actions. Every push to main triggers a build and deploy pipeline.
