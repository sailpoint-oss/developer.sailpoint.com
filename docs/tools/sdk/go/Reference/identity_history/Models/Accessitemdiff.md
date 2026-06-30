---
id: v1-accessitemdiff
title: Accessitemdiff
pagination_label: Accessitemdiff
sidebar_label: Accessitemdiff
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessitemdiff', 'V1Accessitemdiff'] 
slug: /tools/sdk/go/identityhistory/models/accessitemdiff
tags: ['SDK', 'Software Development Kit', 'Accessitemdiff', 'V1Accessitemdiff']
---

# Accessitemdiff

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the id of the access item | [optional] 
**EventType** | Pointer to **string** |  | [optional] 
**DisplayName** | Pointer to **string** | the display name of the access item | [optional] 
**SourceName** | Pointer to **string** | the source name of the access item | [optional] 

## Methods

### NewAccessitemdiff

`func NewAccessitemdiff() *Accessitemdiff`

NewAccessitemdiff instantiates a new Accessitemdiff object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessitemdiffWithDefaults

`func NewAccessitemdiffWithDefaults() *Accessitemdiff`

NewAccessitemdiffWithDefaults instantiates a new Accessitemdiff object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accessitemdiff) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessitemdiff) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessitemdiff) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessitemdiff) HasId() bool`

HasId returns a boolean if a field has been set.

### GetEventType

`func (o *Accessitemdiff) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *Accessitemdiff) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *Accessitemdiff) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *Accessitemdiff) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetDisplayName

`func (o *Accessitemdiff) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Accessitemdiff) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Accessitemdiff) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Accessitemdiff) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSourceName

`func (o *Accessitemdiff) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Accessitemdiff) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Accessitemdiff) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Accessitemdiff) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.


