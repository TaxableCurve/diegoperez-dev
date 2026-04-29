---
title: "Agricultural insurance claims automation"
summary: "System that cut collective policy settlement time from up to a week down to a day for agricultural cooperatives across Colombia."
role: "Full-stack"
stack: ["Angular", "Spring Boot", "PostgreSQL"]
client: "Agroindustrial sector client"
year: 2024
featured: true
order: 1
draft: false
---

## Context

A client in the collective agricultural insurance sector. Policies covered agricultural workers grouped in cooperatives, and indemnification depended on climate parameters (rainfall and drought) based on the crop season.

## Problem

The settlement process was entirely manual: one person would download an Excel file with the farmers list, check climate parameters one by one, query external sources and decide whether each farmer met the conditions for indemnification. The process was slow, error-prone and did not scale with policy volume.

## Technical decisions

Spring Boot for the backend due to its robust ecosystem for external API integrations and tabular data processing. PostgreSQL to persist the settlement history and support auditing. Angular on the frontend to maintain consistency with the company's stack.

The most important decision was designing the flow around the existing Excel file: instead of forcing users to change their working format, the system accepts the same file they were already using.

## Implementation

- Excel upload with Apache POI: the user uploads the file with the farmers list and season parameters.
- Processing pipeline: for each record, external climate data endpoints are called, results are crossed against policy parameters and indemnification conditions are evaluated.
- Configurable rules engine: rainfall/drought thresholds per season are managed without code changes.
- Per-record result: approved / rejected / pending manual review, with full traceability of why each decision was made.

## Result

A process that previously took up to a week now completes in a day — and often in just a few hours. Each file represented a cooperative with dozens to hundreds of farmers. Transcription errors were eliminated and every decision is recorded with its justification, simplifying internal audits.

## Lessons learned

The rules engine turned out to be the most valuable part of the project. If I were starting over I would design it as a standalone component from day one, rather than something that emerged mid-development when we realized parameters changed frequently.
