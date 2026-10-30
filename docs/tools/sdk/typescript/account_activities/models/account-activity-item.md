# AccountActivityItem

# AccountActivityItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Item id | [default to undefined]
**name** | **(optional)** `string` | Human-readable display name of item | [default to undefined]
**requested** | **(optional)** `string` | Date and time item was requested | [default to undefined]
**approvalStatus** | **(optional)** `AccountActivityApprovalStatus` |  | [default to undefined]
**provisioningStatus** | **(optional)** `ProvisioningState` |  | [default to undefined]
**requesterComment** | **(optional)** `Comment` |  | [default to undefined]
**reviewerIdentitySummary** | **(optional)** `IdentitySummary` |  | [default to undefined]
**reviewerComment** | **(optional)** `Comment` |  | [default to undefined]
**operation** | **(optional)** `AccountActivityItemOperation` |  | [default to undefined]
**attribute** | **(optional)** `string` | Attribute to which account activity applies | [default to undefined]
**value** | **(optional)** `string` | Value of attribute | [default to undefined]
**nativeIdentity** | **(optional)** `string` | Native identity in the target system to which the account activity applies | [default to undefined]
**sourceId** | **(optional)** `string` | Id of Source to which account activity applies | [default to undefined]
**accountRequestInfo** | **(optional)** `AccountRequestInfo` |  | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs, if any were included in the corresponding access request item | [default to undefined]
**removeDate** | **(optional)** `string` | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [default to undefined]

