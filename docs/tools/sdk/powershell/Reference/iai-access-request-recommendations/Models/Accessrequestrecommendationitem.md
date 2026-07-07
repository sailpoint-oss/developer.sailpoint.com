---
id: accessrequestrecommendationitem
title: Accessrequestrecommendationitem
pagination_label: Accessrequestrecommendationitem
sidebar_label: Accessrequestrecommendationitem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestrecommendationitem', 'Accessrequestrecommendationitem'] 
slug: /tools/sdk/powershell/iaiaccessrequestrecommendations/models/accessrequestrecommendationitem
tags: ['SDK', 'Software Development Kit', 'Accessrequestrecommendationitem', 'Accessrequestrecommendationitem']
---


# Accessrequestrecommendationitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of access item being recommended. | [optional] 
**Type** | [**Accessrequestrecommendationitemtype**](accessrequestrecommendationitemtype) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessrequestrecommendationitem = Initialize-Accessrequestrecommendationitem  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Type null
```

- Convert the resource to JSON
```powershell
$Accessrequestrecommendationitem | ConvertTo-JSON
```


[[Back to top]](#) 

