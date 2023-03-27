################################################################################
# Cluster
################################################################################
output "cluster_arn" {
  description = "The Amazon Resource Name (ARN) of the cluster"
  value       = data.aws_eks_cluster.cluster.arn
}

output "cluster_name" {
  description = "The Amazon Resource Name (ARN) of the cluster"
  value       = data.aws_eks_cluster.cluster.id
}

output "oidc_provider_arn" {
  description = "The ARN of the OIDC Provider if `enable_irsa = true`"
  value       = data.aws_iam_openid_connect_provider.eks_oidc.arn
}

################################################################################
# EKS Managed Node Group
################################################################################
# output "eks_managed_node_groups" {
#   description = "Map of attribute maps for all EKS managed node groups created"
#   value       = module.eks.eks_managed_node_groups
# }

# output "eks_managed_node_groups_iam_role_name" {
#   description = "List of the autoscaling group names created by EKS managed node groups"
#   value       = compact(flatten([for group in module.eks.eks_managed_node_groups : group.iam_role_name]))
# }

# output "aws_auth_configmap_yaml" {
#   description = "Formatted yaml output for base aws-auth configmap containing roles used in cluster node groups/fargate profiles"
#   value       = module.eks.aws_auth_configmap_yaml
# }

# output "configure_kubectl" {
#   description = "Configure kubectl: make sure you're logged in with the correct AWS profile and run the following command to update your kubeconfig"
#   value       = "aws eks --region ${local.region} update-kubeconfig --name ${data.aws_eks_cluster.cluster.name}"
# }

output "emr_on_eks" {
  description = "EMR on EKS"
  value       = module.emr_containers
}
