# SubtypeProvisioningPolicy

# SubtypeProvisioningPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the provisioning policy. Must not be supplied on create. | [optional] [readonly] 
**SubtypeId** | **String** | ID of the subtype the policy belongs to. Must not be supplied on create. | [optional] [readonly] 
**Name** | **String** | Name of the provisioning policy. Defaults to the subtype's display name when omitted or blank. | [optional] 
**Description** | **String** | Description of the provisioning policy. | [optional] 
**UsageType** |  **Enum** [  "CREATE_MACHINE_ACCOUNT" ] | Usage type of the provisioning policy. Only `CREATE_MACHINE_ACCOUNT` is supported. | [optional] [default to "CREATE_MACHINE_ACCOUNT"]
**Fields** | [**[]SubtypeProvisioningPolicyField**](subtype-provisioning-policy-field) | Fields of the provisioning policy. Every field must have a non-blank `name`. When two fields share a name, only the first is kept. | [optional] 

## Examples

- Prepare the resource
```powershell
$SubtypeProvisioningPolicy = Initialize-SubtypeProvisioningPolicy  -Id d7ae9ea3-507f-4d00-9d4f-b4464b344b88 `
 -SubtypeId 43bdd144-4b17-4fce-a744-17c7fd3e717b `
 -Name Service Account `
 -Description Fields collected when creating a service account. `
 -UsageType CREATE_MACHINE_ACCOUNT `
 -Fields null
```

- Convert the resource to JSON
```powershell
$SubtypeProvisioningPolicy | ConvertTo-JSON
```


[[Back to top]](#) 

