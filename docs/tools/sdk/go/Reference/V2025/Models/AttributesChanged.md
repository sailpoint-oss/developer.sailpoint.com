---
id: v2025-attributes-changed
title: AttributesChanged
pagination_label: AttributesChanged
sidebar_label: AttributesChanged
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AttributesChanged', 'V2025AttributesChanged'] 
slug: /tools/sdk/go/v2025/models/attributes-changed
tags: ['SDK', 'Software Development Kit', 'AttributesChanged', 'V2025AttributesChanged']
---

# AttributesChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Changes** | Pointer to [**[]AttributeChange**](attribute-change) |  | [optional] 
**EventType** | Pointer to **string** | the event type | [optional] 
**IdentityId** | Pointer to **string** | the identity id | [optional] 
**Dt** | Pointer to **string** | the date of event | [optional] 

## Methods

### NewAttributesChanged

`func NewAttributesChanged() *AttributesChanged`

NewAttributesChanged instantiates a new AttributesChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributesChangedWithDefaults

`func NewAttributesChangedWithDefaults() *AttributesChanged`

NewAttributesChangedWithDefaults instantiates a new AttributesChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChanges

`func (o *AttributesChanged) GetChanges() []AttributeChange`

GetChanges returns the Changes field if non-nil, zero value otherwise.

### GetChangesOk

`func (o *AttributesChanged) GetChangesOk() (*[]AttributeChange, bool)`

GetChangesOk returns a tuple with the Changes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChanges

`func (o *AttributesChanged) SetChanges(v []AttributeChange)`

SetChanges sets Changes field to given value.

### HasChanges

`func (o *AttributesChanged) HasChanges() bool`

HasChanges returns a boolean if a field has been set.

### GetEventType

`func (o *AttributesChanged) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *AttributesChanged) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *AttributesChanged) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *AttributesChanged) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetIdentityId

`func (o *AttributesChanged) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *AttributesChanged) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *AttributesChanged) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *AttributesChanged) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetDt

`func (o *AttributesChanged) GetDt() string`

GetDt returns the Dt field if non-nil, zero value otherwise.

### GetDtOk

`func (o *AttributesChanged) GetDtOk() (*string, bool)`

GetDtOk returns a tuple with the Dt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDt

`func (o *AttributesChanged) SetDt(v string)`

SetDt sets Dt field to given value.

### HasDt

`func (o *AttributesChanged) HasDt() bool`

HasDt returns a boolean if a field has been set.


