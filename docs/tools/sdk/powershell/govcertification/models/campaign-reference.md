# CampaignReference

# CampaignReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the campaign. | [required]
**Name** | **String** | The name of the campaign. | [required]
**Description** | **String** | The description of the campaign set by the admin who created it. | [optional] 
**Type** | **CampaignType** |  | [optional] 
**MandatoryCommentRequirement** | **MandatoryCommentType** |  | [optional] 
**RecommendationsEnabled** | **Boolean** | Indicates if the campaign related recommendations enabled. | [optional] [default to $false]
**Reviewer** | [**CampaignReferenceReviewer**](campaign-reference-reviewer) |  | [optional] 
**GenerationType** | **CampaignGenerationType** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignReference = Initialize-CampaignReference  -Id ef38f943-47e9-4562-b5bb-8424a56397d8 `
 -Name Campaign Name `
 -Description A description of the campaign `
 -Type null `
 -MandatoryCommentRequirement null `
 -RecommendationsEnabled false `
 -Reviewer null `
 -GenerationType null
```

- Convert the resource to JSON
```powershell
$CampaignReference | ConvertTo-JSON
```


[[Back to top]](#) 

