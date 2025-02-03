---
id: v2024-object-mapping-request
title: ObjectMappingRequest
pagination_label: ObjectMappingRequest
sidebar_label: ObjectMappingRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ObjectMappingRequest', 'V2024ObjectMappingRequest'] 
slug: /tools/sdk/powershell/v2024/models/object-mapping-request
tags: ['SDK', 'Software Development Kit', 'ObjectMappingRequest', 'V2024ObjectMappingRequest']
---


# ObjectMappingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectType** |  **Enum** [  "ACCESS_PROFILE",    "ACCESS_REQUEST_CONFIG",    "ATTR_SYNC_SOURCE_CONFIG",    "AUTH_ORG",    "CAMPAIGN_FILTER",    "ENTITLEMENT",    "FORM_DEFINITION",    "GOVERNANCE_GROUP",    "IDENTITY",    "IDENTITY_OBJECT_CONFIG",    "IDENTITY_PROFILE",    "LIFECYCLE_STATE",    "NOTIFICATION_TEMPLATE",    "PASSWORD_POLICY",    "PASSWORD_SYNC_GROUP",    "PUBLIC_IDENTITIES_CONFIG",    "ROLE",    "RULE",    "SEGMENT",    "SERVICE_DESK_INTEGRATION",    "SOD_POLICY",    "SOURCE",    "TAG",    "TRANSFORM",    "TRIGGER_SUBSCRIPTION",    "WORKFLOW" ] | Type of the object the mapping value applies to, must be one from enum | [required]
**JsonPath** | **String** | JSONPath expression denoting the path within the object where the mapping value should be applied | [required]
**SourceValue** | **String** | Original value at the jsonPath location within the object | [required]
**TargetValue** | **String** | Value to be assigned at the jsonPath location within the object | [required]
**Enabled** | **Boolean** | Whether or not this object mapping is enabled | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ObjectMappingRequest = Initialize-PSSailpoint.V2024ObjectMappingRequest  -ObjectType IDENTITY `
 -JsonPath $.name `
 -SourceValue My Governance Group Name `
 -TargetValue My New Governance Group Name `
 -Enabled false
```

- Convert the resource to JSON
```powershell
$ObjectMappingRequest | ConvertTo-JSON
```


[[Back to top]](#) 

