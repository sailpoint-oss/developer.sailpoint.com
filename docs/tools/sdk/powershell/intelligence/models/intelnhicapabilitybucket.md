# Intelnhicapabilitybucket

# Intelnhicapabilitybucket

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]Intelnhicapabilitywire**](intelnhicapabilitywire) | Capabilities of this kind linked to the identity. | [required]
**TotalCount** | **Int32** | Total count for this kind. Omitted when items is empty. | [optional] 
**Next** | **String** | URL for the next page of this kind. Omitted when all rows fit on this page. | [optional] 

## Examples

- Prepare the resource
```powershell
$Intelnhicapabilitybucket = Initialize-Intelnhicapabilitybucket  -Items null `
 -TotalCount 2 `
 -Next https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/2c91808874ff91550175097daaec161e/capabilities?type=tool&limit=10&offset=10&count=true
```

- Convert the resource to JSON
```powershell
$Intelnhicapabilitybucket | ConvertTo-JSON
```


[[Back to top]](#) 

