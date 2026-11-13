# RequestedItemDtoRef

# RequestedItemDtoRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of the item being requested. * Machine identity access requests support `ENTITLEMENT` only.  | 
**Id** | **string** | ID of Role, Access Profile or Entitlement being requested. | 
**Comment** | Pointer to **string** | Comment provided by requester. * Comment is required when the request is of type Revoke Access.  | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on associated APIs such as /account-activities and /access-request-status. | [optional] 
**StartDate** | Pointer to **SailPointTime** | The date and time the role or access profile or entitlement is/will be provisioned to the specified identity. Also known as the sunrise date. * Specify a date-time in the future. * This date-time can be used to indicate date-time when access item will be provisioned on the identity account. A GRANT_ACCESS request can use startDate to specify when to schedule provisioning of access item for an identity/account & a MODIFY_ACCESS request can use startDate to change the provisioning date-time of already assigned access item. But REVOKE_ACCESS request can not have startDate field. You can change the sunrise date in requests for yourself or others you are authorized to request for. * If the startDate is in the past, then the provisioning will be processed as soon as possible, but no guarantees can be made about when the provisioning will occur. If the startDate is in the future, then the provisioning will be scheduled to occur on that date and time. If no startDate is provided, then the provisioning will be processed as soon as possible. * For machine identity MODIFY_ACCESS, each requested item must include `startDate` and/or `removeDate`.  | [optional] 
**RemoveDate** | Pointer to **SailPointTime** | The date and time the role or access profile or entitlement is no longer assigned to the specified identity. Also known as the expiration date. * Specify a date-time in the future. * The current SLA for the deprovisioning is 24 hours. * This date-time can be used to change the duration of an existing access item assignment for the specified identity. A GRANT_ACCESS request can extend duration or even remove an expiration date, and either a  GRANT_ACCESS or REVOKE_ACCESS request can reduce duration or add an expiration date where one has not previously been present. You can change the expiration date in requests for yourself or others you are authorized to request for. * For machine identity MODIFY_ACCESS, each requested item must include `startDate` and/or `removeDate`.  | [optional] 
**AccountSelection** | Pointer to [**[]SourceItemRef**](source-item-ref) | The accounts where the access item will be provisioned to.  * Includes selections performed by the user in the event of multiple accounts existing on the same source.  * Also includes details for sources where user only has one account.  * For machine identity GRANT_ACCESS and MODIFY_ACCESS: required. Provide exactly one source entry and exactly one account on that source. `accountUuid` and/or `nativeIdentity` must match a real machine account for the requested machine identity on that source. Prefer values returned by the accounts-selection API.  * For machine identity REVOKE_ACCESS: not supported. Use `nativeIdentity` on the item instead.  | [optional] 
**NativeIdentity** | Pointer to **NullableString** | The unique identifier for an account on the identity, designated as the account ID attribute in the source's account schema. * For machine identity REVOKE_ACCESS: required per entitlement item (or auto-resolved when the machine has exactly one account on the entitlement source). Must match a machine account on that source. Do not send `accountSelection` on machine revoke. Human REVOKE_ACCESS cannot use this nested item schema; use flat `requestedItems` instead.  | [optional] 
**FormInstanceId** | Pointer to **NullableString** | Optional ID of a completed form instance for this line item. * For human GRANT_ACCESS: include when the requested role, access profile, or entitlement has an associated `formDefinitionId` in its request configuration. An empty `formInstanceId` on a GRANT_ACCESS item is rejected with HTTP 400. * Not supported for machine identity access requests. | [optional] 

## Methods

### NewRequestedItemDtoRef

`func NewRequestedItemDtoRef(type_ string, id string, ) *RequestedItemDtoRef`

NewRequestedItemDtoRef instantiates a new RequestedItemDtoRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestedItemDtoRefWithDefaults

`func NewRequestedItemDtoRefWithDefaults() *RequestedItemDtoRef`

NewRequestedItemDtoRefWithDefaults instantiates a new RequestedItemDtoRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *RequestedItemDtoRef) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RequestedItemDtoRef) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RequestedItemDtoRef) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *RequestedItemDtoRef) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RequestedItemDtoRef) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RequestedItemDtoRef) SetId(v string)`

SetId sets Id field to given value.


### GetComment

`func (o *RequestedItemDtoRef) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *RequestedItemDtoRef) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *RequestedItemDtoRef) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *RequestedItemDtoRef) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetClientMetadata

`func (o *RequestedItemDtoRef) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *RequestedItemDtoRef) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *RequestedItemDtoRef) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *RequestedItemDtoRef) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### GetStartDate

`func (o *RequestedItemDtoRef) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *RequestedItemDtoRef) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *RequestedItemDtoRef) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *RequestedItemDtoRef) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetRemoveDate

`func (o *RequestedItemDtoRef) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *RequestedItemDtoRef) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *RequestedItemDtoRef) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *RequestedItemDtoRef) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### GetAccountSelection

`func (o *RequestedItemDtoRef) GetAccountSelection() []SourceItemRef`

GetAccountSelection returns the AccountSelection field if non-nil, zero value otherwise.

### GetAccountSelectionOk

`func (o *RequestedItemDtoRef) GetAccountSelectionOk() (*[]SourceItemRef, bool)`

GetAccountSelectionOk returns a tuple with the AccountSelection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountSelection

`func (o *RequestedItemDtoRef) SetAccountSelection(v []SourceItemRef)`

SetAccountSelection sets AccountSelection field to given value.

### HasAccountSelection

`func (o *RequestedItemDtoRef) HasAccountSelection() bool`

HasAccountSelection returns a boolean if a field has been set.

### SetAccountSelectionNil

`func (o *RequestedItemDtoRef) SetAccountSelectionNil(b bool)`

 SetAccountSelectionNil sets the value for AccountSelection to be an explicit nil

### UnsetAccountSelection
`func (o *RequestedItemDtoRef) UnsetAccountSelection()`

UnsetAccountSelection ensures that no value is present for AccountSelection, not even an explicit nil
### GetNativeIdentity

`func (o *RequestedItemDtoRef) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *RequestedItemDtoRef) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *RequestedItemDtoRef) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *RequestedItemDtoRef) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### SetNativeIdentityNil

`func (o *RequestedItemDtoRef) SetNativeIdentityNil(b bool)`

 SetNativeIdentityNil sets the value for NativeIdentity to be an explicit nil

### UnsetNativeIdentity
`func (o *RequestedItemDtoRef) UnsetNativeIdentity()`

UnsetNativeIdentity ensures that no value is present for NativeIdentity, not even an explicit nil
### GetFormInstanceId

`func (o *RequestedItemDtoRef) GetFormInstanceId() string`

GetFormInstanceId returns the FormInstanceId field if non-nil, zero value otherwise.

### GetFormInstanceIdOk

`func (o *RequestedItemDtoRef) GetFormInstanceIdOk() (*string, bool)`

GetFormInstanceIdOk returns a tuple with the FormInstanceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormInstanceId

`func (o *RequestedItemDtoRef) SetFormInstanceId(v string)`

SetFormInstanceId sets FormInstanceId field to given value.

### HasFormInstanceId

`func (o *RequestedItemDtoRef) HasFormInstanceId() bool`

HasFormInstanceId returns a boolean if a field has been set.

### SetFormInstanceIdNil

`func (o *RequestedItemDtoRef) SetFormInstanceIdNil(b bool)`

 SetFormInstanceIdNil sets the value for FormInstanceId to be an explicit nil

### UnsetFormInstanceId
`func (o *RequestedItemDtoRef) UnsetFormInstanceId()`

UnsetFormInstanceId ensures that no value is present for FormInstanceId, not even an explicit nil

