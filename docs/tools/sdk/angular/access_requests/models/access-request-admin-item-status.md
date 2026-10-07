# AccessRequestAdminItemStatus

# AccessRequestAdminItemStatus

Import this model from the entry point of its package:

```typescript
import { AccessRequestAdminItemStatus } from '@sailpoint/angular-sdk/access_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | ID of the access request. This is a new property as of 2025. Older access requests may not have an ID. | [default to undefined]
**name** | **(optional)** `string` | Human-readable display name of the item being requested. | [default to undefined]
**type** | **(optional)** `string` | Type of requested object. | [default to undefined]
**cancelledRequestDetails** | **(optional)** `RequestedItemStatusCancelledRequestDetails` |  | [default to undefined]
**errorMessages** | **(optional)** `Array<Array<ErrorMessageDto>>` | List of localized error messages, if any, encountered during the approval/provisioning process. | [default to undefined]
**state** | **(optional)** `RequestedItemStatusRequestState` |  | [default to undefined]
**approvalDetails** | **(optional)** `Array<ApprovalStatusDto>` | Approval details for each item. | [default to undefined]
**manualWorkItemDetails** | **(optional)** `Array<ManualWorkItemDetails>` | Manual work items created for provisioning the item. | [default to undefined]
**accountActivityItemId** | **(optional)** `string` | Id of associated account activity item. | [default to undefined]
**requestType** | **(optional)** `AccessRequestType` |  | [default to undefined]
**modified** | **(optional)** `string` | When the request was last modified. | [default to undefined]
**created** | **(optional)** `string` | When the request was created. | [default to undefined]
**requester** | **(optional)** `AccessItemRequester` |  | [default to undefined]
**requestedFor** | **(optional)** `RequestedItemStatusRequestedFor` |  | [default to undefined]
**identityType** | **(optional)** `string` | Type of identity the access was requested for. Requests without a stored identity type are returned as `HUMAN`.  | [default to undefined]
**requesterComment** | **(optional)** `RequestedItemStatusRequesterComment` |  | [default to undefined]
**sodViolationContext** | **(optional)** `RequestedItemStatusSodViolationContext` |  | [default to undefined]
**provisioningDetails** | **(optional)** `RequestedItemStatusProvisioningDetails` |  | [default to undefined]
**preApprovalTriggerDetails** | **(optional)** `RequestedItemStatusPreApprovalTriggerDetails` |  | [default to undefined]
**accessRequestPhases** | **(optional)** `Array<AccessRequestPhases>` | A list of Phases that the Access Request has gone through in order, to help determine the status of the request. | [default to undefined]
**description** | **(optional)** `string` | Description associated to the requested object. | [default to undefined]
**startDate** | **(optional)** `string` | When the role access is scheduled for provisioning. | [default to undefined]
**removeDate** | **(optional)** `string` | When the role access is scheduled for removal. | [default to undefined]
**cancelable** | **(optional)** `boolean` | True if the request can be canceled. | [default to false]
**reauthorizationRequired** | **(optional)** `boolean` | True if re-auth is required. | [default to false]
**accessRequestId** | **(optional)** `string` | This is the account activity id. | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs, if any were included in the corresponding access request | [default to undefined]
**form** | **(optional)** `RequestedItemStatusForm` |  | [default to undefined]

