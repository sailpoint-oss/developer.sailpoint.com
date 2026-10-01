# WorkgroupConnectionDtoObject

# WorkgroupConnectionDtoObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**ConnectedObjectType**](connected-object-type) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable name of Connected object | [optional] 
**Description** | **String** | Description of the Connected object. | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkgroupConnectionDtoObject = Initialize-WorkgroupConnectionDtoObject  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Employee-database-read-write `
 -Description Collection of entitlements to read/write the employee database.
```

- Convert the resource to JSON
```powershell
$WorkgroupConnectionDtoObject | ConvertTo-JSON
```


[[Back to top]](#) 

