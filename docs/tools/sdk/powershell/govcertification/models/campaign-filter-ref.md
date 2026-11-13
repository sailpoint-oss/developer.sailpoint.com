# CampaignFilterRef

# CampaignFilterRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of whatever type of filter is being used. | [required]
**Name** | **String** | Name of the filter | [required]

## Examples

- Prepare the resource
```powershell
$CampaignFilterRef = Initialize-CampaignFilterRef  -Id e9f9a139-7b84-2fd5-a658-42087040d3ac `
 -Name Test Filter
```

- Convert the resource to JSON
```powershell
$CampaignFilterRef | ConvertTo-JSON
```


[[Back to top]](#) 

