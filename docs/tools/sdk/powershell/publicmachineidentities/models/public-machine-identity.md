# PublicMachineIdentity

# PublicMachineIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Machine identity id. | [optional] 
**Name** | **String** | Human-readable display name of the machine identity. | [optional] 
**Description** | **String** | Description of the machine identity. | [optional] 
**Subtype** | **String** | Machine identity subtype. Present when your tenant returns enriched public machine identity data; otherwise omitted or null. | [optional] 
**Owner** | [**PublicMachineIdentityOwner**](public-machine-identity-owner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$PublicMachineIdentity = Initialize-PublicMachineIdentity  -Id 2c9180857182305e0171993735622948 `
 -Name Production API Agent `
 -Description Agent used for nightly reconciliation jobs. `
 -Subtype AI Agent `
 -Owner null
```

- Convert the resource to JSON
```powershell
$PublicMachineIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

