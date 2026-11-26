# Requestability

# Requestability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commentsRequired** | **(optional)** `boolean` | Indicates whether the requester of the containing object must provide comments justifying the request. | [default to false]
**denialCommentsRequired** | **(optional)** `boolean` | Indicates whether an approver must provide comments when denying the request. | [default to false]
**reauthorizationRequired** | **(optional)** `boolean` | Indicates whether reauthorization is required for the request. | [default to false]
**requireEndDate** | **(optional)** `boolean` | Indicates whether the requester of the containing object must provide access end date. | [default to false]
**maxPermittedAccessDuration** | **(optional)** `AccessDuration` |  | [default to undefined]
**approvalSchemes** | **(optional)** `Array<AccessProfileApprovalScheme>` | List describing the steps involved in approving the request. | [default to undefined]

