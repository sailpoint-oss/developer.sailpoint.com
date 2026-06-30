---
id: entitlementrecommendationassignee-one-of
title: EntitlementrecommendationassigneeOneOf
pagination_label: EntitlementrecommendationassigneeOneOf
sidebar_label: EntitlementrecommendationassigneeOneOf
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementrecommendationassigneeOneOf', 'EntitlementrecommendationassigneeOneOf'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/entitlementrecommendationassignee-one-of
tags: ['SDK', 'Software Development Kit', 'EntitlementrecommendationassigneeOneOf', 'EntitlementrecommendationassigneeOneOf']
---


# EntitlementrecommendationassigneeOneOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP" ] | The type of assignee. | [required]
**Value** | **String** | The ID of the identity or governance group to assign to. | [required]

## Examples

- Prepare the resource
```powershell
$EntitlementrecommendationassigneeOneOf = Initialize-EntitlementrecommendationassigneeOneOf  -Type IDENTITY `
 -Value 2c91808a7f3b2e8a017f3c3e5f6d0099
```

- Convert the resource to JSON
```powershell
$EntitlementrecommendationassigneeOneOf | ConvertTo-JSON
```


[[Back to top]](#) 

