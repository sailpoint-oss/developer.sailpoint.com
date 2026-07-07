---
id: v1-servicedeskintegrationdto-v1
title: ServicedeskintegrationdtoV1
pagination_label: ServicedeskintegrationdtoV1
sidebar_label: ServicedeskintegrationdtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ServicedeskintegrationdtoV1', 'v1ServicedeskintegrationdtoV1']
slug: /tools/sdk/typescript/sim_integrations/models/servicedeskintegrationdto-v1
tags: ['SDK', 'Software Development Kit', 'ServicedeskintegrationdtoV1', 'v1ServicedeskintegrationdtoV1']
---

# ServicedeskintegrationdtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Unique identifier for the Service Desk integration | [default to undefined]
**name** | `string` | Service Desk integration\'s name. The name must be unique. | [default to undefined]
**created** | **(optional)** `string` | The date and time the Service Desk integration was created | [default to undefined]
**modified** | **(optional)** `string` | The date and time the Service Desk integration was last modified | [default to undefined]
**description** | `string` | Service Desk integration\'s description. | [default to undefined]
**type** | `string` | Service Desk integration types:  - ServiceNowSDIM - ServiceNow  | [default to 'ServiceNowSDIM']
**ownerRef** | **(optional)** `OwnerdtoV1` |  | [default to undefined]
**clusterRef** | **(optional)** `SourceclusterdtoV1` |  | [default to undefined]
**cluster** | **(optional)** `string` | Cluster ID for the Service Desk integration (replaced by clusterRef, retained for backward compatibility). | [default to undefined]
**managedSources** | **(optional)** `Array<string>` | Source IDs for the Service Desk integration (replaced by provisioningConfig.managedSResourceRefs, but retained here for backward compatibility). | [default to undefined]
**provisioningConfig** | **(optional)** `ProvisioningconfigV1` |  | [default to undefined]
**attributes** |  | Service Desk integration\'s attributes. Validation constraints enforced by the implementation. | [default to undefined]
**beforeProvisioningRule** | **(optional)** `BeforeprovisioningruledtoV1` |  | [default to undefined]

