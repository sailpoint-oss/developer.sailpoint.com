# JitactivationhistorydocumentFrictionsInner

# JitactivationhistorydocumentFrictionsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Type of friction control. | [optional] 
**BypassAllowed** | **Boolean** | Whether the user had permission to bypass this friction. | [optional] [default to $false]
**SubmittedData** | **String** | Data submitted by the user to satisfy this friction (e.g. ticket ID, justification text). | [optional] 
**Status** | **String** | Completion status of this friction item. | [optional] 

## Examples

- Prepare the resource
```powershell
$JitactivationhistorydocumentFrictionsInner = Initialize-JitactivationhistorydocumentFrictionsInner  -Type TICKET `
 -BypassAllowed false `
 -SubmittedData INC0012345 `
 -Status COMPLETE
```

- Convert the resource to JSON
```powershell
$JitactivationhistorydocumentFrictionsInner | ConvertTo-JSON
```


[[Back to top]](#) 

