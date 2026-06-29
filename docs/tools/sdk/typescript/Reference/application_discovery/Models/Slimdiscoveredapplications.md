---
id: v1-slimdiscoveredapplications-v1
title: SlimdiscoveredapplicationsV1
pagination_label: SlimdiscoveredapplicationsV1
sidebar_label: SlimdiscoveredapplicationsV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SlimdiscoveredapplicationsV1', 'v1SlimdiscoveredapplicationsV1']
slug: /tools/sdk/typescript/application_discovery/models/slimdiscoveredapplications-v1
tags: ['SDK', 'Software Development Kit', 'SlimdiscoveredapplicationsV1', 'v1SlimdiscoveredapplicationsV1']
---

# SlimdiscoveredapplicationsV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Unique identifier for the discovered application. | [default to undefined]
**name** | **(optional)** `string` | Name of the discovered application. | [default to undefined]
**discoverySource** | **(optional)** `string` | Source from which the application was discovered. | [default to undefined]
**discoveredVendor** | **(optional)** `string` | The vendor associated with the discovered application. | [default to undefined]
**description** | **(optional)** `string` | A brief description of the discovered application. | [default to undefined]
**recommendedConnectors** | **(optional)** `Array<string>` | List of recommended connectors for the application. | [default to undefined]
**discoveredAt** | **(optional)** `string` | The timestamp when the application was last received via an entitlement aggregation invocation  or a manual csv upload, in ISO 8601 format. | [default to undefined]
**createdAt** | **(optional)** `string` | The timestamp when the application was first discovered, in ISO 8601 format. | [default to undefined]
**status** | **(optional)** `string` | The status of an application within the discovery source.  By default this field is set to \"ACTIVE\" when the application is discovered.  If an application has been deleted from within the discovery source, the status will be set to \"INACTIVE\". | [default to undefined]
**operationalStatus** | **(optional)** `string` | The operational status of the application. | [default to undefined]
**discoverySourceCategory** | **(optional)** `string` | The category of the discovery source. | [default to undefined]
**licenseCount** | **(optional)** `number` | The number of licenses associated with the application. | [default to undefined]
**isSanctioned** | **(optional)** `boolean` | Indicates whether the application is sanctioned. | [default to false]
**logo** | **(optional)** `string` | URL of the application\'s logo. | [default to undefined]
**appUrl** | **(optional)** `string` | The URL of the application. | [default to undefined]
**groups** | **(optional)** `Array<object>` | List of groups associated with the application. | [default to undefined]
**usersCount** | **(optional)** `string` | The count of users associated with the application. | [default to undefined]
**applicationOwner** | **(optional)** `Array<string>` | The owners of the application. | [default to undefined]
**itApplicationOwner** | **(optional)** `Array<string>` | The IT owners of the application. | [default to undefined]
**businessCriticality** | **(optional)** `string` | The business criticality level of the application. | [default to undefined]
**dataClassification** | **(optional)** `string` | The data classification level of the application. | [default to undefined]
**businessUnit** | **(optional)** `string` | The business unit associated with the application. | [default to undefined]
**installType** | **(optional)** `string` | The installation type of the application. | [default to undefined]
**environment** | **(optional)** `string` | The environment in which the application operates. | [default to undefined]
**riskScore** | **(optional)** `number` | The risk score of the application ranging from 0-100, 100 being highest risk. | [default to undefined]
**isBusiness** | **(optional)** `boolean` | Indicates whether the application is used for business purposes. | [default to true]
**totalSigninsCount** | **(optional)** `number` | The total number of sign-in accounts for the application. | [default to undefined]
**riskLevel** | **(optional)** `string` | The risk level of the application. | [default to undefined]
**isPrivileged** | **(optional)** `boolean` | Indicates whether the application has privileged access. | [default to false]
**warrantyExpiration** | **(optional)** `string` | The warranty expiration date of the application. | [default to undefined]
**attributes** | **(optional)** `object` | Additional attributes of the application useful for visibility of governance posture. | [default to undefined]

