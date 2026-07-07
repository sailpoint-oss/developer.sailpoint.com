---
id: v1-createprivilegecriteriarequest
title: Createprivilegecriteriarequest
pagination_label: Createprivilegecriteriarequest
sidebar_label: Createprivilegecriteriarequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Createprivilegecriteriarequest', 'V1Createprivilegecriteriarequest'] 
slug: /tools/sdk/go/privilegecriteria/models/createprivilegecriteriarequest
tags: ['SDK', 'Software Development Kit', 'Createprivilegecriteriarequest', 'V1Createprivilegecriteriarequest']
---

# Createprivilegecriteriarequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | Pointer to **string** | The Id of the source that the criteria is applied to. | [optional] 
**Type** | Pointer to **string** | The type of criteria being created. Expects \"CUSTOM\". | [optional] 
**Operator** | Pointer to **string** | The logical operator to apply between groups. | [optional] 
**Groups** | Pointer to [**[]CreateprivilegecriteriarequestGroupsInner**](createprivilegecriteriarequest-groups-inner) |  | [optional] 
**PrivilegeLevel** | Pointer to **string** | The privilege level assigned by this criteria. | [optional] 

## Methods

### NewCreateprivilegecriteriarequest

`func NewCreateprivilegecriteriarequest() *Createprivilegecriteriarequest`

NewCreateprivilegecriteriarequest instantiates a new Createprivilegecriteriarequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateprivilegecriteriarequestWithDefaults

`func NewCreateprivilegecriteriarequestWithDefaults() *Createprivilegecriteriarequest`

NewCreateprivilegecriteriarequestWithDefaults instantiates a new Createprivilegecriteriarequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceId

`func (o *Createprivilegecriteriarequest) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Createprivilegecriteriarequest) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Createprivilegecriteriarequest) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Createprivilegecriteriarequest) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetType

`func (o *Createprivilegecriteriarequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Createprivilegecriteriarequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Createprivilegecriteriarequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Createprivilegecriteriarequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetOperator

`func (o *Createprivilegecriteriarequest) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *Createprivilegecriteriarequest) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *Createprivilegecriteriarequest) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *Createprivilegecriteriarequest) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetGroups

`func (o *Createprivilegecriteriarequest) GetGroups() []CreateprivilegecriteriarequestGroupsInner`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *Createprivilegecriteriarequest) GetGroupsOk() (*[]CreateprivilegecriteriarequestGroupsInner, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *Createprivilegecriteriarequest) SetGroups(v []CreateprivilegecriteriarequestGroupsInner)`

SetGroups sets Groups field to given value.

### HasGroups

`func (o *Createprivilegecriteriarequest) HasGroups() bool`

HasGroups returns a boolean if a field has been set.

### GetPrivilegeLevel

`func (o *Createprivilegecriteriarequest) GetPrivilegeLevel() string`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *Createprivilegecriteriarequest) GetPrivilegeLevelOk() (*string, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *Createprivilegecriteriarequest) SetPrivilegeLevel(v string)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *Createprivilegecriteriarequest) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.


