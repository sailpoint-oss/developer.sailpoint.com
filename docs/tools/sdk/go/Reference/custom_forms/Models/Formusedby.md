---
id: v1-formusedby
title: Formusedby
pagination_label: Formusedby
sidebar_label: Formusedby
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Formusedby', 'V1Formusedby'] 
slug: /tools/sdk/go/customforms/models/formusedby
tags: ['SDK', 'Software Development Kit', 'Formusedby', 'V1Formusedby']
---

# Formusedby

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | FormUsedByType value.  WORKFLOW FormUsedByTypeWorkflow SOURCE FormUsedByTypeSource MySailPoint FormUsedByType | [optional] 
**Id** | Pointer to **string** | Unique identifier of the system using the form. | [optional] 
**Name** | Pointer to **string** | Name of the system using the form. | [optional] 

## Methods

### NewFormusedby

`func NewFormusedby() *Formusedby`

NewFormusedby instantiates a new Formusedby object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormusedbyWithDefaults

`func NewFormusedbyWithDefaults() *Formusedby`

NewFormusedbyWithDefaults instantiates a new Formusedby object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Formusedby) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Formusedby) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Formusedby) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Formusedby) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Formusedby) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Formusedby) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Formusedby) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Formusedby) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Formusedby) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Formusedby) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Formusedby) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Formusedby) HasName() bool`

HasName returns a boolean if a field has been set.


