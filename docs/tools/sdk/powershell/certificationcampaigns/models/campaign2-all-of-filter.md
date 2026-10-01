# Campaign2AllOfFilter

# Campaign2AllOfFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of whatever type of filter is being used. | [optional] 
**Type** |  **Enum** [  "CAMPAIGN_FILTER" ] | Type of the filter | [optional] 
**Name** | **String** | Name of the filter | [optional] 

## Examples

- Prepare the resource
```powershell
$Campaign2AllOfFilter = Initialize-Campaign2AllOfFilter  -Id 0fbe863c063c4c88a35fd7f17e8a3df5 `
 -Type CAMPAIGN_FILTER `
 -Name Test Filter
```

- Convert the resource to JSON
```powershell
$Campaign2AllOfFilter | ConvertTo-JSON
```


[[Back to top]](#) 

