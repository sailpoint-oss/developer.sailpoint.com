# RecommendationRequestDto

# RecommendationRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Requests** | [**[]RecommendationRequest**](recommendation-request) |  | [optional] 
**ExcludeInterpretations** | **Boolean** | Exclude interpretations in the response if ""true"". Return interpretations in the response if this attribute is not specified. | [optional] [default to $false]
**IncludeTranslationMessages** | **Boolean** | When set to true, the calling system uses the translated messages for the specified language | [optional] [default to $false]
**IncludeDebugInformation** | **Boolean** | Returns the recommender calculations if set to true | [optional] [default to $false]
**PrescribeMode** | **Boolean** | When set to true, uses prescribedRulesRecommenderConfig to get identity attributes and peer group threshold instead of standard config. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$RecommendationRequestDto = Initialize-RecommendationRequestDto  -Requests null `
 -ExcludeInterpretations false `
 -IncludeTranslationMessages false `
 -IncludeDebugInformation true `
 -PrescribeMode false
```

- Convert the resource to JSON
```powershell
$RecommendationRequestDto | ConvertTo-JSON
```


[[Back to top]](#) 

