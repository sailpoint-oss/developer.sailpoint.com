# TemplateSlackCustomFields

# TemplateSlackCustomFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestType** | **String** | The type of request | [optional] 
**ContainsDeny** | **String** | Whether the request contains a deny action | [optional] 
**CampaignId** | **String** | The campaign ID | [optional] 
**CampaignStatus** | **String** | The campaign status | [optional] 

## Examples

- Prepare the resource
```powershell
$TemplateSlackCustomFields = Initialize-TemplateSlackCustomFields  -RequestType null `
 -ContainsDeny null `
 -CampaignId null `
 -CampaignStatus null
```

- Convert the resource to JSON
```powershell
$TemplateSlackCustomFields | ConvertTo-JSON
```


[[Back to top]](#) 

