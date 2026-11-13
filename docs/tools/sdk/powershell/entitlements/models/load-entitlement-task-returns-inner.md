# LoadEntitlementTaskReturnsInner

# LoadEntitlementTaskReturnsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayLabel** | **String** | The display label for the return value | [optional] 
**AttributeName** | **String** | The attribute name for the return value | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadEntitlementTaskReturnsInner = Initialize-LoadEntitlementTaskReturnsInner  -DisplayLabel TASK_OUT_ACCOUNT_GROUP_AGGREGATION_APPLICATIONS `
 -AttributeName applications
```

- Convert the resource to JSON
```powershell
$LoadEntitlementTaskReturnsInner | ConvertTo-JSON
```


[[Back to top]](#) 

