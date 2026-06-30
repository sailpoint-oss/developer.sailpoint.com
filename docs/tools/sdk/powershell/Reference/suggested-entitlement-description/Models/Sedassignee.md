---
id: sedassignee
title: Sedassignee
pagination_label: Sedassignee
sidebar_label: Sedassignee
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sedassignee', 'Sedassignee'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/sedassignee
tags: ['SDK', 'Software Development Kit', 'Sedassignee', 'Sedassignee']
---


# Sedassignee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "GROUP",    "SOURCE_OWNER",    "ENTITLEMENT_OWNER" ] | Type of assignment When value is PERSONA, the value MUST be SOURCE_OWNER or ENTITLEMENT_OWNER IDENTITY SED_ASSIGNEE_IDENTITY_TYPE GROUP SED_ASSIGNEE_GROUP_TYPE SOURCE_OWNER SED_ASSIGNEE_SOURCE_OWNER_TYPE ENTITLEMENT_OWNER SED_ASSIGNEE_ENTITLEMENT_OWNER_TYPE | [required]
**Value** | **String** | Identity or Group identifier Empty when using source/entitlement owner personas | [optional] 

## Examples

- Prepare the resource
```powershell
$Sedassignee = Initialize-Sedassignee  -Type SOURCE_OWNER `
 -Value 016629d1-1d25-463f-97f3-c6686846650
```

- Convert the resource to JSON
```powershell
$Sedassignee | ConvertTo-JSON
```


[[Back to top]](#) 

