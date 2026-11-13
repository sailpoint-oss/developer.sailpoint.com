# Conflictingitemsourceref

# Conflictingitemsourceref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Source resource identifier when known. | [optional] 
**Name** | **String** | Display name of the source. | [optional] 
**Type** | **String** | Source type classification (for example application or connector type). | [optional] 
**Description** | **String** | Human-readable description of the source. | [optional] 

## Examples

- Prepare the resource
```powershell
$Conflictingitemsourceref = Initialize-Conflictingitemsourceref  -Id 2c9180825a6c1adc015a71c9db2101a1 `
 -Name Active Directory `
 -Type DIRECT_CONNECT `
 -Description Corporate Active Directory source.
```

- Convert the resource to JSON
```powershell
$Conflictingitemsourceref | ConvertTo-JSON
```


[[Back to top]](#) 

