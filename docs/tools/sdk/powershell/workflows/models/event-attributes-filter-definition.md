# EventAttributesFilterDefinition

# EventAttributesFilterDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Path** | **String** | Collection in the event payload that the conditions are applied to, such as `changes` or `accountRequests`. Use `$` to apply the conditions to the root of the payload. | [required]
**Logic** |  **Enum** [  "and",    "or" ] | How the conditions are combined. Defaults to `and` when omitted. | [optional] 
**Conditions** | [**[]EventAttributesFilterDefinitionConditionsInner**](event-attributes-filter-definition-conditions-inner) | Conditions evaluated against each item in `path`. | [required]

## Examples

- Prepare the resource
```powershell
$EventAttributesFilterDefinition = Initialize-EventAttributesFilterDefinition  -Path changes `
 -Logic and `
 -Conditions null
```

- Convert the resource to JSON
```powershell
$EventAttributesFilterDefinition | ConvertTo-JSON
```


[[Back to top]](#) 

