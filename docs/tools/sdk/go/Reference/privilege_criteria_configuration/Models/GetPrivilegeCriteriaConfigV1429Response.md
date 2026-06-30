---
id: v1-get-privilege-criteria-config-v1429-response
title: GetPrivilegeCriteriaConfigV1429Response
pagination_label: GetPrivilegeCriteriaConfigV1429Response
sidebar_label: GetPrivilegeCriteriaConfigV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetPrivilegeCriteriaConfigV1429Response', 'V1GetPrivilegeCriteriaConfigV1429Response'] 
slug: /tools/sdk/go/privilegecriteriaconfiguration/models/get-privilege-criteria-config-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetPrivilegeCriteriaConfigV1429Response', 'V1GetPrivilegeCriteriaConfigV1429Response']
---

# GetPrivilegeCriteriaConfigV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetPrivilegeCriteriaConfigV1429Response

`func NewGetPrivilegeCriteriaConfigV1429Response() *GetPrivilegeCriteriaConfigV1429Response`

NewGetPrivilegeCriteriaConfigV1429Response instantiates a new GetPrivilegeCriteriaConfigV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPrivilegeCriteriaConfigV1429ResponseWithDefaults

`func NewGetPrivilegeCriteriaConfigV1429ResponseWithDefaults() *GetPrivilegeCriteriaConfigV1429Response`

NewGetPrivilegeCriteriaConfigV1429ResponseWithDefaults instantiates a new GetPrivilegeCriteriaConfigV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetPrivilegeCriteriaConfigV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetPrivilegeCriteriaConfigV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetPrivilegeCriteriaConfigV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetPrivilegeCriteriaConfigV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetPrivilegeCriteriaConfigV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetPrivilegeCriteriaConfigV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

