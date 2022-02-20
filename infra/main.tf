locals {
 webapp_labels = {
   App = "webapp"
   Tier = "frontend"
 }

}

resource "kubernetes_deployment" "webapp" {
 metadata {
   name = "webapp"
   labels = local.webapp_labels
 }
 spec {
   replicas = 1
   selector {
     match_labels = local.webapp_labels
   }
   template {
     metadata {
       labels = local.webapp_labels
     }
     spec {
       container {
         image = "danielchoi158/portfolio-frontend"
         name  = "webapp"
         port {
           container_port = 80
         }
       }
     }
   }
 }
}

 resource "kubernetes_service" "webapp-service" {
    metadata {
    name = "webapp-service"
    }
    spec {
    selector = local.webapp_labels
    port {
        port        = 80
        target_port = 80
    }
    type = "ClusterIP"
    }
}