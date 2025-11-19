---
id: requested-item-status
title: RequestedItemStatus
pagination_label: RequestedItemStatus
sidebar_label: RequestedItemStatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RequestedItemStatus', 'RequestedItemStatus'] 
slug: /tools/sdk/go/v3/models/requested-item-status
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatus', 'RequestedItemStatus']
---

# RequestedItemStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the access request. | [optional] 
**Name** | Pointer to **NullableString** | Human-readable display name of the item being requested. | [optional] 
**Type** | Pointer to **NullableString** | Type of requested object. | [optional] 
**CancelledRequestDetails** | Pointer to [**RequestedItemStatusCancelledRequestDetails**](requested-item-status-cancelled-request-details) |  | [optional] 
**ErrorMessages** | Pointer to [**[][]ErrorMessageDto**](error-message-dto) | List of list of localized error messages, if any, encountered during the approval/provisioning process. | [optional] 
**State** | Pointer to [**RequestedItemStatusRequestState**](requested-item-status-request-state) |  | [optional] 
**ApprovalDetails** | Pointer to [**[]ApprovalStatusDto**](approval-status-dto) | Approval details for each item. | [optional] 
**ApprovalIds** | Pointer to **[]string** | List of approval IDs associated with the request. | [optional] 
**ManualWorkItemDetails** | Pointer to [**[]ManualWorkItemDetails**](manual-work-item-details) | Manual work items created for provisioning the item. | [optional] 
**AccountActivityItemId** | Pointer to **string** | Id of associated account activity item. | [optional] 
**RequestType** | Pointer to [**NullableAccessRequestType**](access-request-type) |  | [optional] 
**Modified** | Pointer to **NullableTime** | When the request was last modified. | [optional] 
**Created** | Pointer to **SailPointTime** | When the request was created. | [optional] 
**Requester** | Pointer to [**AccessItemRequester**](access-item-requester) |  | [optional] 
**RequestedFor** | Pointer to [**RequestedItemStatusRequestedFor**](requested-item-status-requested-for) |  | [optional] 
**RequesterComment** | Pointer to [**RequestedItemStatusRequesterComment**](requested-item-status-requester-comment) |  | [optional] 
**SodViolationContext** | Pointer to [**RequestedItemStatusSodViolationContext**](requested-item-status-sod-violation-context) |  | [optional] 
**ProvisioningDetails** | Pointer to [**RequestedItemStatusProvisioningDetails**](requested-item-status-provisioning-details) |  | [optional] 
**PreApprovalTriggerDetails** | Pointer to [**RequestedItemStatusPreApprovalTriggerDetails**](requested-item-status-pre-approval-trigger-details) |  | [optional] 
**AccessRequestPhases** | Pointer to [**[]AccessRequestPhases**](access-request-phases) | A list of Phases that the Access Request has gone through in order, to help determine the status of the request. | [optional] 
**Description** | Pointer to **NullableString** | Description associated to the requested object. | [optional] 
**RemoveDate** | Pointer to **NullableTime** | When the role access is scheduled for removal. | [optional] 
**Cancelable** | Pointer to **bool** | True if the request can be canceled. | [optional] [default to false]
**AccessRequestId** | Pointer to **string** | This is the account activity id. | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs, if any were included in the corresponding access request | [optional] 
**RequestedAccounts** | Pointer to [**[]RequestedAccountRef**](requested-account-ref) | The accounts selected by the user for the access to be provisioned on, in case they have multiple accounts on one or more sources. | [optional] 
**PrivilegeLevel** | Pointer to **NullableString** | The privilege level of the requested access item, if applicable. | [optional] 

## Methods

### NewRequestedItemStatus

`func NewRequestedItemStatus() *RequestedItemStatus`

NewRequestedItemStatus instantiates a new RequestedItemStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestedItemStatusWithDefaults

`func NewRequestedItemStatusWithDefaults() *RequestedItemStatus`

NewRequestedItemStatusWithDefaults instantiates a new RequestedItemStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RequestedItemStatus) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RequestedItemStatus) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RequestedItemStatus) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RequestedItemStatus) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RequestedItemStatus) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RequestedItemStatus) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RequestedItemStatus) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RequestedItemStatus) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *RequestedItemStatus) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *RequestedItemStatus) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetType

`func (o *RequestedItemStatus) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RequestedItemStatus) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RequestedItemStatus) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RequestedItemStatus) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *RequestedItemStatus) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *RequestedItemStatus) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetCancelledRequestDetails

`func (o *RequestedItemStatus) GetCancelledRequestDetails() RequestedItemStatusCancelledRequestDetails`

GetCancelledRequestDetails returns the CancelledRequestDetails field if non-nil, zero value otherwise.

### GetCancelledRequestDetailsOk

`func (o *RequestedItemStatus) GetCancelledRequestDetailsOk() (*RequestedItemStatusCancelledRequestDetails, bool)`

GetCancelledRequestDetailsOk returns a tuple with the CancelledRequestDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelledRequestDetails

`func (o *RequestedItemStatus) SetCancelledRequestDetails(v RequestedItemStatusCancelledRequestDetails)`

SetCancelledRequestDetails sets CancelledRequestDetails field to given value.

### HasCancelledRequestDetails

`func (o *RequestedItemStatus) HasCancelledRequestDetails() bool`

HasCancelledRequestDetails returns a boolean if a field has been set.

### GetErrorMessages

`func (o *RequestedItemStatus) GetErrorMessages() [][]ErrorMessageDto`

GetErrorMessages returns the ErrorMessages field if non-nil, zero value otherwise.

### GetErrorMessagesOk

`func (o *RequestedItemStatus) GetErrorMessagesOk() (*[][]ErrorMessageDto, bool)`

GetErrorMessagesOk returns a tuple with the ErrorMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessages

`func (o *RequestedItemStatus) SetErrorMessages(v [][]ErrorMessageDto)`

SetErrorMessages sets ErrorMessages field to given value.

### HasErrorMessages

`func (o *RequestedItemStatus) HasErrorMessages() bool`

HasErrorMessages returns a boolean if a field has been set.

### SetErrorMessagesNil

`func (o *RequestedItemStatus) SetErrorMessagesNil(b bool)`

 SetErrorMessagesNil sets the value for ErrorMessages to be an explicit nil

### UnsetErrorMessages
`func (o *RequestedItemStatus) UnsetErrorMessages()`

UnsetErrorMessages ensures that no value is present for ErrorMessages, not even an explicit nil
### GetState

`func (o *RequestedItemStatus) GetState() RequestedItemStatusRequestState`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *RequestedItemStatus) GetStateOk() (*RequestedItemStatusRequestState, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *RequestedItemStatus) SetState(v RequestedItemStatusRequestState)`

SetState sets State field to given value.

### HasState

`func (o *RequestedItemStatus) HasState() bool`

HasState returns a boolean if a field has been set.

### GetApprovalDetails

`func (o *RequestedItemStatus) GetApprovalDetails() []ApprovalStatusDto`

GetApprovalDetails returns the ApprovalDetails field if non-nil, zero value otherwise.

### GetApprovalDetailsOk

`func (o *RequestedItemStatus) GetApprovalDetailsOk() (*[]ApprovalStatusDto, bool)`

GetApprovalDetailsOk returns a tuple with the ApprovalDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalDetails

`func (o *RequestedItemStatus) SetApprovalDetails(v []ApprovalStatusDto)`

SetApprovalDetails sets ApprovalDetails field to given value.

### HasApprovalDetails

`func (o *RequestedItemStatus) HasApprovalDetails() bool`

HasApprovalDetails returns a boolean if a field has been set.

### GetApprovalIds

`func (o *RequestedItemStatus) GetApprovalIds() []string`

GetApprovalIds returns the ApprovalIds field if non-nil, zero value otherwise.

### GetApprovalIdsOk

`func (o *RequestedItemStatus) GetApprovalIdsOk() (*[]string, bool)`

GetApprovalIdsOk returns a tuple with the ApprovalIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalIds

`func (o *RequestedItemStatus) SetApprovalIds(v []string)`

SetApprovalIds sets ApprovalIds field to given value.

### HasApprovalIds

`func (o *RequestedItemStatus) HasApprovalIds() bool`

HasApprovalIds returns a boolean if a field has been set.

### SetApprovalIdsNil

`func (o *RequestedItemStatus) SetApprovalIdsNil(b bool)`

 SetApprovalIdsNil sets the value for ApprovalIds to be an explicit nil

### UnsetApprovalIds
`func (o *RequestedItemStatus) UnsetApprovalIds()`

UnsetApprovalIds ensures that no value is present for ApprovalIds, not even an explicit nil
### GetManualWorkItemDetails

`func (o *RequestedItemStatus) GetManualWorkItemDetails() []ManualWorkItemDetails`

GetManualWorkItemDetails returns the ManualWorkItemDetails field if non-nil, zero value otherwise.

### GetManualWorkItemDetailsOk

`func (o *RequestedItemStatus) GetManualWorkItemDetailsOk() (*[]ManualWorkItemDetails, bool)`

GetManualWorkItemDetailsOk returns a tuple with the ManualWorkItemDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManualWorkItemDetails

`func (o *RequestedItemStatus) SetManualWorkItemDetails(v []ManualWorkItemDetails)`

SetManualWorkItemDetails sets ManualWorkItemDetails field to given value.

### HasManualWorkItemDetails

`func (o *RequestedItemStatus) HasManualWorkItemDetails() bool`

HasManualWorkItemDetails returns a boolean if a field has been set.

### SetManualWorkItemDetailsNil

`func (o *RequestedItemStatus) SetManualWorkItemDetailsNil(b bool)`

 SetManualWorkItemDetailsNil sets the value for ManualWorkItemDetails to be an explicit nil

### UnsetManualWorkItemDetails
`func (o *RequestedItemStatus) UnsetManualWorkItemDetails()`

UnsetManualWorkItemDetails ensures that no value is present for ManualWorkItemDetails, not even an explicit nil
### GetAccountActivityItemId

`func (o *RequestedItemStatus) GetAccountActivityItemId() string`

GetAccountActivityItemId returns the AccountActivityItemId field if non-nil, zero value otherwise.

### GetAccountActivityItemIdOk

`func (o *RequestedItemStatus) GetAccountActivityItemIdOk() (*string, bool)`

GetAccountActivityItemIdOk returns a tuple with the AccountActivityItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountActivityItemId

`func (o *RequestedItemStatus) SetAccountActivityItemId(v string)`

SetAccountActivityItemId sets AccountActivityItemId field to given value.

### HasAccountActivityItemId

`func (o *RequestedItemStatus) HasAccountActivityItemId() bool`

HasAccountActivityItemId returns a boolean if a field has been set.

### GetRequestType

`func (o *RequestedItemStatus) GetRequestType() AccessRequestType`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *RequestedItemStatus) GetRequestTypeOk() (*AccessRequestType, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *RequestedItemStatus) SetRequestType(v AccessRequestType)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *RequestedItemStatus) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### SetRequestTypeNil

`func (o *RequestedItemStatus) SetRequestTypeNil(b bool)`

 SetRequestTypeNil sets the value for RequestType to be an explicit nil

### UnsetRequestType
`func (o *RequestedItemStatus) UnsetRequestType()`

UnsetRequestType ensures that no value is present for RequestType, not even an explicit nil
### GetModified

`func (o *RequestedItemStatus) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *RequestedItemStatus) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *RequestedItemStatus) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *RequestedItemStatus) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *RequestedItemStatus) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *RequestedItemStatus) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetCreated

`func (o *RequestedItemStatus) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *RequestedItemStatus) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *RequestedItemStatus) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *RequestedItemStatus) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetRequester

`func (o *RequestedItemStatus) GetRequester() AccessItemRequester`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *RequestedItemStatus) GetRequesterOk() (*AccessItemRequester, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *RequestedItemStatus) SetRequester(v AccessItemRequester)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *RequestedItemStatus) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetRequestedFor

`func (o *RequestedItemStatus) GetRequestedFor() RequestedItemStatusRequestedFor`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *RequestedItemStatus) GetRequestedForOk() (*RequestedItemStatusRequestedFor, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *RequestedItemStatus) SetRequestedFor(v RequestedItemStatusRequestedFor)`

SetRequestedFor sets RequestedFor field to given value.

### HasRequestedFor

`func (o *RequestedItemStatus) HasRequestedFor() bool`

HasRequestedFor returns a boolean if a field has been set.

### GetRequesterComment

`func (o *RequestedItemStatus) GetRequesterComment() RequestedItemStatusRequesterComment`

GetRequesterComment returns the RequesterComment field if non-nil, zero value otherwise.

### GetRequesterCommentOk

`func (o *RequestedItemStatus) GetRequesterCommentOk() (*RequestedItemStatusRequesterComment, bool)`

GetRequesterCommentOk returns a tuple with the RequesterComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterComment

`func (o *RequestedItemStatus) SetRequesterComment(v RequestedItemStatusRequesterComment)`

SetRequesterComment sets RequesterComment field to given value.

### HasRequesterComment

`func (o *RequestedItemStatus) HasRequesterComment() bool`

HasRequesterComment returns a boolean if a field has been set.

### GetSodViolationContext

`func (o *RequestedItemStatus) GetSodViolationContext() RequestedItemStatusSodViolationContext`

GetSodViolationContext returns the SodViolationContext field if non-nil, zero value otherwise.

### GetSodViolationContextOk

`func (o *RequestedItemStatus) GetSodViolationContextOk() (*RequestedItemStatusSodViolationContext, bool)`

GetSodViolationContextOk returns a tuple with the SodViolationContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSodViolationContext

`func (o *RequestedItemStatus) SetSodViolationContext(v RequestedItemStatusSodViolationContext)`

SetSodViolationContext sets SodViolationContext field to given value.

### HasSodViolationContext

`func (o *RequestedItemStatus) HasSodViolationContext() bool`

HasSodViolationContext returns a boolean if a field has been set.

### GetProvisioningDetails

`func (o *RequestedItemStatus) GetProvisioningDetails() RequestedItemStatusProvisioningDetails`

GetProvisioningDetails returns the ProvisioningDetails field if non-nil, zero value otherwise.

### GetProvisioningDetailsOk

`func (o *RequestedItemStatus) GetProvisioningDetailsOk() (*RequestedItemStatusProvisioningDetails, bool)`

GetProvisioningDetailsOk returns a tuple with the ProvisioningDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningDetails

`func (o *RequestedItemStatus) SetProvisioningDetails(v RequestedItemStatusProvisioningDetails)`

SetProvisioningDetails sets ProvisioningDetails field to given value.

### HasProvisioningDetails

`func (o *RequestedItemStatus) HasProvisioningDetails() bool`

HasProvisioningDetails returns a boolean if a field has been set.

### GetPreApprovalTriggerDetails

`func (o *RequestedItemStatus) GetPreApprovalTriggerDetails() RequestedItemStatusPreApprovalTriggerDetails`

GetPreApprovalTriggerDetails returns the PreApprovalTriggerDetails field if non-nil, zero value otherwise.

### GetPreApprovalTriggerDetailsOk

`func (o *RequestedItemStatus) GetPreApprovalTriggerDetailsOk() (*RequestedItemStatusPreApprovalTriggerDetails, bool)`

GetPreApprovalTriggerDetailsOk returns a tuple with the PreApprovalTriggerDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreApprovalTriggerDetails

`func (o *RequestedItemStatus) SetPreApprovalTriggerDetails(v RequestedItemStatusPreApprovalTriggerDetails)`

SetPreApprovalTriggerDetails sets PreApprovalTriggerDetails field to given value.

### HasPreApprovalTriggerDetails

`func (o *RequestedItemStatus) HasPreApprovalTriggerDetails() bool`

HasPreApprovalTriggerDetails returns a boolean if a field has been set.

### GetAccessRequestPhases

`func (o *RequestedItemStatus) GetAccessRequestPhases() []AccessRequestPhases`

GetAccessRequestPhases returns the AccessRequestPhases field if non-nil, zero value otherwise.

### GetAccessRequestPhasesOk

`func (o *RequestedItemStatus) GetAccessRequestPhasesOk() (*[]AccessRequestPhases, bool)`

GetAccessRequestPhasesOk returns a tuple with the AccessRequestPhases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestPhases

`func (o *RequestedItemStatus) SetAccessRequestPhases(v []AccessRequestPhases)`

SetAccessRequestPhases sets AccessRequestPhases field to given value.

### HasAccessRequestPhases

`func (o *RequestedItemStatus) HasAccessRequestPhases() bool`

HasAccessRequestPhases returns a boolean if a field has been set.

### SetAccessRequestPhasesNil

`func (o *RequestedItemStatus) SetAccessRequestPhasesNil(b bool)`

 SetAccessRequestPhasesNil sets the value for AccessRequestPhases to be an explicit nil

### UnsetAccessRequestPhases
`func (o *RequestedItemStatus) UnsetAccessRequestPhases()`

UnsetAccessRequestPhases ensures that no value is present for AccessRequestPhases, not even an explicit nil
### GetDescription

`func (o *RequestedItemStatus) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RequestedItemStatus) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RequestedItemStatus) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RequestedItemStatus) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *RequestedItemStatus) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *RequestedItemStatus) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetRemoveDate

`func (o *RequestedItemStatus) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *RequestedItemStatus) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *RequestedItemStatus) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *RequestedItemStatus) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *RequestedItemStatus) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *RequestedItemStatus) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil
### GetCancelable

`func (o *RequestedItemStatus) GetCancelable() bool`

GetCancelable returns the Cancelable field if non-nil, zero value otherwise.

### GetCancelableOk

`func (o *RequestedItemStatus) GetCancelableOk() (*bool, bool)`

GetCancelableOk returns a tuple with the Cancelable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelable

`func (o *RequestedItemStatus) SetCancelable(v bool)`

SetCancelable sets Cancelable field to given value.

### HasCancelable

`func (o *RequestedItemStatus) HasCancelable() bool`

HasCancelable returns a boolean if a field has been set.

### GetAccessRequestId

`func (o *RequestedItemStatus) GetAccessRequestId() string`

GetAccessRequestId returns the AccessRequestId field if non-nil, zero value otherwise.

### GetAccessRequestIdOk

`func (o *RequestedItemStatus) GetAccessRequestIdOk() (*string, bool)`

GetAccessRequestIdOk returns a tuple with the AccessRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestId

`func (o *RequestedItemStatus) SetAccessRequestId(v string)`

SetAccessRequestId sets AccessRequestId field to given value.

### HasAccessRequestId

`func (o *RequestedItemStatus) HasAccessRequestId() bool`

HasAccessRequestId returns a boolean if a field has been set.

### GetClientMetadata

`func (o *RequestedItemStatus) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *RequestedItemStatus) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *RequestedItemStatus) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *RequestedItemStatus) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### SetClientMetadataNil

`func (o *RequestedItemStatus) SetClientMetadataNil(b bool)`

 SetClientMetadataNil sets the value for ClientMetadata to be an explicit nil

### UnsetClientMetadata
`func (o *RequestedItemStatus) UnsetClientMetadata()`

UnsetClientMetadata ensures that no value is present for ClientMetadata, not even an explicit nil
### GetRequestedAccounts

`func (o *RequestedItemStatus) GetRequestedAccounts() []RequestedAccountRef`

GetRequestedAccounts returns the RequestedAccounts field if non-nil, zero value otherwise.

### GetRequestedAccountsOk

`func (o *RequestedItemStatus) GetRequestedAccountsOk() (*[]RequestedAccountRef, bool)`

GetRequestedAccountsOk returns a tuple with the RequestedAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedAccounts

`func (o *RequestedItemStatus) SetRequestedAccounts(v []RequestedAccountRef)`

SetRequestedAccounts sets RequestedAccounts field to given value.

### HasRequestedAccounts

`func (o *RequestedItemStatus) HasRequestedAccounts() bool`

HasRequestedAccounts returns a boolean if a field has been set.

### SetRequestedAccountsNil

`func (o *RequestedItemStatus) SetRequestedAccountsNil(b bool)`

 SetRequestedAccountsNil sets the value for RequestedAccounts to be an explicit nil

### UnsetRequestedAccounts
`func (o *RequestedItemStatus) UnsetRequestedAccounts()`

UnsetRequestedAccounts ensures that no value is present for RequestedAccounts, not even an explicit nil
### GetPrivilegeLevel

`func (o *RequestedItemStatus) GetPrivilegeLevel() string`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *RequestedItemStatus) GetPrivilegeLevelOk() (*string, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *RequestedItemStatus) SetPrivilegeLevel(v string)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *RequestedItemStatus) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.

### SetPrivilegeLevelNil

`func (o *RequestedItemStatus) SetPrivilegeLevelNil(b bool)`

 SetPrivilegeLevelNil sets the value for PrivilegeLevel to be an explicit nil

### UnsetPrivilegeLevel
`func (o *RequestedItemStatus) UnsetPrivilegeLevel()`

UnsetPrivilegeLevel ensures that no value is present for PrivilegeLevel, not even an explicit nil

