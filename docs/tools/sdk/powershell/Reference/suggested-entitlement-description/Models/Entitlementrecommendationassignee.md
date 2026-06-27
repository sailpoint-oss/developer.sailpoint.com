---
id: entitlementrecommendationassignee
title: Entitlementrecommendationassignee
pagination_label: Entitlementrecommendationassignee
sidebar_label: Entitlementrecommendationassignee
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementrecommendationassignee', 'Entitlementrecommendationassignee'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/entitlementrecommendationassignee
tags: ['SDK', 'Software Development Kit', 'Entitlementrecommendationassignee', 'Entitlementrecommendationassignee']
---


# Entitlementrecommendationassignee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP",    "SOURCE_OWNER",    "ENTITLEMENT_OWNER" ] | The type of assignee. | [required]
**Value** | **String** | The ID of the identity or governance group to assign to. | [required]

## Examples

- Prepare the resource
```powershell
$Entitlementrecommendationassignee = Initialize-Entitlementrecommendationassignee  -Type IDENTITY `
 -Value 2c91808a7f3b2e8a017f3c3e5f6d0099
```

- Convert the resource to JSON
```powershell
$Entitlementrecommendationassignee | ConvertTo-JSON
```


[[Back to top]](#) 

