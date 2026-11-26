# MachineAccountSubtypeListConfigMachineAccountCreate

# MachineAccountSubtypeListConfigMachineAccountCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountCreateEnabled** | **Boolean** | Whether machine account creation is enabled for this subtype. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$MachineAccountSubtypeListConfigMachineAccountCreate = Initialize-MachineAccountSubtypeListConfigMachineAccountCreate  -AccountCreateEnabled true
```

- Convert the resource to JSON
```powershell
$MachineAccountSubtypeListConfigMachineAccountCreate | ConvertTo-JSON
```


[[Back to top]](#) 

