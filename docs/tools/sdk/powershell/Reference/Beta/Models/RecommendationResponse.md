---
id: beta-recommendation-response
title: RecommendationResponse
pagination_label: RecommendationResponse
sidebar_label: RecommendationResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RecommendationResponse', 'BetaRecommendationResponse'] 
slug: /tools/sdk/powershell/beta/models/recommendation-response
tags: ['SDK', 'Software Development Kit', 'RecommendationResponse', 'BetaRecommendationResponse']
---


# RecommendationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Request** | [**RecommendationRequest**](recommendation-request) |  | [optional] 
**Recommendation** |  **Enum** [  "true",    "false",    "MAYBE",    "NOT_FOUND" ] | The recommendation - YES if the access is recommended, NO if not recommended, MAYBE if there is not enough information to make a recommendation, NOT_FOUND if the identity is not found in the system | [optional] 
**Interpretations** | **[]String** | The list of interpretations explaining the recommendation. The array is empty if includeInterpretations is false or not present in the request. e.g. - [ ""Not approved in the last 6 months."" ]. Interpretations will be translated using the client's locale as found in the Accept-Language header. If a translation for the client's locale cannot be found, the US English translation will be returned. | [optional] 
**TranslationMessages** | [**[]TranslationMessage**](translation-message) | The list of translation messages, if they have been requested. | [optional] 
**RecommenderCalculations** | [**RecommenderCalculations**](recommender-calculations) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RecommendationResponse = Initialize-BetaRecommendationResponse  -Request null `
 -Recommendation true `
 -Interpretations [75% of identities with the same department have this access. This information had a high impact on the overall score., 67% of identities with the same peer group have this access. This information had a low impact on the overall score., 42% of identities with the same location have this access. This information had a low impact on the overall score.] `
 -TranslationMessages [{key=recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH, values=[75, department]}] `
 -RecommenderCalculations null
```

- Convert the resource to JSON
```powershell
$RecommendationResponse | ConvertTo-JSON
```


[[Back to top]](#) 

