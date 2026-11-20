# MachineAccountV2AllOfSubtype

# MachineAccountV2AllOfSubtype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the subtype. | [optional] 
**TechnicalName** | **String** | The technical name of the subtype. | [optional] 
**DisplayName** | **String** | The display name of the subtype. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountV2AllOfSubtype = Initialize-MachineAccountV2AllOfSubtype  -Id 43bdd144-4b17-4fce-a744-17c7fd3e717b `
 -TechnicalName serviceAccount `
 -DisplayName Service Account
```

- Convert the resource to JSON
```powershell
$MachineAccountV2AllOfSubtype | ConvertTo-JSON
```


[[Back to top]](#) 

