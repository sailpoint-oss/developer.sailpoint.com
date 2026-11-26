# Intelnhirisksignals

# Intelnhirisksignals

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]Intelnhirisksignalwire**](intelnhirisksignalwire) | First page of risk factors. | [optional] 
**TotalCount** | **Int32** | Total number of risk factors. Omitted when `items` is empty. | [optional] 
**Next** | **String** | URL for the next page of risk factors. Omitted when everything fits on this page. | [optional] 
**Message** | **String** | Set when risk factors could not be loaded. `items`, `totalCount`, and `next` are omitted. | [optional] 
**Reason** | **Intelenrichmentfailurereason** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Intelnhirisksignals = Initialize-Intelnhirisksignals  -Items null `
 -TotalCount 3 `
 -Next https://tenant.example.api.cloud.sailpoint.com/intelligence/v1/identities/2c91808874ff91550175097daaec161e/risk-signals?limit=10&offset=10&count=true `
 -Message Data temporarily unavailable. Please try again later. `
 -Reason null
```

- Convert the resource to JSON
```powershell
$Intelnhirisksignals | ConvertTo-JSON
```


[[Back to top]](#) 

