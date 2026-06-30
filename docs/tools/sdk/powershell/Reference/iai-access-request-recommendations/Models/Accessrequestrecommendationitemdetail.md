---
id: accessrequestrecommendationitemdetail
title: Accessrequestrecommendationitemdetail
pagination_label: Accessrequestrecommendationitemdetail
sidebar_label: Accessrequestrecommendationitemdetail
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestrecommendationitemdetail', 'Accessrequestrecommendationitemdetail'] 
slug: /tools/sdk/powershell/iaiaccessrequestrecommendations/models/accessrequestrecommendationitemdetail
tags: ['SDK', 'Software Development Kit', 'Accessrequestrecommendationitemdetail', 'Accessrequestrecommendationitemdetail']
---


# Accessrequestrecommendationitemdetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | Identity ID for the recommendation | [optional] 
**Access** | [**AccessrequestrecommendationitemdetailAccess**](accessrequestrecommendationitemdetail-access) |  | [optional] 
**Ignored** | **Boolean** | Whether or not the identity has already chosen to ignore this recommendation. | [optional] 
**Requested** | **Boolean** | Whether or not the identity has already chosen to request this recommendation. | [optional] 
**Viewed** | **Boolean** | Whether or not the identity reportedly viewed this recommendation. | [optional] 
**Messages** | [**[]Accessrecommendationmessage**](accessrecommendationmessage) |  | [optional] 
**TranslationMessages** | [**[]Translationmessage**](translationmessage) | The list of translation messages | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessrequestrecommendationitemdetail = Initialize-Accessrequestrecommendationitemdetail  -IdentityId 2c91808570313110017040b06f344ec9 `
 -Access null `
 -Ignored true `
 -Requested true `
 -Viewed true `
 -Messages null `
 -TranslationMessages [{"key":"recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH","values":["75","department"]}]
```

- Convert the resource to JSON
```powershell
$Accessrequestrecommendationitemdetail | ConvertTo-JSON
```


[[Back to top]](#) 

