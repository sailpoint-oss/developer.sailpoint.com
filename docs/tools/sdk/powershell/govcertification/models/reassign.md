# Reassign

# Reassign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of item or subject being reassigned. | [required]
**Type** | **ReassignEntityType** |  | [required]

## Examples

- Prepare the resource
```powershell
$Reassign = Initialize-Reassign  -Id ef38f943-47e9-4562-b5bb-8424a56397d8 `
 -Type null
```

- Convert the resource to JSON
```powershell
$Reassign | ConvertTo-JSON
```


[[Back to top]](#) 

