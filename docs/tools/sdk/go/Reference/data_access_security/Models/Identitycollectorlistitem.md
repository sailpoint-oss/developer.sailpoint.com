---
id: v1-identitycollectorlistitem
title: Identitycollectorlistitem
pagination_label: Identitycollectorlistitem
sidebar_label: Identitycollectorlistitem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identitycollectorlistitem', 'V1Identitycollectorlistitem'] 
slug: /tools/sdk/go/dataaccesssecurity/models/identitycollectorlistitem
tags: ['SDK', 'Software Development Kit', 'Identitycollectorlistitem', 'V1Identitycollectorlistitem']
---

# Identitycollectorlistitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique identifier of the identity collector. | [optional] 
**Name** | Pointer to **string** | The display name of the identity collector. | [optional] 
**Type** | Pointer to **string** | The identity collector type, derived from its underlying source. Possible values include \"Active Directory\", \"Azure Active Directory\", \"Google Drive\", \"Dropbox\", \"Box\", \"Microsoft Entra SaaS\", \"Snowflake\", and \"Databricks\". | [optional] 
**SourceId** | Pointer to **string** | The identifier of the source the identity collector is associated with, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. | [optional] 

## Methods

### NewIdentitycollectorlistitem

`func NewIdentitycollectorlistitem() *Identitycollectorlistitem`

NewIdentitycollectorlistitem instantiates a new Identitycollectorlistitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitycollectorlistitemWithDefaults

`func NewIdentitycollectorlistitemWithDefaults() *Identitycollectorlistitem`

NewIdentitycollectorlistitemWithDefaults instantiates a new Identitycollectorlistitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Identitycollectorlistitem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Identitycollectorlistitem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Identitycollectorlistitem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Identitycollectorlistitem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Identitycollectorlistitem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Identitycollectorlistitem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Identitycollectorlistitem) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Identitycollectorlistitem) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *Identitycollectorlistitem) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Identitycollectorlistitem) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Identitycollectorlistitem) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Identitycollectorlistitem) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSourceId

`func (o *Identitycollectorlistitem) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Identitycollectorlistitem) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Identitycollectorlistitem) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Identitycollectorlistitem) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.


