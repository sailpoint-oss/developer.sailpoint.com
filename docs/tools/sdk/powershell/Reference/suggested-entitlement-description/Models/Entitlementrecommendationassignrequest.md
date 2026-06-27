---
id: entitlementrecommendationassignrequest
title: Entitlementrecommendationassignrequest
pagination_label: Entitlementrecommendationassignrequest
sidebar_label: Entitlementrecommendationassignrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementrecommendationassignrequest', 'Entitlementrecommendationassignrequest'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/entitlementrecommendationassignrequest
tags: ['SDK', 'Software Development Kit', 'Entitlementrecommendationassignrequest', 'Entitlementrecommendationassignrequest']
---


# Entitlementrecommendationassignrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | **[]String** | The list of recommendation record IDs to assign. | [required]
**Assignee** | [**Entitlementrecommendationassignee**](entitlementrecommendationassignee) |  | [required]

## Examples

- Prepare the resource
```powershell
$Entitlementrecommendationassignrequest = Initialize-Entitlementrecommendationassignrequest  -Items ["79db50d4-723c-4aa0-a824-83c2205d82d1","a1b2c3d4-e5f6-7890-abcd-ef1234567890"] `
 -Assignee null
```

- Convert the resource to JSON
```powershell
$Entitlementrecommendationassignrequest | ConvertTo-JSON
```


[[Back to top]](#) 

