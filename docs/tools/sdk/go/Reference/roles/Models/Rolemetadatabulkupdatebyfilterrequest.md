---
id: v1-rolemetadatabulkupdatebyfilterrequest
title: Rolemetadatabulkupdatebyfilterrequest
pagination_label: Rolemetadatabulkupdatebyfilterrequest
sidebar_label: Rolemetadatabulkupdatebyfilterrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Rolemetadatabulkupdatebyfilterrequest', 'V1Rolemetadatabulkupdatebyfilterrequest'] 
slug: /tools/sdk/go/roles/models/rolemetadatabulkupdatebyfilterrequest
tags: ['SDK', 'Software Development Kit', 'Rolemetadatabulkupdatebyfilterrequest', 'V1Rolemetadatabulkupdatebyfilterrequest']
---

# Rolemetadatabulkupdatebyfilterrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | **string** | Filtering is supported for the following fields and operators:  **id** : *eq, in*  **name** : *eq, sw*  **created** : *gt, lt, ge, le*  **modified** : *gt, lt, ge, le*  **owner.id** : *eq, in*  **requestable** : *eq* | 
**Operation** | **string** | The operation to be performed | 
**ReplaceScope** | Pointer to **string** | The choice of update scope. | [optional] 
**Values** | [**[]RolemetadatabulkupdatebyfilterrequestValuesInner**](rolemetadatabulkupdatebyfilterrequest-values-inner) | The metadata to be updated, including attribute key and value. | 

## Methods

### NewRolemetadatabulkupdatebyfilterrequest

`func NewRolemetadatabulkupdatebyfilterrequest(filters string, operation string, values []RolemetadatabulkupdatebyfilterrequestValuesInner, ) *Rolemetadatabulkupdatebyfilterrequest`

NewRolemetadatabulkupdatebyfilterrequest instantiates a new Rolemetadatabulkupdatebyfilterrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolemetadatabulkupdatebyfilterrequestWithDefaults

`func NewRolemetadatabulkupdatebyfilterrequestWithDefaults() *Rolemetadatabulkupdatebyfilterrequest`

NewRolemetadatabulkupdatebyfilterrequestWithDefaults instantiates a new Rolemetadatabulkupdatebyfilterrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFilters

`func (o *Rolemetadatabulkupdatebyfilterrequest) GetFilters() string`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *Rolemetadatabulkupdatebyfilterrequest) GetFiltersOk() (*string, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *Rolemetadatabulkupdatebyfilterrequest) SetFilters(v string)`

SetFilters sets Filters field to given value.


### GetOperation

`func (o *Rolemetadatabulkupdatebyfilterrequest) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Rolemetadatabulkupdatebyfilterrequest) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Rolemetadatabulkupdatebyfilterrequest) SetOperation(v string)`

SetOperation sets Operation field to given value.


### GetReplaceScope

`func (o *Rolemetadatabulkupdatebyfilterrequest) GetReplaceScope() string`

GetReplaceScope returns the ReplaceScope field if non-nil, zero value otherwise.

### GetReplaceScopeOk

`func (o *Rolemetadatabulkupdatebyfilterrequest) GetReplaceScopeOk() (*string, bool)`

GetReplaceScopeOk returns a tuple with the ReplaceScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplaceScope

`func (o *Rolemetadatabulkupdatebyfilterrequest) SetReplaceScope(v string)`

SetReplaceScope sets ReplaceScope field to given value.

### HasReplaceScope

`func (o *Rolemetadatabulkupdatebyfilterrequest) HasReplaceScope() bool`

HasReplaceScope returns a boolean if a field has been set.

### GetValues

`func (o *Rolemetadatabulkupdatebyfilterrequest) GetValues() []RolemetadatabulkupdatebyfilterrequestValuesInner`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *Rolemetadatabulkupdatebyfilterrequest) GetValuesOk() (*[]RolemetadatabulkupdatebyfilterrequestValuesInner, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *Rolemetadatabulkupdatebyfilterrequest) SetValues(v []RolemetadatabulkupdatebyfilterrequestValuesInner)`

SetValues sets Values field to given value.



