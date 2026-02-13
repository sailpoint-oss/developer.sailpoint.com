---
id: beta-access-request-admin-item-status
title: AccessRequestAdminItemStatus
pagination_label: AccessRequestAdminItemStatus
sidebar_label: AccessRequestAdminItemStatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestAdminItemStatus', 'BetaAccessRequestAdminItemStatus'] 
slug: /tools/sdk/go/beta/models/access-request-admin-item-status
tags: ['SDK', 'Software Development Kit', 'AccessRequestAdminItemStatus', 'BetaAccessRequestAdminItemStatus']
---

# AccessRequestAdminItemStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | ID of the access request. This is a new property as of 2025. Older access requests may not have an ID. | [optional] 
**Name** | Pointer to **NullableString** | Human-readable display name of the item being requested. | [optional] 
**Type** | Pointer to **NullableString** | Type of requested object. | [optional] 
**CancelledRequestDetails** | Pointer to [**AccessRequestAdminItemStatusCancelledRequestDetails**](access-request-admin-item-status-cancelled-request-details) |  | [optional] 
**ErrorMessages** | Pointer to [**[][]ErrorMessageDto1**](error-message-dto1) | List of localized error messages, if any, encountered during the approval/provisioning process. | [optional] 
**State** | Pointer to [**RequestedItemStatusRequestState**](requested-item-status-request-state) |  | [optional] 
**ApprovalDetails** | Pointer to [**[]ApprovalStatusDto1**](approval-status-dto1) | Approval details for each item. | [optional] 
**ManualWorkItemDetails** | Pointer to [**[]ManualWorkItemDetails1**](manual-work-item-details1) | Manual work items created for provisioning the item. | [optional] 
**AccountActivityItemId** | Pointer to **string** | Id of associated account activity item. | [optional] 
**RequestType** | Pointer to [**NullableAccessRequestType**](access-request-type) |  | [optional] 
**Modified** | Pointer to **NullableTime** | When the request was last modified. | [optional] 
**Created** | Pointer to **SailPointTime** | When the request was created. | [optional] 
**Requester** | Pointer to [**AccessItemRequester**](access-item-requester) |  | [optional] 
**RequestedFor** | Pointer to [**RequestedItemStatusRequestedFor**](requested-item-status-requested-for) |  | [optional] 
**RequesterComment** | Pointer to [**RequestedItemStatusRequesterComment**](requested-item-status-requester-comment) |  | [optional] 
**SodViolationContext** | Pointer to [**AccessRequestAdminItemStatusSodViolationContext**](access-request-admin-item-status-sod-violation-context) |  | [optional] 
**ProvisioningDetails** | Pointer to [**RequestedItemStatusProvisioningDetails**](requested-item-status-provisioning-details) |  | [optional] 
**PreApprovalTriggerDetails** | Pointer to [**RequestedItemStatusPreApprovalTriggerDetails**](requested-item-status-pre-approval-trigger-details) |  | [optional] 
**AccessRequestPhases** | Pointer to [**[]AccessRequestPhases**](access-request-phases) | A list of Phases that the Access Request has gone through in order, to help determine the status of the request. | [optional] 
**Description** | Pointer to **NullableString** | Description associated to the requested object. | [optional] 
**RemoveDate** | Pointer to **NullableTime** | When the role access is scheduled for removal. | [optional] 
**Cancelable** | Pointer to **bool** | True if the request can be canceled. | [optional] [default to false]
**ReauthorizationRequired** | Pointer to **bool** | True if re-auth is required. | [optional] [default to false]
**AccessRequestId** | Pointer to **string** | This is the account activity id. | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs, if any were included in the corresponding access request | [optional] 

## Methods

### NewAccessRequestAdminItemStatus

`func NewAccessRequestAdminItemStatus() *AccessRequestAdminItemStatus`

NewAccessRequestAdminItemStatus instantiates a new AccessRequestAdminItemStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestAdminItemStatusWithDefaults

`func NewAccessRequestAdminItemStatusWithDefaults() *AccessRequestAdminItemStatus`

NewAccessRequestAdminItemStatusWithDefaults instantiates a new AccessRequestAdminItemStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessRequestAdminItemStatus) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessRequestAdminItemStatus) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessRequestAdminItemStatus) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessRequestAdminItemStatus) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *AccessRequestAdminItemStatus) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *AccessRequestAdminItemStatus) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *AccessRequestAdminItemStatus) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessRequestAdminItemStatus) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessRequestAdminItemStatus) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessRequestAdminItemStatus) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *AccessRequestAdminItemStatus) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *AccessRequestAdminItemStatus) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetType

`func (o *AccessRequestAdminItemStatus) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessRequestAdminItemStatus) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessRequestAdminItemStatus) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessRequestAdminItemStatus) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *AccessRequestAdminItemStatus) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *AccessRequestAdminItemStatus) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetCancelledRequestDetails

`func (o *AccessRequestAdminItemStatus) GetCancelledRequestDetails() AccessRequestAdminItemStatusCancelledRequestDetails`

GetCancelledRequestDetails returns the CancelledRequestDetails field if non-nil, zero value otherwise.

### GetCancelledRequestDetailsOk

`func (o *AccessRequestAdminItemStatus) GetCancelledRequestDetailsOk() (*AccessRequestAdminItemStatusCancelledRequestDetails, bool)`

GetCancelledRequestDetailsOk returns a tuple with the CancelledRequestDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelledRequestDetails

`func (o *AccessRequestAdminItemStatus) SetCancelledRequestDetails(v AccessRequestAdminItemStatusCancelledRequestDetails)`

SetCancelledRequestDetails sets CancelledRequestDetails field to given value.

### HasCancelledRequestDetails

`func (o *AccessRequestAdminItemStatus) HasCancelledRequestDetails() bool`

HasCancelledRequestDetails returns a boolean if a field has been set.

### GetErrorMessages

`func (o *AccessRequestAdminItemStatus) GetErrorMessages() [][]ErrorMessageDto1`

GetErrorMessages returns the ErrorMessages field if non-nil, zero value otherwise.

### GetErrorMessagesOk

`func (o *AccessRequestAdminItemStatus) GetErrorMessagesOk() (*[][]ErrorMessageDto1, bool)`

GetErrorMessagesOk returns a tuple with the ErrorMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessages

`func (o *AccessRequestAdminItemStatus) SetErrorMessages(v [][]ErrorMessageDto1)`

SetErrorMessages sets ErrorMessages field to given value.

### HasErrorMessages

`func (o *AccessRequestAdminItemStatus) HasErrorMessages() bool`

HasErrorMessages returns a boolean if a field has been set.

### SetErrorMessagesNil

`func (o *AccessRequestAdminItemStatus) SetErrorMessagesNil(b bool)`

 SetErrorMessagesNil sets the value for ErrorMessages to be an explicit nil

### UnsetErrorMessages
`func (o *AccessRequestAdminItemStatus) UnsetErrorMessages()`

UnsetErrorMessages ensures that no value is present for ErrorMessages, not even an explicit nil
### GetState

`func (o *AccessRequestAdminItemStatus) GetState() RequestedItemStatusRequestState`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *AccessRequestAdminItemStatus) GetStateOk() (*RequestedItemStatusRequestState, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *AccessRequestAdminItemStatus) SetState(v RequestedItemStatusRequestState)`

SetState sets State field to given value.

### HasState

`func (o *AccessRequestAdminItemStatus) HasState() bool`

HasState returns a boolean if a field has been set.

### GetApprovalDetails

`func (o *AccessRequestAdminItemStatus) GetApprovalDetails() []ApprovalStatusDto1`

GetApprovalDetails returns the ApprovalDetails field if non-nil, zero value otherwise.

### GetApprovalDetailsOk

`func (o *AccessRequestAdminItemStatus) GetApprovalDetailsOk() (*[]ApprovalStatusDto1, bool)`

GetApprovalDetailsOk returns a tuple with the ApprovalDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalDetails

`func (o *AccessRequestAdminItemStatus) SetApprovalDetails(v []ApprovalStatusDto1)`

SetApprovalDetails sets ApprovalDetails field to given value.

### HasApprovalDetails

`func (o *AccessRequestAdminItemStatus) HasApprovalDetails() bool`

HasApprovalDetails returns a boolean if a field has been set.

### GetManualWorkItemDetails

`func (o *AccessRequestAdminItemStatus) GetManualWorkItemDetails() []ManualWorkItemDetails1`

GetManualWorkItemDetails returns the ManualWorkItemDetails field if non-nil, zero value otherwise.

### GetManualWorkItemDetailsOk

`func (o *AccessRequestAdminItemStatus) GetManualWorkItemDetailsOk() (*[]ManualWorkItemDetails1, bool)`

GetManualWorkItemDetailsOk returns a tuple with the ManualWorkItemDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManualWorkItemDetails

`func (o *AccessRequestAdminItemStatus) SetManualWorkItemDetails(v []ManualWorkItemDetails1)`

SetManualWorkItemDetails sets ManualWorkItemDetails field to given value.

### HasManualWorkItemDetails

`func (o *AccessRequestAdminItemStatus) HasManualWorkItemDetails() bool`

HasManualWorkItemDetails returns a boolean if a field has been set.

### SetManualWorkItemDetailsNil

`func (o *AccessRequestAdminItemStatus) SetManualWorkItemDetailsNil(b bool)`

 SetManualWorkItemDetailsNil sets the value for ManualWorkItemDetails to be an explicit nil

### UnsetManualWorkItemDetails
`func (o *AccessRequestAdminItemStatus) UnsetManualWorkItemDetails()`

UnsetManualWorkItemDetails ensures that no value is present for ManualWorkItemDetails, not even an explicit nil
### GetAccountActivityItemId

`func (o *AccessRequestAdminItemStatus) GetAccountActivityItemId() string`

GetAccountActivityItemId returns the AccountActivityItemId field if non-nil, zero value otherwise.

### GetAccountActivityItemIdOk

`func (o *AccessRequestAdminItemStatus) GetAccountActivityItemIdOk() (*string, bool)`

GetAccountActivityItemIdOk returns a tuple with the AccountActivityItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountActivityItemId

`func (o *AccessRequestAdminItemStatus) SetAccountActivityItemId(v string)`

SetAccountActivityItemId sets AccountActivityItemId field to given value.

### HasAccountActivityItemId

`func (o *AccessRequestAdminItemStatus) HasAccountActivityItemId() bool`

HasAccountActivityItemId returns a boolean if a field has been set.

### GetRequestType

`func (o *AccessRequestAdminItemStatus) GetRequestType() AccessRequestType`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *AccessRequestAdminItemStatus) GetRequestTypeOk() (*AccessRequestType, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *AccessRequestAdminItemStatus) SetRequestType(v AccessRequestType)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *AccessRequestAdminItemStatus) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### SetRequestTypeNil

`func (o *AccessRequestAdminItemStatus) SetRequestTypeNil(b bool)`

 SetRequestTypeNil sets the value for RequestType to be an explicit nil

### UnsetRequestType
`func (o *AccessRequestAdminItemStatus) UnsetRequestType()`

UnsetRequestType ensures that no value is present for RequestType, not even an explicit nil
### GetModified

`func (o *AccessRequestAdminItemStatus) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *AccessRequestAdminItemStatus) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *AccessRequestAdminItemStatus) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *AccessRequestAdminItemStatus) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *AccessRequestAdminItemStatus) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *AccessRequestAdminItemStatus) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetCreated

`func (o *AccessRequestAdminItemStatus) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *AccessRequestAdminItemStatus) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *AccessRequestAdminItemStatus) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *AccessRequestAdminItemStatus) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetRequester

`func (o *AccessRequestAdminItemStatus) GetRequester() AccessItemRequester`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *AccessRequestAdminItemStatus) GetRequesterOk() (*AccessItemRequester, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *AccessRequestAdminItemStatus) SetRequester(v AccessItemRequester)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *AccessRequestAdminItemStatus) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetRequestedFor

`func (o *AccessRequestAdminItemStatus) GetRequestedFor() RequestedItemStatusRequestedFor`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *AccessRequestAdminItemStatus) GetRequestedForOk() (*RequestedItemStatusRequestedFor, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *AccessRequestAdminItemStatus) SetRequestedFor(v RequestedItemStatusRequestedFor)`

SetRequestedFor sets RequestedFor field to given value.

### HasRequestedFor

`func (o *AccessRequestAdminItemStatus) HasRequestedFor() bool`

HasRequestedFor returns a boolean if a field has been set.

### GetRequesterComment

`func (o *AccessRequestAdminItemStatus) GetRequesterComment() RequestedItemStatusRequesterComment`

GetRequesterComment returns the RequesterComment field if non-nil, zero value otherwise.

### GetRequesterCommentOk

`func (o *AccessRequestAdminItemStatus) GetRequesterCommentOk() (*RequestedItemStatusRequesterComment, bool)`

GetRequesterCommentOk returns a tuple with the RequesterComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterComment

`func (o *AccessRequestAdminItemStatus) SetRequesterComment(v RequestedItemStatusRequesterComment)`

SetRequesterComment sets RequesterComment field to given value.

### HasRequesterComment

`func (o *AccessRequestAdminItemStatus) HasRequesterComment() bool`

HasRequesterComment returns a boolean if a field has been set.

### GetSodViolationContext

`func (o *AccessRequestAdminItemStatus) GetSodViolationContext() AccessRequestAdminItemStatusSodViolationContext`

GetSodViolationContext returns the SodViolationContext field if non-nil, zero value otherwise.

### GetSodViolationContextOk

`func (o *AccessRequestAdminItemStatus) GetSodViolationContextOk() (*AccessRequestAdminItemStatusSodViolationContext, bool)`

GetSodViolationContextOk returns a tuple with the SodViolationContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSodViolationContext

`func (o *AccessRequestAdminItemStatus) SetSodViolationContext(v AccessRequestAdminItemStatusSodViolationContext)`

SetSodViolationContext sets SodViolationContext field to given value.

### HasSodViolationContext

`func (o *AccessRequestAdminItemStatus) HasSodViolationContext() bool`

HasSodViolationContext returns a boolean if a field has been set.

### GetProvisioningDetails

`func (o *AccessRequestAdminItemStatus) GetProvisioningDetails() RequestedItemStatusProvisioningDetails`

GetProvisioningDetails returns the ProvisioningDetails field if non-nil, zero value otherwise.

### GetProvisioningDetailsOk

`func (o *AccessRequestAdminItemStatus) GetProvisioningDetailsOk() (*RequestedItemStatusProvisioningDetails, bool)`

GetProvisioningDetailsOk returns a tuple with the ProvisioningDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningDetails

`func (o *AccessRequestAdminItemStatus) SetProvisioningDetails(v RequestedItemStatusProvisioningDetails)`

SetProvisioningDetails sets ProvisioningDetails field to given value.

### HasProvisioningDetails

`func (o *AccessRequestAdminItemStatus) HasProvisioningDetails() bool`

HasProvisioningDetails returns a boolean if a field has been set.

### GetPreApprovalTriggerDetails

`func (o *AccessRequestAdminItemStatus) GetPreApprovalTriggerDetails() RequestedItemStatusPreApprovalTriggerDetails`

GetPreApprovalTriggerDetails returns the PreApprovalTriggerDetails field if non-nil, zero value otherwise.

### GetPreApprovalTriggerDetailsOk

`func (o *AccessRequestAdminItemStatus) GetPreApprovalTriggerDetailsOk() (*RequestedItemStatusPreApprovalTriggerDetails, bool)`

GetPreApprovalTriggerDetailsOk returns a tuple with the PreApprovalTriggerDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreApprovalTriggerDetails

`func (o *AccessRequestAdminItemStatus) SetPreApprovalTriggerDetails(v RequestedItemStatusPreApprovalTriggerDetails)`

SetPreApprovalTriggerDetails sets PreApprovalTriggerDetails field to given value.

### HasPreApprovalTriggerDetails

`func (o *AccessRequestAdminItemStatus) HasPreApprovalTriggerDetails() bool`

HasPreApprovalTriggerDetails returns a boolean if a field has been set.

### GetAccessRequestPhases

`func (o *AccessRequestAdminItemStatus) GetAccessRequestPhases() []AccessRequestPhases`

GetAccessRequestPhases returns the AccessRequestPhases field if non-nil, zero value otherwise.

### GetAccessRequestPhasesOk

`func (o *AccessRequestAdminItemStatus) GetAccessRequestPhasesOk() (*[]AccessRequestPhases, bool)`

GetAccessRequestPhasesOk returns a tuple with the AccessRequestPhases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestPhases

`func (o *AccessRequestAdminItemStatus) SetAccessRequestPhases(v []AccessRequestPhases)`

SetAccessRequestPhases sets AccessRequestPhases field to given value.

### HasAccessRequestPhases

`func (o *AccessRequestAdminItemStatus) HasAccessRequestPhases() bool`

HasAccessRequestPhases returns a boolean if a field has been set.

### SetAccessRequestPhasesNil

`func (o *AccessRequestAdminItemStatus) SetAccessRequestPhasesNil(b bool)`

 SetAccessRequestPhasesNil sets the value for AccessRequestPhases to be an explicit nil

### UnsetAccessRequestPhases
`func (o *AccessRequestAdminItemStatus) UnsetAccessRequestPhases()`

UnsetAccessRequestPhases ensures that no value is present for AccessRequestPhases, not even an explicit nil
### GetDescription

`func (o *AccessRequestAdminItemStatus) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessRequestAdminItemStatus) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessRequestAdminItemStatus) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessRequestAdminItemStatus) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *AccessRequestAdminItemStatus) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *AccessRequestAdminItemStatus) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetRemoveDate

`func (o *AccessRequestAdminItemStatus) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *AccessRequestAdminItemStatus) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *AccessRequestAdminItemStatus) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *AccessRequestAdminItemStatus) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *AccessRequestAdminItemStatus) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *AccessRequestAdminItemStatus) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil
### GetCancelable

`func (o *AccessRequestAdminItemStatus) GetCancelable() bool`

GetCancelable returns the Cancelable field if non-nil, zero value otherwise.

### GetCancelableOk

`func (o *AccessRequestAdminItemStatus) GetCancelableOk() (*bool, bool)`

GetCancelableOk returns a tuple with the Cancelable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelable

`func (o *AccessRequestAdminItemStatus) SetCancelable(v bool)`

SetCancelable sets Cancelable field to given value.

### HasCancelable

`func (o *AccessRequestAdminItemStatus) HasCancelable() bool`

HasCancelable returns a boolean if a field has been set.

### GetReauthorizationRequired

`func (o *AccessRequestAdminItemStatus) GetReauthorizationRequired() bool`

GetReauthorizationRequired returns the ReauthorizationRequired field if non-nil, zero value otherwise.

### GetReauthorizationRequiredOk

`func (o *AccessRequestAdminItemStatus) GetReauthorizationRequiredOk() (*bool, bool)`

GetReauthorizationRequiredOk returns a tuple with the ReauthorizationRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthorizationRequired

`func (o *AccessRequestAdminItemStatus) SetReauthorizationRequired(v bool)`

SetReauthorizationRequired sets ReauthorizationRequired field to given value.

### HasReauthorizationRequired

`func (o *AccessRequestAdminItemStatus) HasReauthorizationRequired() bool`

HasReauthorizationRequired returns a boolean if a field has been set.

### GetAccessRequestId

`func (o *AccessRequestAdminItemStatus) GetAccessRequestId() string`

GetAccessRequestId returns the AccessRequestId field if non-nil, zero value otherwise.

### GetAccessRequestIdOk

`func (o *AccessRequestAdminItemStatus) GetAccessRequestIdOk() (*string, bool)`

GetAccessRequestIdOk returns a tuple with the AccessRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestId

`func (o *AccessRequestAdminItemStatus) SetAccessRequestId(v string)`

SetAccessRequestId sets AccessRequestId field to given value.

### HasAccessRequestId

`func (o *AccessRequestAdminItemStatus) HasAccessRequestId() bool`

HasAccessRequestId returns a boolean if a field has been set.

### GetClientMetadata

`func (o *AccessRequestAdminItemStatus) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *AccessRequestAdminItemStatus) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *AccessRequestAdminItemStatus) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *AccessRequestAdminItemStatus) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### SetClientMetadataNil

`func (o *AccessRequestAdminItemStatus) SetClientMetadataNil(b bool)`

 SetClientMetadataNil sets the value for ClientMetadata to be an explicit nil

### UnsetClientMetadata
`func (o *AccessRequestAdminItemStatus) UnsetClientMetadata()`

UnsetClientMetadata ensures that no value is present for ClientMetadata, not even an explicit nil

