# SubscriptionPatchRequestInner

# SubscriptionPatchRequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |  **Enum** [  "add",    "remove",    "replace",    "move",    "copy" ] | The operation to be performed | [required]
**Path** | **String** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**Value** | [**SubscriptionPatchRequestInnerValue**](subscription-patch-request-inner-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SubscriptionPatchRequestInner = Initialize-SubscriptionPatchRequestInner  -Op replace `
 -Path /description `
 -Value null
```

- Convert the resource to JSON
```powershell
$SubscriptionPatchRequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

