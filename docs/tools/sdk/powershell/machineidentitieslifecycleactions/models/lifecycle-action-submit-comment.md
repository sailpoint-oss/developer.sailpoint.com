# LifecycleActionSubmitComment

# LifecycleActionSubmitComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Free-text comment submitted with the lifecycle action request. | [required]

## Examples

- Prepare the resource
```powershell
$LifecycleActionSubmitComment = Initialize-LifecycleActionSubmitComment  -Comment Suspending agent until security review completes
```

- Convert the resource to JSON
```powershell
$LifecycleActionSubmitComment | ConvertTo-JSON
```


[[Back to top]](#) 

