---
id: accessrequestrecommendationactionitemresponsedto
title: Accessrequestrecommendationactionitemresponsedto
pagination_label: Accessrequestrecommendationactionitemresponsedto
sidebar_label: Accessrequestrecommendationactionitemresponsedto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestrecommendationactionitemresponsedto', 'Accessrequestrecommendationactionitemresponsedto'] 
slug: /tools/sdk/powershell/iaiaccessrequestrecommendations/models/accessrequestrecommendationactionitemresponsedto
tags: ['SDK', 'Software Development Kit', 'Accessrequestrecommendationactionitemresponsedto', 'Accessrequestrecommendationactionitemresponsedto']
---


# Accessrequestrecommendationactionitemresponsedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | The identity ID taking the action. | [optional] 
**Access** | [**Accessrequestrecommendationitem**](accessrequestrecommendationitem) |  | [optional] 
**Timestamp** | **System.DateTime** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessrequestrecommendationactionitemresponsedto = Initialize-Accessrequestrecommendationactionitemresponsedto  -IdentityId 2c91808570313110017040b06f344ec9 `
 -Access null `
 -Timestamp 2017-07-11T18:45:37.098Z
```

- Convert the resource to JSON
```powershell
$Accessrequestrecommendationactionitemresponsedto | ConvertTo-JSON
```


[[Back to top]](#) 

