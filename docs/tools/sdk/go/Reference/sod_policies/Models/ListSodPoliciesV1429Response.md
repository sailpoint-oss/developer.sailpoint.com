---
id: v1-list-sod-policies-v1429-response
title: ListSodPoliciesV1429Response
pagination_label: ListSodPoliciesV1429Response
sidebar_label: ListSodPoliciesV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListSodPoliciesV1429Response', 'V1ListSodPoliciesV1429Response'] 
slug: /tools/sdk/go/sodpolicies/models/list-sod-policies-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListSodPoliciesV1429Response', 'V1ListSodPoliciesV1429Response']
---

# ListSodPoliciesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListSodPoliciesV1429Response

`func NewListSodPoliciesV1429Response() *ListSodPoliciesV1429Response`

NewListSodPoliciesV1429Response instantiates a new ListSodPoliciesV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListSodPoliciesV1429ResponseWithDefaults

`func NewListSodPoliciesV1429ResponseWithDefaults() *ListSodPoliciesV1429Response`

NewListSodPoliciesV1429ResponseWithDefaults instantiates a new ListSodPoliciesV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListSodPoliciesV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListSodPoliciesV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListSodPoliciesV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListSodPoliciesV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListSodPoliciesV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListSodPoliciesV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

