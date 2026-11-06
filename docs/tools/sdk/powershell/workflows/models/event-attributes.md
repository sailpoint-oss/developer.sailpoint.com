# EventAttributes

# EventAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the trigger | [required]
**VarFilter** | **String** | JSON path expression that will limit which events the trigger will fire on. When the trigger's `mode` is `basic`, this must match the expression compiled from `filterDefinition`. | [optional] 
**FilterDefinition** | [**EventAttributesFilterDefinition**](event-attributes-filter-definition) |  | [optional] 
**Description** | **String** | Description of the event trigger | [optional] 
**AttributeToFilter** | **String** | For the `sp:form-submitted` trigger, the name of the form element to filter on. Use it with `operatorValue` and `attributeValue`. For other event triggers this is a legacy field from the earlier trigger filter picker; use `filterDefinition` with `mode` set to `basic` instead. Create and update requests that set this field for the `idn:identity-attributes-changed` or `idn:identity-created` trigger are rejected. | [optional] 
**OperatorValue** | **String** | For the `sp:form-submitted` trigger, the operator that compares the `attributeToFilter` form element with `attributeValue`, such as `StringEquals`, `StringContains`, `StringStartsWith`, `NumericGreaterThan`, `BooleanEquals` or `ArrayAnyOf`. Create and update requests that set this field for the `idn:identity-created` trigger are rejected. | [optional] 
**AttributeValue** | **String** | For the `sp:form-submitted` trigger, the value the `attributeToFilter` form element is compared with. For `ArrayAnyOf`, use a list such as `['HR', 'IT']`. Create and update requests that set this field for the `idn:identity-created` trigger are rejected. | [optional] 
**FormDefinitionId** | **String** | For the `sp:form-submitted` trigger, the ID of the form whose submission starts the workflow. Required when `filter.$` is not set. When `filter.$` is not set, the trigger filter is built from this ID, narrowed by `attributeToFilter`, `operatorValue` and `attributeValue` when all three are set. | [optional] 

## Examples

- Prepare the resource
```powershell
$EventAttributes = Initialize-EventAttributes  -Id idn:identity-attributes-changed `
 -VarFilter $.changes[?(@.attribute == "manager")] `
 -FilterDefinition null `
 -Description Triggered when an identity's manager attribute changes `
 -AttributeToFilter department `
 -OperatorValue StringEquals `
 -AttributeValue IT `
 -FormDefinitionId 49841cb8-00a5-4fbd-9888-8bbb28d48331
```

- Convert the resource to JSON
```powershell
$EventAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

