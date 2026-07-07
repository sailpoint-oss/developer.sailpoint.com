---
id: recommendationrequest
title: Recommendationrequest
pagination_label: Recommendationrequest
sidebar_label: Recommendationrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Recommendationrequest', 'Recommendationrequest'] 
slug: /tools/sdk/powershell/iairecommendations/models/recommendationrequest
tags: ['SDK', 'Software Development Kit', 'Recommendationrequest', 'Recommendationrequest']
---


# Recommendationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | The identity ID | [optional] 
**Item** | [**Accessitemref**](accessitemref) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Recommendationrequest = Initialize-Recommendationrequest  -IdentityId 2c938083633d259901633d25c68c00fa `
 -Item null
```

- Convert the resource to JSON
```powershell
$Recommendationrequest | ConvertTo-JSON
```


[[Back to top]](#) 

