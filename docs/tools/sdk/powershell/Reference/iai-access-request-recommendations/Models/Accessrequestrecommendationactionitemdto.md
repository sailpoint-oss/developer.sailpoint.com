---
id: accessrequestrecommendationactionitemdto
title: Accessrequestrecommendationactionitemdto
pagination_label: Accessrequestrecommendationactionitemdto
sidebar_label: Accessrequestrecommendationactionitemdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestrecommendationactionitemdto', 'Accessrequestrecommendationactionitemdto'] 
slug: /tools/sdk/powershell/iaiaccessrequestrecommendations/models/accessrequestrecommendationactionitemdto
tags: ['SDK', 'Software Development Kit', 'Accessrequestrecommendationactionitemdto', 'Accessrequestrecommendationactionitemdto']
---


# Accessrequestrecommendationactionitemdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | The identity ID taking the action. | [required]
**Access** | [**Accessrequestrecommendationitem**](accessrequestrecommendationitem) |  | [required]

## Examples

- Prepare the resource
```powershell
$Accessrequestrecommendationactionitemdto = Initialize-Accessrequestrecommendationactionitemdto  -IdentityId 2c91808570313110017040b06f344ec9 `
 -Access null
```

- Convert the resource to JSON
```powershell
$Accessrequestrecommendationactionitemdto | ConvertTo-JSON
```


[[Back to top]](#) 

