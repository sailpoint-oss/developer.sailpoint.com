---
id: v1-parameterstoragereference
title: Parameterstoragereference
pagination_label: Parameterstoragereference
sidebar_label: Parameterstoragereference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Parameterstoragereference', 'V1Parameterstoragereference'] 
slug: /tools/sdk/go/parameterstorage/models/parameterstoragereference
tags: ['SDK', 'Software Development Kit', 'Parameterstoragereference', 'V1Parameterstoragereference']
---

# Parameterstoragereference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The ID of the reference | 
**ConsumerId** | **string** | The ID of the consumer holding the reference | 
**ParameterId** | **string** | The ID of the parameter that the reference is pointing to. | 
**Name** | **string** | The human-readable name of the reference | 
**UsageHint** | Pointer to **string** | The hint string used to validate the reference | [optional] 

## Methods

### NewParameterstoragereference

`func NewParameterstoragereference(id string, consumerId string, parameterId string, name string, ) *Parameterstoragereference`

NewParameterstoragereference instantiates a new Parameterstoragereference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewParameterstoragereferenceWithDefaults

`func NewParameterstoragereferenceWithDefaults() *Parameterstoragereference`

NewParameterstoragereferenceWithDefaults instantiates a new Parameterstoragereference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Parameterstoragereference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Parameterstoragereference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Parameterstoragereference) SetId(v string)`

SetId sets Id field to given value.


### GetConsumerId

`func (o *Parameterstoragereference) GetConsumerId() string`

GetConsumerId returns the ConsumerId field if non-nil, zero value otherwise.

### GetConsumerIdOk

`func (o *Parameterstoragereference) GetConsumerIdOk() (*string, bool)`

GetConsumerIdOk returns a tuple with the ConsumerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumerId

`func (o *Parameterstoragereference) SetConsumerId(v string)`

SetConsumerId sets ConsumerId field to given value.


### GetParameterId

`func (o *Parameterstoragereference) GetParameterId() string`

GetParameterId returns the ParameterId field if non-nil, zero value otherwise.

### GetParameterIdOk

`func (o *Parameterstoragereference) GetParameterIdOk() (*string, bool)`

GetParameterIdOk returns a tuple with the ParameterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameterId

`func (o *Parameterstoragereference) SetParameterId(v string)`

SetParameterId sets ParameterId field to given value.


### GetName

`func (o *Parameterstoragereference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Parameterstoragereference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Parameterstoragereference) SetName(v string)`

SetName sets Name field to given value.


### GetUsageHint

`func (o *Parameterstoragereference) GetUsageHint() string`

GetUsageHint returns the UsageHint field if non-nil, zero value otherwise.

### GetUsageHintOk

`func (o *Parameterstoragereference) GetUsageHintOk() (*string, bool)`

GetUsageHintOk returns a tuple with the UsageHint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageHint

`func (o *Parameterstoragereference) SetUsageHint(v string)`

SetUsageHint sets UsageHint field to given value.

### HasUsageHint

`func (o *Parameterstoragereference) HasUsageHint() bool`

HasUsageHint returns a boolean if a field has been set.


