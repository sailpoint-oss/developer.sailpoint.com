# AccessItemDiff

# AccessItemDiff

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the id of the access item | [optional] 
**EventType** |  **Enum** [  "ADD",    "REMOVE" ] |  | [optional] 
**DisplayName** | **String** | the display name of the access item | [optional] 
**SourceName** | **String** | the source name of the access item | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemDiff = Initialize-AccessItemDiff  -Id null `
 -EventType null `
 -DisplayName null `
 -SourceName null
```

- Convert the resource to JSON
```powershell
$AccessItemDiff | ConvertTo-JSON
```


[[Back to top]](#) 

