---
id: reassign-reference
title: ReassignReference
pagination_label: ReassignReference
sidebar_label: ReassignReference
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ReassignReference'] 
slug: /tools/sdk/go/beta/models/reassign-reference
tags: ['SDK', 'Software Development Kit', 'ReassignReference']
---

# ReassignReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **string** | The ID of item or identity being reassigned. | 
**Type** |  **string** | The type of item or identity being reassigned. | 

## Methods

### NewReassignReference

`func NewReassignReference(id string, type_ string, ) *ReassignReference`

NewReassignReference instantiates a new ReassignReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReassignReferenceWithDefaults

`func NewReassignReferenceWithDefaults() *ReassignReference`

NewReassignReferenceWithDefaults instantiates a new ReassignReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ReassignReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ReassignReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ReassignReference) SetId(v string)`

SetId sets Id field to given value.


### GetType

`func (o *ReassignReference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ReassignReference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ReassignReference) SetType(v string)`

SetType sets Type field to given value.



[[Back to top]](#) 


