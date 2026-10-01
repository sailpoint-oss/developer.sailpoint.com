# MachineIdentityDeleted

# MachineIdentityDeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** |  **Enum** [  "MACHINE_IDENTITY_DELETED" ] | Type of the event. | [required]
**MachineIdentity** | [**MachineIdentityDeletedMachineIdentity**](machine-identity-deleted-machine-identity) |  | [required]

## Examples

- Prepare the resource
```powershell
$MachineIdentityDeleted = Initialize-MachineIdentityDeleted  -EventType MACHINE_IDENTITY_DELETED `
 -MachineIdentity null
```

- Convert the resource to JSON
```powershell
$MachineIdentityDeleted | ConvertTo-JSON
```


[[Back to top]](#) 

