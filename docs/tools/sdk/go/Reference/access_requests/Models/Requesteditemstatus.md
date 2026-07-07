---
id: v1-requesteditemstatus
title: Requesteditemstatus
pagination_label: Requesteditemstatus
sidebar_label: Requesteditemstatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Requesteditemstatus', 'V1Requesteditemstatus'] 
slug: /tools/sdk/go/accessrequests/models/requesteditemstatus
tags: ['SDK', 'Software Development Kit', 'Requesteditemstatus', 'V1Requesteditemstatus']
---

# Requesteditemstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | The ID of the access request. As of 2025, this is a new property. Older access requests might not have an ID. | [optional] 
**Name** | Pointer to **NullableString** | Human-readable display name of the item being requested. | [optional] 
**Type** | Pointer to **NullableString** | Type of requested object. | [optional] 
**CancelledRequestDetails** | Pointer to [**RequesteditemstatusCancelledRequestDetails**](requesteditemstatus-cancelled-request-details) |  | [optional] 
**ErrorMessages** | Pointer to [**[][]Errormessagedto**](errormessagedto) | List of list of localized error messages, if any, encountered during the approval/provisioning process. | [optional] 
**State** | Pointer to [**Requesteditemstatusrequeststate**](requesteditemstatusrequeststate) |  | [optional] 
**ApprovalDetails** | Pointer to [**[]Approvalstatusdto**](approvalstatusdto) | Approval details for each item. | [optional] 
**ApprovalIds** | Pointer to **[]string** | List of approval IDs associated with the request. | [optional] 
**ManualWorkItemDetails** | Pointer to [**[]Manualworkitemdetails**](manualworkitemdetails) | Manual work items created for provisioning the item. | [optional] 
**AccountActivityItemId** | Pointer to **string** | Id of associated account activity item. | [optional] 
**RequestType** | Pointer to [**NullableAccessrequesttype**](accessrequesttype) |  | [optional] 
**Modified** | Pointer to **NullableTime** | When the request was last modified. | [optional] 
**Created** | Pointer to **SailPointTime** | When the request was created. | [optional] 
**Requester** | Pointer to [**Accessitemrequester**](accessitemrequester) |  | [optional] 
**RequestedFor** | Pointer to [**RequesteditemstatusRequestedFor**](requesteditemstatus-requested-for) |  | [optional] 
**RequesterComment** | Pointer to [**RequesteditemstatusRequesterComment**](requesteditemstatus-requester-comment) |  | [optional] 
**SodViolationContext** | Pointer to [**RequesteditemstatusSodViolationContext**](requesteditemstatus-sod-violation-context) |  | [optional] 
**ProvisioningDetails** | Pointer to [**RequesteditemstatusProvisioningDetails**](requesteditemstatus-provisioning-details) |  | [optional] 
**PreApprovalTriggerDetails** | Pointer to [**RequesteditemstatusPreApprovalTriggerDetails**](requesteditemstatus-pre-approval-trigger-details) |  | [optional] 
**AccessRequestPhases** | Pointer to [**[]Accessrequestphases**](accessrequestphases) | A list of Phases that the Access Request has gone through in order, to help determine the status of the request. | [optional] 
**Description** | Pointer to **NullableString** | Description associated to the requested object. | [optional] 
**StartDate** | Pointer to **NullableTime** | When the role access is scheduled for provisioning. | [optional] 
**RemoveDate** | Pointer to **NullableTime** | When the role access is scheduled for removal. | [optional] 
**Cancelable** | Pointer to **bool** | True if the request can be canceled. | [optional] [default to false]
**AccessRequestId** | Pointer to **string** | This is the account activity id. | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs, if any were included in the corresponding access request | [optional] 
**RequestedAccounts** | Pointer to [**[]Requestedaccountref**](requestedaccountref) | The accounts selected by the user for the access to be provisioned on, in case they have multiple accounts on one or more sources. | [optional] 
**PrivilegeLevel** | Pointer to **NullableString** | The privilege level of the requested access item, if applicable. | [optional] 

## Methods

### NewRequesteditemstatus

`func NewRequesteditemstatus() *Requesteditemstatus`

NewRequesteditemstatus instantiates a new Requesteditemstatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequesteditemstatusWithDefaults

`func NewRequesteditemstatusWithDefaults() *Requesteditemstatus`

NewRequesteditemstatusWithDefaults instantiates a new Requesteditemstatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Requesteditemstatus) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Requesteditemstatus) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Requesteditemstatus) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Requesteditemstatus) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *Requesteditemstatus) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *Requesteditemstatus) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *Requesteditemstatus) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Requesteditemstatus) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Requesteditemstatus) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Requesteditemstatus) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Requesteditemstatus) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Requesteditemstatus) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetType

`func (o *Requesteditemstatus) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Requesteditemstatus) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Requesteditemstatus) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Requesteditemstatus) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *Requesteditemstatus) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *Requesteditemstatus) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetCancelledRequestDetails

`func (o *Requesteditemstatus) GetCancelledRequestDetails() RequesteditemstatusCancelledRequestDetails`

GetCancelledRequestDetails returns the CancelledRequestDetails field if non-nil, zero value otherwise.

### GetCancelledRequestDetailsOk

`func (o *Requesteditemstatus) GetCancelledRequestDetailsOk() (*RequesteditemstatusCancelledRequestDetails, bool)`

GetCancelledRequestDetailsOk returns a tuple with the CancelledRequestDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelledRequestDetails

`func (o *Requesteditemstatus) SetCancelledRequestDetails(v RequesteditemstatusCancelledRequestDetails)`

SetCancelledRequestDetails sets CancelledRequestDetails field to given value.

### HasCancelledRequestDetails

`func (o *Requesteditemstatus) HasCancelledRequestDetails() bool`

HasCancelledRequestDetails returns a boolean if a field has been set.

### GetErrorMessages

`func (o *Requesteditemstatus) GetErrorMessages() [][]Errormessagedto`

GetErrorMessages returns the ErrorMessages field if non-nil, zero value otherwise.

### GetErrorMessagesOk

`func (o *Requesteditemstatus) GetErrorMessagesOk() (*[][]Errormessagedto, bool)`

GetErrorMessagesOk returns a tuple with the ErrorMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessages

`func (o *Requesteditemstatus) SetErrorMessages(v [][]Errormessagedto)`

SetErrorMessages sets ErrorMessages field to given value.

### HasErrorMessages

`func (o *Requesteditemstatus) HasErrorMessages() bool`

HasErrorMessages returns a boolean if a field has been set.

### SetErrorMessagesNil

`func (o *Requesteditemstatus) SetErrorMessagesNil(b bool)`

 SetErrorMessagesNil sets the value for ErrorMessages to be an explicit nil

### UnsetErrorMessages
`func (o *Requesteditemstatus) UnsetErrorMessages()`

UnsetErrorMessages ensures that no value is present for ErrorMessages, not even an explicit nil
### GetState

`func (o *Requesteditemstatus) GetState() Requesteditemstatusrequeststate`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Requesteditemstatus) GetStateOk() (*Requesteditemstatusrequeststate, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Requesteditemstatus) SetState(v Requesteditemstatusrequeststate)`

SetState sets State field to given value.

### HasState

`func (o *Requesteditemstatus) HasState() bool`

HasState returns a boolean if a field has been set.

### GetApprovalDetails

`func (o *Requesteditemstatus) GetApprovalDetails() []Approvalstatusdto`

GetApprovalDetails returns the ApprovalDetails field if non-nil, zero value otherwise.

### GetApprovalDetailsOk

`func (o *Requesteditemstatus) GetApprovalDetailsOk() (*[]Approvalstatusdto, bool)`

GetApprovalDetailsOk returns a tuple with the ApprovalDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalDetails

`func (o *Requesteditemstatus) SetApprovalDetails(v []Approvalstatusdto)`

SetApprovalDetails sets ApprovalDetails field to given value.

### HasApprovalDetails

`func (o *Requesteditemstatus) HasApprovalDetails() bool`

HasApprovalDetails returns a boolean if a field has been set.

### GetApprovalIds

`func (o *Requesteditemstatus) GetApprovalIds() []string`

GetApprovalIds returns the ApprovalIds field if non-nil, zero value otherwise.

### GetApprovalIdsOk

`func (o *Requesteditemstatus) GetApprovalIdsOk() (*[]string, bool)`

GetApprovalIdsOk returns a tuple with the ApprovalIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalIds

`func (o *Requesteditemstatus) SetApprovalIds(v []string)`

SetApprovalIds sets ApprovalIds field to given value.

### HasApprovalIds

`func (o *Requesteditemstatus) HasApprovalIds() bool`

HasApprovalIds returns a boolean if a field has been set.

### SetApprovalIdsNil

`func (o *Requesteditemstatus) SetApprovalIdsNil(b bool)`

 SetApprovalIdsNil sets the value for ApprovalIds to be an explicit nil

### UnsetApprovalIds
`func (o *Requesteditemstatus) UnsetApprovalIds()`

UnsetApprovalIds ensures that no value is present for ApprovalIds, not even an explicit nil
### GetManualWorkItemDetails

`func (o *Requesteditemstatus) GetManualWorkItemDetails() []Manualworkitemdetails`

GetManualWorkItemDetails returns the ManualWorkItemDetails field if non-nil, zero value otherwise.

### GetManualWorkItemDetailsOk

`func (o *Requesteditemstatus) GetManualWorkItemDetailsOk() (*[]Manualworkitemdetails, bool)`

GetManualWorkItemDetailsOk returns a tuple with the ManualWorkItemDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManualWorkItemDetails

`func (o *Requesteditemstatus) SetManualWorkItemDetails(v []Manualworkitemdetails)`

SetManualWorkItemDetails sets ManualWorkItemDetails field to given value.

### HasManualWorkItemDetails

`func (o *Requesteditemstatus) HasManualWorkItemDetails() bool`

HasManualWorkItemDetails returns a boolean if a field has been set.

### SetManualWorkItemDetailsNil

`func (o *Requesteditemstatus) SetManualWorkItemDetailsNil(b bool)`

 SetManualWorkItemDetailsNil sets the value for ManualWorkItemDetails to be an explicit nil

### UnsetManualWorkItemDetails
`func (o *Requesteditemstatus) UnsetManualWorkItemDetails()`

UnsetManualWorkItemDetails ensures that no value is present for ManualWorkItemDetails, not even an explicit nil
### GetAccountActivityItemId

`func (o *Requesteditemstatus) GetAccountActivityItemId() string`

GetAccountActivityItemId returns the AccountActivityItemId field if non-nil, zero value otherwise.

### GetAccountActivityItemIdOk

`func (o *Requesteditemstatus) GetAccountActivityItemIdOk() (*string, bool)`

GetAccountActivityItemIdOk returns a tuple with the AccountActivityItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountActivityItemId

`func (o *Requesteditemstatus) SetAccountActivityItemId(v string)`

SetAccountActivityItemId sets AccountActivityItemId field to given value.

### HasAccountActivityItemId

`func (o *Requesteditemstatus) HasAccountActivityItemId() bool`

HasAccountActivityItemId returns a boolean if a field has been set.

### GetRequestType

`func (o *Requesteditemstatus) GetRequestType() Accessrequesttype`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *Requesteditemstatus) GetRequestTypeOk() (*Accessrequesttype, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *Requesteditemstatus) SetRequestType(v Accessrequesttype)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *Requesteditemstatus) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### SetRequestTypeNil

`func (o *Requesteditemstatus) SetRequestTypeNil(b bool)`

 SetRequestTypeNil sets the value for RequestType to be an explicit nil

### UnsetRequestType
`func (o *Requesteditemstatus) UnsetRequestType()`

UnsetRequestType ensures that no value is present for RequestType, not even an explicit nil
### GetModified

`func (o *Requesteditemstatus) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Requesteditemstatus) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Requesteditemstatus) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Requesteditemstatus) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *Requesteditemstatus) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Requesteditemstatus) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetCreated

`func (o *Requesteditemstatus) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Requesteditemstatus) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Requesteditemstatus) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Requesteditemstatus) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetRequester

`func (o *Requesteditemstatus) GetRequester() Accessitemrequester`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *Requesteditemstatus) GetRequesterOk() (*Accessitemrequester, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *Requesteditemstatus) SetRequester(v Accessitemrequester)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *Requesteditemstatus) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetRequestedFor

`func (o *Requesteditemstatus) GetRequestedFor() RequesteditemstatusRequestedFor`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *Requesteditemstatus) GetRequestedForOk() (*RequesteditemstatusRequestedFor, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *Requesteditemstatus) SetRequestedFor(v RequesteditemstatusRequestedFor)`

SetRequestedFor sets RequestedFor field to given value.

### HasRequestedFor

`func (o *Requesteditemstatus) HasRequestedFor() bool`

HasRequestedFor returns a boolean if a field has been set.

### GetRequesterComment

`func (o *Requesteditemstatus) GetRequesterComment() RequesteditemstatusRequesterComment`

GetRequesterComment returns the RequesterComment field if non-nil, zero value otherwise.

### GetRequesterCommentOk

`func (o *Requesteditemstatus) GetRequesterCommentOk() (*RequesteditemstatusRequesterComment, bool)`

GetRequesterCommentOk returns a tuple with the RequesterComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterComment

`func (o *Requesteditemstatus) SetRequesterComment(v RequesteditemstatusRequesterComment)`

SetRequesterComment sets RequesterComment field to given value.

### HasRequesterComment

`func (o *Requesteditemstatus) HasRequesterComment() bool`

HasRequesterComment returns a boolean if a field has been set.

### GetSodViolationContext

`func (o *Requesteditemstatus) GetSodViolationContext() RequesteditemstatusSodViolationContext`

GetSodViolationContext returns the SodViolationContext field if non-nil, zero value otherwise.

### GetSodViolationContextOk

`func (o *Requesteditemstatus) GetSodViolationContextOk() (*RequesteditemstatusSodViolationContext, bool)`

GetSodViolationContextOk returns a tuple with the SodViolationContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSodViolationContext

`func (o *Requesteditemstatus) SetSodViolationContext(v RequesteditemstatusSodViolationContext)`

SetSodViolationContext sets SodViolationContext field to given value.

### HasSodViolationContext

`func (o *Requesteditemstatus) HasSodViolationContext() bool`

HasSodViolationContext returns a boolean if a field has been set.

### GetProvisioningDetails

`func (o *Requesteditemstatus) GetProvisioningDetails() RequesteditemstatusProvisioningDetails`

GetProvisioningDetails returns the ProvisioningDetails field if non-nil, zero value otherwise.

### GetProvisioningDetailsOk

`func (o *Requesteditemstatus) GetProvisioningDetailsOk() (*RequesteditemstatusProvisioningDetails, bool)`

GetProvisioningDetailsOk returns a tuple with the ProvisioningDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningDetails

`func (o *Requesteditemstatus) SetProvisioningDetails(v RequesteditemstatusProvisioningDetails)`

SetProvisioningDetails sets ProvisioningDetails field to given value.

### HasProvisioningDetails

`func (o *Requesteditemstatus) HasProvisioningDetails() bool`

HasProvisioningDetails returns a boolean if a field has been set.

### GetPreApprovalTriggerDetails

`func (o *Requesteditemstatus) GetPreApprovalTriggerDetails() RequesteditemstatusPreApprovalTriggerDetails`

GetPreApprovalTriggerDetails returns the PreApprovalTriggerDetails field if non-nil, zero value otherwise.

### GetPreApprovalTriggerDetailsOk

`func (o *Requesteditemstatus) GetPreApprovalTriggerDetailsOk() (*RequesteditemstatusPreApprovalTriggerDetails, bool)`

GetPreApprovalTriggerDetailsOk returns a tuple with the PreApprovalTriggerDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreApprovalTriggerDetails

`func (o *Requesteditemstatus) SetPreApprovalTriggerDetails(v RequesteditemstatusPreApprovalTriggerDetails)`

SetPreApprovalTriggerDetails sets PreApprovalTriggerDetails field to given value.

### HasPreApprovalTriggerDetails

`func (o *Requesteditemstatus) HasPreApprovalTriggerDetails() bool`

HasPreApprovalTriggerDetails returns a boolean if a field has been set.

### GetAccessRequestPhases

`func (o *Requesteditemstatus) GetAccessRequestPhases() []Accessrequestphases`

GetAccessRequestPhases returns the AccessRequestPhases field if non-nil, zero value otherwise.

### GetAccessRequestPhasesOk

`func (o *Requesteditemstatus) GetAccessRequestPhasesOk() (*[]Accessrequestphases, bool)`

GetAccessRequestPhasesOk returns a tuple with the AccessRequestPhases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestPhases

`func (o *Requesteditemstatus) SetAccessRequestPhases(v []Accessrequestphases)`

SetAccessRequestPhases sets AccessRequestPhases field to given value.

### HasAccessRequestPhases

`func (o *Requesteditemstatus) HasAccessRequestPhases() bool`

HasAccessRequestPhases returns a boolean if a field has been set.

### SetAccessRequestPhasesNil

`func (o *Requesteditemstatus) SetAccessRequestPhasesNil(b bool)`

 SetAccessRequestPhasesNil sets the value for AccessRequestPhases to be an explicit nil

### UnsetAccessRequestPhases
`func (o *Requesteditemstatus) UnsetAccessRequestPhases()`

UnsetAccessRequestPhases ensures that no value is present for AccessRequestPhases, not even an explicit nil
### GetDescription

`func (o *Requesteditemstatus) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Requesteditemstatus) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Requesteditemstatus) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Requesteditemstatus) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Requesteditemstatus) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Requesteditemstatus) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetStartDate

`func (o *Requesteditemstatus) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *Requesteditemstatus) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *Requesteditemstatus) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *Requesteditemstatus) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### SetStartDateNil

`func (o *Requesteditemstatus) SetStartDateNil(b bool)`

 SetStartDateNil sets the value for StartDate to be an explicit nil

### UnsetStartDate
`func (o *Requesteditemstatus) UnsetStartDate()`

UnsetStartDate ensures that no value is present for StartDate, not even an explicit nil
### GetRemoveDate

`func (o *Requesteditemstatus) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *Requesteditemstatus) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *Requesteditemstatus) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *Requesteditemstatus) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *Requesteditemstatus) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *Requesteditemstatus) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil
### GetCancelable

`func (o *Requesteditemstatus) GetCancelable() bool`

GetCancelable returns the Cancelable field if non-nil, zero value otherwise.

### GetCancelableOk

`func (o *Requesteditemstatus) GetCancelableOk() (*bool, bool)`

GetCancelableOk returns a tuple with the Cancelable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelable

`func (o *Requesteditemstatus) SetCancelable(v bool)`

SetCancelable sets Cancelable field to given value.

### HasCancelable

`func (o *Requesteditemstatus) HasCancelable() bool`

HasCancelable returns a boolean if a field has been set.

### GetAccessRequestId

`func (o *Requesteditemstatus) GetAccessRequestId() string`

GetAccessRequestId returns the AccessRequestId field if non-nil, zero value otherwise.

### GetAccessRequestIdOk

`func (o *Requesteditemstatus) GetAccessRequestIdOk() (*string, bool)`

GetAccessRequestIdOk returns a tuple with the AccessRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestId

`func (o *Requesteditemstatus) SetAccessRequestId(v string)`

SetAccessRequestId sets AccessRequestId field to given value.

### HasAccessRequestId

`func (o *Requesteditemstatus) HasAccessRequestId() bool`

HasAccessRequestId returns a boolean if a field has been set.

### GetClientMetadata

`func (o *Requesteditemstatus) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *Requesteditemstatus) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *Requesteditemstatus) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *Requesteditemstatus) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### SetClientMetadataNil

`func (o *Requesteditemstatus) SetClientMetadataNil(b bool)`

 SetClientMetadataNil sets the value for ClientMetadata to be an explicit nil

### UnsetClientMetadata
`func (o *Requesteditemstatus) UnsetClientMetadata()`

UnsetClientMetadata ensures that no value is present for ClientMetadata, not even an explicit nil
### GetRequestedAccounts

`func (o *Requesteditemstatus) GetRequestedAccounts() []Requestedaccountref`

GetRequestedAccounts returns the RequestedAccounts field if non-nil, zero value otherwise.

### GetRequestedAccountsOk

`func (o *Requesteditemstatus) GetRequestedAccountsOk() (*[]Requestedaccountref, bool)`

GetRequestedAccountsOk returns a tuple with the RequestedAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedAccounts

`func (o *Requesteditemstatus) SetRequestedAccounts(v []Requestedaccountref)`

SetRequestedAccounts sets RequestedAccounts field to given value.

### HasRequestedAccounts

`func (o *Requesteditemstatus) HasRequestedAccounts() bool`

HasRequestedAccounts returns a boolean if a field has been set.

### SetRequestedAccountsNil

`func (o *Requesteditemstatus) SetRequestedAccountsNil(b bool)`

 SetRequestedAccountsNil sets the value for RequestedAccounts to be an explicit nil

### UnsetRequestedAccounts
`func (o *Requesteditemstatus) UnsetRequestedAccounts()`

UnsetRequestedAccounts ensures that no value is present for RequestedAccounts, not even an explicit nil
### GetPrivilegeLevel

`func (o *Requesteditemstatus) GetPrivilegeLevel() string`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *Requesteditemstatus) GetPrivilegeLevelOk() (*string, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *Requesteditemstatus) SetPrivilegeLevel(v string)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *Requesteditemstatus) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.

### SetPrivilegeLevelNil

`func (o *Requesteditemstatus) SetPrivilegeLevelNil(b bool)`

 SetPrivilegeLevelNil sets the value for PrivilegeLevel to be an explicit nil

### UnsetPrivilegeLevel
`func (o *Requesteditemstatus) UnsetPrivilegeLevel()`

UnsetPrivilegeLevel ensures that no value is present for PrivilegeLevel, not even an explicit nil

