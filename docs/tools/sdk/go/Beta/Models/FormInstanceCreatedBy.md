---
id: form-instance-created-by
title: FormInstanceCreatedBy
pagination_label: FormInstanceCreatedBy
sidebar_label: FormInstanceCreatedBy
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'FormInstanceCreatedBy'] 
slug: /tools/sdk/go/beta/models/form-instance-created-by
tags: ['SDK', 'Software Development Kit', 'FormInstanceCreatedBy']
---

# FormInstanceCreatedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | ID is a unique identifier | [optional] 
**Type** |  Pointer to **string** | Type is a form instance created by type enum value WORKFLOW_EXECUTION FormInstanceCreatedByTypeWorkflowExecution SOURCE FormInstanceCreatedByTypeSource | [optional] 

## Methods

### NewFormInstanceCreatedBy

`func NewFormInstanceCreatedBy() *FormInstanceCreatedBy`

NewFormInstanceCreatedBy instantiates a new FormInstanceCreatedBy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormInstanceCreatedByWithDefaults

`func NewFormInstanceCreatedByWithDefaults() *FormInstanceCreatedBy`

NewFormInstanceCreatedByWithDefaults instantiates a new FormInstanceCreatedBy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *FormInstanceCreatedBy) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *FormInstanceCreatedBy) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *FormInstanceCreatedBy) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *FormInstanceCreatedBy) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *FormInstanceCreatedBy) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FormInstanceCreatedBy) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FormInstanceCreatedBy) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *FormInstanceCreatedBy) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to top]](#) 


