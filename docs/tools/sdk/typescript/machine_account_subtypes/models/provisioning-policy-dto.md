# ProvisioningPolicyDto

# ProvisioningPolicyDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Unique identifier of the stored provisioning policy. | [default to undefined]
**subtypeId** | **(optional)** `string` | Identifier of the subtype that owns this policy. | [default to undefined]
**name** | **(optional)** `string` | Name of the provisioning policy. | [default to undefined]
**description** | **(optional)** `string` | Description of the provisioning policy. | [default to undefined]
**usageType** | **(optional)** `string` | Usage type of the policy. This API stores only `CREATE_MACHINE_ACCOUNT`. | [default to '']
**fields** | **(optional)** `Array<FieldDetailsDto>` | Fields in the provisioning policy. Field order is not semantically meaningful. | [default to undefined]

