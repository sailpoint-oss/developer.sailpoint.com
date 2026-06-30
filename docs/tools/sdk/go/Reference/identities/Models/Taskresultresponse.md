---
id: v1-taskresultresponse
title: Taskresultresponse
pagination_label: Taskresultresponse
sidebar_label: Taskresultresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Taskresultresponse', 'V1Taskresultresponse'] 
slug: /tools/sdk/go/identities/models/taskresultresponse
tags: ['SDK', 'Software Development Kit', 'Taskresultresponse', 'V1Taskresultresponse']
---

# Taskresultresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | the type of response reference | [optional] 
**Id** | Pointer to **string** | the task ID | [optional] 
**Name** | Pointer to **string** | the task name (not used in this endpoint, always null) | [optional] 

## Methods

### NewTaskresultresponse

`func NewTaskresultresponse() *Taskresultresponse`

NewTaskresultresponse instantiates a new Taskresultresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskresultresponseWithDefaults

`func NewTaskresultresponseWithDefaults() *Taskresultresponse`

NewTaskresultresponseWithDefaults instantiates a new Taskresultresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Taskresultresponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Taskresultresponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Taskresultresponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Taskresultresponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Taskresultresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Taskresultresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Taskresultresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Taskresultresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Taskresultresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Taskresultresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Taskresultresponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Taskresultresponse) HasName() bool`

HasName returns a boolean if a field has been set.


