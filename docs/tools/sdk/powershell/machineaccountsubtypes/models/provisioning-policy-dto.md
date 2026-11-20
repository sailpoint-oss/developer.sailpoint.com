# ProvisioningPolicyDto

# ProvisioningPolicyDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique identifier of the stored provisioning policy. | [optional] 
**SubtypeId** | **String** | Identifier of the subtype that owns this policy. | [optional] 
**Name** | **String** | Name of the provisioning policy. | [optional] 
**Description** | **String** | Description of the provisioning policy. | [optional] 
**UsageType** | **String** | Usage type of the policy. This API stores only `CREATE_MACHINE_ACCOUNT`. | [optional] [default to ""]
**Fields** | [**[]FieldDetailsDto**](field-details-dto) | Fields in the provisioning policy. Field order is not semantically meaningful. | [optional] 

## Examples

- Prepare the resource
```powershell
$ProvisioningPolicyDto = Initialize-ProvisioningPolicyDto  -Id 54f626b4-c9d8-4f7e-b768-046c20583abb `
 -SubtypeId 43bdd144-4b17-4fce-a744-17c7fd3e717b `
 -Name Create Machine Account `
 -Description Fields used when creating a machine account for this subtype `
 -UsageType CREATE_MACHINE_ACCOUNT `
 -Fields null
```

- Convert the resource to JSON
```powershell
$ProvisioningPolicyDto | ConvertTo-JSON
```


[[Back to top]](#) 

