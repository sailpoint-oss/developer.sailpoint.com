# FormSubmittedCreatedBy

# FormSubmittedCreatedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "WORKFLOW_EXECUTION",    "SOURCE" ] | Form creation origin's type. | [required]
**Id** | **String** | Unique identifier of the origin of the form creation. | [required]

## Examples

- Prepare the resource
```powershell
$FormSubmittedCreatedBy = Initialize-FormSubmittedCreatedBy  -Type WORKFLOW_EXECUTION `
 -Id 2c9180845d1edece015d27a9717c3e19
```

- Convert the resource to JSON
```powershell
$FormSubmittedCreatedBy | ConvertTo-JSON
```


[[Back to top]](#) 

