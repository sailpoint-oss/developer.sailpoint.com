# MachineAccountDiscoveryReason

# MachineAccountDiscoveryReason

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Reason ID. | [optional] 
**Message** | **String** | Readable message for the reason, in the requested language. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountDiscoveryReason = Initialize-MachineAccountDiscoveryReason  -Id high-privilege-grant `
 -Message Account was granted high-privilege access.
```

- Convert the resource to JSON
```powershell
$MachineAccountDiscoveryReason | ConvertTo-JSON
```


[[Back to top]](#) 

