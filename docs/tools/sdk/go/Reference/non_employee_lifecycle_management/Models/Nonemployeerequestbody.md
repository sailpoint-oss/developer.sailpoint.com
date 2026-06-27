---
id: v1-nonemployeerequestbody
title: Nonemployeerequestbody
pagination_label: Nonemployeerequestbody
sidebar_label: Nonemployeerequestbody
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeerequestbody', 'V1Nonemployeerequestbody'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeerequestbody
tags: ['SDK', 'Software Development Kit', 'Nonemployeerequestbody', 'V1Nonemployeerequestbody']
---

# Nonemployeerequestbody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountName** | **string** | Requested identity account name. | 
**FirstName** | **string** | Non-Employee's first name. | 
**LastName** | **string** | Non-Employee's last name. | 
**Email** | **string** | Non-Employee's email. | 
**Phone** | **string** | Non-Employee's phone. | 
**Manager** | **string** | The account ID of a valid identity to serve as this non-employee's manager. | 
**SourceId** | **string** | Non-Employee's source id. | 
**Data** | Pointer to **map[string]string** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] 
**StartDate** | **SailPointTime** | Non-Employee employment start date. | 
**EndDate** | **SailPointTime** | Non-Employee employment end date. | 

## Methods

### NewNonemployeerequestbody

`func NewNonemployeerequestbody(accountName string, firstName string, lastName string, email string, phone string, manager string, sourceId string, startDate SailPointTime, endDate SailPointTime, ) *Nonemployeerequestbody`

NewNonemployeerequestbody instantiates a new Nonemployeerequestbody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeerequestbodyWithDefaults

`func NewNonemployeerequestbodyWithDefaults() *Nonemployeerequestbody`

NewNonemployeerequestbodyWithDefaults instantiates a new Nonemployeerequestbody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountName

`func (o *Nonemployeerequestbody) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *Nonemployeerequestbody) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *Nonemployeerequestbody) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.


### GetFirstName

`func (o *Nonemployeerequestbody) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *Nonemployeerequestbody) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *Nonemployeerequestbody) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### GetLastName

`func (o *Nonemployeerequestbody) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *Nonemployeerequestbody) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *Nonemployeerequestbody) SetLastName(v string)`

SetLastName sets LastName field to given value.


### GetEmail

`func (o *Nonemployeerequestbody) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Nonemployeerequestbody) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Nonemployeerequestbody) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetPhone

`func (o *Nonemployeerequestbody) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *Nonemployeerequestbody) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *Nonemployeerequestbody) SetPhone(v string)`

SetPhone sets Phone field to given value.


### GetManager

`func (o *Nonemployeerequestbody) GetManager() string`

GetManager returns the Manager field if non-nil, zero value otherwise.

### GetManagerOk

`func (o *Nonemployeerequestbody) GetManagerOk() (*string, bool)`

GetManagerOk returns a tuple with the Manager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManager

`func (o *Nonemployeerequestbody) SetManager(v string)`

SetManager sets Manager field to given value.


### GetSourceId

`func (o *Nonemployeerequestbody) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Nonemployeerequestbody) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Nonemployeerequestbody) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.


### GetData

`func (o *Nonemployeerequestbody) GetData() map[string]string`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *Nonemployeerequestbody) GetDataOk() (*map[string]string, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *Nonemployeerequestbody) SetData(v map[string]string)`

SetData sets Data field to given value.

### HasData

`func (o *Nonemployeerequestbody) HasData() bool`

HasData returns a boolean if a field has been set.

### GetStartDate

`func (o *Nonemployeerequestbody) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *Nonemployeerequestbody) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *Nonemployeerequestbody) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.


### GetEndDate

`func (o *Nonemployeerequestbody) GetEndDate() SailPointTime`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *Nonemployeerequestbody) GetEndDateOk() (*SailPointTime, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *Nonemployeerequestbody) SetEndDate(v SailPointTime)`

SetEndDate sets EndDate field to given value.



