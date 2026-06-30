---
id: v1-privilegecriteriadto
title: Privilegecriteriadto
pagination_label: Privilegecriteriadto
sidebar_label: Privilegecriteriadto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Privilegecriteriadto', 'V1Privilegecriteriadto'] 
slug: /tools/sdk/go/privilegecriteria/models/privilegecriteriadto
tags: ['SDK', 'Software Development Kit', 'Privilegecriteriadto', 'V1Privilegecriteriadto']
---

# Privilegecriteriadto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The Id of the criteria. | [optional] 
**SourceId** | Pointer to **string** | The Id of the source that the criteria is applied to. | [optional] 
**Type** | Pointer to **string** | The type of criteria. | [optional] 
**Operator** | Pointer to **string** | The logical operator to apply between groups. | [optional] 
**Groups** | Pointer to [**[]PrivilegecriteriadtoGroupsInner**](privilegecriteriadto-groups-inner) |  | [optional] 
**PrivilegeLevel** | Pointer to **string** | The privilege level assigned by this criteria. | [optional] 

## Methods

### NewPrivilegecriteriadto

`func NewPrivilegecriteriadto() *Privilegecriteriadto`

NewPrivilegecriteriadto instantiates a new Privilegecriteriadto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrivilegecriteriadtoWithDefaults

`func NewPrivilegecriteriadtoWithDefaults() *Privilegecriteriadto`

NewPrivilegecriteriadtoWithDefaults instantiates a new Privilegecriteriadto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Privilegecriteriadto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Privilegecriteriadto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Privilegecriteriadto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Privilegecriteriadto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *Privilegecriteriadto) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Privilegecriteriadto) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Privilegecriteriadto) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Privilegecriteriadto) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetType

`func (o *Privilegecriteriadto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Privilegecriteriadto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Privilegecriteriadto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Privilegecriteriadto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetOperator

`func (o *Privilegecriteriadto) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *Privilegecriteriadto) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *Privilegecriteriadto) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *Privilegecriteriadto) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetGroups

`func (o *Privilegecriteriadto) GetGroups() []PrivilegecriteriadtoGroupsInner`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *Privilegecriteriadto) GetGroupsOk() (*[]PrivilegecriteriadtoGroupsInner, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *Privilegecriteriadto) SetGroups(v []PrivilegecriteriadtoGroupsInner)`

SetGroups sets Groups field to given value.

### HasGroups

`func (o *Privilegecriteriadto) HasGroups() bool`

HasGroups returns a boolean if a field has been set.

### GetPrivilegeLevel

`func (o *Privilegecriteriadto) GetPrivilegeLevel() string`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *Privilegecriteriadto) GetPrivilegeLevelOk() (*string, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *Privilegecriteriadto) SetPrivilegeLevel(v string)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *Privilegecriteriadto) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.


