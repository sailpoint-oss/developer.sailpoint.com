# TrackerValueDTO

# TrackerValueDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the tracker created to record this delete operation. | [optional] 
**Type** | **String** | The type of object being tracked. | [optional] 
**Status** | **String** | The status of the delete operation. | [optional] 
**Errors** | **[]String** | Any errors encountered while processing the delete operation. | [optional] 
**Created** | **System.DateTime** | The time the delete operation was initiated. | [optional] 
**Value** | **String** | Technical name of the deleted Attribute value. | [optional] 

## Examples

- Prepare the resource
```powershell
$TrackerValueDTO = Initialize-TrackerValueDTO  -Id 2c9180867817ac4d017817c491119a20 `
 -Type value `
 -Status DELETING `
 -Errors null `
 -Created 2020-10-08T18:33:52.029Z `
 -Value public
```

- Convert the resource to JSON
```powershell
$TrackerValueDTO | ConvertTo-JSON
```


[[Back to top]](#) 

