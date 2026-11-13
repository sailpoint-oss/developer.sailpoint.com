# CampaignFilterGet

# CampaignFilterGet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the campaign filter | [optional] 
**Name** | **String** | This is campaign filter's name. | [required]
**Description** | **String** | This is campaign filter's description. | [required]
**Owner** | **String** | The owner of this filter. This field is automatically populated at creation time with the current user. | [required]
**Created** | **System.DateTime** | Creation date of Campaign Filter | [optional] [readonly] 
**Modified** | **System.DateTime** | Modification date of Campaign Filter | [optional] [readonly] 
**Mode** | **CampaignFilterType** |  | [required]
**CriteriaList** | [**[]Criteria**](criteria) | List of criteria. | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignFilterGet = Initialize-CampaignFilterGet  -Id e9f9a139-7b84-2fd5-a658-42087040d3ac `
 -Name Identity Attribute Campaign Filter `
 -Description Campaign filter to certify data based on specified property of Identity Attribute. `
 -Owner SailPoint Support `
 -Created 2020-03-05T22:44:00.364Z `
 -Modified 2020-03-05T22:52:09.969Z `
 -Mode null `
 -CriteriaList [{"criteriaType":"IDENTITY","criteriaProperty":"DISPLAY_NAME","criteriaValue":"support","operation":"EQUALS"}]
```

- Convert the resource to JSON
```powershell
$CampaignFilterGet | ConvertTo-JSON
```


[[Back to top]](#) 

