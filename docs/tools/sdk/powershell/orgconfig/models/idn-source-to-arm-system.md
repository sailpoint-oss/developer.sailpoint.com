# IdnSourceToArmSystem

# IdnSourceToArmSystem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **String** | The IDN source id. | [optional] 
**SystemId** | **String** | The ARM system id. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdnSourceToArmSystem = Initialize-IdnSourceToArmSystem  -SourceId 2c91808c791a94e501792388b0d62659 `
 -SystemId 1556
```

- Convert the resource to JSON
```powershell
$IdnSourceToArmSystem | ConvertTo-JSON
```


[[Back to top]](#) 

