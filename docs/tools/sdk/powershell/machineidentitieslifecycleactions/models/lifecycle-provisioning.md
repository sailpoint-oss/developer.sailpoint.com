# LifecycleProvisioning

# LifecycleProvisioning

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **Lifecycleprovisioningstatus** |  | [optional] 
**Started** | **System.DateTime** | Time when provisioning started (ISO-8601). | [optional] 
**Ended** | **System.DateTime** | Time when provisioning ended (ISO-8601). | [optional] 

## Examples

- Prepare the resource
```powershell
$LifecycleProvisioning = Initialize-LifecycleProvisioning  -Status null `
 -Started 2026-05-26T19:05Z `
 -Ended 2026-05-26T19:10Z
```

- Convert the resource to JSON
```powershell
$LifecycleProvisioning | ConvertTo-JSON
```


[[Back to top]](#) 

