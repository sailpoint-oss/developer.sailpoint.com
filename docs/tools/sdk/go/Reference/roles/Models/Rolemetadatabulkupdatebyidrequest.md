---
id: v1-rolemetadatabulkupdatebyidrequest
title: Rolemetadatabulkupdatebyidrequest
pagination_label: Rolemetadatabulkupdatebyidrequest
sidebar_label: Rolemetadatabulkupdatebyidrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Rolemetadatabulkupdatebyidrequest', 'V1Rolemetadatabulkupdatebyidrequest'] 
slug: /tools/sdk/go/roles/models/rolemetadatabulkupdatebyidrequest
tags: ['SDK', 'Software Development Kit', 'Rolemetadatabulkupdatebyidrequest', 'V1Rolemetadatabulkupdatebyidrequest']
---

# Rolemetadatabulkupdatebyidrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Roles** | **[]string** | Roles' Id to be updated | 
**Operation** | **string** | The operation to be performed | 
**ReplaceScope** | Pointer to **string** | The choice of update scope. | [optional] 
**Values** | [**[]RolemetadatabulkupdatebyidrequestValuesInner**](rolemetadatabulkupdatebyidrequest-values-inner) | The metadata to be updated, including attribute key and value. | 

## Methods

### NewRolemetadatabulkupdatebyidrequest

`func NewRolemetadatabulkupdatebyidrequest(roles []string, operation string, values []RolemetadatabulkupdatebyidrequestValuesInner, ) *Rolemetadatabulkupdatebyidrequest`

NewRolemetadatabulkupdatebyidrequest instantiates a new Rolemetadatabulkupdatebyidrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolemetadatabulkupdatebyidrequestWithDefaults

`func NewRolemetadatabulkupdatebyidrequestWithDefaults() *Rolemetadatabulkupdatebyidrequest`

NewRolemetadatabulkupdatebyidrequestWithDefaults instantiates a new Rolemetadatabulkupdatebyidrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoles

`func (o *Rolemetadatabulkupdatebyidrequest) GetRoles() []string`

GetRoles returns the Roles field if non-nil, zero value otherwise.

### GetRolesOk

`func (o *Rolemetadatabulkupdatebyidrequest) GetRolesOk() (*[]string, bool)`

GetRolesOk returns a tuple with the Roles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoles

`func (o *Rolemetadatabulkupdatebyidrequest) SetRoles(v []string)`

SetRoles sets Roles field to given value.


### GetOperation

`func (o *Rolemetadatabulkupdatebyidrequest) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Rolemetadatabulkupdatebyidrequest) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Rolemetadatabulkupdatebyidrequest) SetOperation(v string)`

SetOperation sets Operation field to given value.


### GetReplaceScope

`func (o *Rolemetadatabulkupdatebyidrequest) GetReplaceScope() string`

GetReplaceScope returns the ReplaceScope field if non-nil, zero value otherwise.

### GetReplaceScopeOk

`func (o *Rolemetadatabulkupdatebyidrequest) GetReplaceScopeOk() (*string, bool)`

GetReplaceScopeOk returns a tuple with the ReplaceScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceScope

`func (o *Rolemetadatabulkupdatebyidrequest) SetReplaceScope(v string)`

SetReplaceScope sets ReplaceScope field to given value.

### HasReplaceScope

`func (o *Rolemetadatabulkupdatebyidrequest) HasReplaceScope() bool`

HasReplaceScope returns a boolean if a field has been set.

### GetValues

`func (o *Rolemetadatabulkupdatebyidrequest) GetValues() []RolemetadatabulkupdatebyidrequestValuesInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Rolemetadatabulkupdatebyidrequest) GetValuesOk() (*[]RolemetadatabulkupdatebyidrequestValuesInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Rolemetadatabulkupdatebyidrequest) SetValues(v []RolemetadatabulkupdatebyidrequestValuesInner)`

SetValues sets Values field to given value.



