---
title: "IoT monitoring platform for biosecurity kiosk"
summary: "Real-time IoT platform for ~100 biosecurity devices deployed across Colombia during the pandemic. Sole software developer."
role: "Full-stack"
stack: ["Angular", "Node.js", "Firebase", "MongoDB", "Raspberry Pi", "Twilio"]
client: "Technology sector client"
year: 2020
featured: true
order: 3
draft: false
---

## Context

During the COVID-19 pandemic, the company I worked for developed a biosecurity kiosk for access control at businesses, universities, hotels, and banks. The device combined a Colombian national ID reader (PDF417), a medical-grade temperature sensor, a proximity-triggered gel dispenser, and an audio guidance system — all orchestrated from a Raspberry Pi running Node.js. I was the sole software developer on the project.

## Problem

With roughly 100 units deployed across the country, each logging employee and visitor access throughout the day, the company and its clients needed centralized visibility: real-time awareness of what was happening at each location, detection of elevated-temperature alerts, and a historical record per checkpoint. Internet connectivity was not guaranteed at every site.

## Technical decisions

Firebase Realtime Database as the central sync layer: each device stored records locally in MongoDB and uploaded them to Firebase once the connection was restored. This offline-first pattern was critical — several installations had intermittent connectivity and losing records was not acceptable.

Angular with RxJS on the frontend to consume the Firebase stream reactively, without polling. Twilio for SMS notifications to each installation's administrator when a temperature alert was triggered.

## Implementation

- Node.js orchestration on the Raspberry Pi: managing the full flow (presence detection → ID reading → temperature check → gel dispensing) as a state machine.
- Offline-first sync: local persistence in MongoDB with automatic sync to Firebase on reconnect.
- Real-time Angular dashboard with each person's record: ID number, temperature, result, and timestamp.
- Multi-installation view: each company managed only their own devices.
- Automated SMS alerts via Twilio triggered on out-of-range temperature readings.

## Result

The platform ran alongside the deployment of approximately 100 units at companies, universities, hotels, and financial institutions across Colombia. The offline sync system ensured no records were lost at sites with unreliable connectivity.

## Lessons learned

The offline-first pattern was the best decision on the project — made upfront by anticipating that not every site would have stable internet. If I were to do it again, I would design the multi-tenant permission model with more granularity from day one, rather than adjusting it incrementally as the client base grew.
