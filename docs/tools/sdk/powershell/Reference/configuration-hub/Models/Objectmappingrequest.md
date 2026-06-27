---
id: objectmappingrequest
title: Objectmappingrequest
pagination_label: Objectmappingrequest
sidebar_label: Objectmappingrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Objectmappingrequest', 'Objectmappingrequest'] 
slug: /tools/sdk/powershell/configurationhub/models/objectmappingrequest
tags: ['SDK', 'Software Development Kit', 'Objectmappingrequest', 'Objectmappingrequest']
---


# Objectmappingrequest

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
$Objectmappingrequest = Initialize-Objectmappingrequest  -ObjectType IDENTITY `
 -JsonPath $.name `
 -SourceValue My Governance Group Name `
 -TargetValue My New Governance Group Name `
 -Enabled false
```

- Convert the resource to JSON
```powershell
$Objectmappingrequest | ConvertTo-JSON
```


[[Back to top]](#) 

