# IdentityV2LifecycleState

# IdentityV2LifecycleState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StateName** | **String** | The name of the lifecycle state | [required]
**ManuallyUpdated** | **Boolean** | Whether the lifecycle state has been manually or automatically set | [required]

## Examples

- Prepare the resource
```powershell
$IdentityV2LifecycleState = Initialize-IdentityV2LifecycleState  -StateName active `
 -ManuallyUpdated true
```

- Convert the resource to JSON
```powershell
$IdentityV2LifecycleState | ConvertTo-JSON
```


[[Back to top]](#) 

