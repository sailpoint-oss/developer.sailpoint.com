---
id: non-employee-record
title: NonEmployeeRecord
pagination_label: NonEmployeeRecord
sidebar_label: NonEmployeeRecord
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'NonEmployeeRecord'] 
slug: /tools/sdk/go/v3/models/non-employee-record
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRecord']
---

# NonEmployeeRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | Non-Employee record id. | [optional] 
**AccountName** |  Pointer to **string** | Requested identity account name. | [optional] 
**FirstName** |  Pointer to **string** | Non-Employee&#39;s first name. | [optional] 
**LastName** |  Pointer to **string** | Non-Employee&#39;s last name. | [optional] 
**Email** |  Pointer to **string** | Non-Employee&#39;s email. | [optional] 
**Phone** |  Pointer to **string** | Non-Employee&#39;s phone. | [optional] 
**Manager** |  Pointer to **string** | The account ID of a valid identity to serve as this non-employee&#39;s manager. | [optional] 
**SourceId** |  Pointer to **string** | Non-Employee&#39;s source id. | [optional] 
**Data** |  Pointer to **map[string]string** | Attribute blob/bag for a non-employee. | [optional] 
**StartDate** |  Pointer to **time.Time** | Non-Employee employment start date. | [optional] 
**EndDate** |  Pointer to **time.Time** | Non-Employee employment end date. | [optional] 
**Modified** |  Pointer to **time.Time** | When the request was last modified. | [optional] 
**Created** |  Pointer to **time.Time** | When the request was created. | [optional] 

## Methods

### NewNonEmployeeRecord

`func NewNonEmployeeRecord() *NonEmployeeRecord`

NewNonEmployeeRecord instantiates a new NonEmployeeRecord object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeRecordWithDefaults

`func NewNonEmployeeRecordWithDefaults() *NonEmployeeRecord`

NewNonEmployeeRecordWithDefaults instantiates a new NonEmployeeRecord object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *NonEmployeeRecord) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *NonEmployeeRecord) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *NonEmployeeRecord) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *NonEmployeeRecord) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccountName

`func (o *NonEmployeeRecord) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *NonEmployeeRecord) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *NonEmployeeRecord) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *NonEmployeeRecord) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetFirstName

`func (o *NonEmployeeRecord) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *NonEmployeeRecord) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *NonEmployeeRecord) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *NonEmployeeRecord) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetLastName

`func (o *NonEmployeeRecord) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *NonEmployeeRecord) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *NonEmployeeRecord) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *NonEmployeeRecord) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### GetEmail

`func (o *NonEmployeeRecord) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *NonEmployeeRecord) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *NonEmployeeRecord) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *NonEmployeeRecord) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetPhone

`func (o *NonEmployeeRecord) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *NonEmployeeRecord) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *NonEmployeeRecord) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *NonEmployeeRecord) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetManager

`func (o *NonEmployeeRecord) GetManager() string`

GetManager returns the Manager field if non-nil, zero value otherwise.

### GetManagerOk

`func (o *NonEmployeeRecord) GetManagerOk() (*string, bool)`

GetManagerOk returns a tuple with the Manager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManager

`func (o *NonEmployeeRecord) SetManager(v string)`

SetManager sets Manager field to given value.

### HasManager

`func (o *NonEmployeeRecord) HasManager() bool`

HasManager returns a boolean if a field has been set.

### GetSourceId

`func (o *NonEmployeeRecord) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *NonEmployeeRecord) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *NonEmployeeRecord) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *NonEmployeeRecord) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetData

`func (o *NonEmployeeRecord) GetData() map[string]string`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *NonEmployeeRecord) GetDataOk() (*map[string]string, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *NonEmployeeRecord) SetData(v map[string]string)`

SetData sets Data field to given value.

### HasData

`func (o *NonEmployeeRecord) HasData() bool`

HasData returns a boolean if a field has been set.

### GetStartDate

`func (o *NonEmployeeRecord) GetStartDate() time.Time`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *NonEmployeeRecord) GetStartDateOk() (*time.Time, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *NonEmployeeRecord) SetStartDate(v time.Time)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *NonEmployeeRecord) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *NonEmployeeRecord) GetEndDate() time.Time`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *NonEmployeeRecord) GetEndDateOk() (*time.Time, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *NonEmployeeRecord) SetEndDate(v time.Time)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *NonEmployeeRecord) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetModified

`func (o *NonEmployeeRecord) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *NonEmployeeRecord) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *NonEmployeeRecord) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *NonEmployeeRecord) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *NonEmployeeRecord) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *NonEmployeeRecord) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *NonEmployeeRecord) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *NonEmployeeRecord) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


[[Back to top]](#) 


