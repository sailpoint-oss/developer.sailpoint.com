---
id: v1-nonemployeerecord
title: Nonemployeerecord
pagination_label: Nonemployeerecord
sidebar_label: Nonemployeerecord
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeerecord', 'V1Nonemployeerecord'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeerecord
tags: ['SDK', 'Software Development Kit', 'Nonemployeerecord', 'V1Nonemployeerecord']
---

# Nonemployeerecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Non-Employee record id. | [optional] 
**AccountName** | Pointer to **string** | Requested identity account name. | [optional] 
**FirstName** | Pointer to **string** | Non-Employee's first name. | [optional] 
**LastName** | Pointer to **string** | Non-Employee's last name. | [optional] 
**Email** | Pointer to **string** | Non-Employee's email. | [optional] 
**Phone** | Pointer to **string** | Non-Employee's phone. | [optional] 
**Manager** | Pointer to **string** | The account ID of a valid identity to serve as this non-employee's manager. | [optional] 
**SourceId** | Pointer to **string** | Non-Employee's source id. | [optional] 
**Data** | Pointer to **map[string]string** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] 
**StartDate** | Pointer to **SailPointTime** | Non-Employee employment start date. | [optional] 
**EndDate** | Pointer to **SailPointTime** | Non-Employee employment end date. | [optional] 
**Modified** | Pointer to **SailPointTime** | When the request was last modified. | [optional] 
**Created** | Pointer to **SailPointTime** | When the request was created. | [optional] 

## Methods

### NewNonemployeerecord

`func NewNonemployeerecord() *Nonemployeerecord`

NewNonemployeerecord instantiates a new Nonemployeerecord object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeerecordWithDefaults

`func NewNonemployeerecordWithDefaults() *Nonemployeerecord`

NewNonemployeerecordWithDefaults instantiates a new Nonemployeerecord object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Nonemployeerecord) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Nonemployeerecord) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Nonemployeerecord) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Nonemployeerecord) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccountName

`func (o *Nonemployeerecord) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *Nonemployeerecord) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *Nonemployeerecord) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *Nonemployeerecord) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetFirstName

`func (o *Nonemployeerecord) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *Nonemployeerecord) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *Nonemployeerecord) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *Nonemployeerecord) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetLastName

`func (o *Nonemployeerecord) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *Nonemployeerecord) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *Nonemployeerecord) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *Nonemployeerecord) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### GetEmail

`func (o *Nonemployeerecord) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Nonemployeerecord) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Nonemployeerecord) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Nonemployeerecord) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetPhone

`func (o *Nonemployeerecord) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *Nonemployeerecord) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *Nonemployeerecord) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *Nonemployeerecord) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetManager

`func (o *Nonemployeerecord) GetManager() string`

GetManager returns the Manager field if non-nil, zero value otherwise.

### GetManagerOk

`func (o *Nonemployeerecord) GetManagerOk() (*string, bool)`

GetManagerOk returns a tuple with the Manager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManager

`func (o *Nonemployeerecord) SetManager(v string)`

SetManager sets Manager field to given value.

### HasManager

`func (o *Nonemployeerecord) HasManager() bool`

HasManager returns a boolean if a field has been set.

### GetSourceId

`func (o *Nonemployeerecord) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Nonemployeerecord) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Nonemployeerecord) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Nonemployeerecord) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetData

`func (o *Nonemployeerecord) GetData() map[string]string`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *Nonemployeerecord) GetDataOk() (*map[string]string, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *Nonemployeerecord) SetData(v map[string]string)`

SetData sets Data field to given value.

### HasData

`func (o *Nonemployeerecord) HasData() bool`

HasData returns a boolean if a field has been set.

### GetStartDate

`func (o *Nonemployeerecord) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *Nonemployeerecord) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *Nonemployeerecord) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *Nonemployeerecord) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *Nonemployeerecord) GetEndDate() SailPointTime`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *Nonemployeerecord) GetEndDateOk() (*SailPointTime, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *Nonemployeerecord) SetEndDate(v SailPointTime)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *Nonemployeerecord) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetModified

`func (o *Nonemployeerecord) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Nonemployeerecord) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Nonemployeerecord) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Nonemployeerecord) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *Nonemployeerecord) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Nonemployeerecord) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Nonemployeerecord) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Nonemployeerecord) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


