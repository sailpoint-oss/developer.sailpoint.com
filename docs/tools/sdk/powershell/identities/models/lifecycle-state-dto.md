# LifecycleStateDto

# LifecycleStateDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StateName** | **String** | The name of the lifecycle state | [required]
**ManuallyUpdated** | **Boolean** | Whether the lifecycle state has been manually or automatically set | [required]

## Examples

- Prepare the resource
```powershell
$LifecycleStateDto = Initialize-LifecycleStateDto  -StateName active `
 -ManuallyUpdated true
```

- Convert the resource to JSON
```powershell
$LifecycleStateDto | ConvertTo-JSON
```


[[Back to top]](#) 

