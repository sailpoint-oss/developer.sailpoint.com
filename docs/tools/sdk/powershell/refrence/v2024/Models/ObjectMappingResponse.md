---
id: object-mapping-response
title: ObjectMappingResponse
pagination_label: ObjectMappingResponse
sidebar_label: ObjectMappingResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ObjectMappingResponse'] 
slug: /tools/sdk/powershell/v2024/models/object-mapping-response
tags: ['SDK', 'Software Development Kit', 'ObjectMappingResponse']
---


# ObjectMappingResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectMappingId** |  Pointer to **String** | Id of the object mapping | [optional] 
**ObjectType** |  Pointer to  **Enum** [  "ACCESS_PROFILE",    "ACCESS_REQUEST_CONFIG",    "ATTR_SYNC_SOURCE_CONFIG",    "AUTH_ORG",    "CAMPAIGN_FILTER",    "ENTITLEMENT",    "FORM_DEFINITION",    "GOVERNANCE_GROUP",    "IDENTITY",    "IDENTITY_OBJECT_CONFIG",    "IDENTITY_PROFILE",    "LIFECYCLE_STATE",    "NOTIFICATION_TEMPLATE",    "PASSWORD_POLICY",    "PASSWORD_SYNC_GROUP",    "PUBLIC_IDENTITIES_CONFIG",    "ROLE",    "RULE",    "SEGMENT",    "SERVICE_DESK_INTEGRATION",    "SOD_POLICY",    "SOURCE",    "TAG",    "TRANSFORM",    "TRIGGER_SUBSCRIPTION",    "WORKFLOW" ] | Type of the object the mapping value applies to | [optional] 
**JsonPath** |  Pointer to **String** | JSONPath expression denoting the path within the object where the mapping value should be applied | [optional] 
**SourceValue** |  Pointer to **String** | Original value at the jsonPath location within the object | [optional] 
**TargetValue** |  Pointer to **String** | Value to be assigned at the jsonPath location within the object | [optional] 
**Enabled** |  Pointer to **Boolean** | Whether or not this object mapping is enabled | [optional] [default to $false]
**Created** |  Pointer to **String** | Object mapping creation timestamp | [optional] 
**Modified** |  Pointer to **String** | Object mapping latest update timestamp | [optional] 

## Examples

- Prepare the resource
```powershell
$ObjectMappingResponse = Initialize-PSSailpoint.V2024ObjectMappingResponse  -ObjectMappingId 3d6e0144-963f-4bd6-8d8d-d77b4e507ce4 `
 -ObjectType IDENTITY `
 -JsonPath $.name `
 -SourceValue My Governance Group Name `
 -TargetValue My New Governance Group Name `
 -Enabled false `
 -Created 2024-03-19T23:18:53.732Z `
 -Modified 2024-03-19T23:18:53.732Z
```

- Convert the resource to JSON
```powershell
$ObjectMappingResponse | ConvertTo-JSON
```


[[Back to top]](#) 

