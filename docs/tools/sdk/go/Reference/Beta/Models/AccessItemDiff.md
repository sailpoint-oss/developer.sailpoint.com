---
id: beta-access-item-diff
title: AccessItemDiff
pagination_label: AccessItemDiff
sidebar_label: AccessItemDiff
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemDiff', 'BetaAccessItemDiff'] 
slug: /tools/sdk/go/beta/models/access-item-diff
tags: ['SDK', 'Software Development Kit', 'AccessItemDiff', 'BetaAccessItemDiff']
---

# AccessItemDiff

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the id of the access item | [optional] 
**EventType** | Pointer to **string** |  | [optional] 
**DisplayName** | Pointer to **string** | the display name of the access item | [optional] 
**SourceName** | Pointer to **string** | the source name of the access item | [optional] 

## Methods

### NewAccessItemDiff

`func NewAccessItemDiff() *AccessItemDiff`

NewAccessItemDiff instantiates a new AccessItemDiff object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemDiffWithDefaults

`func NewAccessItemDiffWithDefaults() *AccessItemDiff`

NewAccessItemDiffWithDefaults instantiates a new AccessItemDiff object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessItemDiff) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessItemDiff) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessItemDiff) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessItemDiff) HasId() bool`

HasId returns a boolean if a field has been set.

### GetEventType

`func (o *AccessItemDiff) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *AccessItemDiff) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *AccessItemDiff) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *AccessItemDiff) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetDisplayName

`func (o *AccessItemDiff) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AccessItemDiff) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AccessItemDiff) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AccessItemDiff) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSourceName

`func (o *AccessItemDiff) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *AccessItemDiff) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *AccessItemDiff) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *AccessItemDiff) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.


