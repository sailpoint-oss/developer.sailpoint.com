# FormElementDynamicDataSource

# FormElementDynamicDataSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | [**FormElementDynamicDataSourceConfig**](form-element-dynamic-data-source-config) |  | [optional] 
**DataSourceType** |  **Enum** [  "STATIC",    "INTERNAL",    "SEARCH",    "FORM_INPUT" ] | DataSourceType is a FormElementDataSourceType value STATIC FormElementDataSourceTypeStatic INTERNAL FormElementDataSourceTypeInternal SEARCH FormElementDataSourceTypeSearch FORM_INPUT FormElementDataSourceTypeFormInput | [optional] 

## Examples

- Prepare the resource
```powershell
$FormElementDynamicDataSource = Initialize-FormElementDynamicDataSource  -Config null `
 -DataSourceType STATIC
```

- Convert the resource to JSON
```powershell
$FormElementDynamicDataSource | ConvertTo-JSON
```


[[Back to top]](#) 

