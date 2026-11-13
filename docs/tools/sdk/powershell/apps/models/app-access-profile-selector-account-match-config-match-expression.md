# AppAccessProfileSelectorAccountMatchConfigMatchExpression

# AppAccessProfileSelectorAccountMatchConfigMatchExpression

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MatchTerms** | [**[]MatchTerm**](match-term) |  | [optional] 
**And** | **Boolean** | If it is AND operators for match terms | [optional] [default to $true]

## Examples

- Prepare the resource
```powershell
$AppAccessProfileSelectorAccountMatchConfigMatchExpression = Initialize-AppAccessProfileSelectorAccountMatchConfigMatchExpression  -MatchTerms [{"name":"","value":"","op":null,"container":true,"and":false,"children":[{"name":"businessCategory","value":"Service","op":"eq","container":false,"and":false,"children":null}]}] `
 -And true
```

- Convert the resource to JSON
```powershell
$AppAccessProfileSelectorAccountMatchConfigMatchExpression | ConvertTo-JSON
```


[[Back to top]](#) 

