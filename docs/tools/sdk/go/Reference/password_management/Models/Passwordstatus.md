---
id: v1-passwordstatus
title: Passwordstatus
pagination_label: Passwordstatus
sidebar_label: Passwordstatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Passwordstatus', 'V1Passwordstatus'] 
slug: /tools/sdk/go/passwordmanagement/models/passwordstatus
tags: ['SDK', 'Software Development Kit', 'Passwordstatus', 'V1Passwordstatus']
---

# Passwordstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | Pointer to **NullableString** | The password change request ID | [optional] 
**State** | Pointer to **string** | Password change state | [optional] 
**Errors** | Pointer to **[]string** | The errors during the password change request | [optional] 
**SourceIds** | Pointer to **[]string** | List of source IDs in the password change request | [optional] 

## Methods

### NewPasswordstatus

`func NewPasswordstatus() *Passwordstatus`

NewPasswordstatus instantiates a new Passwordstatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordstatusWithDefaults

`func NewPasswordstatusWithDefaults() *Passwordstatus`

NewPasswordstatusWithDefaults instantiates a new Passwordstatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *Passwordstatus) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *Passwordstatus) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *Passwordstatus) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *Passwordstatus) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### SetRequestIdNil

`func (o *Passwordstatus) SetRequestIdNil(b bool)`

 SetRequestIdNil sets the value for RequestId to be an explicit nil

### UnsetRequestId
`func (o *Passwordstatus) UnsetRequestId()`

UnsetRequestId ensures that no value is present for RequestId, not even an explicit nil
### GetState

`func (o *Passwordstatus) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Passwordstatus) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Passwordstatus) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *Passwordstatus) HasState() bool`

HasState returns a boolean if a field has been set.

### GetErrors

`func (o *Passwordstatus) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *Passwordstatus) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *Passwordstatus) SetErrors(v []string)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *Passwordstatus) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetSourceIds

`func (o *Passwordstatus) GetSourceIds() []string`

GetSourceIds returns the SourceIds field if non-nil, zero value otherwise.

### GetSourceIdsOk

`func (o *Passwordstatus) GetSourceIdsOk() (*[]string, bool)`

GetSourceIdsOk returns a tuple with the SourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceIds

`func (o *Passwordstatus) SetSourceIds(v []string)`

SetSourceIds sets SourceIds field to given value.

### HasSourceIds

`func (o *Passwordstatus) HasSourceIds() bool`

HasSourceIds returns a boolean if a field has been set.


