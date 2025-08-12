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
**AttributeChanges** | [**[]AttributeChange**](attribute-change) |  | 
**EventType** | Pointer to **string** | the event type | [optional] 
**IdentityId** | Pointer to **string** | the identity id | [optional] 
**DateTime** | Pointer to **string** | the date of event | [optional] 

## Methods

### NewAttributesChanged

`func NewAttributesChanged(attributeChanges []AttributeChange, ) *AttributesChanged`

NewAttributesChanged instantiates a new AttributesChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributesChangedWithDefaults

`func NewAttributesChangedWithDefaults() *AttributesChanged`

NewAttributesChangedWithDefaults instantiates a new AttributesChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeChanges

`func (o *AttributesChanged) GetAttributeChanges() []AttributeChange`

GetAttributeChanges returns the AttributeChanges field if non-nil, zero value otherwise.

### GetAttributeChangesOk

`func (o *AttributesChanged) GetAttributeChangesOk() (*[]AttributeChange, bool)`

GetAttributeChangesOk returns a tuple with the AttributeChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeChanges

`func (o *AttributesChanged) SetAttributeChanges(v []AttributeChange)`

SetAttributeChanges sets AttributeChanges field to given value.


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

### GetDateTime

`func (o *AttributesChanged) GetDateTime() string`

GetDateTime returns the DateTime field if non-nil, zero value otherwise.

### GetDateTimeOk

`func (o *AttributesChanged) GetDateTimeOk() (*string, bool)`

GetDateTimeOk returns a tuple with the DateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTime

`func (o *AttributesChanged) SetDateTime(v string)`

SetDateTime sets DateTime field to given value.

### HasDateTime

`func (o *AttributesChanged) HasDateTime() bool`

HasDateTime returns a boolean if a field has been set.


