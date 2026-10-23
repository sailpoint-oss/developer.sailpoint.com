# FormSubmitted

# FormSubmitted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubmittedAt** | **System.DateTime** | Date and time when the user submitted the form. | [required]
**TenantId** | **String** | ISC tenant's unique identifier. | [required]
**FormInstanceId** | **String** | Form instance's unique identifier. | [required]
**FormDefinitionId** | **String** | Form definition's unique identifier. | [required]
**Name** | **String** | Form's name. | [required]
**CreatedBy** | [**FormSubmittedCreatedBy**](form-submitted-created-by) |  | [required]
**SubmittedBy** | [**FormSubmittedSubmittedBy**](form-submitted-submitted-by) |  | [required]
**FormData** | **map[string]AnyType** | Data in the submitted form. | [required]

## Examples

- Prepare the resource
```powershell
$FormSubmitted = Initialize-FormSubmitted  -SubmittedAt 2020-06-29T22:01:50.474Z `
 -TenantId 2c9180845d1edece015d27a9717c3e19 `
 -FormInstanceId 2c9180835d2e5168015d32f890ca1582 `
 -FormDefinitionId 2c9180835d2e5168015d32f890ca1581 `
 -Name Open Service Request `
 -CreatedBy null `
 -SubmittedBy null `
 -FormData {"department":"IT","requestType":"New Laptop","laptop":"New Laptop type for Engineer","comments":"My laptop is running slowly, and I need to get a shiny new laptop to get my work done. Thanks!"}
```

- Convert the resource to JSON
```powershell
$FormSubmitted | ConvertTo-JSON
```


[[Back to top]](#) 

