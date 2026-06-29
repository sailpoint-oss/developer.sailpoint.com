---
id: v1-sodviolationcontextcheckcompleted
title: Sodviolationcontextcheckcompleted
pagination_label: Sodviolationcontextcheckcompleted
sidebar_label: Sodviolationcontextcheckcompleted
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sodviolationcontextcheckcompleted', 'V1Sodviolationcontextcheckcompleted'] 
slug: /tools/sdk/go/accessrequests/models/sodviolationcontextcheckcompleted
tags: ['SDK', 'Software Development Kit', 'Sodviolationcontextcheckcompleted', 'V1Sodviolationcontextcheckcompleted']
---

# Sodviolationcontextcheckcompleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **NullableString** | The status of SOD violation check | [optional] 
**Uuid** | Pointer to **NullableString** | The id of the Violation check event | [optional] 
**ViolationCheckResult** | Pointer to [**Sodviolationcheckresult**](sodviolationcheckresult) |  | [optional] 

## Methods

### NewSodviolationcontextcheckcompleted

`func NewSodviolationcontextcheckcompleted() *Sodviolationcontextcheckcompleted`

NewSodviolationcontextcheckcompleted instantiates a new Sodviolationcontextcheckcompleted object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodviolationcontextcheckcompletedWithDefaults

`func NewSodviolationcontextcheckcompletedWithDefaults() *Sodviolationcontextcheckcompleted`

NewSodviolationcontextcheckcompletedWithDefaults instantiates a new Sodviolationcontextcheckcompleted object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *Sodviolationcontextcheckcompleted) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Sodviolationcontextcheckcompleted) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Sodviolationcontextcheckcompleted) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *Sodviolationcontextcheckcompleted) HasState() bool`

HasState returns a boolean if a field has been set.

### SetStateNil

`func (o *Sodviolationcontextcheckcompleted) SetStateNil(b bool)`

 SetStateNil sets the value for State to be an explicit nil

### UnsetState
`func (o *Sodviolationcontextcheckcompleted) UnsetState()`

UnsetState ensures that no value is present for State, not even an explicit nil
### GetUuid

`func (o *Sodviolationcontextcheckcompleted) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *Sodviolationcontextcheckcompleted) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *Sodviolationcontextcheckcompleted) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *Sodviolationcontextcheckcompleted) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### SetUuidNil

`func (o *Sodviolationcontextcheckcompleted) SetUuidNil(b bool)`

 SetUuidNil sets the value for Uuid to be an explicit nil

### UnsetUuid
`func (o *Sodviolationcontextcheckcompleted) UnsetUuid()`

UnsetUuid ensures that no value is present for Uuid, not even an explicit nil
### GetViolationCheckResult

`func (o *Sodviolationcontextcheckcompleted) GetViolationCheckResult() Sodviolationcheckresult`

GetViolationCheckResult returns the ViolationCheckResult field if non-nil, zero value otherwise.

### GetViolationCheckResultOk

`func (o *Sodviolationcontextcheckcompleted) GetViolationCheckResultOk() (*Sodviolationcheckresult, bool)`

GetViolationCheckResultOk returns a tuple with the ViolationCheckResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolationCheckResult

`func (o *Sodviolationcontextcheckcompleted) SetViolationCheckResult(v Sodviolationcheckresult)`

SetViolationCheckResult sets ViolationCheckResult field to given value.

### HasViolationCheckResult

`func (o *Sodviolationcontextcheckcompleted) HasViolationCheckResult() bool`

HasViolationCheckResult returns a boolean if a field has been set.


