# CompleteInvocationInput

# CompleteInvocationInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LocalizedError** | [**LocalizedMessage**](localized-message) |  | [optional] 
**Output** | **SystemCollectionsHashtable** | Trigger output that completed the invocation. Its schema is defined in the trigger definition. | [optional] 

## Examples

- Prepare the resource
```powershell
$CompleteInvocationInput = Initialize-CompleteInvocationInput  -LocalizedError null `
 -Output {"approved":false}
```

- Convert the resource to JSON
```powershell
$CompleteInvocationInput | ConvertTo-JSON
```


[[Back to top]](#) 

