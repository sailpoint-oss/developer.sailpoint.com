---
id: beta-non-employee-request
title: NonEmployeeRequest
pagination_label: NonEmployeeRequest
sidebar_label: NonEmployeeRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NonEmployeeRequest', 'BetaNonEmployeeRequest'] 
slug: /tools/sdk/go/beta/models/non-employee-request
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequest', 'BetaNonEmployeeRequest']
---

# NonEmployeeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Non-Employee source id. | [optional] 
**SourceId** | Pointer to **string** | Source Id associated with this non-employee source. | [optional] 
**Name** | Pointer to **string** | Source name associated with this non-employee source. | [optional] 
**Description** | Pointer to **string** | Source description associated with this non-employee source. | [optional] 
**AccountName** | Pointer to **string** | Requested identity account name. | [optional] 
**FirstName** | Pointer to **string** | Non-Employee's first name. | [optional] 
**LastName** | Pointer to **string** | Non-Employee's last name. | [optional] 
**Email** | Pointer to **string** | Non-Employee's email. | [optional] 
**Phone** | Pointer to **string** | Non-Employee's phone. | [optional] 
**Manager** | Pointer to **string** | The account ID of a valid identity to serve as this non-employee's manager. | [optional] 
**NonEmployeeSource** | Pointer to [**NonEmployeeSourceLite**](non-employee-source-lite) |  | [optional] 
**Data** | Pointer to **map[string]string** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] 
**ApprovalItems** | Pointer to [**[]NonEmployeeApprovalItemBase**](non-employee-approval-item-base) | List of approval item for the request | [optional] 
**ApprovalStatus** | Pointer to [**ApprovalStatus**](approval-status) |  | [optional] 
**Comment** | Pointer to **string** | Comment of requester | [optional] 
**CompletionDate** | Pointer to **SailPointTime** | When the request was completely approved. | [optional] 
**StartDate** | Pointer to **SailPointTime** | Non-Employee employment start date. | [optional] 
**EndDate** | Pointer to **SailPointTime** | Non-Employee employment end date. | [optional] 
**Modified** | Pointer to **SailPointTime** | When the request was last modified. | [optional] 
**Created** | Pointer to **SailPointTime** | When the request was created. | [optional] 

## Methods

### NewNonEmployeeRequest

`func NewNonEmployeeRequest() *NonEmployeeRequest`

NewNonEmployeeRequest instantiates a new NonEmployeeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeRequestWithDefaults

`func NewNonEmployeeRequestWithDefaults() *NonEmployeeRequest`

NewNonEmployeeRequestWithDefaults instantiates a new NonEmployeeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *NonEmployeeRequest) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *NonEmployeeRequest) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *NonEmployeeRequest) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *NonEmployeeRequest) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *NonEmployeeRequest) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *NonEmployeeRequest) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *NonEmployeeRequest) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *NonEmployeeRequest) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetName

`func (o *NonEmployeeRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *NonEmployeeRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *NonEmployeeRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *NonEmployeeRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *NonEmployeeRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *NonEmployeeRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *NonEmployeeRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *NonEmployeeRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAccountName

`func (o *NonEmployeeRequest) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *NonEmployeeRequest) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *NonEmployeeRequest) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *NonEmployeeRequest) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetFirstName

`func (o *NonEmployeeRequest) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *NonEmployeeRequest) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *NonEmployeeRequest) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *NonEmployeeRequest) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetLastName

`func (o *NonEmployeeRequest) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *NonEmployeeRequest) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *NonEmployeeRequest) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *NonEmployeeRequest) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### GetEmail

`func (o *NonEmployeeRequest) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *NonEmployeeRequest) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *NonEmployeeRequest) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *NonEmployeeRequest) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetPhone

`func (o *NonEmployeeRequest) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *NonEmployeeRequest) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *NonEmployeeRequest) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *NonEmployeeRequest) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetManager

`func (o *NonEmployeeRequest) GetManager() string`

GetManager returns the Manager field if non-nil, zero value otherwise.

### GetManagerOk

`func (o *NonEmployeeRequest) GetManagerOk() (*string, bool)`

GetManagerOk returns a tuple with the Manager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManager

`func (o *NonEmployeeRequest) SetManager(v string)`

SetManager sets Manager field to given value.

### HasManager

`func (o *NonEmployeeRequest) HasManager() bool`

HasManager returns a boolean if a field has been set.

### GetNonEmployeeSource

`func (o *NonEmployeeRequest) GetNonEmployeeSource() NonEmployeeSourceLite`

GetNonEmployeeSource returns the NonEmployeeSource field if non-nil, zero value otherwise.

### GetNonEmployeeSourceOk

`func (o *NonEmployeeRequest) GetNonEmployeeSourceOk() (*NonEmployeeSourceLite, bool)`

GetNonEmployeeSourceOk returns a tuple with the NonEmployeeSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonEmployeeSource

`func (o *NonEmployeeRequest) SetNonEmployeeSource(v NonEmployeeSourceLite)`

SetNonEmployeeSource sets NonEmployeeSource field to given value.

### HasNonEmployeeSource

`func (o *NonEmployeeRequest) HasNonEmployeeSource() bool`

HasNonEmployeeSource returns a boolean if a field has been set.

### GetData

`func (o *NonEmployeeRequest) GetData() map[string]string`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *NonEmployeeRequest) GetDataOk() (*map[string]string, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *NonEmployeeRequest) SetData(v map[string]string)`

SetData sets Data field to given value.

### HasData

`func (o *NonEmployeeRequest) HasData() bool`

HasData returns a boolean if a field has been set.

### GetApprovalItems

`func (o *NonEmployeeRequest) GetApprovalItems() []NonEmployeeApprovalItemBase`

GetApprovalItems returns the ApprovalItems field if non-nil, zero value otherwise.

### GetApprovalItemsOk

`func (o *NonEmployeeRequest) GetApprovalItemsOk() (*[]NonEmployeeApprovalItemBase, bool)`

GetApprovalItemsOk returns a tuple with the ApprovalItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalItems

`func (o *NonEmployeeRequest) SetApprovalItems(v []NonEmployeeApprovalItemBase)`

SetApprovalItems sets ApprovalItems field to given value.

### HasApprovalItems

`func (o *NonEmployeeRequest) HasApprovalItems() bool`

HasApprovalItems returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *NonEmployeeRequest) GetApprovalStatus() ApprovalStatus`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *NonEmployeeRequest) GetApprovalStatusOk() (*ApprovalStatus, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *NonEmployeeRequest) SetApprovalStatus(v ApprovalStatus)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *NonEmployeeRequest) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetComment

`func (o *NonEmployeeRequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *NonEmployeeRequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *NonEmployeeRequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *NonEmployeeRequest) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetCompletionDate

`func (o *NonEmployeeRequest) GetCompletionDate() SailPointTime`

GetCompletionDate returns the CompletionDate field if non-nil, zero value otherwise.

### GetCompletionDateOk

`func (o *NonEmployeeRequest) GetCompletionDateOk() (*SailPointTime, bool)`

GetCompletionDateOk returns a tuple with the CompletionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionDate

`func (o *NonEmployeeRequest) SetCompletionDate(v SailPointTime)`

SetCompletionDate sets CompletionDate field to given value.

### HasCompletionDate

`func (o *NonEmployeeRequest) HasCompletionDate() bool`

HasCompletionDate returns a boolean if a field has been set.

### GetStartDate

`func (o *NonEmployeeRequest) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *NonEmployeeRequest) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *NonEmployeeRequest) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *NonEmployeeRequest) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *NonEmployeeRequest) GetEndDate() SailPointTime`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *NonEmployeeRequest) GetEndDateOk() (*SailPointTime, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *NonEmployeeRequest) SetEndDate(v SailPointTime)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *NonEmployeeRequest) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetModified

`func (o *NonEmployeeRequest) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *NonEmployeeRequest) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *NonEmployeeRequest) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *NonEmployeeRequest) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *NonEmployeeRequest) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *NonEmployeeRequest) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *NonEmployeeRequest) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *NonEmployeeRequest) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


