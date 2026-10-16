# SourceAccountSelections

# SourceAccountSelections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **DtoType** |  | [optional] 
**Id** | **String** | The source id | [optional] 
**Name** | **String** | The source name | [optional] 
**Accounts** | [**[]AccountInfoRef**](account-info-ref) | The accounts information for a particular source in the requested item | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceAccountSelections = Initialize-SourceAccountSelections  -Type null `
 -Id 3ac3c43785a845fa9820b0c1ac767cd5 `
 -Name Test Source_Name `
 -Accounts null
```

- Convert the resource to JSON
```powershell
$SourceAccountSelections | ConvertTo-JSON
```


[[Back to top]](#) 

