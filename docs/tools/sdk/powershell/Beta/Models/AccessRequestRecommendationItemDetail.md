---
id: access-request-recommendation-item-detail
title: AccessRequestRecommendationItemDetail
pagination_label: AccessRequestRecommendationItemDetail
sidebar_label: AccessRequestRecommendationItemDetail
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessRequestRecommendationItemDetail'] 
slug: /tools/sdk/powershell/beta/models/access-request-recommendation-item-detail
tags: ['SDK', 'Software Development Kit', 'AccessRequestRecommendationItemDetail']
---


# AccessRequestRecommendationItemDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** |  Pointer to **String** | Identity ID for the recommendation | [optional] 
**Access** |  Pointer to [**AccessRequestRecommendationItemDetailAccess**](access-request-recommendation-item-detail-access) |  | [optional] 
**Ignored** |  Pointer to **Boolean** | Whether or not the identity has already chosen to ignore this recommendation. | [optional] 
**Requested** |  Pointer to **Boolean** | Whether or not the identity has already chosen to request this recommendation. | [optional] 
**Viewed** |  Pointer to **Boolean** | Whether or not the identity reportedly viewed this recommendation. | [optional] 
**Messages** |  Pointer to [**[]AccessRecommendationMessage**](access-recommendation-message) |  | [optional] 
**TranslationMessages** |  Pointer to [**[]TranslationMessage**](translation-message) | The list of translation messages | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestRecommendationItemDetail = Initialize-BetaAccessRequestRecommendationItemDetail  -IdentityId 2c91808570313110017040b06f344ec9 `
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

