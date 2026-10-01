# SearchAttributeConfig

# SearchAttributeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the new attribute | [optional] 
**DisplayName** | **String** | The display name of the new attribute | [optional] 
**ApplicationAttributes** | **SystemCollectionsHashtable** | Map of application id and their associated attribute. | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchAttributeConfig = Initialize-SearchAttributeConfig  -Name newMailAttribute `
 -DisplayName New Mail Attribute `
 -ApplicationAttributes {"2c91808b79fd2422017a0b35d30f3968":"employeeNumber","2c91808b79fd2422017a0b36008f396b":"employeeNumber"}
```

- Convert the resource to JSON
```powershell
$SearchAttributeConfig | ConvertTo-JSON
```


[[Back to top]](#) 

