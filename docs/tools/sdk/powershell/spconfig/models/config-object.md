# ConfigObject

# ConfigObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **Int32** | Current version of configuration object. | [optional] 
**Self** | [**SelfImportExportDto**](self-import-export-dto) |  | [optional] 
**Object** | **map[string]AnyType** | Object details. Format dependant on the object type. | [optional] 

## Examples

- Prepare the resource
```powershell
$ConfigObject = Initialize-ConfigObject  -Version 1 `
 -Self null `
 -Object null
```

- Convert the resource to JSON
```powershell
$ConfigObject | ConvertTo-JSON
```


[[Back to top]](#) 

