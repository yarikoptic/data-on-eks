"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[3558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:5,sidebar_label:"Apache NiFi on EKS"},o="Apache NiFi on EKS",s={unversionedId:"blueprints/streaming-platforms/nifi",id:"blueprints/streaming-platforms/nifi",title:"Apache NiFi on EKS",description:"Introduction",source:"@site/docs/blueprints/streaming-platforms/nifi.md",sourceDirName:"blueprints/streaming-platforms",slug:"/blueprints/streaming-platforms/nifi",permalink:"/data-on-eks/docs/blueprints/streaming-platforms/nifi",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/streaming-platforms/nifi.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Apache NiFi on EKS"},sidebar:"blueprints",previous:{title:"Kafka on EKS",permalink:"/data-on-eks/docs/blueprints/streaming-platforms/kafka"},next:{title:"Distributed Databases on EKS",permalink:"/data-on-eks/docs/category/distributed-databases-on-eks"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy the EKS Cluster with Apache NiFi",id:"deploy-the-eks-cluster-with-apache-nifi",level:2},{value:"Clone the repository",id:"clone-the-repository",level:3},{value:"Initialize Terraform",id:"initialize-terraform",level:3},{value:"Terraform Plan",id:"terraform-plan",level:3},{value:"Deploy the pattern",id:"deploy-the-pattern",level:3},{value:"Verify Deployment",id:"verify-deployment",level:3},{value:"Apache NiFi UI",id:"apache-nifi-ui",level:4},{value:"Monitoring",id:"monitoring",level:3},{value:"Example",id:"example",level:3},{value:"Create IAM policies for accessing Amazon DynamoDB and AWS Kinesis",id:"create-iam-policies-for-accessing-amazon-dynamodb-and-aws-kinesis",level:4},{value:"Create AWS Kinesis Data Stream",id:"create-aws-kinesis-data-stream",level:4},{value:"Create Amazon DynamoDB table",id:"create-amazon-dynamodb-table",level:4},{value:"Create AWS credential setup",id:"create-aws-credential-setup",level:4},{value:"Cleanup",id:"cleanup",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"apache-nifi-on-eks"},"Apache NiFi on EKS"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Apache NiFi is an open-source data integration and management system designed to automate and manage the flow of data between systems. It provides a web-based user interface for creating, monitoring, and managing data flows in real-time."),(0,i.kt)("p",null,"With its powerful and flexible architecture, Apache NiFi can handle a wide range of data sources, cloud platforms, and formats, including structured and unstructured data, and can be used for a variety of data integration scenarios, such as data ingest, data processing (low to medium level), data routing, data transformation, and data dissemination."),(0,i.kt)("p",null,"Apache NiFi provides a GUI based interface for building and managing data flows, making it easier for non-technical users. It also offers robust security features, including SSL, SSH, and fine-grained access control, to ensure the safe and secure transfer of sensitive data. Whether you are a data analyst, a data engineer, or a data scientist, Apache NiFi provides a comprehensive solution for managing and integrating your data on AWS and other platforms."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This blueprint should be considered as experimental and should only be used for proof of concept.")),(0,i.kt)("p",null,"This ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/awslabs/data-on-eks/tree/main/streaming-platforms/nifi"},"example")," deploys an EKS Cluster running the Apache NiFi cluster. In the example, Apache NIfi is streaming data from the AWS Kinesis Data Stream to an Amazon DynamoDB table after some format transformation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creates a new sample VPC, 3 Private Subnets and 3 Public Subnets"),(0,i.kt)("li",{parentName:"ul"},"Creates Internet gateway for Public Subnets and NAT Gateway for Private Subnets"),(0,i.kt)("li",{parentName:"ul"},"Creates EKS Cluster Control plane with public endpoint (for demo reasons only) with one managed node group"),(0,i.kt)("li",{parentName:"ul"},"Deploys Apache NiFi, AWS Load Balancer Controller, Cert Manager and External DNS (optional) add-ons"),(0,i.kt)("li",{parentName:"ul"},"Deploys Apache NiFi cluster in the ",(0,i.kt)("inlineCode",{parentName:"li"},"nifi")," namespace")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Ensure that you have installed the following tools on your machine."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"terraform")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},"jq"))),(0,i.kt)("p",null,"Additionally, for end-to-end configuration of Ingress, you will need to provide the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring.html"},"Route53 Public Hosted Zone"),' configured in the account where you are deploying this example. E.g. "example.com"'),(0,i.kt)("li",{parentName:"ol"},"An ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html"},"ACM Certificate"),' in the account + region where you are deploying this example. A wildcard certificate is preferred, e.g. "*.example.com"')),(0,i.kt)("h2",{id:"deploy-the-eks-cluster-with-apache-nifi"},"Deploy the EKS Cluster with Apache NiFi"),(0,i.kt)("h3",{id:"clone-the-repository"},"Clone the repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git\n")),(0,i.kt)("h3",{id:"initialize-terraform"},"Initialize Terraform"),(0,i.kt)("p",null,"Navigate into the example directory and run ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform init")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/streaming/nifi/\nterraform init\n")),(0,i.kt)("h3",{id:"terraform-plan"},"Terraform Plan"),(0,i.kt)("p",null,"Run Terraform plan to verify the resources created by this execution."),(0,i.kt)("p",null,"Provide a Route53 Hosted Zone hostname and a corresponding ACM Certificate;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export TF_VAR_eks_cluster_domain="<CHANGEME - example.com>"\nexport TF_VAR_acm_certificate_domain="<CHANGEME - *.example.com>"\nexport TF_VAR_nifi_sub_domain="nifi"\nexport TF_VAR_nifi_username="admin"\n')),(0,i.kt)("h3",{id:"deploy-the-pattern"},"Deploy the pattern"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"terraform plan\nterraform apply\n")),(0,i.kt)("p",null,"Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"yes")," to apply."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Outputs:\n\nconfigure_kubectl = "aws eks --region us-west-2 update-kubeconfig --name nifi-on-eks"\n')),(0,i.kt)("h3",{id:"verify-deployment"},"Verify Deployment"),(0,i.kt)("p",null,"Update kubeconfig"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks --region us-west-2 update-kubeconfig --name nifi-on-eks\n")),(0,i.kt)("p",null,"Verify all pods are running."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"NAMESPACE           NAME                                                         READY   STATUS    RESTARTS      AGE\namazon-cloudwatch   aws-cloudwatch-metrics-7fbcq                                 1/1     Running   1 (43h ago)   2d\namazon-cloudwatch   aws-cloudwatch-metrics-82c9v                                 1/1     Running   1 (43h ago)   2d\namazon-cloudwatch   aws-cloudwatch-metrics-blrmt                                 1/1     Running   1 (43h ago)   2d\namazon-cloudwatch   aws-cloudwatch-metrics-dhpl7                                 1/1     Running   0             19h\namazon-cloudwatch   aws-cloudwatch-metrics-hpw5k                                 1/1     Running   1 (43h ago)   2d\ncert-manager        cert-manager-7d57b6576b-c52dw                                1/1     Running   1 (43h ago)   2d\ncert-manager        cert-manager-cainjector-86f7f4749-hs7d9                      1/1     Running   1 (43h ago)   2d\ncert-manager        cert-manager-webhook-66c85f8577-rxms8                        1/1     Running   1 (43h ago)   2d\nexternal-dns        external-dns-57bb948d75-g8kbs                                1/1     Running   0             41h\ngrafana             grafana-7f5b7f5d4c-znrqk                                     1/1     Running   1 (43h ago)   2d\nkube-system         aws-load-balancer-controller-7ff998fc9b-86gql                1/1     Running   1 (43h ago)   2d\nkube-system         aws-load-balancer-controller-7ff998fc9b-hct9k                1/1     Running   1 (43h ago)   2d\nkube-system         aws-node-4gcqk                                               1/1     Running   1 (43h ago)   2d\nkube-system         aws-node-4sssk                                               1/1     Running   0             19h\nkube-system         aws-node-4t62f                                               1/1     Running   1 (43h ago)   2d\nkube-system         aws-node-g4ndt                                               1/1     Running   1 (43h ago)   2d\nkube-system         aws-node-hlxmq                                               1/1     Running   1 (43h ago)   2d\nkube-system         cluster-autoscaler-aws-cluster-autoscaler-7bd6f7b94b-j7td5   1/1     Running   1 (43h ago)   2d\nkube-system         cluster-proportional-autoscaler-coredns-6ccfb4d9b5-27xsd     1/1     Running   1 (43h ago)   2d\nkube-system         coredns-5c5677bc78-rhzkx                                     1/1     Running   1 (43h ago)   2d\nkube-system         coredns-5c5677bc78-t7m5z                                     1/1     Running   1 (43h ago)   2d\nkube-system         ebs-csi-controller-87c4ff9d4-ffmwh                           6/6     Running   6 (43h ago)   2d\nkube-system         ebs-csi-controller-87c4ff9d4-nfw28                           6/6     Running   6 (43h ago)   2d\nkube-system         ebs-csi-node-4mkc8                                           3/3     Running   0             19h\nkube-system         ebs-csi-node-74xqs                                           3/3     Running   3 (43h ago)   2d\nkube-system         ebs-csi-node-8cw8t                                           3/3     Running   3 (43h ago)   2d\nkube-system         ebs-csi-node-cs9wp                                           3/3     Running   3 (43h ago)   2d\nkube-system         ebs-csi-node-ktdb7                                           3/3     Running   3 (43h ago)   2d\nkube-system         kube-proxy-4s72m                                             1/1     Running   0             19h\nkube-system         kube-proxy-95ptn                                             1/1     Running   1 (43h ago)   2d\nkube-system         kube-proxy-bhrdk                                             1/1     Running   1 (43h ago)   2d\nkube-system         kube-proxy-nzvb6                                             1/1     Running   1 (43h ago)   2d\nkube-system         kube-proxy-q9xkc                                             1/1     Running   1 (43h ago)   2d\nkube-system         metrics-server-fc87d766-dd647                                1/1     Running   1 (43h ago)   2d\nkube-system         metrics-server-fc87d766-vv8z9                                1/1     Running   1 (43h ago)   2d\nlogging             aws-for-fluent-bit-b5vqg                                     1/1     Running   1 (43h ago)   2d\nlogging             aws-for-fluent-bit-pklhr                                     1/1     Running   0             19h\nlogging             aws-for-fluent-bit-rq2nc                                     1/1     Running   1 (43h ago)   2d\nlogging             aws-for-fluent-bit-tnmtl                                     1/1     Running   1 (43h ago)   2d\nlogging             aws-for-fluent-bit-zzhfc                                     1/1     Running   1 (43h ago)   2d\nnifi                nifi-0                                                       5/5     Running   0             41h\nnifi                nifi-1                                                       5/5     Running   0             41h\nnifi                nifi-2                                                       5/5     Running   0             41h\nnifi                nifi-registry-0                                              1/1     Running   0             41h\nnifi                nifi-zookeeper-0                                             1/1     Running   0             41h\nnifi                nifi-zookeeper-1                                             1/1     Running   0             41h\nnifi                nifi-zookeeper-2                                             1/1     Running   0             18h\nprometheus          prometheus-alertmanager-655fcb46df-2qh8h                     2/2     Running   2 (43h ago)   2d\nprometheus          prometheus-kube-state-metrics-549f6d74dd-wwhtr               1/1     Running   1 (43h ago)   2d\nprometheus          prometheus-node-exporter-5cpzk                               1/1     Running   0             19h\nprometheus          prometheus-node-exporter-8jhbk                               1/1     Running   1 (43h ago)   2d\nprometheus          prometheus-node-exporter-nbd42                               1/1     Running   1 (43h ago)   2d\nprometheus          prometheus-node-exporter-str6t                               1/1     Running   1 (43h ago)   2d\nprometheus          prometheus-node-exporter-zkf5s                               1/1     Running   1 (43h ago)   2d\nprometheus          prometheus-pushgateway-677c6fdd5-9tqkl                       1/1     Running   1 (43h ago)   2d\nprometheus          prometheus-server-7bf9cbb9cf-b2zgl                           2/2     Running   2 (43h ago)   2d\nvpa                 vpa-recommender-7c6bbb4f9b-rjhr7                             1/1     Running   1 (43h ago)   2d\nvpa                 vpa-updater-7975b9dc55-g6zf6                                 1/1     Running   1 (43h ago)   2d\n")),(0,i.kt)("h4",{id:"apache-nifi-ui"},"Apache NiFi UI"),(0,i.kt)("p",null,'The Apache NiFi Dashboard can be opened at the following url "',(0,i.kt)("a",{parentName:"p",href:"https://nifi.example.com/nifi%22"},'https://nifi.example.com/nifi"')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache NiFi Login",src:n(9353).Z,width:"579",height:"336"})),(0,i.kt)("p",null,"Run the command below to retrieve NiFi user's password and default username as ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"aws secretsmanager get-secret-value --secret-id <nifi_login_password_secret_name from terraform outputs> --region <region> | jq '.SecretString' --raw-output\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache NiFi Canvas",src:n(6779).Z,width:"1075",height:"676"})),(0,i.kt)("h3",{id:"monitoring"},"Monitoring"),(0,i.kt)("p",null,"Apache Nifi can be monitored using metrics reported by PrometheusReportingTask. JVM metrics are disabled by default, let's enable the JVM metrics by navigating to Controller Settings by the clicking on the hamburger icon (three horizontal bars) in the top right corner."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache NiFi Controller Settings",src:n(6134).Z,width:"900",height:"649"})),(0,i.kt)("p",null,"Next click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"REPORTING TASK")," tab and then click the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," icon and search for ",(0,i.kt)("inlineCode",{parentName:"p"},"PrometheusReportingTask")," in the filter. Select the ",(0,i.kt)("inlineCode",{parentName:"p"},"PrometheusReportingTask")," and click ",(0,i.kt)("inlineCode",{parentName:"p"},"ADD")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache NiFi Prometheus Reporting",src:n(6051).Z,width:"898",height:"650"})),(0,i.kt)("p",null,"The prometheus reporting task is stopped by default."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache NiFi Reporting Task Edit",src:n(7453).Z,width:"897",height:"650"})),(0,i.kt)("p",null,"Click on the pencil icon to edit the task and click on the PROPERTIES tab. Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"Send JVM metrics")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and click on Apply. Start the task by clicking on the play icon and ensure it's in running state."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache NiFi Reporting Task True",src:n(2307).Z,width:"1132",height:"697"})),(0,i.kt)("p",null,"This blueprint uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"grafana")," to create a monitoring stack for getting visibility into your Apache NiFi cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"aws secretsmanager get-secret-value --secret-id <grafana_secret_name from terraform outputs> --region <region> | jq '.SecretString' --raw-output\n")),(0,i.kt)("p",null,'Run the command below and open the Grafana dashboard using the url "http://localhost:8080".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl port-forward svc/grafana -n grafana 8080:80\n")),(0,i.kt)("p",null,"Import Apache NiFi ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/12314-nifi-prometheusreportingtask-dashboard/"},"Grafana dashboard")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache NiFi Grafana Dashboard",src:n(8157).Z,width:"1539",height:"913"})),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("h4",{id:"create-iam-policies-for-accessing-amazon-dynamodb-and-aws-kinesis"},"Create IAM policies for accessing Amazon DynamoDB and AWS Kinesis"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create an AWS IAM role: Create an AWS IAM role with permissions to access the AWS Kinesis data stream and assign this role to the AWS EKS cluster hosting Apache NiFi.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Attach the IAM policy: Attach a policy to the IAM role that limits access to the Kinesis data stream to read-only and IAM policy to enable EKS role to write Amazon DynamoDB table. Here's an example policy:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "Nifi-access-to-Kinesis",\n            "Effect": "Allow",\n            "Action": [\n                "kinesis:DescribeStream",\n                "kinesis:GetRecords",\n                "kinesis:GetShardIterator",\n                "kinesis:ListStreams"\n            ],\n            "Resource": "arn:aws:kinesis:<REGION>:<ACCOUNT-ID>:stream/kds-stream-nifi-on-EKS"\n        }\n    ]\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "Sid": "DynamoDBTableAccess",\n    "Effect": "Allow",\n    "Action": [\n        "dynamodb:BatchGetItem",\n        "dynamodb:BatchWriteItem",\n        "dynamodb:ConditionCheckItem",\n        "dynamodb:PutItem",\n        "dynamodb:DescribeTable",\n        "dynamodb:DeleteItem",\n        "dynamodb:GetItem",\n        "dynamodb:Scan",\n        "dynamodb:Query",\n        "dynamodb:UpdateItem"\n    ],\n    "Resource": "arn:aws:dynamodb:<REGION>:<ACCOUNT-ID>:table/NifiStreamingTable"\n}\n')),(0,i.kt)("h4",{id:"create-aws-kinesis-data-stream"},"Create AWS Kinesis Data Stream"),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create an AWS Kinesis data stream: Log in to the AWS Management Console, and create a Kinesis data stream in the region where you want to collect your data or use the below command line to create one.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"aws kinesis create-stream --stream-name kds-stream-nifi-on-EKS\n")),(0,i.kt)("h4",{id:"create-amazon-dynamodb-table"},"Create Amazon DynamoDB table"),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Create a Amazon DynamoDB in the same AWS Account using the AWS console or the command line. Create a JSON file with Amazon DynamoDb table information called JSONSchemaDynamoDBTABLE.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n    "TableName": "NifiStreamingTable",\n    "KeySchema": [\n      { "AttributeName": "Name", "KeyType": "HASH" },\n      { "AttributeName": "Age", "KeyType": "RANGE" }},\n      { "AttributeName": "Location", "KeyType": "RANGE" }\n    ],\n    "AttributeDefinitions": [\n      { "AttributeName": "Name", "KeyType": "S" },\n      { "AttributeName": "Age", "KeyType": "S" }},\n      { "AttributeName": "Location", "KeyType": "S" }\n    ],\n    "ProvisionedThroughput": {\n      "ReadCapacityUnits": 5,\n      "WriteCapacityUnits": 5\n    }\n}\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Execute the command line to create the Amazon DynamoDB table from the JSON file.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"aws dynamodb create-table --cli-input-json  JSONSchemaDynamoDBTABLE.json\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Open the Apache Nifi on the EKS UI using the endpoint, create a process group, and name it NifiStreamingExample.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache NiFi Canvas",src:n(8631).Z,width:"1266",height:"376"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache NiFi Canvas",src:n(4180).Z,width:"1130",height:"636"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Double-click on the Nifi-on-EKS-process-group and enter the process to create the data flow. Drag the processer icon from the top left, type Kinesis into the search window, and select the ConsumeKinesisStream processor. To create a Kinesis Consumer, click ADD.\xa0")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache NiFi Canvas",src:n(8246).Z,width:"798",height:"721"})),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Double click on the Kinesis processor, select the properties tab, and fill in the information for the configuration below.\na. Amazon Kinesis Stream Name\nb. Application Name\nc. Region\nd. AWS Credentials Provider Service - Select AWSCredentialsProviderControllerService and create one.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache NiFi Canvas",src:n(523).Z,width:"1420",height:"802"})),(0,i.kt)("h4",{id:"create-aws-credential-setup"},"Create AWS credential setup"),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"Setup the AWS credentials to access the AWS resource in the account using the AWS Credentials Provider Service. In this example, we are using the access key and secret key. ",(0,i.kt)("em",null,(0,i.kt)("strong",{parentName:"li"},"Note")," : Other options are IAM role-based, assumed role options to authenticate an AWS resources."),"  ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache NiFi Canvas",src:n(1487).Z,width:"2520",height:"323"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache NiFi Canvas",src:n(5227).Z,width:"802",height:"658"})),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},'Drag the processer icon from the top left, type "dynamoDB" into the search window, and select the "PutDynamoDBRecord processor. Click on ADD to create an Amazon DynamoDB writer. Configure the processor using the fields below.')),(0,i.kt)("p",null,"a. Record Reader - Change it to JSONTreeReader\nb. AWS Credentials Provider Service - select the previously created configuration\nc. Region\nb. Table Name\nd. Partition Key Field - select the partition field"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache NiFi Canvas",src:n(3868).Z,width:"1599",height:"479"}),"\n",(0,i.kt)("img",{alt:"Apache NiFi Canvas",src:n(1968).Z,width:"1408",height:"795"}),"\n",(0,i.kt)("img",{alt:"Apache NiFi Canvas",src:n(8792).Z,width:"686",height:"406"})),(0,i.kt)("ol",{start:11},(0,i.kt)("li",{parentName:"ol"},"Hover over the Kinesis consumer and drag it to the DynamoDB writer. The connection will be made, and the success queue will be created.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache NiFi Canvas",src:n(7532).Z,width:"714",height:"370"})),(0,i.kt)("ol",{start:12},(0,i.kt)("li",{parentName:"ol"},"For the Kinesis Consumer and DynamoDB, create an error route to a funnel. This is to route the unprocessed, failed, and successful records for further processing. Note: Under the Relationship tab, you can see all the options for each processor. For the DynamoDB writer, success should always point to a funnel.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache NiFi Canvas",src:n(3412).Z,width:"2029",height:"787"})),(0,i.kt)("ol",{start:13},(0,i.kt)("li",{parentName:"ol"},'Check that none of the processors have any Hazard symbols. Right-click on the grid and click "run the data flow." You can start seeing the data flowing in.')),(0,i.kt)("h2",{id:"cleanup"},"Cleanup"),(0,i.kt)("p",null,"To clean up your environment, destroy the Terraform modules in reverse order."),(0,i.kt)("p",null,"Destroy the Kubernetes Add-ons, EKS cluster with Node groups and VPC"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'terraform destroy -target="module.eks_blueprints_kubernetes_addons" --auto-approve\nterraform destroy -target="module.eks" --auto-approve\nterraform destroy -target="module.vpc" --auto-approve\n')),(0,i.kt)("p",null,"Finally, destroy any additional resources that are not in the above modules"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"terraform destroy --auto-approve\n")))}u.isMDXComponent=!0},6779:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-canvas-bba0ebcd97e50d3429571d813d3be3ee.png"},6134:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-controller-settings-2322ed628f3dad48918c935d7c0867da.png"},8157:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-grafana-9c3fb026856953e19d65908eb53098d3.png"},6051:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-prometheus-reporting-0693c3b9813544b018f7e27c2c5516d1.png"},7453:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-reporting-task-edit-03b1f21f3bcaa5385da9df446a8ce818.png"},2307:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-reporting-task-true-66089a1fe60f6a1041b3ab53df2df953.png"},8631:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-screenshot-1-be862777c17ed6c9fb024df6635827d6.png"},7532:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-screenshot-10-0bc436d1f5724755a18153a1d962ae4b.png"},3412:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-screenshot-11-6f7384af94573f6e71676bd222b0fb68.png"},4180:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-screenshot-2-700ad5636868aab82dbd4e2289d985a9.png"},8246:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-screenshot-3-9654b1b59d00543d7652828eab77dde0.png"},523:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-screenshot-4-d2d60f9ee74d459e8b4578cbeb1b5b31.png"},1487:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-screenshot-5-96d58a1454311a411935d68c7913cb32.png"},5227:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-screenshot-6-4529127e639038e6cee82d4f494a9191.png"},3868:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-screenshot-7-2db4a3c85f11f2cb1d87a9043246b3a5.png"},1968:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-screenshot-8-bbc4049a1b46e3d15015382aae6c3380.png"},8792:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-screenshot-9-3c36bc1b64419512e2f7768fc4488498.png"},9353:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nifi-a79017d2a2a850f40a2e1ec172af3203.png"}}]);