---
id: v1-nonemployeerequest
title: Nonemployeerequest
pagination_label: Nonemployeerequest
sidebar_label: Nonemployeerequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeerequest', 'V1Nonemployeerequest'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeerequest
tags: ['SDK', 'Software Development Kit', 'Nonemployeerequest', 'V1Nonemployeerequest']
---

# Nonemployeerequest

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
**NonEmployeeSource** | Pointer to [**Nonemployeesourcelite**](nonemployeesourcelite) |  | [optional] 
**Data** | Pointer to **map[string]string** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] 
**ApprovalItems** | Pointer to [**[]Nonemployeeapprovalitembase**](nonemployeeapprovalitembase) | List of approval item for the request | [optional] 
**ApprovalStatus** | Pointer to [**Approvalstatus**](approvalstatus) |  | [optional] 
**Comment** | Pointer to **string** | Comment of requester | [optional] 
**CompletionDate** | Pointer to **SailPointTime** | When the request was completely approved. | [optional] 
**StartDate** | Pointer to **SailPointTime** | Non-Employee employment start date. | [optional] 
**EndDate** | Pointer to **SailPointTime** | Non-Employee employment end date. | [optional] 
**Modified** | Pointer to **SailPointTime** | When the request was last modified. | [optional] 
**Created** | Pointer to **SailPointTime** | When the request was created. | [optional] 

## Methods

### NewNonemployeerequest

`func NewNonemployeerequest() *Nonemployeerequest`

NewNonemployeerequest instantiates a new Nonemployeerequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeerequestWithDefaults

`func NewNonemployeerequestWithDefaults() *Nonemployeerequest`

NewNonemployeerequestWithDefaults instantiates a new Nonemployeerequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Nonemployeerequest) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Nonemployeerequest) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Nonemployeerequest) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Nonemployeerequest) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *Nonemployeerequest) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Nonemployeerequest) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Nonemployeerequest) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Nonemployeerequest) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetName

`func (o *Nonemployeerequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Nonemployeerequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Nonemployeerequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Nonemployeerequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Nonemployeerequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Nonemployeerequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Nonemployeerequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Nonemployeerequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAccountName

`func (o *Nonemployeerequest) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *Nonemployeerequest) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *Nonemployeerequest) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *Nonemployeerequest) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetFirstName

`func (o *Nonemployeerequest) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *Nonemployeerequest) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *Nonemployeerequest) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *Nonemployeerequest) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetLastName

`func (o *Nonemployeerequest) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *Nonemployeerequest) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *Nonemployeerequest) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *Nonemployeerequest) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### GetEmail

`func (o *Nonemployeerequest) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Nonemployeerequest) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Nonemployeerequest) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Nonemployeerequest) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetPhone

`func (o *Nonemployeerequest) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *Nonemployeerequest) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *Nonemployeerequest) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *Nonemployeerequest) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetManager

`func (o *Nonemployeerequest) GetManager() string`

GetManager returns the Manager field if non-nil, zero value otherwise.

### GetManagerOk

`func (o *Nonemployeerequest) GetManagerOk() (*string, bool)`

GetManagerOk returns a tuple with the Manager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManager

`func (o *Nonemployeerequest) SetManager(v string)`

SetManager sets Manager field to given value.

### HasManager

`func (o *Nonemployeerequest) HasManager() bool`

HasManager returns a boolean if a field has been set.

### GetNonEmployeeSource

`func (o *Nonemployeerequest) GetNonEmployeeSource() Nonemployeesourcelite`

GetNonEmployeeSource returns the NonEmployeeSource field if non-nil, zero value otherwise.

### GetNonEmployeeSourceOk

`func (o *Nonemployeerequest) GetNonEmployeeSourceOk() (*Nonemployeesourcelite, bool)`

GetNonEmployeeSourceOk returns a tuple with the NonEmployeeSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonEmployeeSource

`func (o *Nonemployeerequest) SetNonEmployeeSource(v Nonemployeesourcelite)`

SetNonEmployeeSource sets NonEmployeeSource field to given value.

### HasNonEmployeeSource

`func (o *Nonemployeerequest) HasNonEmployeeSource() bool`

HasNonEmployeeSource returns a boolean if a field has been set.

### GetData

`func (o *Nonemployeerequest) GetData() map[string]string`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *Nonemployeerequest) GetDataOk() (*map[string]string, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *Nonemployeerequest) SetData(v map[string]string)`

SetData sets Data field to given value.

### HasData

`func (o *Nonemployeerequest) HasData() bool`

HasData returns a boolean if a field has been set.

### GetApprovalItems

`func (o *Nonemployeerequest) GetApprovalItems() []Nonemployeeapprovalitembase`

GetApprovalItems returns the ApprovalItems field if non-nil, zero value otherwise.

### GetApprovalItemsOk

`func (o *Nonemployeerequest) GetApprovalItemsOk() (*[]Nonemployeeapprovalitembase, bool)`

GetApprovalItemsOk returns a tuple with the ApprovalItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalItems

`func (o *Nonemployeerequest) SetApprovalItems(v []Nonemployeeapprovalitembase)`

SetApprovalItems sets ApprovalItems field to given value.

### HasApprovalItems

`func (o *Nonemployeerequest) HasApprovalItems() bool`

HasApprovalItems returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *Nonemployeerequest) GetApprovalStatus() Approvalstatus`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *Nonemployeerequest) GetApprovalStatusOk() (*Approvalstatus, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *Nonemployeerequest) SetApprovalStatus(v Approvalstatus)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *Nonemployeerequest) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetComment

`func (o *Nonemployeerequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Nonemployeerequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Nonemployeerequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Nonemployeerequest) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetCompletionDate

`func (o *Nonemployeerequest) GetCompletionDate() SailPointTime`

GetCompletionDate returns the CompletionDate field if non-nil, zero value otherwise.

### GetCompletionDateOk

`func (o *Nonemployeerequest) GetCompletionDateOk() (*SailPointTime, bool)`

GetCompletionDateOk returns a tuple with the CompletionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionDate

`func (o *Nonemployeerequest) SetCompletionDate(v SailPointTime)`

SetCompletionDate sets CompletionDate field to given value.

### HasCompletionDate

`func (o *Nonemployeerequest) HasCompletionDate() bool`

HasCompletionDate returns a boolean if a field has been set.

### GetStartDate

`func (o *Nonemployeerequest) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *Nonemployeerequest) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *Nonemployeerequest) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *Nonemployeerequest) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *Nonemployeerequest) GetEndDate() SailPointTime`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *Nonemployeerequest) GetEndDateOk() (*SailPointTime, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *Nonemployeerequest) SetEndDate(v SailPointTime)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *Nonemployeerequest) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetModified

`func (o *Nonemployeerequest) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Nonemployeerequest) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Nonemployeerequest) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Nonemployeerequest) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *Nonemployeerequest) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Nonemployeerequest) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Nonemployeerequest) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Nonemployeerequest) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


