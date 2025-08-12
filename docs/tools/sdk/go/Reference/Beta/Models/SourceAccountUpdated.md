---
id: beta-source-account-updated
title: SourceAccountUpdated
pagination_label: SourceAccountUpdated
sidebar_label: SourceAccountUpdated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceAccountUpdated', 'BetaSourceAccountUpdated'] 
slug: /tools/sdk/go/beta/models/source-account-updated
tags: ['SDK', 'Software Development Kit', 'SourceAccountUpdated', 'BetaSourceAccountUpdated']
---

# SourceAccountUpdated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** | Identity's universal unique identifier (UUID) on the source. The source system generates the UUID. | 
**Id** | **string** | SailPoint generated unique identifier. | 
**NativeIdentifier** | **string** | Account's unique ID on the source. | 
**SourceId** | **string** | Source ID. | 
**SourceName** | **string** | Source name. | 
**IdentityId** | **string** | ID of the identity correlated with the account. | 
**IdentityName** | **string** | Name of the identity correlated with the account. | 
**Attributes** | **map[string]interface{}** | Account attributes. The attributes' contents depend on the source's account schema. | 

## Methods

### NewSourceAccountUpdated

`func NewSourceAccountUpdated(uuid string, id string, nativeIdentifier string, sourceId string, sourceName string, identityId string, identityName string, attributes map[string]interface{}, ) *SourceAccountUpdated`

NewSourceAccountUpdated instantiates a new SourceAccountUpdated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceAccountUpdatedWithDefaults

`func NewSourceAccountUpdatedWithDefaults() *SourceAccountUpdated`

NewSourceAccountUpdatedWithDefaults instantiates a new SourceAccountUpdated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *SourceAccountUpdated) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *SourceAccountUpdated) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *SourceAccountUpdated) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetId

`func (o *SourceAccountUpdated) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceAccountUpdated) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceAccountUpdated) SetId(v string)`

SetId sets Id field to given value.


### GetNativeIdentifier

`func (o *SourceAccountUpdated) GetNativeIdentifier() string`

GetNativeIdentifier returns the NativeIdentifier field if non-nil, zero value otherwise.

### GetNativeIdentifierOk

`func (o *SourceAccountUpdated) GetNativeIdentifierOk() (*string, bool)`

GetNativeIdentifierOk returns a tuple with the NativeIdentifier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentifier

`func (o *SourceAccountUpdated) SetNativeIdentifier(v string)`

SetNativeIdentifier sets NativeIdentifier field to given value.


### GetSourceId

`func (o *SourceAccountUpdated) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *SourceAccountUpdated) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *SourceAccountUpdated) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.


### GetSourceName

`func (o *SourceAccountUpdated) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *SourceAccountUpdated) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *SourceAccountUpdated) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.


### GetIdentityId

`func (o *SourceAccountUpdated) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *SourceAccountUpdated) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *SourceAccountUpdated) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.


### GetIdentityName

`func (o *SourceAccountUpdated) GetIdentityName() string`

GetIdentityName returns the IdentityName field if non-nil, zero value otherwise.

### GetIdentityNameOk

`func (o *SourceAccountUpdated) GetIdentityNameOk() (*string, bool)`

GetIdentityNameOk returns a tuple with the IdentityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityName

`func (o *SourceAccountUpdated) SetIdentityName(v string)`

SetIdentityName sets IdentityName field to given value.


### GetAttributes

`func (o *SourceAccountUpdated) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *SourceAccountUpdated) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *SourceAccountUpdated) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.



