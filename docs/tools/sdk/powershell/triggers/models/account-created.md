# AccountCreated

# AccountCreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarEvent** | [**AccountCreatedEvent**](account-created-event) |  | [required]
**Source** | [**AccountSourceReference**](account-source-reference) |  | [required]
**Account** | [**AccountV2**](account-v2) |  | [required]
**Identity** | [**IdentityReference2**](identity-reference2) |  | [required]

## Examples

- Prepare the resource
```powershell
$AccountCreated = Initialize-AccountCreated  -VarEvent null `
 -Source null `
 -Account null `
 -Identity null
```

- Convert the resource to JSON
```powershell
$AccountCreated | ConvertTo-JSON
```


[[Back to top]](#) 

