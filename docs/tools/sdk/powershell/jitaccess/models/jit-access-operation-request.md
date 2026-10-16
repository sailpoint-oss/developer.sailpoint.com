# JitAccessOperationRequest

# JitAccessOperationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |  **Enum** [  "replace" ] | Operation type. Defaults to `replace` if omitted. | [optional] [default to "replace"]
**Path** |  **Enum** [  "/entitlementIds",    "/maxActivationPeriodMins",    "/maxActivationPeriodExtensionMins",    "/defaultMaxActivationPeriodMins",    "/defaultMaxActivationPeriodExtensionMins",    "/notificationRecipients",    "/notificationTemplate",    "/applyToFutureAssignments" ] | Path to replace. Only the following JSON Pointer-style paths are supported.  | [required]
**Value** | [**JitAccessOperationRequestValue**](jit-access-operation-request-value) |  | [required]

## Examples

- Prepare the resource
```powershell
$JitAccessOperationRequest = Initialize-JitAccessOperationRequest  -Op replace `
 -Path /maxActivationPeriodMins `
 -Value null
```

- Convert the resource to JSON
```powershell
$JitAccessOperationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

