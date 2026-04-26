---
title: "Real-time metrics dashboard"
summary: "Web platform that visualizes live data from an industrial machine streamed through Firebase."
role: "Full-stack"
stack: ["Angular", "Node.js", "Firebase"]
client: "Industrial sector client"
year: 2023
featured: true
order: 2
draft: false
---

## Context

An industrial client with a machine that continuously transmits operational data. The operations team needed real-time visibility instead of relying on manual periodic reports.

## Problem

Data was reaching the system but there was no way to monitor it live. The existing workflow required manually exporting records and reviewing them after the fact, making it impossible to detect anomalies in time.

## Technical decisions

Firebase Realtime Database was chosen as the transport layer: the machine was already pushing data there, and adding a frontend listener was straightforward. Angular with RxJS allowed handling the data stream reactively without polling.

Node.js on the backend handled normalization and validation before writing to Firebase, keeping business logic isolated from the client.

## Implementation

- Angular service using `AngularFire` subscribed to the machine's Firebase node.
- Chart components with live updates on each new incoming value.
- Node.js backend with validation and transformation rules before persisting data.
- Role-based access control: operators see live data, admins access historical records.

## Result

The operations team went from reviewing reports with hours of delay to having instant visibility into machine status. Out-of-range value detection improved significantly since anomalies become visible the moment they occur.

## Lessons learned

Firebase Realtime Database works well at this scale, but if data volume grew significantly I would migrate to Firestore or a custom WebSocket solution for better control over query structure.
