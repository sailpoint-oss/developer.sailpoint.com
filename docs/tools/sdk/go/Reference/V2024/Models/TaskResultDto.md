---
id: v2024-task-result-dto
title: TaskResultDto
pagination_label: TaskResultDto
sidebar_label: TaskResultDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TaskResultDto', 'V2024TaskResultDto'] 
slug: /tools/sdk/go/v2024/models/task-result-dto
tags: ['SDK', 'Software Development Kit', 'TaskResultDto', 'V2024TaskResultDto']
---

# TaskResultDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Task result DTO type. | [optional] 
**Id** | Pointer to **string** | Task result ID. | [optional] 
**Name** | Pointer to **NullableString** | Task result display name. | [optional] 

## Methods

### NewTaskResultDto

`func NewTaskResultDto() *TaskResultDto`

NewTaskResultDto instantiates a new TaskResultDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskResultDtoWithDefaults

`func NewTaskResultDtoWithDefaults() *TaskResultDto`

NewTaskResultDtoWithDefaults instantiates a new TaskResultDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TaskResultDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TaskResultDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TaskResultDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TaskResultDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *TaskResultDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TaskResultDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TaskResultDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *TaskResultDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *TaskResultDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TaskResultDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TaskResultDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *TaskResultDto) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *TaskResultDto) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *TaskResultDto) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

