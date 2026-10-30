# AccountSourceReferenceGovernanceGroup

# AccountSourceReferenceGovernanceGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the governance group. | [required]
**Name** | **String** | Name of the governance group. | [required]

## Examples

- Prepare the resource
```powershell
$AccountSourceReferenceGovernanceGroup = Initialize-AccountSourceReferenceGovernanceGroup  -Id group-456 `
 -Name governance-group-name
```

- Convert the resource to JSON
```powershell
$AccountSourceReferenceGovernanceGroup | ConvertTo-JSON
```


[[Back to top]](#) 

