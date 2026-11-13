# KbaAnswerRequestItem

# KbaAnswerRequestItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Question Id | [required]
**Answer** | **String** | An answer for the KBA question | [required]

## Examples

- Prepare the resource
```powershell
$KbaAnswerRequestItem = Initialize-KbaAnswerRequestItem  -Id c54fee53-2d63-4fc5-9259-3e93b9994135 `
 -Answer Your answer
```

- Convert the resource to JSON
```powershell
$KbaAnswerRequestItem | ConvertTo-JSON
```


[[Back to top]](#) 

