# SourceSubtypeV2WithConfigAllOfConfigMachineAccountCreate

# SourceSubtypeV2WithConfigAllOfConfigMachineAccountCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountCreateEnabled** | **Boolean** | Indicates whether machine account creation is enabled for the subtype. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SourceSubtypeV2WithConfigAllOfConfigMachineAccountCreate = Initialize-SourceSubtypeV2WithConfigAllOfConfigMachineAccountCreate  -AccountCreateEnabled true
```

- Convert the resource to JSON
```powershell
$SourceSubtypeV2WithConfigAllOfConfigMachineAccountCreate | ConvertTo-JSON
```


[[Back to top]](#) 

