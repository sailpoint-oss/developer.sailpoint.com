# EventAttributesFilterDefinitionConditionsInner

# EventAttributesFilterDefinitionConditionsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Path** | **String** | Dot-separated path to the field to compare, relative to each item in the filter's `path`. | [required]
**Operator** | **String** | Comparison operator. `string` fields support `==`, `!=`, `=~`, `size`, `contains`, `is empty`, `is not empty`, `is null` and `is not null`. `number` fields support `==`, `!=`, `<`, `<=`, `>`, `>=`, `is null` and `is not null`. `boolean` fields support `==`, `!=`, `is null` and `is not null`. | [required]
**Type** |  **Enum** [  "string",    "number",    "boolean" ] | Data type of the field at `path`, which determines how `value` is compared. | [optional] 
**Value** | [**EventAttributesFilterDefinitionConditionsInnerValue**](event-attributes-filter-definition-conditions-inner-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$EventAttributesFilterDefinitionConditionsInner = Initialize-EventAttributesFilterDefinitionConditionsInner  -Path attribute `
 -Operator == `
 -Type string `
 -Value null
```

- Convert the resource to JSON
```powershell
$EventAttributesFilterDefinitionConditionsInner | ConvertTo-JSON
```


[[Back to top]](#) 

