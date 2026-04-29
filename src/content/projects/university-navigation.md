---
title: "Indoor navigation for a university campus"
summary: "Mobile app with static routes and 360° images to navigate campus buildings without GPS. 5,000+ downloads across Android and iOS."
role: "Mobile"
stack: ["Flutter", "Google Maps SDK", "Dart"]
client: "University"
year: 2022
featured: true
order: 2
draft: false
---

## Context

Senior thesis project. The university campus has multiple enclosed buildings where GPS loses accuracy or stops working entirely. New students and visitors have no reliable way to navigate inside the blocks.

## Problem

Standard GPS has a 5–10 meter error margin outdoors and becomes useless indoors. The solution needed to work without satellite signal and without additional infrastructure (beacons, WiFi fingerprinting).

## Technical decisions

Flutter was chosen to cover both Android and iOS from a single codebase within the thesis timeline. Instead of real-time indoor positioning — expensive to implement and maintain — the app uses predefined static routes: the user selects a destination and the app shows the path from the nearest entrance.

Google Maps SDK handles the outdoor campus map; a custom layer built with vector assets covers the interior floors.

## Implementation

- Campus map with markers for each building, common areas (lake, courts, meeting points) and main entrances.
- Static routing engine: a hand-mapped pedestrian graph with Dijkstra to compute the shortest path from entrance to destination.
- 360° image viewer embedded in each location's detail screen so users can visually recognize the place before arriving.

## Result

Fully functional app, presented and approved as a thesis project. Covers all academic buildings, common areas and meeting points on campus. Available on Android and iOS — over 5,000 downloads across both platforms.

The thesis was published as an academic paper in the international journal *International Journal of Interactive Mobile Technologies (iJIM)*: [Development and Impact of a Mobile Application that Allows Users to Track Their Location on an Educational Institution Campus](https://online-journals.org/index.php/i-jim/article/view/42905).

## Lessons learned

Manual route mapping is the real bottleneck: any change in physical infrastructure requires updating the graph. In a production version I would add an admin panel so campus staff can update routes without touching code.
