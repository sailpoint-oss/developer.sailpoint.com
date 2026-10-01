# Responseactioncreaterequest

# Responseactioncreaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionType** |  **Enum** [  "DISABLE_IDENTITY",    "DISABLE_ACCOUNT" ] | Which response action to run. | [required]
**IdentityType** |  **Enum** [  "HUMAN" ] | Subject type of the response action. v1 supports HUMAN. | [required]
**IdentityId** | **String** | ISC identity id, resolved by the caller from a prior intelligence query. | [required]
**AccountIds** | **[]String** | One or more account ids. Required for DISABLE_ACCOUNT (1-50 after trim/dedupe); must be omitted for DISABLE_IDENTITY. A single account is sent as a one-element array.  | [optional] 
**Context** | [**Responseactioncontext**](responseactioncontext) |  | [required]

## Examples

- Prepare the resource
```powershell
$Responseactioncreaterequest = Initialize-Responseactioncreaterequest  -ActionType DISABLE_ACCOUNT `
 -IdentityType HUMAN `
 -IdentityId 2c918085842e69ae018428c919680149 `
 -AccountIds ["2c918085abc000000000000000000001"] `
 -Context null
```

- Convert the resource to JSON
```powershell
$Responseactioncreaterequest | ConvertTo-JSON
```


[[Back to top]](#) 

