# FormElement

# FormElement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Form element identifier. | [optional] 
**ElementType** |  **Enum** [  "TEXT",    "TOGGLE",    "TEXTAREA",    "HIDDEN",    "PHONE",    "EMAIL",    "SELECT",    "DATE",    "SECTION",    "COLUMN_SET",    "IMAGE",    "DESCRIPTION" ] | FormElementType value.  TEXT FormElementTypeText TOGGLE FormElementTypeToggle TEXTAREA FormElementTypeTextArea HIDDEN FormElementTypeHidden PHONE FormElementTypePhone EMAIL FormElementTypeEmail SELECT FormElementTypeSelect DATE FormElementTypeDate SECTION FormElementTypeSection COLUMN_SET FormElementTypeColumns IMAGE FormElementTypeImage DESCRIPTION FormElementTypeDescription | [optional] 
**Config** | **map[string]AnyType** | Config object. | [optional] 
**Key** | **String** | Technical key. | [optional] 
**Validations** | [**[]FormElementValidationsSet**](form-element-validations-set) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$FormElement = Initialize-FormElement  -Id 00000000-0000-0000-0000-000000000000 `
 -ElementType TEXT `
 -Config {"label":"Department"} `
 -Key department `
 -Validations null
```

- Convert the resource to JSON
```powershell
$FormElement | ConvertTo-JSON
```


[[Back to top]](#) 

