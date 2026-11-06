# RequestedItemDtoRef

# RequestedItemDtoRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCESS_PROFILE',    'ROLE',    'ENTITLEMENT' ] | The type of the item being requested. * Machine identity access requests support `ENTITLEMENT` only.  | [required]
**id** | **str** | ID of Role, Access Profile or Entitlement being requested. | [required]
**comment** | **str** | Comment provided by requester. * Comment is required when the request is of type Revoke Access.  | [optional] 
**client_metadata** | **map[string]str** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities and /access-request-status. | [optional] 
**start_date** | **datetime** | The date and time the role or access profile or entitlement is/will be provisioned to the specified identity. Also known as the sunrise date. * Specify a date-time in the future. * This date-time can be used to indicate date-time when access item will be provisioned on the identity account. A GRANT_ACCESS request can use startDate to specify when to schedule provisioning of access item for an identity/account & a MODIFY_ACCESS request can use startDate to change the provisioning date-time of already assigned access item. But REVOKE_ACCESS request can not have startDate field. You can change the sunrise date in requests for yourself or others you are authorized to request for. * If the startDate is in the past, then the provisioning will be processed as soon as possible, but no guarantees can be made about when the provisioning will occur. If the startDate is in the future, then the provisioning will be scheduled to occur on that date and time. If no startDate is provided, then the provisioning will be processed as soon as possible. * For machine identity MODIFY_ACCESS, each requested item must include `startDate` and/or `removeDate`.  | [optional] 
**remove_date** | **datetime** | The date and time the role or access profile or entitlement is no longer assigned to the specified identity. Also known as the expiration date. * Specify a date-time in the future. * The current SLA for the deprovisioning is 24 hours. * This date-time can be used to change the duration of an existing access item assignment for the specified identity. A GRANT_ACCESS request can extend duration or even remove an expiration date, and either a  GRANT_ACCESS or REVOKE_ACCESS request can reduce duration or add an expiration date where one has not previously been present. You can change the expiration date in requests for yourself or others you are authorized to request for. * For machine identity MODIFY_ACCESS, each requested item must include `startDate` and/or `removeDate`.  | [optional] 
**account_selection** | [**[]SourceItemRef**](source-item-ref) | The accounts where the access item will be provisioned to.  * Includes selections performed by the user in the event of multiple accounts existing on the same source.  * Also includes details for sources where user only has one account.  * For machine identity GRANT_ACCESS and MODIFY_ACCESS: required. Provide exactly one source entry and exactly one account on that source. `accountUuid` and/or `nativeIdentity` must match a real machine account for the requested machine identity on that source. Prefer values returned by the accounts-selection API.  * For machine identity REVOKE_ACCESS: not supported. Use `nativeIdentity` on the item instead.  | [optional] 
**native_identity** | **str** | The unique identifier for an account on the identity, designated as the account ID attribute in the source's account schema. * For machine identity REVOKE_ACCESS: required per entitlement item (or auto-resolved when the machine has exactly one account on the entitlement source). Must match a machine account on that source. Do not send `accountSelection` on machine revoke. Human REVOKE_ACCESS cannot use this nested item schema; use flat `requestedItems` instead.  | [optional] 
**form_instance_id** | **str** | Optional ID of a completed form instance for this line item. * For human GRANT_ACCESS: include when the requested role, access profile, or entitlement has an associated `formDefinitionId` in its request configuration. An empty `formInstanceId` on a GRANT_ACCESS item is rejected with HTTP 400. * Not supported for machine identity access requests. | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.requested_item_dto_ref import RequestedItemDtoRef

requested_item_dto_ref = RequestedItemDtoRef(
type='ACCESS_PROFILE',
id='2c9180835d2e5168015d32f890ca1581',
comment='Requesting access profile for John Doe',
client_metadata={"requestedAppName":"test-app","requestedAppId":"2c91808f7892918f0178b78da4a305a1"},
start_date='2020-06-12T21:22:23Z',
remove_date='2020-07-11T21:23:15Z',
account_selection=[
                    sailpoint.access_requests.models.source_item_ref.SourceItemRef(
                        source_id = 'cb89bc2f1ee6445fbea12224c526ba3a', 
                        accounts = [
                            sailpoint.access_requests.models.account_item_ref.AccountItemRef(
                                account_uuid = '{fab7119e-004f-4822-9c33-b8d570d6c6a6}', 
                                native_identity = 'CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local', )
                            ], )
                    ],
native_identity='CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN',
form_instance_id='9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e'
)

```
[[Back to top]](#) 

