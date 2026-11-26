# Source2

# Source2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Attribute mapping type. | [optional] 
**Properties** | **SystemCollectionsHashtable** | Attribute mapping properties. | [optional] 

## Examples

- Prepare the resource
```powershell
$Source2 = Initialize-Source2  -Type rule `
 -Properties {"ruleType":"IdentityAttribute","ruleName":"Cloud Promote Identity Attribute"}
```

- Convert the resource to JSON
```powershell
$Source2 | ConvertTo-JSON
```


[[Back to top]](#) 

