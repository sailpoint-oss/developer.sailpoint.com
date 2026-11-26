# MachineAccountV2AllOfResource

# MachineAccountV2AllOfResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The source resource identifier. | [optional] 
**Type** | **String** | The type of the source resource. | [optional] 
**Name** | **String** | The display name of the source resource. | [optional] 
**Features** | **[]String** | The features supported by the source resource. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountV2AllOfResource = Initialize-MachineAccountV2AllOfResource  -Id 8886e5e3-63d0-462f-a195-d98da885b8dc `
 -Type aws:iam-role `
 -Name nightly-batch-role `
 -Features ["PROVISIONING","AUTHENTICATION"]
```

- Convert the resource to JSON
```powershell
$MachineAccountV2AllOfResource | ConvertTo-JSON
```


[[Back to top]](#) 

