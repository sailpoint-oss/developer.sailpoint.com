---
id: bulkapproveentitlementrecommendationitem
title: Bulkapproveentitlementrecommendationitem
pagination_label: Bulkapproveentitlementrecommendationitem
sidebar_label: Bulkapproveentitlementrecommendationitem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Bulkapproveentitlementrecommendationitem', 'Bulkapproveentitlementrecommendationitem'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/bulkapproveentitlementrecommendationitem
tags: ['SDK', 'Software Development Kit', 'Bulkapproveentitlementrecommendationitem', 'Bulkapproveentitlementrecommendationitem']
---


# Bulkapproveentitlementrecommendationitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique identifier of the recommendation record to approve. | [required]
**RecordType** |  **Enum** [  "SED",    "privilege" ] | The type of the recommendation. When omitted, the backend resolves the type by looking up the ID. | [optional] 
**Description** | **String** | The approved description text. Required for SED-type items; ignored for privilege items. | [optional] 
**PrivilegeLevel** | **String** | The approved privilege level. Required for privilege-type items; ignored for SED items. | [optional] 

## Examples

- Prepare the resource
```powershell
$Bulkapproveentitlementrecommendationitem = Initialize-Bulkapproveentitlementrecommendationitem  -Id 79db50d4-723c-4aa0-a824-83c2205d82d1 `
 -RecordType SED `
 -Description Provides access and permissions related to the Delinea Secret Server Cloud system. `
 -PrivilegeLevel high
```

- Convert the resource to JSON
```powershell
$Bulkapproveentitlementrecommendationitem | ConvertTo-JSON
```


[[Back to top]](#) 

