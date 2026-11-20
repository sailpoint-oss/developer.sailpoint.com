# RequestOnBehalfOfConfig2

# RequestOnBehalfOfConfig2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowRequestOnBehalfOfAnyoneByAnyone** | **Boolean** | If this is true, anyone can request access for anyone. | [optional] [default to $false]
**AllowRequestOnBehalfOfEmployeeByManager** | **Boolean** | If this is true, a manager can request access for his or her direct reports. | [optional] [default to $false]
**AllowRequestOnBehalfOfForMachineIdentity** | **Boolean** | If this is true, anyone can request access on behalf of machine identities. Machine access request authorization is evaluated as follows: 1. If this flag is true, any requester is allowed. 2. Else if `allowRequestForMachineByOwner` is true, the requester must be an admin or a primary/secondary owner of every requested machine identity. 3. Else admins are still allowed; non-admins receive 403.  | [optional] [default to $true]
**AllowRequestForMachineByOwner** | **Boolean** | When `allowRequestOnBehalfOfForMachineIdentity` is false and this flag is true, only admins and primary/secondary owners of the requested machine identities may submit machine access requests. Defaults to false (opt-in).  | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$RequestOnBehalfOfConfig2 = Initialize-RequestOnBehalfOfConfig2  -AllowRequestOnBehalfOfAnyoneByAnyone true `
 -AllowRequestOnBehalfOfEmployeeByManager true `
 -AllowRequestOnBehalfOfForMachineIdentity true `
 -AllowRequestForMachineByOwner false
```

- Convert the resource to JSON
```powershell
$RequestOnBehalfOfConfig2 | ConvertTo-JSON
```


[[Back to top]](#) 

