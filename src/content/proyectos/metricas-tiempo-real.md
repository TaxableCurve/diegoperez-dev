---
title: "Plataforma de monitoreo IoT para totem de bioseguridad"
summary: "Plataforma IoT en tiempo real para ~100 dispositivos de bioseguridad en Colombia durante la pandemia. Único desarrollador de software."
role: "Full-stack"
stack: ["Angular", "Node.js", "Firebase", "MongoDB", "Raspberry Pi", "Twilio"]
client: "Cliente del sector tecnológico"
year: 2020
featured: true
order: 3
draft: false
---

## Contexto

Durante la pandemia de COVID-19, la empresa para la que trabajaba desarrolló un totem de bioseguridad para el control de acceso en empresas, universidades, hoteles y bancos. El dispositivo integraba un lector de cédula colombiana (PDF417), sensor de temperatura de precisión médica, dispensador de gel con sensor de proximidad y sistema de audio guiado — todo orquestado desde una Raspberry Pi con Node.js. Fui el único desarrollador de software del proyecto.

## Problema

Con cerca de 100 unidades distribuidas en todo el país, cada una registrando el acceso de empleados y visitantes durante la jornada, la empresa y sus clientes necesitaban visibilidad centralizada: saber en tiempo real qué ocurría en cada instalación, detectar alertas de temperatura elevada y mantener un histórico por punto de control. La conectividad a internet no estaba garantizada en todos los sitios.

## Decisiones técnicas

Firebase Realtime Database como capa de sincronización central: cada dispositivo guardaba los registros en MongoDB local y los subía a Firebase al recuperar conexión. Este patrón offline-first fue crítico — varias instalaciones tenían conectividad intermitente y no podíamos perder registros.

Angular con RxJS en el frontend para consumir el stream de Firebase reactivamente, sin polling. Twilio para notificaciones SMS al administrador de cada instalación ante alertas de temperatura elevada.

## Implementación

- Orquestación en Node.js sobre Raspberry Pi: manejo del flujo completo (detección de presencia → lectura de cédula → toma de temperatura → dispensado de gel) como máquina de estados.
- Sincronización offline-first: persistencia local en MongoDB y sincronización automática con Firebase al recuperar internet.
- Dashboard Angular en tiempo real con el registro de cada persona: documento de identidad, temperatura, resultado y timestamp.
- Vista multi-instalación: cada empresa administraba únicamente sus propios dispositivos.
- Alertas SMS vía Twilio disparadas automáticamente ante temperatura fuera de rango.

## Resultado

La plataforma operó en paralelo al despliegue de aproximadamente 100 unidades en empresas, universidades, hoteles y entidades financieras de Colombia. Algunos clientes operaban varias máquinas simultáneas para flujos de más de 100 empleados; otros instalaban una sola unidad por la que pasaban 50 o más personas al día. El sistema de sincronización offline garantizó que no se perdieran registros en instalaciones con conectividad irregular.

## Aprendizajes

El patrón offline-first fue la decisión más acertada del proyecto — tomada desde el inicio al anticipar que no todos los sitios tendrían internet estable. Si lo repitiera, diseñaría el panel multi-tenant con un modelo de permisos más granular desde el día uno, en lugar de ajustarlo incrementalmente a medida que crecía el número de clientes.
