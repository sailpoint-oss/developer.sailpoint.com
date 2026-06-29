---
id: v1-accountactionrequestdto
title: Accountactionrequestdto
pagination_label: Accountactionrequestdto
sidebar_label: Accountactionrequestdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountactionrequestdto', 'V1Accountactionrequestdto'] 
slug: /tools/sdk/go/accountdeletionrequests/models/accountactionrequestdto
tags: ['SDK', 'Software Development Kit', 'Accountactionrequestdto', 'V1Accountactionrequestdto']
---

# Accountactionrequestdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountRequestId** | Pointer to **string** | Account requester ID. | [optional] 
**RequestType** | Pointer to **string** | Access item requester's identity ID. | [optional] 
**CreatedAt** | Pointer to **SailPointTime** | Creation date and time of account deletion request date. | [optional] [readonly] 
**CompletedAt** | Pointer to **SailPointTime** | Account deletion request completion date and time. | [optional] [readonly] 
**OverallStatus** | Pointer to **string** | Overall status of deletion request. | [optional] 
**Requester** | Pointer to [**AccountactionrequestdtoRequester**](accountactionrequestdto-requester) |  | [optional] 
**RequesterComments** | Pointer to **string** | Comments added by the requester while creating the account deletion request. | [optional] 
**AccountDetails** | Pointer to [**AccountactionrequestdtoAccountDetails**](accountactionrequestdto-account-details) |  | [optional] 
**CorrelatedIdentity** | Pointer to [**AccountactionrequestdtoCorrelatedIdentity**](accountactionrequestdto-correlated-identity) |  | [optional] 
**ManagerReference** | Pointer to [**NullableIdentityreference**](identityreference) |  | [optional] 
**ApprovalRequestId** | Pointer to **string** | ID of the approval request associated with the account deletion action. | [optional] 
**AccountRequestPhases** | Pointer to [**[]Accountrequestphase**](accountrequestphase) | List of account request phases. | [optional] 
**ApprovalDetails** | Pointer to [**[]Approvaldetails**](approvaldetails) | List approval details | [optional] 
**ErrorDetails** | Pointer to **NullableString** | Detailed error information. | [optional] 

## Methods

### NewAccountactionrequestdto

`func NewAccountactionrequestdto() *Accountactionrequestdto`

NewAccountactionrequestdto instantiates a new Accountactionrequestdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountactionrequestdtoWithDefaults

`func NewAccountactionrequestdtoWithDefaults() *Accountactionrequestdto`

NewAccountactionrequestdtoWithDefaults instantiates a new Accountactionrequestdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountRequestId

`func (o *Accountactionrequestdto) GetAccountRequestId() string`

GetAccountRequestId returns the AccountRequestId field if non-nil, zero value otherwise.

### GetAccountRequestIdOk

`func (o *Accountactionrequestdto) GetAccountRequestIdOk() (*string, bool)`

GetAccountRequestIdOk returns a tuple with the AccountRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountRequestId

`func (o *Accountactionrequestdto) SetAccountRequestId(v string)`

SetAccountRequestId sets AccountRequestId field to given value.

### HasAccountRequestId

`func (o *Accountactionrequestdto) HasAccountRequestId() bool`

HasAccountRequestId returns a boolean if a field has been set.

### GetRequestType

`func (o *Accountactionrequestdto) GetRequestType() string`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *Accountactionrequestdto) GetRequestTypeOk() (*string, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *Accountactionrequestdto) SetRequestType(v string)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *Accountactionrequestdto) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Accountactionrequestdto) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Accountactionrequestdto) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Accountactionrequestdto) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Accountactionrequestdto) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetCompletedAt

`func (o *Accountactionrequestdto) GetCompletedAt() SailPointTime`

GetCompletedAt returns the CompletedAt field if non-nil, zero value otherwise.

### GetCompletedAtOk

`func (o *Accountactionrequestdto) GetCompletedAtOk() (*SailPointTime, bool)`

GetCompletedAtOk returns a tuple with the CompletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedAt

`func (o *Accountactionrequestdto) SetCompletedAt(v SailPointTime)`

SetCompletedAt sets CompletedAt field to given value.

### HasCompletedAt

`func (o *Accountactionrequestdto) HasCompletedAt() bool`

HasCompletedAt returns a boolean if a field has been set.

### GetOverallStatus

`func (o *Accountactionrequestdto) GetOverallStatus() string`

GetOverallStatus returns the OverallStatus field if non-nil, zero value otherwise.

### GetOverallStatusOk

`func (o *Accountactionrequestdto) GetOverallStatusOk() (*string, bool)`

GetOverallStatusOk returns a tuple with the OverallStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverallStatus

`func (o *Accountactionrequestdto) SetOverallStatus(v string)`

SetOverallStatus sets OverallStatus field to given value.

### HasOverallStatus

`func (o *Accountactionrequestdto) HasOverallStatus() bool`

HasOverallStatus returns a boolean if a field has been set.

### GetRequester

`func (o *Accountactionrequestdto) GetRequester() AccountactionrequestdtoRequester`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *Accountactionrequestdto) GetRequesterOk() (*AccountactionrequestdtoRequester, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *Accountactionrequestdto) SetRequester(v AccountactionrequestdtoRequester)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *Accountactionrequestdto) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetRequesterComments

`func (o *Accountactionrequestdto) GetRequesterComments() string`

GetRequesterComments returns the RequesterComments field if non-nil, zero value otherwise.

### GetRequesterCommentsOk

`func (o *Accountactionrequestdto) GetRequesterCommentsOk() (*string, bool)`

GetRequesterCommentsOk returns a tuple with the RequesterComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterComments

`func (o *Accountactionrequestdto) SetRequesterComments(v string)`

SetRequesterComments sets RequesterComments field to given value.

### HasRequesterComments

`func (o *Accountactionrequestdto) HasRequesterComments() bool`

HasRequesterComments returns a boolean if a field has been set.

### GetAccountDetails

`func (o *Accountactionrequestdto) GetAccountDetails() AccountactionrequestdtoAccountDetails`

GetAccountDetails returns the AccountDetails field if non-nil, zero value otherwise.

### GetAccountDetailsOk

`func (o *Accountactionrequestdto) GetAccountDetailsOk() (*AccountactionrequestdtoAccountDetails, bool)`

GetAccountDetailsOk returns a tuple with the AccountDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountDetails

`func (o *Accountactionrequestdto) SetAccountDetails(v AccountactionrequestdtoAccountDetails)`

SetAccountDetails sets AccountDetails field to given value.

### HasAccountDetails

`func (o *Accountactionrequestdto) HasAccountDetails() bool`

HasAccountDetails returns a boolean if a field has been set.

### GetCorrelatedIdentity

`func (o *Accountactionrequestdto) GetCorrelatedIdentity() AccountactionrequestdtoCorrelatedIdentity`

GetCorrelatedIdentity returns the CorrelatedIdentity field if non-nil, zero value otherwise.

### GetCorrelatedIdentityOk

`func (o *Accountactionrequestdto) GetCorrelatedIdentityOk() (*AccountactionrequestdtoCorrelatedIdentity, bool)`

GetCorrelatedIdentityOk returns a tuple with the CorrelatedIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelatedIdentity

`func (o *Accountactionrequestdto) SetCorrelatedIdentity(v AccountactionrequestdtoCorrelatedIdentity)`

SetCorrelatedIdentity sets CorrelatedIdentity field to given value.

### HasCorrelatedIdentity

`func (o *Accountactionrequestdto) HasCorrelatedIdentity() bool`

HasCorrelatedIdentity returns a boolean if a field has been set.

### GetManagerReference

`func (o *Accountactionrequestdto) GetManagerReference() Identityreference`

GetManagerReference returns the ManagerReference field if non-nil, zero value otherwise.

### GetManagerReferenceOk

`func (o *Accountactionrequestdto) GetManagerReferenceOk() (*Identityreference, bool)`

GetManagerReferenceOk returns a tuple with the ManagerReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagerReference

`func (o *Accountactionrequestdto) SetManagerReference(v Identityreference)`

SetManagerReference sets ManagerReference field to given value.

### HasManagerReference

`func (o *Accountactionrequestdto) HasManagerReference() bool`

HasManagerReference returns a boolean if a field has been set.

### SetManagerReferenceNil

`func (o *Accountactionrequestdto) SetManagerReferenceNil(b bool)`

 SetManagerReferenceNil sets the value for ManagerReference to be an explicit nil

### UnsetManagerReference
`func (o *Accountactionrequestdto) UnsetManagerReference()`

UnsetManagerReference ensures that no value is present for ManagerReference, not even an explicit nil
### GetApprovalRequestId

`func (o *Accountactionrequestdto) GetApprovalRequestId() string`

GetApprovalRequestId returns the ApprovalRequestId field if non-nil, zero value otherwise.

### GetApprovalRequestIdOk

`func (o *Accountactionrequestdto) GetApprovalRequestIdOk() (*string, bool)`

GetApprovalRequestIdOk returns a tuple with the ApprovalRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalRequestId

`func (o *Accountactionrequestdto) SetApprovalRequestId(v string)`

SetApprovalRequestId sets ApprovalRequestId field to given value.

### HasApprovalRequestId

`func (o *Accountactionrequestdto) HasApprovalRequestId() bool`

HasApprovalRequestId returns a boolean if a field has been set.

### GetAccountRequestPhases

`func (o *Accountactionrequestdto) GetAccountRequestPhases() []Accountrequestphase`

GetAccountRequestPhases returns the AccountRequestPhases field if non-nil, zero value otherwise.

### GetAccountRequestPhasesOk

`func (o *Accountactionrequestdto) GetAccountRequestPhasesOk() (*[]Accountrequestphase, bool)`

GetAccountRequestPhasesOk returns a tuple with the AccountRequestPhases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountRequestPhases

`func (o *Accountactionrequestdto) SetAccountRequestPhases(v []Accountrequestphase)`

SetAccountRequestPhases sets AccountRequestPhases field to given value.

### HasAccountRequestPhases

`func (o *Accountactionrequestdto) HasAccountRequestPhases() bool`

HasAccountRequestPhases returns a boolean if a field has been set.

### GetApprovalDetails

`func (o *Accountactionrequestdto) GetApprovalDetails() []Approvaldetails`

GetApprovalDetails returns the ApprovalDetails field if non-nil, zero value otherwise.

### GetApprovalDetailsOk

`func (o *Accountactionrequestdto) GetApprovalDetailsOk() (*[]Approvaldetails, bool)`

GetApprovalDetailsOk returns a tuple with the ApprovalDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalDetails

`func (o *Accountactionrequestdto) SetApprovalDetails(v []Approvaldetails)`

SetApprovalDetails sets ApprovalDetails field to given value.

### HasApprovalDetails

`func (o *Accountactionrequestdto) HasApprovalDetails() bool`

HasApprovalDetails returns a boolean if a field has been set.

### GetErrorDetails

`func (o *Accountactionrequestdto) GetErrorDetails() string`

GetErrorDetails returns the ErrorDetails field if non-nil, zero value otherwise.

### GetErrorDetailsOk

`func (o *Accountactionrequestdto) GetErrorDetailsOk() (*string, bool)`

GetErrorDetailsOk returns a tuple with the ErrorDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDetails

`func (o *Accountactionrequestdto) SetErrorDetails(v string)`

SetErrorDetails sets ErrorDetails field to given value.

### HasErrorDetails

`func (o *Accountactionrequestdto) HasErrorDetails() bool`

HasErrorDetails returns a boolean if a field has been set.

### SetErrorDetailsNil

`func (o *Accountactionrequestdto) SetErrorDetailsNil(b bool)`

 SetErrorDetailsNil sets the value for ErrorDetails to be an explicit nil

### UnsetErrorDetails
`func (o *Accountactionrequestdto) UnsetErrorDetails()`

UnsetErrorDetails ensures that no value is present for ErrorDetails, not even an explicit nil

