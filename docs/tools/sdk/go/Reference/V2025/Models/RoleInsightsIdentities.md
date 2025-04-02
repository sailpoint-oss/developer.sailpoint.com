---
id: role-insights-identities
title: RoleInsightsIdentities
pagination_label: RoleInsightsIdentities
sidebar_label: RoleInsightsIdentities
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleInsightsIdentities', 'RoleInsightsIdentities'] 
slug: /tools/sdk/go//models/role-insights-identities
tags: ['SDK', 'Software Development Kit', 'RoleInsightsIdentities', 'RoleInsightsIdentities']
---

# RoleInsightsIdentities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id for identity | [optional] 
**Name** | Pointer to **string** | Name for identity | [optional] 
**Attributes** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewRoleInsightsIdentities

`func NewRoleInsightsIdentities() *RoleInsightsIdentities`

NewRoleInsightsIdentities instantiates a new RoleInsightsIdentities object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleInsightsIdentitiesWithDefaults

`func NewRoleInsightsIdentitiesWithDefaults() *RoleInsightsIdentities`

NewRoleInsightsIdentitiesWithDefaults instantiates a new RoleInsightsIdentities object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RoleInsightsIdentities) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleInsightsIdentities) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleInsightsIdentities) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleInsightsIdentities) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RoleInsightsIdentities) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleInsightsIdentities) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleInsightsIdentities) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleInsightsIdentities) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAttributes

`func (o *RoleInsightsIdentities) GetAttributes() map[string]string`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *RoleInsightsIdentities) GetAttributesOk() (*map[string]string, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *RoleInsightsIdentities) SetAttributes(v map[string]string)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *RoleInsightsIdentities) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


