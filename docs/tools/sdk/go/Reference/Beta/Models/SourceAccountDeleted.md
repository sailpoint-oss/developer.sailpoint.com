---
id: beta-source-account-deleted
title: SourceAccountDeleted
pagination_label: SourceAccountDeleted
sidebar_label: SourceAccountDeleted
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceAccountDeleted', 'BetaSourceAccountDeleted'] 
slug: /tools/sdk/go/beta/models/source-account-deleted
tags: ['SDK', 'Software Development Kit', 'SourceAccountDeleted', 'BetaSourceAccountDeleted']
---

# SourceAccountDeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **string** | Identity&#39;s universal unique identifier (UUID) on the source. The source system generates the UUID. | 
**Id** | **string** | SailPoint generated unique identifier. | 
**NativeIdentifier** | **string** | Account&#39;s unique ID on the source. | 
**SourceId** | **string** | Source ID. | 
**SourceName** | **string** | Source name. | 
**IdentityId** | **string** | ID of the identity correlated with the account. | 
**IdentityName** | **string** | Name of the identity correlated with the account. | 
**Attributes** | **map[string]interface{}** | Account attributes. The attributes&#39; contents depend on the source&#39;s account schema. | 

## Methods

### NewSourceAccountDeleted

`func NewSourceAccountDeleted(uuid string, id string, nativeIdentifier string, sourceId string, sourceName string, identityId string, identityName string, attributes map[string]interface{}, ) *SourceAccountDeleted`

NewSourceAccountDeleted instantiates a new SourceAccountDeleted object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceAccountDeletedWithDefaults

`func NewSourceAccountDeletedWithDefaults() *SourceAccountDeleted`

NewSourceAccountDeletedWithDefaults instantiates a new SourceAccountDeleted object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUuid

`func (o *SourceAccountDeleted) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *SourceAccountDeleted) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *SourceAccountDeleted) SetUuid(v string)`

SetUuid sets Uuid field to given value.


### GetId

`func (o *SourceAccountDeleted) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceAccountDeleted) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceAccountDeleted) SetId(v string)`

SetId sets Id field to given value.


### GetNativeIdentifier

`func (o *SourceAccountDeleted) GetNativeIdentifier() string`

GetNativeIdentifier returns the NativeIdentifier field if non-nil, zero value otherwise.

### GetNativeIdentifierOk

`func (o *SourceAccountDeleted) GetNativeIdentifierOk() (*string, bool)`

GetNativeIdentifierOk returns a tuple with the NativeIdentifier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentifier

`func (o *SourceAccountDeleted) SetNativeIdentifier(v string)`

SetNativeIdentifier sets NativeIdentifier field to given value.


### GetSourceId

`func (o *SourceAccountDeleted) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *SourceAccountDeleted) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *SourceAccountDeleted) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.


### GetSourceName

`func (o *SourceAccountDeleted) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *SourceAccountDeleted) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *SourceAccountDeleted) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.


### GetIdentityId

`func (o *SourceAccountDeleted) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *SourceAccountDeleted) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *SourceAccountDeleted) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.


### GetIdentityName

`func (o *SourceAccountDeleted) GetIdentityName() string`

GetIdentityName returns the IdentityName field if non-nil, zero value otherwise.

### GetIdentityNameOk

`func (o *SourceAccountDeleted) GetIdentityNameOk() (*string, bool)`

GetIdentityNameOk returns a tuple with the IdentityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityName

`func (o *SourceAccountDeleted) SetIdentityName(v string)`

SetIdentityName sets IdentityName field to given value.


### GetAttributes

`func (o *SourceAccountDeleted) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *SourceAccountDeleted) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *SourceAccountDeleted) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.



