---
id: v2025-sed-assignee
title: SedAssignee
pagination_label: SedAssignee
sidebar_label: SedAssignee
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SedAssignee', 'V2025SedAssignee'] 
slug: /tools/sdk/powershell/v2025/models/sed-assignee
tags: ['SDK', 'Software Development Kit', 'SedAssignee', 'V2025SedAssignee']
---


# SedAssignee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "GROUP",    "SOURCE_OWNER",    "ENTITLEMENT_OWNER" ] | Type of assignment When value is PERSONA, the value MUST be SOURCE_OWNER or ENTITLEMENT_OWNER IDENTITY SED_ASSIGNEE_IDENTITY_TYPE GROUP SED_ASSIGNEE_GROUP_TYPE SOURCE_OWNER SED_ASSIGNEE_SOURCE_OWNER_TYPE ENTITLEMENT_OWNER SED_ASSIGNEE_ENTITLEMENT_OWNER_TYPE | [required]
**Value** | **String** | Identity or Group identifier Empty when using source/entitlement owner personas | [optional] 

## Examples

- Prepare the resource
```powershell
$SedAssignee = Initialize-V2025SedAssignee  -Type SOURCE_OWNER `
 -Value 016629d1-1d25-463f-97f3-c6686846650
```

- Convert the resource to JSON
```powershell
$SedAssignee | ConvertTo-JSON
```


[[Back to top]](#) 

