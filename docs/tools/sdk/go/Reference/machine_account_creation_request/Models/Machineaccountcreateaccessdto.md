---
id: v1-machineaccountcreateaccessdto
title: Machineaccountcreateaccessdto
pagination_label: Machineaccountcreateaccessdto
sidebar_label: Machineaccountcreateaccessdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Machineaccountcreateaccessdto', 'V1Machineaccountcreateaccessdto'] 
slug: /tools/sdk/go/machineaccountcreationrequest/models/machineaccountcreateaccessdto
tags: ['SDK', 'Software Development Kit', 'Machineaccountcreateaccessdto', 'V1Machineaccountcreateaccessdto']
---

# Machineaccountcreateaccessdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | Pointer to **string** | Source ID. | [optional] 
**SourceName** | Pointer to **string** | Source name. | [optional] 
**Subtypes** | Pointer to [**[]MachineaccountcreateaccessdtoSubtypesInner**](machineaccountcreateaccessdto-subtypes-inner) | List of subtypes for which the user has an entitlement to request machine accounts. | [optional] 

## Methods

### NewMachineaccountcreateaccessdto

`func NewMachineaccountcreateaccessdto() *Machineaccountcreateaccessdto`

NewMachineaccountcreateaccessdto instantiates a new Machineaccountcreateaccessdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineaccountcreateaccessdtoWithDefaults

`func NewMachineaccountcreateaccessdtoWithDefaults() *Machineaccountcreateaccessdto`

NewMachineaccountcreateaccessdtoWithDefaults instantiates a new Machineaccountcreateaccessdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceId

`func (o *Machineaccountcreateaccessdto) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Machineaccountcreateaccessdto) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Machineaccountcreateaccessdto) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Machineaccountcreateaccessdto) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceName

`func (o *Machineaccountcreateaccessdto) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Machineaccountcreateaccessdto) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Machineaccountcreateaccessdto) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Machineaccountcreateaccessdto) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetSubtypes

`func (o *Machineaccountcreateaccessdto) GetSubtypes() []MachineaccountcreateaccessdtoSubtypesInner`

GetSubtypes returns the Subtypes field if non-nil, zero value otherwise.

### GetSubtypesOk

`func (o *Machineaccountcreateaccessdto) GetSubtypesOk() (*[]MachineaccountcreateaccessdtoSubtypesInner, bool)`

GetSubtypesOk returns a tuple with the Subtypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtypes

`func (o *Machineaccountcreateaccessdto) SetSubtypes(v []MachineaccountcreateaccessdtoSubtypesInner)`

SetSubtypes sets Subtypes field to given value.

### HasSubtypes

`func (o *Machineaccountcreateaccessdto) HasSubtypes() bool`

HasSubtypes returns a boolean if a field has been set.


