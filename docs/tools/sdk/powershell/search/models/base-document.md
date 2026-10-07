# BaseDocument

# BaseDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the referenced object. | [required]
**Name** | **String** | The human readable name of the referenced object. | [required]

## Examples

- Prepare the resource
```powershell
$BaseDocument = Initialize-BaseDocument  -Id 2c91808375d8e80a0175e1f88a575222 `
 -Name john.doe
```

- Convert the resource to JSON
```powershell
$BaseDocument | ConvertTo-JSON
```


[[Back to top]](#) 

