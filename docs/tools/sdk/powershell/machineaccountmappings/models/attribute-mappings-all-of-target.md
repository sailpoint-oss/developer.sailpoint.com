# AttributeMappingsAllOfTarget

# AttributeMappingsAllOfTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCOUNT",    "IDENTITY",    "OWNER_ACCOUNT",    "OWNER_IDENTITY" ] | The type of target entity | [optional] 
**AttributeName** | **String** | Name of the targeted attribute | [optional] 
**SourceId** | **String** | The ID of Source | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeMappingsAllOfTarget = Initialize-AttributeMappingsAllOfTarget  -Type IDENTITY `
 -AttributeName businessApplication `
 -SourceId 2c9180835d2e5168015d32f890ca1581
```

- Convert the resource to JSON
```powershell
$AttributeMappingsAllOfTarget | ConvertTo-JSON
```


[[Back to top]](#) 

