# StartInvocationInput

# StartInvocationInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TriggerId** | **String** | Trigger ID | [optional] 
**VarInput** | **SystemCollectionsHashtable** | Trigger input payload. Its schema is defined in the trigger definition. | [optional] 
**ContentJson** | **SystemCollectionsHashtable** | JSON map of invocation metadata | [optional] 

## Examples

- Prepare the resource
```powershell
$StartInvocationInput = Initialize-StartInvocationInput  -TriggerId idn:access-requested `
 -VarInput {"identityId":"201327fda1c44704ac01181e963d463c"} `
 -ContentJson {"workflowId":1234}
```

- Convert the resource to JSON
```powershell
$StartInvocationInput | ConvertTo-JSON
```


[[Back to top]](#) 

