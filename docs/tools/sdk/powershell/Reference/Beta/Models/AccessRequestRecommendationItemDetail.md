---
id: beta-access-request-recommendation-item-detail
title: AccessRequestRecommendationItemDetail
pagination_label: AccessRequestRecommendationItemDetail
sidebar_label: AccessRequestRecommendationItemDetail
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestRecommendationItemDetail', 'BetaAccessRequestRecommendationItemDetail'] 
slug: /tools/sdk/powershell/beta/models/access-request-recommendation-item-detail
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationItemDetail', 'BetaAccessRequestRecommendationItemDetail']
---


# AccessRequestRecommendationItemDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | Identity ID for the recommendation | [optional] 
**Access** | [**AccessRequestRecommendationItemDetailAccess**](access-request-recommendation-item-detail-access) |  | [optional] 
**Ignored** | **Boolean** | Whether or not the identity has already chosen to ignore this recommendation. | [optional] 
**Requested** | **Boolean** | Whether or not the identity has already chosen to request this recommendation. | [optional] 
**Viewed** | **Boolean** | Whether or not the identity reportedly viewed this recommendation. | [optional] 
**Messages** | [**[]AccessRecommendationMessage**](access-recommendation-message) |  | [optional] 
**TranslationMessages** | [**[]TranslationMessage**](translation-message) | The list of translation messages | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestRecommendationItemDetail = Initialize-PSSailpoint.BetaAccessRequestRecommendationItemDetail  -IdentityId 2c91808570313110017040b06f344ec9 `
 -Access null `
 -Ignored true `
 -Requested true `
 -Viewed true `
 -Messages null `
 -TranslationMessages [{key=recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH, values=[75, department]}]
```

- Convert the resource to JSON
```powershell
$AccessRequestRecommendationItemDetail | ConvertTo-JSON
```


[[Back to top]](#) 

