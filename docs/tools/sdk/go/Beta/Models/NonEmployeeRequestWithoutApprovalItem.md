---
id: non-employee-request-without-approval-item
title: NonEmployeeRequestWithoutApprovalItem
pagination_label: NonEmployeeRequestWithoutApprovalItem
sidebar_label: NonEmployeeRequestWithoutApprovalItem
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'NonEmployeeRequestWithoutApprovalItem'] 
slug: /tools/sdk/go/beta/models/non-employee-request-without-approval-item
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequestWithoutApprovalItem']
---

# NonEmployeeRequestWithoutApprovalItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | Non-Employee request id. | [optional] 
**Requester** |  Pointer to [**IdentityReferenceWithId**](identity-reference-with-id) |  | [optional] 
**AccountName** |  Pointer to **string** | Requested identity account name. | [optional] 
**FirstName** |  Pointer to **string** | Non-Employee&#39;s first name. | [optional] 
**LastName** |  Pointer to **string** | Non-Employee&#39;s last name. | [optional] 
**Email** |  Pointer to **string** | Non-Employee&#39;s email. | [optional] 
**Phone** |  Pointer to **string** | Non-Employee&#39;s phone. | [optional] 
**Manager** |  Pointer to **string** | The account ID of a valid identity to serve as this non-employee&#39;s manager. | [optional] 
**NonEmployeeSource** |  Pointer to [**NonEmployeeSourceLiteWithSchemaAttributes**](non-employee-source-lite-with-schema-attributes) |  | [optional] 
**Data** |  Pointer to **map[string]string** | Attribute blob/bag for a non-employee. | [optional] 
**ApprovalStatus** |  Pointer to [**ApprovalStatus**](approval-status) |  | [optional] 
**Comment** |  Pointer to **string** | comment of requester | [optional] 
**CompletionDate** |  Pointer to **time.Time** | When the request was completely approved. | [optional] 
**StartDate** |  Pointer to **string** | Non-Employee employment start date. | [optional] 
**EndDate** |  Pointer to **string** | Non-Employee employment end date. | [optional] 
**Modified** |  Pointer to **time.Time** | When the request was last modified. | [optional] 
**Created** |  Pointer to **time.Time** | When the request was created. | [optional] 

## Methods

### NewNonEmployeeRequestWithoutApprovalItem

`func NewNonEmployeeRequestWithoutApprovalItem() *NonEmployeeRequestWithoutApprovalItem`

NewNonEmployeeRequestWithoutApprovalItem instantiates a new NonEmployeeRequestWithoutApprovalItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeRequestWithoutApprovalItemWithDefaults

`func NewNonEmployeeRequestWithoutApprovalItemWithDefaults() *NonEmployeeRequestWithoutApprovalItem`

NewNonEmployeeRequestWithoutApprovalItemWithDefaults instantiates a new NonEmployeeRequestWithoutApprovalItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *NonEmployeeRequestWithoutApprovalItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *NonEmployeeRequestWithoutApprovalItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *NonEmployeeRequestWithoutApprovalItem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *NonEmployeeRequestWithoutApprovalItem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetRequester

`func (o *NonEmployeeRequestWithoutApprovalItem) GetRequester() IdentityReferenceWithId`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *NonEmployeeRequestWithoutApprovalItem) GetRequesterOk() (*IdentityReferenceWithId, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *NonEmployeeRequestWithoutApprovalItem) SetRequester(v IdentityReferenceWithId)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *NonEmployeeRequestWithoutApprovalItem) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetAccountName

`func (o *NonEmployeeRequestWithoutApprovalItem) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *NonEmployeeRequestWithoutApprovalItem) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *NonEmployeeRequestWithoutApprovalItem) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *NonEmployeeRequestWithoutApprovalItem) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetFirstName

`func (o *NonEmployeeRequestWithoutApprovalItem) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *NonEmployeeRequestWithoutApprovalItem) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *NonEmployeeRequestWithoutApprovalItem) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *NonEmployeeRequestWithoutApprovalItem) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetLastName

`func (o *NonEmployeeRequestWithoutApprovalItem) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *NonEmployeeRequestWithoutApprovalItem) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *NonEmployeeRequestWithoutApprovalItem) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *NonEmployeeRequestWithoutApprovalItem) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### GetEmail

`func (o *NonEmployeeRequestWithoutApprovalItem) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *NonEmployeeRequestWithoutApprovalItem) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *NonEmployeeRequestWithoutApprovalItem) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *NonEmployeeRequestWithoutApprovalItem) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetPhone

`func (o *NonEmployeeRequestWithoutApprovalItem) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *NonEmployeeRequestWithoutApprovalItem) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *NonEmployeeRequestWithoutApprovalItem) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *NonEmployeeRequestWithoutApprovalItem) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetManager

`func (o *NonEmployeeRequestWithoutApprovalItem) GetManager() string`

GetManager returns the Manager field if non-nil, zero value otherwise.

### GetManagerOk

`func (o *NonEmployeeRequestWithoutApprovalItem) GetManagerOk() (*string, bool)`

GetManagerOk returns a tuple with the Manager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManager

`func (o *NonEmployeeRequestWithoutApprovalItem) SetManager(v string)`

SetManager sets Manager field to given value.

### HasManager

`func (o *NonEmployeeRequestWithoutApprovalItem) HasManager() bool`

HasManager returns a boolean if a field has been set.

### GetNonEmployeeSource

`func (o *NonEmployeeRequestWithoutApprovalItem) GetNonEmployeeSource() NonEmployeeSourceLiteWithSchemaAttributes`

GetNonEmployeeSource returns the NonEmployeeSource field if non-nil, zero value otherwise.

### GetNonEmployeeSourceOk

`func (o *NonEmployeeRequestWithoutApprovalItem) GetNonEmployeeSourceOk() (*NonEmployeeSourceLiteWithSchemaAttributes, bool)`

GetNonEmployeeSourceOk returns a tuple with the NonEmployeeSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonEmployeeSource

`func (o *NonEmployeeRequestWithoutApprovalItem) SetNonEmployeeSource(v NonEmployeeSourceLiteWithSchemaAttributes)`

SetNonEmployeeSource sets NonEmployeeSource field to given value.

### HasNonEmployeeSource

`func (o *NonEmployeeRequestWithoutApprovalItem) HasNonEmployeeSource() bool`

HasNonEmployeeSource returns a boolean if a field has been set.

### GetData

`func (o *NonEmployeeRequestWithoutApprovalItem) GetData() map[string]string`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *NonEmployeeRequestWithoutApprovalItem) GetDataOk() (*map[string]string, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *NonEmployeeRequestWithoutApprovalItem) SetData(v map[string]string)`

SetData sets Data field to given value.

### HasData

`func (o *NonEmployeeRequestWithoutApprovalItem) HasData() bool`

HasData returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *NonEmployeeRequestWithoutApprovalItem) GetApprovalStatus() ApprovalStatus`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *NonEmployeeRequestWithoutApprovalItem) GetApprovalStatusOk() (*ApprovalStatus, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *NonEmployeeRequestWithoutApprovalItem) SetApprovalStatus(v ApprovalStatus)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *NonEmployeeRequestWithoutApprovalItem) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetComment

`func (o *NonEmployeeRequestWithoutApprovalItem) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *NonEmployeeRequestWithoutApprovalItem) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *NonEmployeeRequestWithoutApprovalItem) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *NonEmployeeRequestWithoutApprovalItem) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetCompletionDate

`func (o *NonEmployeeRequestWithoutApprovalItem) GetCompletionDate() time.Time`

GetCompletionDate returns the CompletionDate field if non-nil, zero value otherwise.

### GetCompletionDateOk

`func (o *NonEmployeeRequestWithoutApprovalItem) GetCompletionDateOk() (*time.Time, bool)`

GetCompletionDateOk returns a tuple with the CompletionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionDate

`func (o *NonEmployeeRequestWithoutApprovalItem) SetCompletionDate(v time.Time)`

SetCompletionDate sets CompletionDate field to given value.

### HasCompletionDate

`func (o *NonEmployeeRequestWithoutApprovalItem) HasCompletionDate() bool`

HasCompletionDate returns a boolean if a field has been set.

### GetStartDate

`func (o *NonEmployeeRequestWithoutApprovalItem) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *NonEmployeeRequestWithoutApprovalItem) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *NonEmployeeRequestWithoutApprovalItem) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *NonEmployeeRequestWithoutApprovalItem) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *NonEmployeeRequestWithoutApprovalItem) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *NonEmployeeRequestWithoutApprovalItem) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *NonEmployeeRequestWithoutApprovalItem) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *NonEmployeeRequestWithoutApprovalItem) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetModified

`func (o *NonEmployeeRequestWithoutApprovalItem) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *NonEmployeeRequestWithoutApprovalItem) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *NonEmployeeRequestWithoutApprovalItem) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *NonEmployeeRequestWithoutApprovalItem) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *NonEmployeeRequestWithoutApprovalItem) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *NonEmployeeRequestWithoutApprovalItem) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *NonEmployeeRequestWithoutApprovalItem) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *NonEmployeeRequestWithoutApprovalItem) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


[[Back to top]](#) 


