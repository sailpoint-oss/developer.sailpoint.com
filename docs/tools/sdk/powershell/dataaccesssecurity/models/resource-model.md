# ResourceModel

# ResourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Int64** | The unique identifier for the resource. | [optional] 
**Name** | **String** | The display name or label for the resource. | [optional] 
**FullPath** | **String** | The full path to the resource within the system or application. | [optional] 
**ApplicationId** | **Int64** | The unique identifier of the application to which this resource belongs. | [optional] 
**Type** | **BusinessServiceType** |  | [optional] 
**Owners** | **[]String** | A list of UUIDs representing the owners of the resource. | [optional] 

## Examples

- Prepare the resource
```powershell
$ResourceModel = Initialize-ResourceModel  -Id 1001 `
 -Name Finance Shared Folder `
 -FullPath /departments/finance/shared `
 -ApplicationId 2001 `
 -Type null `
 -Owners ["c1a2b3d4-e5f6-7890-abcd-1234567890ab","d4e5f6a7-b8c9-0123-4567-89abcdef0123"]
```

- Convert the resource to JSON
```powershell
$ResourceModel | ConvertTo-JSON
```


[[Back to top]](#) 

