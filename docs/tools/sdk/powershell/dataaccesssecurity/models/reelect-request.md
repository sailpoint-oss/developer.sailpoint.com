# ReelectRequest

# ReelectRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OwnerId** | **String** | The UUID of the identity proposed to be re-elected as the resource owner. | [optional] 
**CampaignName** | **String** | The name of the campaign or election process for re-electing the owner. | [optional] 
**Reviewers** | **[]String** | A list of UUIDs representing the identities of reviewers participating in the re-election process. | [optional] 

## Examples

- Prepare the resource
```powershell
$ReelectRequest = Initialize-ReelectRequest  -OwnerId c1a2b3d4-e5f6-7890-abcd-1234567890ab `
 -CampaignName Annual Resource Owner Election `
 -Reviewers ["d4e5f6a7-b8c9-0123-4567-89abcdef0123","e7f8g9h0-i1j2-3456-7890-klmnopqrstuv"]
```

- Convert the resource to JSON
```powershell
$ReelectRequest | ConvertTo-JSON
```


[[Back to top]](#) 

