"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[9890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),k=i(r),d=n,m=k["".concat(p,".").concat(d)]||k[d]||c[d]||o;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2,sidebar_label:"Spark Operator with YuniKorn"},l="Running Spark jobs with Spark Operator and YuniKorn",s={unversionedId:"spark-on-eks/spark-operator-yunikorn",id:"spark-on-eks/spark-operator-yunikorn",title:"Running Spark jobs with Spark Operator and YuniKorn",description:"Introduction",source:"@site/docs/spark-on-eks/spark-operator-yunikorn.md",sourceDirName:"spark-on-eks",slug:"/spark-on-eks/spark-operator-yunikorn",permalink:"/data-on-eks/docs/spark-on-eks/spark-operator-yunikorn",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/docs/spark-on-eks/spark-operator-yunikorn.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Spark Operator with YuniKorn"},sidebar:"tutorialSidebar",previous:{title:"Apache Spark on EKS",permalink:"/data-on-eks/docs/spark-on-eks/"},next:{title:"AI/ML on EKS",permalink:"/data-on-eks/docs/category/aiml-on-eks"}},p={},i=[{value:"Introduction",id:"introduction",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Execute Sample Spark Job on EKS Cluster with <code>spark-k8s-operator</code>",id:"execute-sample-spark-job-on-eks-cluster-with-spark-k8s-operator",level:2},{value:"Verify the Spark job status",id:"verify-the-spark-job-status",level:3},{value:"Cleanup",id:"cleanup",level:2}],u={toc:i};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"running-spark-jobs-with-spark-operator-and-yunikorn"},"Running Spark jobs with Spark Operator and YuniKorn"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"In this post, we will learn to build, configure and deploy highly scalable EKS Cluster with Open source ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator"},"Spark Operator")," and ",(0,n.kt)("a",{parentName:"p",href:"https://yunikorn.apache.org/"},"Apache YuniKorn")," batch scheduler."),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"Spark Operator consists of..."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a SparkApplication controller that watches events of creation, updates, and deletion of SparkApplication objects and acts on the watch events,"),(0,n.kt)("li",{parentName:"ul"},"a submission runner that runs spark-submit for submissions received from the controller,"),(0,n.kt)("li",{parentName:"ul"},"a Spark pod monitor that watches for Spark pods and sends pod status updates to the controller,"),(0,n.kt)("li",{parentName:"ul"},"a Mutating Admission Webhook that handles customizations for Spark driver and executor pods based on the annotations on the pods added by the controller,"),(0,n.kt)("li",{parentName:"ul"},"and also a command-line tool named sparkctl for working with the operator.")),(0,n.kt)("p",null,"The following diagram shows how different components of Spark Operator add-pn interact and work together."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img.png",src:r(4917).Z,width:"960",height:"540"})),(0,n.kt)("h2",{id:"deploying-the-solution"},"Deploying the Solution"),(0,n.kt)("p",null,"In this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/awslabs/data-on-eks/tree/main/analytics/spark-k8s-operator"},"example"),", you will provision the following resources required to run Spark Jobs with open source Spark Operator and Apache YuniKorn."),(0,n.kt)("p",null,"This example deploys an EKS Cluster running the Spark K8s Operator into a new VPC."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Creates a new sample VPC, 3 Private Subnets and 3 Public Subnets"),(0,n.kt)("li",{parentName:"ul"},"Creates Internet gateway for Public Subnets and NAT Gateway for Private Subnets"),(0,n.kt)("li",{parentName:"ul"},"Creates EKS Cluster Control plane with public endpoint (for demo reasons only) with one managed node group"),(0,n.kt)("li",{parentName:"ul"},"Deploys Metrics server, Cluster Autoscaler, Spark-k8s-operator, Apache Yunikorn and Prometheus server."),(0,n.kt)("li",{parentName:"ul"},"Spark Operator is a Kubernetes Operator for Apache Spark deployed to ",(0,n.kt)("inlineCode",{parentName:"li"},"spark-operator")," namespace. The operator by default watches and handles ",(0,n.kt)("inlineCode",{parentName:"li"},"SparkApplications")," in all namespaces.")),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Ensure that you have installed the following tools on your machine."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"terraform"))),(0,n.kt)("h3",{id:"deploy"},"Deploy"),(0,n.kt)("p",null,"Clone the repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git\n")),(0,n.kt)("p",null,"Navigate into one of the example directories and run ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform init")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd analytics/spark-k8s-operator\nterraform init\n")),(0,n.kt)("p",null,"Run Terraform plan to verify the resources created by this execution."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export AWS_REGION=<enter-your-region>   # Select your own region\nterraform plan\n")),(0,n.kt)("p",null,"Deploy the pattern"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,n.kt)("p",null,"Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"yes")," to apply."),(0,n.kt)("h2",{id:"execute-sample-spark-job-on-eks-cluster-with-spark-k8s-operator"},"Execute Sample Spark Job on EKS Cluster with ",(0,n.kt)("inlineCode",{parentName:"h2"},"spark-k8s-operator")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  cd analytics/spark-k8s-operator/spark-samples\n  kubectl apply -f pyspark-pi-job.yaml\n")),(0,n.kt)("h3",{id:"verify-the-spark-job-status"},"Verify the Spark job status"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  kubectl get sparkapplications -n spark-team-a\n\n  kubectl describe sparkapplication pyspark-pi -n spark-team-a\n")),(0,n.kt)("h2",{id:"cleanup"},"Cleanup"),(0,n.kt)("p",null,"To clean up your environment, destroy the Terraform modules in reverse order with ",(0,n.kt)("inlineCode",{parentName:"p"},"--target")," option to avoid destroy failures."),(0,n.kt)("p",null,"Destroy the Kubernetes Add-ons, EKS cluster with Node groups and VPC"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'terraform destroy -target="module.eks_blueprints_kubernetes_addons" -auto-approve\nterraform destroy -target="module.eks_blueprints" -auto-approve\nterraform destroy -target="module.vpc" -auto-approve\n')),(0,n.kt)("p",null,"Finally, destroy any additional resources that are not in the above modules"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform destroy -auto-approve\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment")))}c.isMDXComponent=!0},4917:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/img-6752098849b2e90ded1f19770c70f101.png"}}]);