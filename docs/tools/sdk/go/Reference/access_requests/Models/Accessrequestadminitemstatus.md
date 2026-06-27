---
id: v1-accessrequestadminitemstatus
title: Accessrequestadminitemstatus
pagination_label: Accessrequestadminitemstatus
sidebar_label: Accessrequestadminitemstatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestadminitemstatus', 'V1Accessrequestadminitemstatus'] 
slug: /tools/sdk/go/accessrequests/models/accessrequestadminitemstatus
tags: ['SDK', 'Software Development Kit', 'Accessrequestadminitemstatus', 'V1Accessrequestadminitemstatus']
---

# Accessrequestadminitemstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | ID of the access request. This is a new property as of 2025. Older access requests may not have an ID. | [optional] 
**Name** | Pointer to **NullableString** | Human-readable display name of the item being requested. | [optional] 
**Type** | Pointer to **NullableString** | Type of requested object. | [optional] 
**CancelledRequestDetails** | Pointer to [**RequesteditemstatusCancelledRequestDetails**](requesteditemstatus-cancelled-request-details) |  | [optional] 
**ErrorMessages** | Pointer to [**[][]Errormessagedto**](errormessagedto) | List of localized error messages, if any, encountered during the approval/provisioning process. | [optional] 
**State** | Pointer to [**Requesteditemstatusrequeststate**](requesteditemstatusrequeststate) |  | [optional] 
**ApprovalDetails** | Pointer to [**[]Approvalstatusdto**](approvalstatusdto) | Approval details for each item. | [optional] 
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
**ReauthorizationRequired** | Pointer to **bool** | True if re-auth is required. | [optional] [default to false]
**AccessRequestId** | Pointer to **string** | This is the account activity id. | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs, if any were included in the corresponding access request | [optional] 

## Methods

### NewAccessrequestadminitemstatus

`func NewAccessrequestadminitemstatus() *Accessrequestadminitemstatus`

NewAccessrequestadminitemstatus instantiates a new Accessrequestadminitemstatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestadminitemstatusWithDefaults

`func NewAccessrequestadminitemstatusWithDefaults() *Accessrequestadminitemstatus`

NewAccessrequestadminitemstatusWithDefaults instantiates a new Accessrequestadminitemstatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accessrequestadminitemstatus) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessrequestadminitemstatus) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessrequestadminitemstatus) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessrequestadminitemstatus) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *Accessrequestadminitemstatus) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *Accessrequestadminitemstatus) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *Accessrequestadminitemstatus) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accessrequestadminitemstatus) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accessrequestadminitemstatus) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Accessrequestadminitemstatus) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Accessrequestadminitemstatus) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Accessrequestadminitemstatus) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetType

`func (o *Accessrequestadminitemstatus) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Accessrequestadminitemstatus) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Accessrequestadminitemstatus) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Accessrequestadminitemstatus) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *Accessrequestadminitemstatus) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *Accessrequestadminitemstatus) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetCancelledRequestDetails

`func (o *Accessrequestadminitemstatus) GetCancelledRequestDetails() RequesteditemstatusCancelledRequestDetails`

GetCancelledRequestDetails returns the CancelledRequestDetails field if non-nil, zero value otherwise.

### GetCancelledRequestDetailsOk

`func (o *Accessrequestadminitemstatus) GetCancelledRequestDetailsOk() (*RequesteditemstatusCancelledRequestDetails, bool)`

GetCancelledRequestDetailsOk returns a tuple with the CancelledRequestDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelledRequestDetails

`func (o *Accessrequestadminitemstatus) SetCancelledRequestDetails(v RequesteditemstatusCancelledRequestDetails)`

SetCancelledRequestDetails sets CancelledRequestDetails field to given value.

### HasCancelledRequestDetails

`func (o *Accessrequestadminitemstatus) HasCancelledRequestDetails() bool`

HasCancelledRequestDetails returns a boolean if a field has been set.

### GetErrorMessages

`func (o *Accessrequestadminitemstatus) GetErrorMessages() [][]Errormessagedto`

GetErrorMessages returns the ErrorMessages field if non-nil, zero value otherwise.

### GetErrorMessagesOk

`func (o *Accessrequestadminitemstatus) GetErrorMessagesOk() (*[][]Errormessagedto, bool)`

GetErrorMessagesOk returns a tuple with the ErrorMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessages

`func (o *Accessrequestadminitemstatus) SetErrorMessages(v [][]Errormessagedto)`

SetErrorMessages sets ErrorMessages field to given value.

### HasErrorMessages

`func (o *Accessrequestadminitemstatus) HasErrorMessages() bool`

HasErrorMessages returns a boolean if a field has been set.

### SetErrorMessagesNil

`func (o *Accessrequestadminitemstatus) SetErrorMessagesNil(b bool)`

 SetErrorMessagesNil sets the value for ErrorMessages to be an explicit nil

### UnsetErrorMessages
`func (o *Accessrequestadminitemstatus) UnsetErrorMessages()`

UnsetErrorMessages ensures that no value is present for ErrorMessages, not even an explicit nil
### GetState

`func (o *Accessrequestadminitemstatus) GetState() Requesteditemstatusrequeststate`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Accessrequestadminitemstatus) GetStateOk() (*Requesteditemstatusrequeststate, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Accessrequestadminitemstatus) SetState(v Requesteditemstatusrequeststate)`

SetState sets State field to given value.

### HasState

`func (o *Accessrequestadminitemstatus) HasState() bool`

HasState returns a boolean if a field has been set.

### GetApprovalDetails

`func (o *Accessrequestadminitemstatus) GetApprovalDetails() []Approvalstatusdto`

GetApprovalDetails returns the ApprovalDetails field if non-nil, zero value otherwise.

### GetApprovalDetailsOk

`func (o *Accessrequestadminitemstatus) GetApprovalDetailsOk() (*[]Approvalstatusdto, bool)`

GetApprovalDetailsOk returns a tuple with the ApprovalDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalDetails

`func (o *Accessrequestadminitemstatus) SetApprovalDetails(v []Approvalstatusdto)`

SetApprovalDetails sets ApprovalDetails field to given value.

### HasApprovalDetails

`func (o *Accessrequestadminitemstatus) HasApprovalDetails() bool`

HasApprovalDetails returns a boolean if a field has been set.

### GetManualWorkItemDetails

`func (o *Accessrequestadminitemstatus) GetManualWorkItemDetails() []Manualworkitemdetails`

GetManualWorkItemDetails returns the ManualWorkItemDetails field if non-nil, zero value otherwise.

### GetManualWorkItemDetailsOk

`func (o *Accessrequestadminitemstatus) GetManualWorkItemDetailsOk() (*[]Manualworkitemdetails, bool)`

GetManualWorkItemDetailsOk returns a tuple with the ManualWorkItemDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManualWorkItemDetails

`func (o *Accessrequestadminitemstatus) SetManualWorkItemDetails(v []Manualworkitemdetails)`

SetManualWorkItemDetails sets ManualWorkItemDetails field to given value.

### HasManualWorkItemDetails

`func (o *Accessrequestadminitemstatus) HasManualWorkItemDetails() bool`

HasManualWorkItemDetails returns a boolean if a field has been set.

### SetManualWorkItemDetailsNil

`func (o *Accessrequestadminitemstatus) SetManualWorkItemDetailsNil(b bool)`

 SetManualWorkItemDetailsNil sets the value for ManualWorkItemDetails to be an explicit nil

### UnsetManualWorkItemDetails
`func (o *Accessrequestadminitemstatus) UnsetManualWorkItemDetails()`

UnsetManualWorkItemDetails ensures that no value is present for ManualWorkItemDetails, not even an explicit nil
### GetAccountActivityItemId

`func (o *Accessrequestadminitemstatus) GetAccountActivityItemId() string`

GetAccountActivityItemId returns the AccountActivityItemId field if non-nil, zero value otherwise.

### GetAccountActivityItemIdOk

`func (o *Accessrequestadminitemstatus) GetAccountActivityItemIdOk() (*string, bool)`

GetAccountActivityItemIdOk returns a tuple with the AccountActivityItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountActivityItemId

`func (o *Accessrequestadminitemstatus) SetAccountActivityItemId(v string)`

SetAccountActivityItemId sets AccountActivityItemId field to given value.

### HasAccountActivityItemId

`func (o *Accessrequestadminitemstatus) HasAccountActivityItemId() bool`

HasAccountActivityItemId returns a boolean if a field has been set.

### GetRequestType

`func (o *Accessrequestadminitemstatus) GetRequestType() Accessrequesttype`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *Accessrequestadminitemstatus) GetRequestTypeOk() (*Accessrequesttype, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *Accessrequestadminitemstatus) SetRequestType(v Accessrequesttype)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *Accessrequestadminitemstatus) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### SetRequestTypeNil

`func (o *Accessrequestadminitemstatus) SetRequestTypeNil(b bool)`

 SetRequestTypeNil sets the value for RequestType to be an explicit nil

### UnsetRequestType
`func (o *Accessrequestadminitemstatus) UnsetRequestType()`

UnsetRequestType ensures that no value is present for RequestType, not even an explicit nil
### GetModified

`func (o *Accessrequestadminitemstatus) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Accessrequestadminitemstatus) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Accessrequestadminitemstatus) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Accessrequestadminitemstatus) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *Accessrequestadminitemstatus) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Accessrequestadminitemstatus) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetCreated

`func (o *Accessrequestadminitemstatus) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Accessrequestadminitemstatus) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Accessrequestadminitemstatus) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Accessrequestadminitemstatus) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetRequester

`func (o *Accessrequestadminitemstatus) GetRequester() Accessitemrequester`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *Accessrequestadminitemstatus) GetRequesterOk() (*Accessitemrequester, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *Accessrequestadminitemstatus) SetRequester(v Accessitemrequester)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *Accessrequestadminitemstatus) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetRequestedFor

`func (o *Accessrequestadminitemstatus) GetRequestedFor() RequesteditemstatusRequestedFor`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *Accessrequestadminitemstatus) GetRequestedForOk() (*RequesteditemstatusRequestedFor, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *Accessrequestadminitemstatus) SetRequestedFor(v RequesteditemstatusRequestedFor)`

SetRequestedFor sets RequestedFor field to given value.

### HasRequestedFor

`func (o *Accessrequestadminitemstatus) HasRequestedFor() bool`

HasRequestedFor returns a boolean if a field has been set.

### GetRequesterComment

`func (o *Accessrequestadminitemstatus) GetRequesterComment() RequesteditemstatusRequesterComment`

GetRequesterComment returns the RequesterComment field if non-nil, zero value otherwise.

### GetRequesterCommentOk

`func (o *Accessrequestadminitemstatus) GetRequesterCommentOk() (*RequesteditemstatusRequesterComment, bool)`

GetRequesterCommentOk returns a tuple with the RequesterComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterComment

`func (o *Accessrequestadminitemstatus) SetRequesterComment(v RequesteditemstatusRequesterComment)`

SetRequesterComment sets RequesterComment field to given value.

### HasRequesterComment

`func (o *Accessrequestadminitemstatus) HasRequesterComment() bool`

HasRequesterComment returns a boolean if a field has been set.

### GetSodViolationContext

`func (o *Accessrequestadminitemstatus) GetSodViolationContext() RequesteditemstatusSodViolationContext`

GetSodViolationContext returns the SodViolationContext field if non-nil, zero value otherwise.

### GetSodViolationContextOk

`func (o *Accessrequestadminitemstatus) GetSodViolationContextOk() (*RequesteditemstatusSodViolationContext, bool)`

GetSodViolationContextOk returns a tuple with the SodViolationContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSodViolationContext

`func (o *Accessrequestadminitemstatus) SetSodViolationContext(v RequesteditemstatusSodViolationContext)`

SetSodViolationContext sets SodViolationContext field to given value.

### HasSodViolationContext

`func (o *Accessrequestadminitemstatus) HasSodViolationContext() bool`

HasSodViolationContext returns a boolean if a field has been set.

### GetProvisioningDetails

`func (o *Accessrequestadminitemstatus) GetProvisioningDetails() RequesteditemstatusProvisioningDetails`

GetProvisioningDetails returns the ProvisioningDetails field if non-nil, zero value otherwise.

### GetProvisioningDetailsOk

`func (o *Accessrequestadminitemstatus) GetProvisioningDetailsOk() (*RequesteditemstatusProvisioningDetails, bool)`

GetProvisioningDetailsOk returns a tuple with the ProvisioningDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningDetails

`func (o *Accessrequestadminitemstatus) SetProvisioningDetails(v RequesteditemstatusProvisioningDetails)`

SetProvisioningDetails sets ProvisioningDetails field to given value.

### HasProvisioningDetails

`func (o *Accessrequestadminitemstatus) HasProvisioningDetails() bool`

HasProvisioningDetails returns a boolean if a field has been set.

### GetPreApprovalTriggerDetails

`func (o *Accessrequestadminitemstatus) GetPreApprovalTriggerDetails() RequesteditemstatusPreApprovalTriggerDetails`

GetPreApprovalTriggerDetails returns the PreApprovalTriggerDetails field if non-nil, zero value otherwise.

### GetPreApprovalTriggerDetailsOk

`func (o *Accessrequestadminitemstatus) GetPreApprovalTriggerDetailsOk() (*RequesteditemstatusPreApprovalTriggerDetails, bool)`

GetPreApprovalTriggerDetailsOk returns a tuple with the PreApprovalTriggerDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreApprovalTriggerDetails

`func (o *Accessrequestadminitemstatus) SetPreApprovalTriggerDetails(v RequesteditemstatusPreApprovalTriggerDetails)`

SetPreApprovalTriggerDetails sets PreApprovalTriggerDetails field to given value.

### HasPreApprovalTriggerDetails

`func (o *Accessrequestadminitemstatus) HasPreApprovalTriggerDetails() bool`

HasPreApprovalTriggerDetails returns a boolean if a field has been set.

### GetAccessRequestPhases

`func (o *Accessrequestadminitemstatus) GetAccessRequestPhases() []Accessrequestphases`

GetAccessRequestPhases returns the AccessRequestPhases field if non-nil, zero value otherwise.

### GetAccessRequestPhasesOk

`func (o *Accessrequestadminitemstatus) GetAccessRequestPhasesOk() (*[]Accessrequestphases, bool)`

GetAccessRequestPhasesOk returns a tuple with the AccessRequestPhases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestPhases

`func (o *Accessrequestadminitemstatus) SetAccessRequestPhases(v []Accessrequestphases)`

SetAccessRequestPhases sets AccessRequestPhases field to given value.

### HasAccessRequestPhases

`func (o *Accessrequestadminitemstatus) HasAccessRequestPhases() bool`

HasAccessRequestPhases returns a boolean if a field has been set.

### SetAccessRequestPhasesNil

`func (o *Accessrequestadminitemstatus) SetAccessRequestPhasesNil(b bool)`

 SetAccessRequestPhasesNil sets the value for AccessRequestPhases to be an explicit nil

### UnsetAccessRequestPhases
`func (o *Accessrequestadminitemstatus) UnsetAccessRequestPhases()`

UnsetAccessRequestPhases ensures that no value is present for AccessRequestPhases, not even an explicit nil
### GetDescription

`func (o *Accessrequestadminitemstatus) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Accessrequestadminitemstatus) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Accessrequestadminitemstatus) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Accessrequestadminitemstatus) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Accessrequestadminitemstatus) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Accessrequestadminitemstatus) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetStartDate

`func (o *Accessrequestadminitemstatus) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *Accessrequestadminitemstatus) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *Accessrequestadminitemstatus) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *Accessrequestadminitemstatus) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### SetStartDateNil

`func (o *Accessrequestadminitemstatus) SetStartDateNil(b bool)`

 SetStartDateNil sets the value for StartDate to be an explicit nil

### UnsetStartDate
`func (o *Accessrequestadminitemstatus) UnsetStartDate()`

UnsetStartDate ensures that no value is present for StartDate, not even an explicit nil
### GetRemoveDate

`func (o *Accessrequestadminitemstatus) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *Accessrequestadminitemstatus) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *Accessrequestadminitemstatus) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *Accessrequestadminitemstatus) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *Accessrequestadminitemstatus) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *Accessrequestadminitemstatus) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil
### GetCancelable

`func (o *Accessrequestadminitemstatus) GetCancelable() bool`

GetCancelable returns the Cancelable field if non-nil, zero value otherwise.

### GetCancelableOk

`func (o *Accessrequestadminitemstatus) GetCancelableOk() (*bool, bool)`

GetCancelableOk returns a tuple with the Cancelable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelable

`func (o *Accessrequestadminitemstatus) SetCancelable(v bool)`

SetCancelable sets Cancelable field to given value.

### HasCancelable

`func (o *Accessrequestadminitemstatus) HasCancelable() bool`

HasCancelable returns a boolean if a field has been set.

### GetReauthorizationRequired

`func (o *Accessrequestadminitemstatus) GetReauthorizationRequired() bool`

GetReauthorizationRequired returns the ReauthorizationRequired field if non-nil, zero value otherwise.

### GetReauthorizationRequiredOk

`func (o *Accessrequestadminitemstatus) GetReauthorizationRequiredOk() (*bool, bool)`

GetReauthorizationRequiredOk returns a tuple with the ReauthorizationRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthorizationRequired

`func (o *Accessrequestadminitemstatus) SetReauthorizationRequired(v bool)`

SetReauthorizationRequired sets ReauthorizationRequired field to given value.

### HasReauthorizationRequired

`func (o *Accessrequestadminitemstatus) HasReauthorizationRequired() bool`

HasReauthorizationRequired returns a boolean if a field has been set.

### GetAccessRequestId

`func (o *Accessrequestadminitemstatus) GetAccessRequestId() string`

GetAccessRequestId returns the AccessRequestId field if non-nil, zero value otherwise.

### GetAccessRequestIdOk

`func (o *Accessrequestadminitemstatus) GetAccessRequestIdOk() (*string, bool)`

GetAccessRequestIdOk returns a tuple with the AccessRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestId

`func (o *Accessrequestadminitemstatus) SetAccessRequestId(v string)`

SetAccessRequestId sets AccessRequestId field to given value.

### HasAccessRequestId

`func (o *Accessrequestadminitemstatus) HasAccessRequestId() bool`

HasAccessRequestId returns a boolean if a field has been set.

### GetClientMetadata

`func (o *Accessrequestadminitemstatus) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *Accessrequestadminitemstatus) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *Accessrequestadminitemstatus) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *Accessrequestadminitemstatus) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### SetClientMetadataNil

`func (o *Accessrequestadminitemstatus) SetClientMetadataNil(b bool)`

 SetClientMetadataNil sets the value for ClientMetadata to be an explicit nil

### UnsetClientMetadata
`func (o *Accessrequestadminitemstatus) UnsetClientMetadata()`

UnsetClientMetadata ensures that no value is present for ClientMetadata, not even an explicit nil

