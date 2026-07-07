---
id: roledocument-all-of-dimensions
title: RoledocumentAllOfDimensions
pagination_label: RoledocumentAllOfDimensions
sidebar_label: RoledocumentAllOfDimensions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoledocumentAllOfDimensions', 'RoledocumentAllOfDimensions'] 
slug: /tools/sdk/powershell/search/models/roledocument-all-of-dimensions
tags: ['SDK', 'Software Development Kit', 'RoledocumentAllOfDimensions', 'RoledocumentAllOfDimensions']
---


# RoledocumentAllOfDimensions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique ID of the dimension. | [optional] 
**Name** | **String** | Name of the dimension. | [optional] 
**Description** | **String** | Description of the dimension. | [optional] 
**Entitlements** | [**[]RoledocumentAllOfEntitlements1**](roledocument-all-of-entitlements1) | Entitlements included with the role. | [optional] 
**AccessProfiles** | [**[]Baseaccessprofile**](baseaccessprofile) | Access profiles included in the dimension. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoledocumentAllOfDimensions = Initialize-RoledocumentAllOfDimensions  -Id b3c28992ba964a40a7598978139d1ced `
 -Name Manager Austin Branch `
 -Description Managers located at the Austin branch `
 -Entitlements null `
 -AccessProfiles null
```

- Convert the resource to JSON
```powershell
$RoledocumentAllOfDimensions | ConvertTo-JSON
```


[[Back to top]](#) 

