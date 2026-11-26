# CampaignsDeleteRequest

# CampaignsDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | The ids of the campaigns to delete | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignsDeleteRequest = Initialize-CampaignsDeleteRequest  -Ids ["ef38f943-47e9-4562-b5bb-8424a56397d8","ef38f943-47e9-4562-b5bb-8424a56397d9"]
```

- Convert the resource to JSON
```powershell
$CampaignsDeleteRequest | ConvertTo-JSON
```


[[Back to top]](#) 

