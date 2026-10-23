# Intelnonhumanidentityownershipitem

# Intelnonhumanidentityownershipitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identity Security Cloud identifier for the owned non-human identity. | [required]
**DisplayName** | **String** | Preferred display name for the owned non-human identity. | [required]
**Source** | [**Intelmachinesourcewire**](intelmachinesourcewire) | Source of the owned non-human identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$Intelnonhumanidentityownershipitem = Initialize-Intelnonhumanidentityownershipitem  -Id 2c91808874ff91550175097daaec161e `
 -DisplayName Example AI Agent `
 -Source null
```

- Convert the resource to JSON
```powershell
$Intelnonhumanidentityownershipitem | ConvertTo-JSON
```


[[Back to top]](#) 

