# RequestedForDtoRef

# RequestedForDtoRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **String** | The identity id the access is requested for. * `HUMAN` (default): the human identity id. * `MACHINE`: the machine identity id (hyphenated RFC-4122 UUID, not the correlated human identity).  | [required]
**IdentityType** |  **Enum** [  "HUMAN",    "MACHINE" ] | Type of identity the access is requested for. * `HUMAN` (default) - standard human identity access request. * `MACHINE` - machine identity access request. When `MACHINE`, all entries in the request must also be `MACHINE` (mixed human and machine identities in one request are not supported), and only `ENTITLEMENT` items are allowed.  | [optional] [default to "HUMAN"]
**RequestedItems** | [**[]RequestedItemDtoRef**](requested-item-dto-ref) | the details for the access items that are requested for the identity | [required]

## Examples

- Prepare the resource
```powershell
$RequestedForDtoRef = Initialize-RequestedForDtoRef  -IdentityId cb89bc2f1ee6445fbea12224c526ba3a `
 -IdentityType HUMAN `
 -RequestedItems null
```

- Convert the resource to JSON
```powershell
$RequestedForDtoRef | ConvertTo-JSON
```


[[Back to top]](#) 

