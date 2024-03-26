---
id: entitlement-source
title: EntitlementSource
pagination_label: EntitlementSource
sidebar_label: EntitlementSource
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'EntitlementSource'] 
slug: /tools/sdk/go/v3/models/entitlement-source
tags: ['SDK', 'Software Development Kit', 'EntitlementSource']
---

# EntitlementSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | The source ID | [optional] 
**Type** |  Pointer to **string** | The source type, will always be \&quot;SOURCE\&quot; | [optional] 
**Name** |  Pointer to **string** | The source name | [optional] 

## Methods

### NewEntitlementSource

`func NewEntitlementSource() *EntitlementSource`

NewEntitlementSource instantiates a new EntitlementSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementSourceWithDefaults

`func NewEntitlementSourceWithDefaults() *EntitlementSource`

NewEntitlementSourceWithDefaults instantiates a new EntitlementSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *EntitlementSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EntitlementSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EntitlementSource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *EntitlementSource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *EntitlementSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntitlementSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntitlementSource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EntitlementSource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *EntitlementSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntitlementSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntitlementSource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EntitlementSource) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to top]](#) 


