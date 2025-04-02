---
id: access-request-dynamic-approver1
title: AccessRequestDynamicApprover1
pagination_label: AccessRequestDynamicApprover1
sidebar_label: AccessRequestDynamicApprover1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestDynamicApprover1', 'AccessRequestDynamicApprover1'] 
slug: /tools/sdk/go//models/access-request-dynamic-approver1
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApprover1', 'AccessRequestDynamicApprover1']
---

# AccessRequestDynamicApprover1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the identity to add to the approver list for the access request. | 
**Name** | **string** | The name of the identity to add to the approver list for the access request. | 
**Type** | **map[string]interface{}** | The type of object being referenced. | 

## Methods

### NewAccessRequestDynamicApprover1

`func NewAccessRequestDynamicApprover1(id string, name string, type_ map[string]interface{}, ) *AccessRequestDynamicApprover1`

NewAccessRequestDynamicApprover1 instantiates a new AccessRequestDynamicApprover1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestDynamicApprover1WithDefaults

`func NewAccessRequestDynamicApprover1WithDefaults() *AccessRequestDynamicApprover1`

NewAccessRequestDynamicApprover1WithDefaults instantiates a new AccessRequestDynamicApprover1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessRequestDynamicApprover1) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessRequestDynamicApprover1) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessRequestDynamicApprover1) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccessRequestDynamicApprover1) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessRequestDynamicApprover1) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessRequestDynamicApprover1) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *AccessRequestDynamicApprover1) GetType() map[string]interface{}`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessRequestDynamicApprover1) GetTypeOk() (*map[string]interface{}, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessRequestDynamicApprover1) SetType(v map[string]interface{})`

SetType sets Type field to given value.



