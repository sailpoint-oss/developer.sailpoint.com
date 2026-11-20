# ReassignReference

# ReassignReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reassign** | [**[]Reassign**](reassign) | List of entities to be reassigned. | [required]
**ReassignTo** | **String** | The ID of the identity to which the certification is reassigned | [required]
**Reason** | **String** | The reason comment for why the reassign was made | [required]

## Examples

- Prepare the resource
```powershell
$ReassignReference = Initialize-ReassignReference  -Reassign [{"id":"ef38f943-47e9-4562-b5bb-8424a56397d8","type":"ITEM"}] `
 -ReassignTo ef38f943-47e9-4562-b5bb-8424a56397d8 `
 -Reason Reassigning this item to the appropriate reviewer.
```

- Convert the resource to JSON
```powershell
$ReassignReference | ConvertTo-JSON
```


[[Back to top]](#) 

