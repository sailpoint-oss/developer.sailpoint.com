# ProvisioningPolicyDtoV2

# ProvisioningPolicyDtoV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the provisioning policy. | [default to undefined]
**name** | `string` | the provisioning policy name | [default to undefined]
**subtypeId** | **(optional)** `string` | Subtype ID for which provisioning policy will be created when usageType is CREATE_MACHINE_ACCOUNT. | [default to undefined]
**description** | **(optional)** `string` | the description of the provisioning policy | [default to undefined]
**usageType** | **(optional)** `Usagetypev2` |  | [default to undefined]
**fields** | **(optional)** `Array<FieldDetailsDtoV2>` |  | [default to undefined]

