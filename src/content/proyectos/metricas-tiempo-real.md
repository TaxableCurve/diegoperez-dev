---
title: "Dashboard de métricas en tiempo real"
summary: "Plataforma web que visualiza datos de una máquina industrial transmitidos a Firebase en tiempo real."
role: "Full-stack"
stack: ["Angular", "Node.js", "Firebase"]
client: "Cliente del sector industrial"
year: 2023
featured: true
order: 2
draft: false
---

## Contexto

Cliente del sector industrial con una máquina que transmite datos operativos de forma continua. El equipo de operaciones necesitaba visibilidad en tiempo real sin depender de reportes manuales periódicos.

## Problema

Los datos llegaban al sistema pero no había forma de monitorearlos en vivo. El flujo existente requería exportar registros manualmente y revisarlos después del hecho, lo que impedía detectar anomalías a tiempo.

## Decisiones técnicas

Se eligió Firebase Realtime Database como capa de transporte: la máquina ya empujaba datos ahí y añadir un listener en el frontend era directo. Angular con RxJS permitió manejar el stream de datos de forma reactiva sin polling.

Node.js en el backend se encargó de la normalización y validación de los datos antes de escribirlos en Firebase, aislando la lógica de negocio del cliente.

## Implementación

- Servicio Angular con `AngularFire` suscrito al nodo de Firebase correspondiente a la máquina.
- Componentes de gráficas con actualización en vivo al recibir cada nuevo valor.
- Backend Node.js con reglas de validación y transformación antes de persistir.
- Control de acceso por roles: operadores ven datos en vivo, administradores acceden al histórico.

## Resultado

El equipo de operaciones pasó de revisar reportes con horas de retraso a tener visibilidad instantánea del estado de la máquina. La detección de valores fuera de rango mejoró notablemente al ser visible en el momento en que ocurre.

## Aprendizajes

Firebase Realtime Database funciona bien para este volumen, pero si los datos crecieran considerablemente migraría a Firestore o a una solución con WebSockets propios para tener más control sobre la estructura de consultas.
