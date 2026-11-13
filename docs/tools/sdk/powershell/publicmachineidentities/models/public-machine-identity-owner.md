# PublicMachineIdentityOwner

# PublicMachineIdentityOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identity id of the primary owner. | [optional] 
**Name** | **String** | Human-readable display name of the primary owner. | [optional] 
**Email** | **String** | Email address of the primary owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$PublicMachineIdentityOwner = Initialize-PublicMachineIdentityOwner  -Id 2c9180857182305e0171993735622948 `
 -Name Alison Ferguso `
 -Email alison.ferguso@acme-solar.com
```

- Convert the resource to JSON
```powershell
$PublicMachineIdentityOwner | ConvertTo-JSON
```


[[Back to top]](#) 

