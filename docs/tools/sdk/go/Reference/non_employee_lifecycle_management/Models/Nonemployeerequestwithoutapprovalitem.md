---
id: v1-nonemployeerequestwithoutapprovalitem
title: Nonemployeerequestwithoutapprovalitem
pagination_label: Nonemployeerequestwithoutapprovalitem
sidebar_label: Nonemployeerequestwithoutapprovalitem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeerequestwithoutapprovalitem', 'V1Nonemployeerequestwithoutapprovalitem'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeerequestwithoutapprovalitem
tags: ['SDK', 'Software Development Kit', 'Nonemployeerequestwithoutapprovalitem', 'V1Nonemployeerequestwithoutapprovalitem']
---

# Nonemployeerequestwithoutapprovalitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Non-Employee request id. | [optional] 
**Requester** | Pointer to [**Nonemployeeidentityreferencewithid**](nonemployeeidentityreferencewithid) |  | [optional] 
**AccountName** | Pointer to **string** | Requested identity account name. | [optional] 
**FirstName** | Pointer to **string** | Non-Employee's first name. | [optional] 
**LastName** | Pointer to **string** | Non-Employee's last name. | [optional] 
**Email** | Pointer to **string** | Non-Employee's email. | [optional] 
**Phone** | Pointer to **string** | Non-Employee's phone. | [optional] 
**Manager** | Pointer to **string** | The account ID of a valid identity to serve as this non-employee's manager. | [optional] 
**NonEmployeeSource** | Pointer to [**Nonemployeesourcelitewithschemaattributes**](nonemployeesourcelitewithschemaattributes) |  | [optional] 
**Data** | Pointer to **map[string]string** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] 
**ApprovalStatus** | Pointer to [**Approvalstatus**](approvalstatus) |  | [optional] 
**Comment** | Pointer to **string** | Comment of requester | [optional] 
**CompletionDate** | Pointer to **SailPointTime** | When the request was completely approved. | [optional] 
**StartDate** | Pointer to **string** | Non-Employee employment start date. | [optional] 
**EndDate** | Pointer to **string** | Non-Employee employment end date. | [optional] 
**Modified** | Pointer to **SailPointTime** | When the request was last modified. | [optional] 
**Created** | Pointer to **SailPointTime** | When the request was created. | [optional] 

## Methods

### NewNonemployeerequestwithoutapprovalitem

`func NewNonemployeerequestwithoutapprovalitem() *Nonemployeerequestwithoutapprovalitem`

NewNonemployeerequestwithoutapprovalitem instantiates a new Nonemployeerequestwithoutapprovalitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeerequestwithoutapprovalitemWithDefaults

`func NewNonemployeerequestwithoutapprovalitemWithDefaults() *Nonemployeerequestwithoutapprovalitem`

NewNonemployeerequestwithoutapprovalitemWithDefaults instantiates a new Nonemployeerequestwithoutapprovalitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Nonemployeerequestwithoutapprovalitem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Nonemployeerequestwithoutapprovalitem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Nonemployeerequestwithoutapprovalitem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Nonemployeerequestwithoutapprovalitem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetRequester

`func (o *Nonemployeerequestwithoutapprovalitem) GetRequester() Nonemployeeidentityreferencewithid`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *Nonemployeerequestwithoutapprovalitem) GetRequesterOk() (*Nonemployeeidentityreferencewithid, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *Nonemployeerequestwithoutapprovalitem) SetRequester(v Nonemployeeidentityreferencewithid)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *Nonemployeerequestwithoutapprovalitem) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetAccountName

`func (o *Nonemployeerequestwithoutapprovalitem) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *Nonemployeerequestwithoutapprovalitem) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *Nonemployeerequestwithoutapprovalitem) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *Nonemployeerequestwithoutapprovalitem) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetFirstName

`func (o *Nonemployeerequestwithoutapprovalitem) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *Nonemployeerequestwithoutapprovalitem) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *Nonemployeerequestwithoutapprovalitem) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *Nonemployeerequestwithoutapprovalitem) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetLastName

`func (o *Nonemployeerequestwithoutapprovalitem) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *Nonemployeerequestwithoutapprovalitem) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *Nonemployeerequestwithoutapprovalitem) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *Nonemployeerequestwithoutapprovalitem) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### GetEmail

`func (o *Nonemployeerequestwithoutapprovalitem) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Nonemployeerequestwithoutapprovalitem) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Nonemployeerequestwithoutapprovalitem) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Nonemployeerequestwithoutapprovalitem) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetPhone

`func (o *Nonemployeerequestwithoutapprovalitem) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *Nonemployeerequestwithoutapprovalitem) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *Nonemployeerequestwithoutapprovalitem) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *Nonemployeerequestwithoutapprovalitem) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetManager

`func (o *Nonemployeerequestwithoutapprovalitem) GetManager() string`

GetManager returns the Manager field if non-nil, zero value otherwise.

### GetManagerOk

`func (o *Nonemployeerequestwithoutapprovalitem) GetManagerOk() (*string, bool)`

GetManagerOk returns a tuple with the Manager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManager

`func (o *Nonemployeerequestwithoutapprovalitem) SetManager(v string)`

SetManager sets Manager field to given value.

### HasManager

`func (o *Nonemployeerequestwithoutapprovalitem) HasManager() bool`

HasManager returns a boolean if a field has been set.

### GetNonEmployeeSource

`func (o *Nonemployeerequestwithoutapprovalitem) GetNonEmployeeSource() Nonemployeesourcelitewithschemaattributes`

GetNonEmployeeSource returns the NonEmployeeSource field if non-nil, zero value otherwise.

### GetNonEmployeeSourceOk

`func (o *Nonemployeerequestwithoutapprovalitem) GetNonEmployeeSourceOk() (*Nonemployeesourcelitewithschemaattributes, bool)`

GetNonEmployeeSourceOk returns a tuple with the NonEmployeeSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonEmployeeSource

`func (o *Nonemployeerequestwithoutapprovalitem) SetNonEmployeeSource(v Nonemployeesourcelitewithschemaattributes)`

SetNonEmployeeSource sets NonEmployeeSource field to given value.

### HasNonEmployeeSource

`func (o *Nonemployeerequestwithoutapprovalitem) HasNonEmployeeSource() bool`

HasNonEmployeeSource returns a boolean if a field has been set.

### GetData

`func (o *Nonemployeerequestwithoutapprovalitem) GetData() map[string]string`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *Nonemployeerequestwithoutapprovalitem) GetDataOk() (*map[string]string, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *Nonemployeerequestwithoutapprovalitem) SetData(v map[string]string)`

SetData sets Data field to given value.

### HasData

`func (o *Nonemployeerequestwithoutapprovalitem) HasData() bool`

HasData returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *Nonemployeerequestwithoutapprovalitem) GetApprovalStatus() Approvalstatus`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *Nonemployeerequestwithoutapprovalitem) GetApprovalStatusOk() (*Approvalstatus, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *Nonemployeerequestwithoutapprovalitem) SetApprovalStatus(v Approvalstatus)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *Nonemployeerequestwithoutapprovalitem) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetComment

`func (o *Nonemployeerequestwithoutapprovalitem) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Nonemployeerequestwithoutapprovalitem) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Nonemployeerequestwithoutapprovalitem) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Nonemployeerequestwithoutapprovalitem) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetCompletionDate

`func (o *Nonemployeerequestwithoutapprovalitem) GetCompletionDate() SailPointTime`

GetCompletionDate returns the CompletionDate field if non-nil, zero value otherwise.

### GetCompletionDateOk

`func (o *Nonemployeerequestwithoutapprovalitem) GetCompletionDateOk() (*SailPointTime, bool)`

GetCompletionDateOk returns a tuple with the CompletionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionDate

`func (o *Nonemployeerequestwithoutapprovalitem) SetCompletionDate(v SailPointTime)`

SetCompletionDate sets CompletionDate field to given value.

### HasCompletionDate

`func (o *Nonemployeerequestwithoutapprovalitem) HasCompletionDate() bool`

HasCompletionDate returns a boolean if a field has been set.

### GetStartDate

`func (o *Nonemployeerequestwithoutapprovalitem) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *Nonemployeerequestwithoutapprovalitem) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *Nonemployeerequestwithoutapprovalitem) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *Nonemployeerequestwithoutapprovalitem) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *Nonemployeerequestwithoutapprovalitem) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *Nonemployeerequestwithoutapprovalitem) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *Nonemployeerequestwithoutapprovalitem) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *Nonemployeerequestwithoutapprovalitem) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetModified

`func (o *Nonemployeerequestwithoutapprovalitem) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Nonemployeerequestwithoutapprovalitem) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Nonemployeerequestwithoutapprovalitem) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Nonemployeerequestwithoutapprovalitem) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *Nonemployeerequestwithoutapprovalitem) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Nonemployeerequestwithoutapprovalitem) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Nonemployeerequestwithoutapprovalitem) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Nonemployeerequestwithoutapprovalitem) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


