---
id: v2025-parameter-storage-reference
title: ParameterStorageReference
pagination_label: ParameterStorageReference
sidebar_label: ParameterStorageReference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ParameterStorageReference', 'V2025ParameterStorageReference'] 
slug: /tools/sdk/go/v2025/models/parameter-storage-reference
tags: ['SDK', 'Software Development Kit', 'ParameterStorageReference', 'V2025ParameterStorageReference']
---

# ParameterStorageReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The ID of the reference | 
**ConsumerId** | **string** | The ID of the consumer holding the reference | 
**ParameterId** | **string** | The ID of the parameter that the reference is pointing to. | 
**Name** | **string** | The human-readable name of the reference | 
**UsageHint** | Pointer to **string** | The hint string used to validate the reference | [optional] 

## Methods

### NewParameterStorageReference

`func NewParameterStorageReference(id string, consumerId string, parameterId string, name string, ) *ParameterStorageReference`

NewParameterStorageReference instantiates a new ParameterStorageReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewParameterStorageReferenceWithDefaults

`func NewParameterStorageReferenceWithDefaults() *ParameterStorageReference`

NewParameterStorageReferenceWithDefaults instantiates a new ParameterStorageReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ParameterStorageReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ParameterStorageReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ParameterStorageReference) SetId(v string)`

SetId sets Id field to given value.


### GetConsumerId

`func (o *ParameterStorageReference) GetConsumerId() string`

GetConsumerId returns the ConsumerId field if non-nil, zero value otherwise.

### GetConsumerIdOk

`func (o *ParameterStorageReference) GetConsumerIdOk() (*string, bool)`

GetConsumerIdOk returns a tuple with the ConsumerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumerId

`func (o *ParameterStorageReference) SetConsumerId(v string)`

SetConsumerId sets ConsumerId field to given value.


### GetParameterId

`func (o *ParameterStorageReference) GetParameterId() string`

GetParameterId returns the ParameterId field if non-nil, zero value otherwise.

### GetParameterIdOk

`func (o *ParameterStorageReference) GetParameterIdOk() (*string, bool)`

GetParameterIdOk returns a tuple with the ParameterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameterId

`func (o *ParameterStorageReference) SetParameterId(v string)`

SetParameterId sets ParameterId field to given value.


### GetName

`func (o *ParameterStorageReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ParameterStorageReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ParameterStorageReference) SetName(v string)`

SetName sets Name field to given value.


### GetUsageHint

`func (o *ParameterStorageReference) GetUsageHint() string`

GetUsageHint returns the UsageHint field if non-nil, zero value otherwise.

### GetUsageHintOk

`func (o *ParameterStorageReference) GetUsageHintOk() (*string, bool)`

GetUsageHintOk returns a tuple with the UsageHint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageHint

`func (o *ParameterStorageReference) SetUsageHint(v string)`

SetUsageHint sets UsageHint field to given value.

### HasUsageHint

`func (o *ParameterStorageReference) HasUsageHint() bool`

HasUsageHint returns a boolean if a field has been set.


