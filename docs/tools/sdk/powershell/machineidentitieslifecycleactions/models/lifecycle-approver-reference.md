# LifecycleApproverReference

# LifecycleApproverReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Approver reference type. | [optional] 
**Id** | **String** | Identifier of the approver. | [optional] 
**Name** | **String** | Display name of the approver. | [optional] 

## Examples

- Prepare the resource
```powershell
$LifecycleApproverReference = Initialize-LifecycleApproverReference  -Type IDENTITY `
 -Id 2c9180858082150f0180893dbaf44201 `
 -Name Alex Approver
```

- Convert the resource to JSON
```powershell
$LifecycleApproverReference | ConvertTo-JSON
```


[[Back to top]](#) 

