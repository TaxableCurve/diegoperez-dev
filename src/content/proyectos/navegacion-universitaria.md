---
title: "Navegación indoor en campus universitario"
summary: "App móvil con rutas estáticas e imágenes 360° para orientarse dentro del campus sin depender de señal GPS."
role: "Mobile"
stack: ["Flutter", "Google Maps SDK", "Dart"]
client: "Universidad"
year: 2022
featured: true
order: 2
draft: false
---

## Contexto

Tesis de grado. El campus universitario tiene múltiples edificios cerrados donde el GPS pierde precisión o deja de funcionar por completo. Los estudiantes nuevos y visitantes no tienen forma de orientarse dentro de los bloques.

## Problema

El GPS estándar tiene un margen de error de 5–10 metros en exteriores y se vuelve inútil en interiores. Se necesitaba una solución que no dependiera de señal satelital y funcionara sin infraestructura adicional (beacons, WiFi fingerprinting).

## Decisiones técnicas

Se eligió Flutter por la necesidad de cubrir Android e iOS con una sola base de código y el tiempo acotado de tesis. En lugar de indoor positioning en tiempo real —costoso de implementar y mantener— se optó por rutas estáticas predefinidas: el usuario selecciona su destino y la app le muestra el camino desde la entrada más cercana.

Google Maps SDK se usó para el mapa exterior del campus; para el interior se construyó una capa personalizada con assets vectoriales de cada planta.

## Implementación

- Mapa del campus con marcadores por edificio, áreas comunes (lago, canchas, puntos de encuentro) y entradas principales.
- Motor de rutas estáticas: grafo de nodos con los caminos peatonales mapeados a mano, con Dijkstra para calcular el camino más corto desde la entrada hasta el destino.
- Visor de imágenes 360° integrado en la ficha de cada espacio para que el usuario reconozca visualmente el lugar antes de llegar.

## Resultado

Aplicación funcional presentada y aprobada como tesis de grado. Cubre todos los edificios académicos, áreas comunes y puntos de encuentro del campus.

## Aprendizajes

El mapeo manual de rutas es el cuello de botella real: cualquier cambio en la infraestructura física requiere actualizar el grafo. En una versión productiva añadiría un panel de administración para que el personal del campus actualice rutas sin tocar código.
