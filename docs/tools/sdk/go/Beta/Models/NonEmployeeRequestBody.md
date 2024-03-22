---
id: non-employee-request-body
title: NonEmployeeRequestBody
pagination_label: NonEmployeeRequestBody
sidebar_label: NonEmployeeRequestBody
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'NonEmployeeRequestBody'] 
slug: /tools/sdk/go/beta/models/non-employee-request-body
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequestBody']
---

# NonEmployeeRequestBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountName** |  **string** | Requested identity account name. | 
**FirstName** |  **string** | Non-Employee&#39;s first name. | 
**LastName** |  **string** | Non-Employee&#39;s last name. | 
**Email** |  **string** | Non-Employee&#39;s email. | 
**Phone** |  **string** | Non-Employee&#39;s phone. | 
**Manager** |  **string** | The account ID of a valid identity to serve as this non-employee&#39;s manager. | 
**SourceId** |  **string** | Non-Employee&#39;s source id. | 
**Data** |  Pointer to **map[string]string** | Attribute blob/bag for a non-employee, 10 attributes is the maximum size supported. | [optional] 
**StartDate** |  **time.Time** | Non-Employee employment start date. | 
**EndDate** |  **time.Time** | Non-Employee employment end date. | 

## Methods

### NewNonEmployeeRequestBody

`func NewNonEmployeeRequestBody(accountName string, firstName string, lastName string, email string, phone string, manager string, sourceId string, startDate time.Time, endDate time.Time, ) *NonEmployeeRequestBody`

NewNonEmployeeRequestBody instantiates a new NonEmployeeRequestBody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeRequestBodyWithDefaults

`func NewNonEmployeeRequestBodyWithDefaults() *NonEmployeeRequestBody`

NewNonEmployeeRequestBodyWithDefaults instantiates a new NonEmployeeRequestBody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountName

`func (o *NonEmployeeRequestBody) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *NonEmployeeRequestBody) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *NonEmployeeRequestBody) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.


### GetFirstName

`func (o *NonEmployeeRequestBody) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *NonEmployeeRequestBody) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *NonEmployeeRequestBody) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### GetLastName

`func (o *NonEmployeeRequestBody) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *NonEmployeeRequestBody) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *NonEmployeeRequestBody) SetLastName(v string)`

SetLastName sets LastName field to given value.


### GetEmail

`func (o *NonEmployeeRequestBody) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *NonEmployeeRequestBody) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *NonEmployeeRequestBody) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetPhone

`func (o *NonEmployeeRequestBody) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *NonEmployeeRequestBody) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *NonEmployeeRequestBody) SetPhone(v string)`

SetPhone sets Phone field to given value.


### GetManager

`func (o *NonEmployeeRequestBody) GetManager() string`

GetManager returns the Manager field if non-nil, zero value otherwise.

### GetManagerOk

`func (o *NonEmployeeRequestBody) GetManagerOk() (*string, bool)`

GetManagerOk returns a tuple with the Manager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManager

`func (o *NonEmployeeRequestBody) SetManager(v string)`

SetManager sets Manager field to given value.


### GetSourceId

`func (o *NonEmployeeRequestBody) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *NonEmployeeRequestBody) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *NonEmployeeRequestBody) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.


### GetData

`func (o *NonEmployeeRequestBody) GetData() map[string]string`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *NonEmployeeRequestBody) GetDataOk() (*map[string]string, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *NonEmployeeRequestBody) SetData(v map[string]string)`

SetData sets Data field to given value.

### HasData

`func (o *NonEmployeeRequestBody) HasData() bool`

HasData returns a boolean if a field has been set.

### GetStartDate

`func (o *NonEmployeeRequestBody) GetStartDate() time.Time`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *NonEmployeeRequestBody) GetStartDateOk() (*time.Time, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *NonEmployeeRequestBody) SetStartDate(v time.Time)`

SetStartDate sets StartDate field to given value.


### GetEndDate

`func (o *NonEmployeeRequestBody) GetEndDate() time.Time`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *NonEmployeeRequestBody) GetEndDateOk() (*time.Time, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *NonEmployeeRequestBody) SetEndDate(v time.Time)`

SetEndDate sets EndDate field to given value.



[[Back to top]](#) 


