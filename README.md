
# Laboratorio de Kubernetes

Este laboratorio documenta el proceso de creación y gestión de un clúster de Kubernetes en Google Cloud Platform (GCP). A continuación se detallan las acciones realizadas:

## Creación del Clúster

1. Se creó un clúster de Kubernetes llamado `mi-cluster` con las siguientes características:
   - 3 nodos
   - Disco de 32 GB por nodo
   - Tipo de máquina `g1-small`
   - Zona `us-central1-c`

   ```bash
   gcloud container clusters create "mi-cluster" --num-nodes "3" --disk-size "32" --machine-type "g1-small" --zone "us-central1-c"
   ```

2. Se configuraron las credenciales para interactuar con el clúster:

   ```bash
   gcloud container clusters get-credentials mi-cluster --zone us-central1-c
   ```

## Gestión de Imágenes de Docker

1. Se construyó una imagen de Docker y se subió a Google Container Registry:

   ```bash
   docker build -t gcr.io/labkubernetes-437921/kubernetesexample .
   docker push gcr.io/labkubernetes-437921/kubernetesexample
   ```

## Despliegue de Aplicaciones

1. Se creó un despliegue utilizando la imagen de Docker:

   ```bash
   kubectl create deployment node-deployment --image gcr.io/labkubernetes-437921/kubernetesexample
   ```

2. Se expuso la aplicación mediante un balanceador de cargas:

   ```bash
   kubectl expose deployment node-deployment --type=LoadBalancer --port 8080
   ```

## Escalado y Eliminación de Pods

1. Se escalaron las réplicas del despliegue a 3:

   ```bash
   kubectl scale deployment node-deployment --replicas=3
   ```

2. Se eliminaron pods específicos según fuera necesario:

   ```bash
   kubectl delete pod <nombre-del-pod>
   ```

## Configuración mediante Archivos YAML

Se utilizó un archivo `app.yaml` para definir el despliegue y otro archivo `service-node.yaml` para la configuración del servicio.

## Redimensionamiento del Clúster

Se ajustó el número de nodos del clúster según las necesidades mediante:

```bash
gcloud container clusters resize mi-cluster --node-pool default-pool --num-nodes 4 --zone us-central1-c
```
