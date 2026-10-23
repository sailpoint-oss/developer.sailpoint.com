# Intelmachineidentityowners

# Intelmachineidentityowners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrimaryIdentity** | [**Intelmachineentityref**](intelmachineentityref) | Primary human owner of the machine identity when assigned. | [required]
**SecondaryIdentities** | [**[]Intelmachineentityref**](intelmachineentityref) | Secondary human owners associated with the machine identity. | [required]

## Examples

- Prepare the resource
```powershell
$Intelmachineidentityowners = Initialize-Intelmachineidentityowners  -PrimaryIdentity null `
 -SecondaryIdentities null
```

- Convert the resource to JSON
```powershell
$Intelmachineidentityowners | ConvertTo-JSON
```


[[Back to top]](#) 

