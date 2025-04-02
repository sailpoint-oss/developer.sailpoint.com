---
id: reassignment-reference
title: ReassignmentReference
pagination_label: ReassignmentReference
sidebar_label: ReassignmentReference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReassignmentReference', 'ReassignmentReference'] 
slug: /tools/sdk/go//models/reassignment-reference
tags: ['SDK', 'Software Development Kit', 'ReassignmentReference', 'ReassignmentReference']
---

# ReassignmentReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The ID of item or identity being reassigned. | 
**Type** | **string** | The type of item or identity being reassigned. | 

## Methods

### NewReassignmentReference

`func NewReassignmentReference(id string, type_ string, ) *ReassignmentReference`

NewReassignmentReference instantiates a new ReassignmentReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReassignmentReferenceWithDefaults

`func NewReassignmentReferenceWithDefaults() *ReassignmentReference`

NewReassignmentReferenceWithDefaults instantiates a new ReassignmentReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ReassignmentReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ReassignmentReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ReassignmentReference) SetId(v string)`

SetId sets Id field to given value.


### GetType

`func (o *ReassignmentReference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ReassignmentReference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ReassignmentReference) SetType(v string)`

SetType sets Type field to given value.



