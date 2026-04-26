---
title: "Automatización de indemnizaciones agrícolas"
summary: "Sistema que reemplazó un proceso 100% manual de análisis de pólizas colectivas para caficultores por un flujo automatizado."
role: "Full-stack"
stack: ["Angular", "Spring Boot", "PostgreSQL"]
client: "Cliente del sector agroindustrial"
year: 2023
featured: true
order: 3
draft: false
---

## Contexto

Cliente del sector de seguros colectivos agroindustriales. Las pólizas cubrían a caficultores agrupados en cooperativas y la indemnización dependía de parámetros climáticos (lluvia y sequía) según la temporada del cultivo.

## Problema

El proceso de liquidación era completamente manual: una persona descargaba un Excel con la lista de caficultores, revisaba los parámetros climáticos uno por uno, consultaba fuentes externas y decidía si cada agricultor cumplía las condiciones para ser indemnizado. El proceso era lento, propenso a errores humanos y no escalaba con el volumen de pólizas.

## Decisiones técnicas

Spring Boot para el backend por el ecosistema robusto de Java para integraciones con APIs externas y procesamiento de datos tabulares. PostgreSQL para persistir el histórico de liquidaciones y auditoría. Angular en el frontend para mantener consistencia con el stack de la empresa.

La decisión más importante fue diseñar el flujo alrededor del Excel existente: en lugar de forzar al usuario a cambiar su formato de trabajo, el sistema acepta el mismo archivo que ya usaban.

## Implementación

- Carga de Excel con Apache POI: el usuario sube el archivo con la lista de caficultores y parámetros de la temporada.
- Pipeline de procesamiento: por cada registro se llaman los endpoints externos de datos climáticos, se cruzan con los parámetros de la póliza y se evalúan las condiciones de indemnización.
- Motor de reglas configurable: los umbrales de lluvia/sequía por temporada se administran sin necesidad de cambios en el código.
- Resultado por registro: aprobado / rechazado / pendiente de revisión manual, con trazabilidad completa de por qué se tomó cada decisión.

## Resultado

El proceso que antes tomaba horas de trabajo manual pasó a ejecutarse en minutos. Se eliminaron los errores de transcripción y cada decisión quedó registrada con su justificación, lo que facilitó las auditorías internas.

## Aprendizajes

El motor de reglas fue lo más valioso del proyecto. Si lo repitiera desde el inicio lo diseñaría como un componente independiente desde el día uno, no como algo que emergió a mitad del desarrollo al darnos cuenta de que los parámetros cambiaban con frecuencia.
