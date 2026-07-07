---
id: v1-provisioningconfig-v1
title: ProvisioningconfigV1
pagination_label: ProvisioningconfigV1
sidebar_label: ProvisioningconfigV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ProvisioningconfigV1', 'v1ProvisioningconfigV1']
slug: /tools/sdk/typescript/sim_integrations/models/provisioningconfig-v1
tags: ['SDK', 'Software Development Kit', 'ProvisioningconfigV1', 'v1ProvisioningconfigV1']
---

# ProvisioningconfigV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**universalManager** | **(optional)** `boolean` | Specifies whether this configuration is used to manage provisioning requests for all sources from the org.  If true, no managedResourceRefs are allowed. | [readonly] [default to false]
**managedResourceRefs** | **(optional)** `Array<ServicedesksourceV1>` | References to sources for the Service Desk integration template.  May only be specified if universalManager is false. | [default to undefined]
**planInitializerScript** | **(optional)** `ProvisioningconfigPlanInitializerScriptV1` |  | [default to undefined]
**noProvisioningRequests** | **(optional)** `boolean` | Name of an attribute that when true disables the saving of ProvisioningRequest objects whenever plans are sent through this integration. | [default to false]
**provisioningRequestExpiration** | **(optional)** `number` | When saving pending requests is enabled, this defines the number of hours the request is allowed to live before it is considered expired and no longer affects plan compilation. | [default to undefined]

