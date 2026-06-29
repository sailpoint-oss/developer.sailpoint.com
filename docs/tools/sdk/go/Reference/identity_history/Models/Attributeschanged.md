---
id: v1-attributeschanged
title: Attributeschanged
pagination_label: Attributeschanged
sidebar_label: Attributeschanged
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Attributeschanged', 'V1Attributeschanged'] 
slug: /tools/sdk/go/identityhistory/models/attributeschanged
tags: ['SDK', 'Software Development Kit', 'Attributeschanged', 'V1Attributeschanged']
---

# Attributeschanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeChanges** | [**[]Attributechange**](attributechange) |  | 
**EventType** | Pointer to **string** | the event type | [optional] 
**IdentityId** | Pointer to **string** | the identity id | [optional] 
**DateTime** | Pointer to **string** | the date of event | [optional] 

## Methods

### NewAttributeschanged

`func NewAttributeschanged(attributeChanges []Attributechange, ) *Attributeschanged`

NewAttributeschanged instantiates a new Attributeschanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributeschangedWithDefaults

`func NewAttributeschangedWithDefaults() *Attributeschanged`

NewAttributeschangedWithDefaults instantiates a new Attributeschanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeChanges

`func (o *Attributeschanged) GetAttributeChanges() []Attributechange`

GetAttributeChanges returns the AttributeChanges field if non-nil, zero value otherwise.

### GetAttributeChangesOk

`func (o *Attributeschanged) GetAttributeChangesOk() (*[]Attributechange, bool)`

GetAttributeChangesOk returns a tuple with the AttributeChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeChanges

`func (o *Attributeschanged) SetAttributeChanges(v []Attributechange)`

SetAttributeChanges sets AttributeChanges field to given value.


### GetEventType

`func (o *Attributeschanged) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *Attributeschanged) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *Attributeschanged) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *Attributeschanged) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetIdentityId

`func (o *Attributeschanged) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Attributeschanged) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Attributeschanged) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Attributeschanged) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetDateTime

`func (o *Attributeschanged) GetDateTime() string`

GetDateTime returns the DateTime field if non-nil, zero value otherwise.

### GetDateTimeOk

`func (o *Attributeschanged) GetDateTimeOk() (*string, bool)`

GetDateTimeOk returns a tuple with the DateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTime

`func (o *Attributeschanged) SetDateTime(v string)`

SetDateTime sets DateTime field to given value.

### HasDateTime

`func (o *Attributeschanged) HasDateTime() bool`

HasDateTime returns a boolean if a field has been set.


