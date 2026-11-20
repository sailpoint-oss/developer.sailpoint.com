# ListCampaignFiltersV1200Response

# ListCampaignFiltersV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]CampaignFilterDetails**](campaign-filter-details) | List of campaign filters. | [optional] 
**Count** | **Int32** | Number of filters returned. | [optional] 

## Examples

- Prepare the resource
```powershell
$ListCampaignFiltersV1200Response = Initialize-ListCampaignFiltersV1200Response  -Items null `
 -Count 2
```

- Convert the resource to JSON
```powershell
$ListCampaignFiltersV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

